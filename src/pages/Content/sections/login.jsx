import React, { useContext } from 'react';
import TabShell from '../../../components/TabShell';
import { Web3Context } from '../../../contexts/Web3Context';

function Login() {

    const { connectWallet, signerAddress, disconnectWallet } = useContext(Web3Context);

    if (signerAddress !== "") {

        return (
            <TabShell>
                <p> {signerAddress} </p>
                <p onClick={disconnectWallet}> disconnect </p>
            </TabShell>
        );
    }
    else {
        return (
            <TabShell>
                <p onClick={() => { connectWallet('injected') }}>
                    Sign-in with Metamask
                </p>
                <p onClick={() => { connectWallet('walletconnect') }}>
                    Sign-in with WalletConnect
                </p>
                <br />
                <p onClick={() => { connectWallet('torus') }}>
                    Sign-in with Email
                </p>
            </TabShell>

        )
    }
}

export default Login;
