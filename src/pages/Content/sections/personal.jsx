import React, { useState, useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Text, Flex, NeuIconButton, NeuInput } from '../../../components/Base';
import { AddIcon, ReloadIcon } from '../../../components/Icons';
import ThreadView from '../../../components/ThreadView';
import TabShell from '../../../components/TabShell';
import { Web3Context } from '../../../contexts/Web3Context';
import { MultiValueInput, MultiValueAddressInput } from '../../../components/MultiValueInput';
import Toggle from 'react-toggle';
import { useTheme } from 'styled-components'

let ButtonStyled = styled.button({
    borderRadius: "10px",
    width: props => Boolean(props.width) === true ? props.width : "",
    border: "none",
    marginBottom: "10px",
    padding: "8px",
    backgroundImage: props => Boolean(props.backgroundImage) === true ? props.backgroundImage : "",
    background: props => Boolean(props.background) === true ? props.background : "",
    flexDirection: "row",
    minHeight: props => Boolean(props.minH) === true ? props.minH : "50px",
    fontWeight: 700,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    cursor: "pointer",
});

function Personal() {

    const theme = useTheme();
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
        return (
            <TabShell>
                <br />
                <Text>Login to view Private Threads.</Text>
            </TabShell>
        )
    }
    else if (activeScreen === 'home') {

        return (
            <TabShell>
                <Flex flexDirection="row" marginTop="5px" marginBottom="5px" alignItems="center">
                    <br />
                    <NeuIconButton onClick={() => { setActiveScreen('create') }} size="sm">
                        <AddIcon width="15px" height="15px" />
                    </NeuIconButton>
                    <NeuInput margin="4px" height="40px" ref={searchInput} onChange={() => {
                        setSearchString(searchInput.current.value);
                    }} />
                    <NeuIconButton onClick={() => { refreshThreads() }} size="sm">
                        <ReloadIcon width="15px" height="15px" />
                    </NeuIconButton>
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
                        <Text>No threads.</Text>
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
                                        backgroundColor={theme.colors.secondary}
                                        borderRadius="10px"
                                        cursor="pointer"
                                        onClick={() => {
                                            setActiveScreen('viewThread');
                                            setscreenData(t);
                                        }}
                                    >
                                        <Text>{decodeURIComponent(t.title)}</Text>
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
                    <Text style={{ margin: 0 }} onClick={() => { setActiveScreen('home') }}>Back</Text>
                </Flex>
                <ThreadView screenData={screenData} />
            </TabShell>
        )
    }
    else if (activeScreen === 'create') {

        return (
            <TabShell>

                <Flex flexDirection="column" margin="10px">
                    <Flex flexDirection="row" textAlign="center" marginBottom="10px" justifyContent="space-between">
                        <Text onClick={() => { setActiveScreen('home') }} style={{ margin: "0px" }}>Back</Text>
                        <Text style={{ margin: "0px" }}>Create a New Thread</Text>
                        <Text style={{ margin: "0px", visibility: "hidden" }}>Nodisp</Text>
                    </Flex>
                    <br />
                    <Flex flexDirection="column" textAlign="left" marginBottom="10px">
                        <NeuInput defaultValue="Title" ref={inputTitleRef} placeholder='Title' />
                    </Flex>
                    <Flex flexDirection="column" textAlign="left" marginBottom="10px">
                        <NeuInput defaultValue="Desc" ref={inputDescriptionRef} placeholder='Description' />
                    </Flex>
                    <Flex flexDirection="column" textAlign="left" marginBottom="10px">
                        <MultiValueAddressInput inputRef={inputMembersRef} placeholder='Add Members' />
                    </Flex>
                    <Flex flexDirection="column" textAlign="left" marginBottom="10px">
                        <MultiValueAddressInput inputRef={inputModeratorsRef} placeholder='Add Moderators' />
                        {/* <Input defaultValue="0x707aC3937A9B31C225D8C240F5917Be97cab9F20" /> */}
                    </Flex>
                    <Flex flexDirection="column" textAlign="left" marginBottom="10px">
                        <MultiValueInput inputRef={inputKeywordsRef} placeholder='Add Keywords' />
                    </Flex>
                    <br />
                    <Flex flexDirection="row" alignItems="center">
                        <Flex flexDirection="row" width="50%" justifyContent="center" alignItems="center">
                            <Text style={{ marginRight: "0px" }}>Read Public</Text>
                            <Toggle
                                id="isReadPublic"
                                defaultChecked={isReadPublic}
                                onChange={(e) => setIsReadPublic(e.target.checked)}
                            />
                        </Flex>
                        <Flex flexDirection="row" width="50%" justifyContent="center" alignItems="center">
                            <Text style={{ marginRight: "0px" }}>Write Public</Text>
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
            <Text>
                Personal Meesages
            </Text>
        );

    }

}

export default Personal;
