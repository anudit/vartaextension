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

    async function getSessionDetails() {
        return new Promise(function (resolve, reject) {
            chrome.storage.sync.get(['convo_session'], function (result) {
                resolve(result?.convo_session);
            });
        });
    }

    async function setSessionDetails(convo_session) {
        return new Promise(function (resolve, reject) {
            chrome.storage.sync.set({ convo_session }, function () {
                resolve(true)
            });
        });
    }

    useEffect(() => {
        setTimeout(async () => {
            let session = await getSessionDetails();
            console.log('Trying Autologin');
            if (Boolean(session.sessionCookie) === true && Boolean(session.choiceCookie) === true && Boolean(session.accounts?.length) === true) {
                try {
                    connectWallet(session.choiceCookie, true, session);
                } catch (error) {
                    console.log('autologin error', error);
                }
            }
        }, 1000)
    }, []);

    async function updatePrettyName(address) {
        let tp = new ethers.providers.AlchemyProvider("homestead", "aCCNMibQ1zmvthnsyWUWFkm_UAvGtZdv");
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

    async function connectWallet(choice = "", manualSession = false, manualSessionDetails = {}) {
        try {

            console.log("choice", choice);

            let ethersProvider;
            let accounts;
            let isProviderSet = false;

            // If not continuing a previous session then go through the entire wallet flow.
            if (Boolean(manualSession) === false) {

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
            }

            // If continuing a previous session, then set up the variables accoring to the previous session.
            if (Boolean(manualSession) === true) {
                ethersProvider = new ethers.providers.AlchemyProvider('homestead', 'aCCNMibQ1zmvthnsyWUWFkm_UAvGtZdv');
                accounts = manualSessionDetails.accounts;
                isProviderSet = true;
            }

            if (isProviderSet === true) {

                // if there was a previous session, try and validate that first.
                if (Boolean(manualSessionDetails?.sessionCookie) === true) {

                    let tokenRes = convo.auth.validate(accounts[0], manualSessionDetails.sessionCookie);
                    console.log('tokenRes', tokenRes);
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
        console.log('disconnecting wallet');
        setSessionDetails({
            sessionCookie: false,
            choiceCookie: false,
            accounts: [],
        })
        cookies.remove('CONVO_SESSION');
        cookies.remove('CONVO_LAST_CONNECTED_CHOICE');
        setProvider(undefined);
        setConnectedChain("");
        setSignerAddress("");
        setPrettyName("");
        setConnectingState("");
    }

    async function getAuthToken(manualAddress = undefined) {

        const { sessionCookie } = await getSessionDetails();
        let authAdd = Boolean(manualAddress) === true ? manualAddress : signerAddress;
        let tokenRes = await convo.auth.validate(authAdd, sessionCookie);

        if (tokenRes['success'] === true) {
            return sessionCookie;
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

        if (res?.success === true) {
            await setSessionDetails({
                sessionCookie: res['message'],
                choiceCookie: choice !== "" ? choice : false,
                accounts: [signerAddress]
            });
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
