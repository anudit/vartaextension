import React, { useState, useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Button, Flex } from '../../../components/Base';
import { AddIcon, ReloadIcon } from '../../../components/Icons';
import ThreadView from '../../../components/ThreadView';
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
    width: ${props => (props.size === "sm" ? "54" : "50")}px !important;
    height: ${props => (props.size === "sm" ? "40" : "50")}px !important;
    display:flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    background: transparent;
    border-radius: 100px;
    border:none;
    padding: ${props => (props.size === "sm" ? "4" : "8")}px !important;
`;

function Personal() {

    const { signerAddress, convo, getAuthToken } = useContext(Web3Context);
    let [threads, setThreads] = useState(null);
    const [activeScreen, setActiveScreen] = useState('home');
    const [screenData, setscreenData] = useState({});
    const [searchString, setSearchString] = useState("");

    const searchInput = useRef();
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
        let threadsData = await convo.threads.getUserThreads(signerAddress);
        if (threadsData?.success === true) {
            console.log(threadsData.member.toString());
            let threads = await convo.threads.getThreads(threadsData.member.toString());
            console.log(threads.threads);
            setThreads(threads.threads);
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
                <Flex display="flex" flexDirection="row" marginTop="5px" marginBottom="5px">
                    <br />
                    <IconButton onClick={() => { setActiveScreen('create') }} size="sm">
                        <AddIcon />
                    </IconButton>
                    <Input width="100%" ref={searchInput} onChange={() => {
                        setSearchString(searchInput.current.value);
                    }} />
                    <IconButton onClick={() => { refreshThreads() }} size="sm">
                        <ReloadIcon />
                    </IconButton>
                </Flex>
                {
                    Boolean(threads) === false && (
                        <p>loading...</p>
                    )
                }
                {
                    Boolean(threads) === true && threads.length <= 0 && (
                        <p>No threads.</p>
                    )
                }
                <Flex display="flex" flexDirection="column">                    {
                    Boolean(threads) === true && threads.length > 0 && threads.map(t => {
                        return (
                            <Flex
                                display={t.title.toLowerCase().includes(searchString.toLowerCase()) === true ? "flex" : "none"}
                                key={t._id}
                                textAlign="left"
                                paddingTop="5px"
                                paddingBottom="5px"
                                paddingRight="10px"
                                paddingLeft="10px"
                                marginTop="5px"
                                marginBottom="5px"
                                marginRight="5px"
                                marginLeft="5px"
                                backgroundColor="#ffffff42"
                                borderRadius="10px"
                                cursor="pointer"
                                onClick={() => {
                                    setActiveScreen('viewThread');
                                    setscreenData(t);
                                }}
                            >
                                {decodeURIComponent(t.title)}
                            </Flex>
                        )
                    })
                }
                </Flex>
            </TabShell>
        );

    }
    else if (activeScreen === 'viewThread') {
        return (
            <TabShell>
                <Flex display="flex" flexDirection="row">
                    <p onClick={() => { setActiveScreen('home') }}>Back</p>
                </Flex>
                <ThreadView screenData={screenData} />
            </TabShell>
        )
    }
    else if (activeScreen === 'create') {

        return (
            <TabShell>

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

export default Personal;
