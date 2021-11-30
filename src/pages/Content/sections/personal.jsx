import React, { useState, useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Button, Flex } from '../../../components/Base';
import TabShell from '../../../components/TabShell';
import { Web3Context } from '../../../contexts/Web3Context';

const Input = styled.input`
    width: 100%;
    margin: 4px;
    border-radius: 10px;
    border: none;
    height: 30px;
`;

const IconButton = styled.button`
    min-width: 50px !important;
    height: 50px !important;
    display:flex;
    align-items: center;
    justify-content: center;
    background: #ffffff70;
    border-radius: 100px;
    border:none;
    padding:8px;
`;

function Contacts() {

    const { signerAddress, convo, getAuthToken } = useContext(Web3Context);
    let [threads, setThreads] = useState(null);
    const [activeScreen, setActiveScreen] = useState('home');
    const inputTitleRef = useRef();
    const inputDescriptionRef = useRef();
    const inputMembersRef = useRef();
    const inputModeratorsRef = useRef();
    const inputKeywordsRef = useRef();
    const isReadPublicRef = useRef();
    const isWritePublicRef = useRef();

    useEffect(() => {
        refreshThreads();
    }, [])

    async function refreshThreads() {
        let threadsData = await convo.threads.query({ member: signerAddress });
        if (threadsData?.success === true) {
            setThreads(threadsData);
        }
        else {
            setThreads([]);
        }
    }

    async function createThread() {
        let token = await getAuthToken();
        let url = window.location.origin + window.location.pathname;
        console.log({
            token,
            title: inputTitleRef.current.value,
            description: inputDescriptionRef.current.value,
            members: inputMembersRef.current.value.split(',').map((s) => { return s.trim() }),
            moderators: inputModeratorsRef.current.value.split(',').map((s) => { return s.trim() }),
            keywords: inputKeywordsRef.current.value.split(',').map((s) => { return s.trim() }),
            isReadPublic: isReadPublicRef.current.checked,
            isWritePublic: isWritePublicRef.current.checked,
        })
        let resp = await convo.threads.create(
            signerAddress,
            token,
            inputTitleRef.current.value,
            inputDescriptionRef.current.value,
            url,
            isReadPublicRef.current.checked,
            isWritePublicRef.current.checked,
            inputMembersRef.current.value.split(',').map((s) => { return s.trim() }),
            inputModeratorsRef.current.value.split(',').map((s) => { return s.trim() }),
            inputKeywordsRef.current.value.split(',').map((s) => { return s.trim() }),
        );
        console.log(resp);
    }

    if (signerAddress === "") {
        return (<TabShell>
            Login to view Private Threads.
        </TabShell>)
    }
    else if (activeScreen === 'home') {

        return (
            <TabShell>
                <Flex display="flex" flexDirection="row">
                    <Input width="100%" />
                    <IconButton onClick={() => { setActiveScreen('create') }} > +</IconButton>
                    <IconButton onClick={() => { refreshThreads() }} > r</IconButton>
                </Flex>
                <ul>
                    {
                        Boolean(threads) === false && (
                            <li>loading...</li>
                        )
                    }
                    {
                        Boolean(threads) === true && threads.length <= 0 && (
                            <li>No threads.</li>
                        )
                    }
                    {
                        Boolean(threads) === true && threads.length > 0 && threads.map(thread => {
                            return (
                                <li>{thread.title}</li>
                            )
                        })
                    }
                </ul>
            </TabShell>
        );

    }
    else if (activeScreen === 'create') {

        return (
            <TabShell>
                <Flex display="flex" flexDirection="row">
                    <p onClick={() => { setActiveScreen('home') }}>Back</p>
                </Flex>

                title
                <Input width="100%" defaultValue="Title" ref={inputTitleRef} />

                description
                <Input width="100%" defaultValue="Desc" ref={inputDescriptionRef} />

                members
                <Input width="100%" defaultValue="0x707aC3937A9B31C225D8C240F5917Be97cab9F20" ref={inputMembersRef} />

                moderators
                <Input width="100%" defaultValue="0x707aC3937A9B31C225D8C240F5917Be97cab9F20" ref={inputModeratorsRef} />

                keywords
                <Input width="100%" defaultValue="one, two,3" ref={inputKeywordsRef} />

                isReadPublic
                <Input width="100%" type="checkbox" ref={isReadPublicRef} />

                isWritePublic
                <Input width="100%" type="checkbox" ref={isWritePublicRef} />

                <br />
                <Button onClick={createThread}>
                    CREATE
                </Button>

            </TabShell>
        );

    }
    else {

        return (
            <p>
                Personal Meesages
            </p>
        );

    }

}

export default Contacts;
