import React, { useState, useEffect } from 'react'
import { ethers } from "ethers";
import Cookies from "js-cookie";
import { Convo } from '@theconvospace/sdk';
import Torus from "@toruslabs/torus-embed";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { initializeProvider } from '@metamask/providers';
import LocalMessageDuplexStream from 'post-message-stream';
import log from 'loglevel';

log.setDefaultLevel('debug');


// import { checkUnstoppableDomains } from '@/lib/identity';

export const Web3Context = React.createContext(undefined);

export const Web3ContextProvider = ({ children }) => {

    const metamaskStream = new LocalMessageDuplexStream({
        name: 'metamask-inpage',
        target: 'metamask-contentscript',
    });
    // this will initialize the provider and set it as window.ethereum
    let ethereumProvider = initializeProvider({
        connectionStream: metamaskStream,
        logger: log,
        shouldShimWeb3: true,
    });

    const cookies = Cookies.withAttributes({
        path: '/'
    })

    const [provider, setProvider] = useState(undefined);
    const [connectedChain, setConnectedChain] = useState("");
    const [signerAddress, setSignerAddress] = useState("");
    const [prettyName, setPrettyName] = useState("");
    const [connectingState, setConnectingState] = useState('LOGIN');
    const convo = new Convo('CSCpPwHnkB3niBJiUjy92YGP6xVkVZbWfK8xriDO');

    useEffect(() => {
        setTimeout(() => {
            let sessionCookie = cookies.get('CONVO_SESSION');
            let choiceCookie = cookies.get('CONVO_LAST_CONNECTED_CHOICE');
            if (Boolean(sessionCookie) === true) {
                if (Boolean(choiceCookie) === true) {
                    try {
                        connectWallet(choiceCookie);
                    } catch (error) {
                        console.log('autologin error', error);
                    }
                }
            }
        }, 3000)
    }, []);

    async function updatePrettyName(address) {
        let tp = new ethers.providers.AlchemyProvider("mainnet", "A4OQ6AV7W-rqrkY9mli5-MCt-OwnIRkf");
        let ensReq = tp.lookupAddress(address);
        // let udReq = checkUnstoppableDomains(address);

        let promiseArray = [ensReq];

        let resp = await Promise.allSettled(promiseArray);

        if (Boolean(resp[0]?.value) === true) {
            return setPrettyName(resp[0]?.value);
        }
        // else if (Boolean(resp[1]?.value) === true) {
        //     return setPrettyName(resp[1]?.value);
        // }
    }

    async function connectWallet(choice = "") {
        try {

            console.log("choice", choice);

            let ethersProvider;
            let accounts;
            let isProviderSet = false;


            if (choice === "walletconnect") {

                const provider = new WalletConnectProvider({
                    infuraId: "1e7969225b2f4eefb3ae792aabf1cc17",
                    qrcodeModalOptions: {
                        mobileLinks: [
                            "rainbow",
                            "metamask",
                            "argent",
                            "trust",
                            "imtoken",
                            "pillar",
                        ],
                    },
                });

                await provider.enable();

                ethersProvider = new ethers.providers.Web3Provider(provider);
                accounts = await ethersProvider.listAccounts();
                console.log(accounts);
                isProviderSet = true;

            }
            else if (choice === "torus") {

                const torus = new Torus();
                await torus.init();
                await torus.login();

                ethersProvider = new ethers.providers.Web3Provider(torus.provider);
                accounts = await ethersProvider.listAccounts();
                isProviderSet = true;
            }
            else if (choice === "injected") {

                console.log('ethereumProvider', window.ethereum);


                accounts = await ethereumProvider.request({ method: 'eth_requestAccounts' });
                // accounts = await window.ethereum.enable();
                console.log('accounts', accounts);
                ethersProvider = new ethers.providers.Web3Provider(window.ethereum);
                console.log('ethersProvider', ethersProvider);
                // accounts = await ethersProvider.listAccounts();
                console.log('accounts', accounts);
                isProviderSet = true;
            }
            else {
                console.log('Invalid Choice.');
            }


            if (isProviderSet === true) {

                // if there was a previous session, try and validate that first.
                if (Boolean(cookies.get('CONVO_SESSION')) === true) {

                    let tokenRes = convo.auth.validate(accounts[0], cookies.get('CONVO_SESSION'));

                    // if previous session is invalid then request a new auth token.
                    if (tokenRes['success'] === false) {
                        setConnectingState('PLEASE_SIGN_MESSAGE');
                        let token = await updateAuthToken(accounts[0], "ethereum", ethersProvider, choice);
                        setConnectingState('LOGIN');
                        if (token !== false) {
                            setProvider(ethersProvider);
                            setConnectedChain("ethereum");
                            updatePrettyName(accounts[0]);
                            setSignerAddress(accounts[0]);
                        }
                    }
                    else { // use the old valid session
                        setProvider(ethersProvider);
                        setConnectedChain("ethereum");
                        updatePrettyName(accounts[0]);
                        setSignerAddress(accounts[0]);
                    }
                }
                else { // auth and store a new session.
                    setConnectingState('PLEASE_SIGN_MESSAGE');
                    let token = await updateAuthToken(accounts[0], "ethereum", ethersProvider, choice);
                    setConnectingState('LOGIN');
                    if (token !== false) {
                        setProvider(ethersProvider);
                        setConnectedChain("ethereum");
                        updatePrettyName(accounts[0]);
                        setSignerAddress(accounts[0]);
                    }
                }
            }
            else {
                console.log('Provider not set.')
            }

        } catch (e) {
            disconnectWallet();
            console.log('NO_WALLET_CONNECTED', e);
        }

    }

    function disconnectWallet() {
        cookies.remove('CONVO_SESSION');
        setProvider(undefined);
        setConnectedChain("");
        setSignerAddress("");
        setPrettyName("");
        setConnectingState("");
    }

    async function getAuthToken(manualAddress = undefined) {

        let authAdd = Boolean(manualAddress) === true ? manualAddress : signerAddress;
        let tokenRes = await convo.auth.validate(authAdd, cookies.get('CONVO_SESSION'));

        if (tokenRes['success'] === true) {
            return cookies.get('CONVO_SESSION');
        }
        else {
            try {
                let tokenUpdateRes = await updateAuthToken(authAdd, connectedChain, provider);
                if (tokenUpdateRes) {
                    return tokenUpdateRes;
                }
            }
            catch (e) {
                alert('Dynamic Auth Token update Error.');
                console.log(e);
            }
        }
    }

    async function updateAuthToken(signerAddress, chainName, tempProvider, choice = "") {

        console.log('update auth token');
        let timestamp = Date.now();
        let data = convo.auth.getSignatureData(signerAddress, timestamp);
        let res;

        if (chainName === "ethereum") {

            let signature = await tempProvider.send(
                'personal_sign',
                [ethers.utils.hexlify(ethers.utils.toUtf8Bytes(data)), signerAddress.toLowerCase()]
            );

            res = await convo.auth.authenticate(signerAddress, signature, timestamp, "ethereum");

        }

        console.log('res', res);

        if (res?.success === true) {
            cookies.set('CONVO_SESSION', res['message'], { expires: 1, secure: true });
            if (choice !== "") {
                cookies.set('CONVO_LAST_CONNECTED_CHOICE', choice, { expires: 30, secure: true });
            }
            console.log('valid session setup.')
            return res['message'];
        }
        else {
            alert(`Auth Error, ${res['message']}`);
            disconnectWallet();
            return false;
        }
    }

    return (
        <Web3Context.Provider value={{
            connectWallet,
            disconnectWallet,
            provider,
            connectedChain,
            signerAddress,
            prettyName,
            getAuthToken,
            convo,
            connectingState
        }}>
            {children}
        </Web3Context.Provider>
    )

}
