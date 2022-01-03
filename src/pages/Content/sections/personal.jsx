import React, { useState, useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Flex, IconButton, Input } from '../../../components/Base';
import { AddIcon, ReloadIcon } from '../../../components/Icons';
import ThreadView from '../../../components/ThreadView';
import TabShell from '../../../components/TabShell';
import { Web3Context } from '../../../contexts/Web3Context';
import { MultiValueInput, MultiValueAddressInput } from '../../../components/MultiValueInput';
import Toggle from 'react-toggle';

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
    const [isReadPublic, setIsReadPublic] = useState(false);
    const [isWritePublic, setIsWritePublic] = useState(false);

    const searchInput = useRef();
    const inputTitleRef = useRef();
    const inputDescriptionRef = useRef();
    const inputMembersRef = useRef();
    const inputModeratorsRef = useRef();
    const inputKeywordsRef = useRef();

    useEffect(() => {
        refreshThreads();
    }, [])

    async function refreshThreads() {
        let threadsData = await convo.threads.getUserThreads(signerAddress);
        if (threadsData?.success === true) {
            let threads = await convo.threads.getThreads(threadsData.member.toString());
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
            isReadPublic: isReadPublic,
            isWritePublic: isWritePublic,
        })
        let resp = await convo.threads.create(
            signerAddress,
            token,
            inputTitleRef.current.value,
            inputDescriptionRef.current.value,
            url,
            isReadPublic,
            isWritePublic,
            inputMembersRef.current.value.split(',').map((s) => { return s.trim() }),
            inputModeratorsRef.current.value.split(',').map((s) => { return s.trim() }),
            inputKeywordsRef.current.value.split(',').map((s) => { return s.trim() }),
        );
        console.log(resp);
    }

    if (signerAddress === "") {
        return (<TabShell>
            <br />
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
                            <div className="loader"></div>
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
                    <p style={{ margin: 0 }} onClick={() => { setActiveScreen('home') }}>Back</p>
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
                    <br />
                    <Flex flexDirection="column" textAlign="left" marginBottom="4px">
                        <p style={{ margin: "0px" }}>Title</p>
                        <Input defaultValue="Title" ref={inputTitleRef} />
                    </Flex>
                    <Flex flexDirection="column" textAlign="left" marginBottom="4px">
                        <p style={{ margin: "0px" }}>Description</p>
                        <Input defaultValue="Desc" ref={inputDescriptionRef} />
                    </Flex>
                    <Flex flexDirection="column" textAlign="left" marginBottom="4px">
                        <p style={{ margin: "0px" }}>Members</p>
                        <MultiValueAddressInput inputRef={inputMembersRef} />
                    </Flex>
                    <Flex flexDirection="column" textAlign="left" marginBottom="4px">
                        <p style={{ margin: "0px" }}>Moderators</p>
                        <MultiValueAddressInput inputRef={inputModeratorsRef} />
                        {/* <Input defaultValue="0x707aC3937A9B31C225D8C240F5917Be97cab9F20" /> */}
                    </Flex>
                    <Flex flexDirection="column" textAlign="left" marginBottom="4px">
                        <p style={{ margin: "0px" }}>Keywords</p>
                        <MultiValueInput inputRef={inputKeywordsRef} />
                    </Flex>
                    <br />
                    <Flex flexDirection="row" alignItems="center">
                        <Flex flexDirection="row" width="50%" justifyContent="center" alignItems="center">
                            <span style={{ marginRight: "0px" }}>Read Public</span>
                            <Toggle
                                id="isReadPublic"
                                defaultChecked={isReadPublic}
                                onChange={(e) => setIsReadPublic(e.target.checked)}
                            />
                        </Flex>
                        <Flex flexDirection="row" width="50%" justifyContent="center" alignItems="center">
                            <span style={{ marginRight: "0px" }}>Write Public</span>
                            <Toggle
                                id="isWritePublic"
                                defaultChecked={isWritePublic}
                                onChange={(e) => setIsWritePublic(e.target.checked)}
                            />
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
