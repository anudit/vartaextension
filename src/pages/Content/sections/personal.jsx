import React, { useState, useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Button, Flex } from '../../../components/Base';
import { AddIcon, ReloadIcon } from '../../../components/Icons';
import ThreadView from '../../../components/ThreadView';
import TabShell from '../../../components/TabShell';
import { Web3Context } from '../../../contexts/Web3Context';

const Input = styled.input`
    width: ${props => Boolean(props.width) === true ? props.width : "100%"};
    margin-top: 4px;
    margin-bottom: 4px;
    border-radius: 5px;
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

let ButtonStyled = styled.button`
    border-radius: 10px;
    width: ${props => Boolean(props.width) === true ? props.width : ""};
    border: none;
    margin-bottom:10px;
    padding: 8px;
    background-image: ${props => Boolean(props.backgroundImage) === true ? props.backgroundImage : ""};
    background: ${props => Boolean(props.background) === true ? props.background : ""};
    flex-direction:row;
    min-height: ${props => Boolean(props.minH) === true ? props.minH : "50px"};
    font-weight: 700;
    display: flex;
    justify-content: space-evenly;
    align-items:center;
    cursor:pointer;
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
                <Flex flexDirection="row" marginTop="5px" marginBottom="5px">
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
                        <Flex width="100%" display="flex" justifyContent="center">
                            <div class="loader"></div>
                        </Flex>
                    )
                }
                {
                    Boolean(threads) === true && threads.length <= 0 && (
                        <p>No threads.</p>
                    )
                }
                {
                    Boolean(threads) === true && threads.length > 0 && (
                        <Flex flexDirection="column">                    {
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
                    )
                }
            </TabShell>
        );

    }
    else if (activeScreen === 'viewThread') {
        return (
            <TabShell>
                <Flex flexDirection="row">
                    <p onClick={() => { setActiveScreen('home') }}>Back</p>
                </Flex>
                <ThreadView screenData={screenData} />
            </TabShell>
        )
    }
    else if (activeScreen === 'create') {

        return (
            <TabShell>

                <Flex flexDirection="column" margin="10px">
                    <Flex flexDirection="row" textAlign="center" marginBottom="4px" justifyContent="space-between">
                        <p onClick={() => { setActiveScreen('home') }} style={{ margin: "0px" }}>Back</p>
                        <p style={{ margin: "0px" }}>Create a New Thread</p>
                        <p style={{ margin: "0px", visibility: "hidden" }}>Nodisp</p>
                    </Flex>
                    <Flex flexDirection="column" textAlign="left" marginBottom="4px">
                        <p style={{ margin: "0px" }}>Title</p>
                        <Input width="97%" defaultValue="Title" ref={inputTitleRef} />
                    </Flex>
                    <Flex flexDirection="column" textAlign="left" marginBottom="4px">
                        <p style={{ margin: "0px" }}>Description</p>
                        <Input width="97%" defaultValue="Desc" ref={inputDescriptionRef} />
                    </Flex>
                    <Flex flexDirection="column" textAlign="left" marginBottom="4px">
                        <p style={{ margin: "0px" }}>Members</p>
                        <Input width="97%" defaultValue="0x707aC3937A9B31C225D8C240F5917Be97cab9F20" ref={inputMembersRef} />
                    </Flex>
                    <Flex flexDirection="column" textAlign="left" marginBottom="4px">
                        <p style={{ margin: "0px" }}>Moderators</p>
                        <Input width="97%" defaultValue="0x707aC3937A9B31C225D8C240F5917Be97cab9F20" ref={inputModeratorsRef} />
                    </Flex>
                    <Flex flexDirection="column" textAlign="left" marginBottom="4px">
                        <p style={{ margin: "0px" }}>Keywords</p>
                        <Input width="97%" defaultValue="one, two,3" ref={inputKeywordsRef} />
                    </Flex>
                    <br />
                    <Flex flexDirection="row" alignItems="center">
                        <Flex flexDirection="column" width="50%">
                            <Input width="100%" type="checkbox" ref={isReadPublicRef} />
                            <span>Read Public</span>
                        </Flex>
                        <Flex flexDirection="column" width="50%">
                            <Input width="100%" type="checkbox" ref={isWritePublicRef} />
                            <span>Write Public</span>
                        </Flex>
                    </Flex>
                    <br />
                    <ButtonStyled onClick={createThread} width="97%" minH="40px" background="linear-gradient(163deg,rgb(0 255 72) -258.34%,rgb(133 231 137 / 47%) 100.95%);">
                        Create
                    </ButtonStyled>
                </Flex>


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
