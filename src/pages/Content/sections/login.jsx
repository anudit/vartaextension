import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Flex } from '../../../components/Base';
import { MetaMaskIcon, WalletConnectIcon } from '../../../components/Icons';
import TabShell from '../../../components/TabShell';
import { Web3Context } from '../../../contexts/Web3Context';
import { addressToChainName, truncateAddress } from '../../../utils/stringUtils';
import getAvatar from '../../../utils/avatar';
import { ethers } from 'ethers';

let WalletItem = styled(Flex)`
    border-radius: 10px;
    width: 70%;
    margin-bottom:10px;
    padding: 8px;
    background-image: ${props => Boolean(props.backgroundImage) === true ? props.backgroundImage : ""};
    flex-direction:row;
    min-height: ${props => Boolean(props.minH) === true ? props.minH : "50px"};
    font-weight: 700;
    display: flex;
    justify-content: space-evenly;
    align-items:center;
    cursor:pointer;
`;

let Avatar = styled.img`
    border-radius: 200px;
    background:"#ffffff00";
    width: ${props => Boolean(props.width) === true ? props.width : ""};
    height: ${props => Boolean(props.height) === true ? props.height : ""};
    margin-bottom: ${props => Boolean(props.mb) === true ? props.mb : ""};
`;


function Login() {

    const { connectWallet, signerAddress, disconnectWallet, prettyName, convo, connectingState } = useContext(Web3Context);

    const [verified, setVerified] = useState(null);
    const [customPfp, setCustomPfp] = useState(null);

    useEffect(async () => {
        if (addressToChainName(signerAddress) === "ethereum") {
            convo.identity.getTrustScore(signerAddress).then(trustData => {
                if (Boolean(trustData.success) === true) {
                    setVerified(trustData.score);
                }
            })
        }
    }, [signerAddress]);

    useEffect(() => {
        if (prettyName !== "") {
            let tp = new ethers.providers.AlchemyProvider("mainnet", "A4OQ6AV7W-rqrkY9mli5-MCt-OwnIRkf");
            tp.getResolver(prettyName).then(async (resolver) => {
                let pfp = await resolver?.getText('avatar');
                if (Boolean(pfp) === true) {
                    console.log(pfp);
                    setCustomPfp(pfp);
                }
            });
        }
    }, [prettyName]);

    if (signerAddress !== "") {

        return (
            <TabShell alignItems="center">
                <br />
                <Avatar
                    src={Boolean(customPfp) === true ? customPfp : getAvatar(signerAddress, { dataUri: true })}
                    width="100px"
                    height="100px"
                />
                <br />
                Welcome, <b>{prettyName === "" ? truncateAddress(signerAddress) : prettyName}</b>
                <br />
                TrustScore: {verified}
                <br /><br />
                <WalletItem onClick={disconnectWallet} minH="40px" backgroundImage="linear-gradient(163deg, rgb(255 0 0) -258.34%, rgb(238 120 98 / 18%) 100.95%);">
                    Disconnect Wallet
                </WalletItem>
            </TabShell>
        );
    }
    else {
        return (
            <TabShell alignItems="center">
                <br />
                {
                    connectingState === 'LOGIN' && (
                        <>
                            <WalletItem onClick={() => { connectWallet('injected') }} backgroundImage="linear-gradient(229.83deg, rgb(205 131 59) -258.34%, rgb(205 189 178 / 18%) 100.95%)">
                                <MetaMaskIcon />
                                <p>Sign-in with <br />Metamask</p>
                            </WalletItem>
                            <WalletItem onClick={() => { connectWallet('walletconnect') }} backgroundImage="linear-gradient(229.83deg, rgb(59 153 252) -258.34%, rgb(82 153 231 / 18%) 100.95%)" >
                                <WalletConnectIcon />
                                <p>Sign-in with <br />WalletConnect</p>
                            </WalletItem>
                            <WalletItem onClick={() => { connectWallet('torus') }}>
                                <p>Sign-in with Email</p>
                            </WalletItem>
                        </>
                    )
                }
                {
                    connectingState === 'PLEASE_SIGN_MESSAGE' && (
                        <Flex width="100%" display="flex" justifyContent="center">
                            <div className="loader"></div>
                            <br />
                            <p>Please sign the message in your wallet. <br />This is not a transaction.</p>
                        </Flex>
                    )
                }

            </TabShell>

        )
    }
}

export default Login;
