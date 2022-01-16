import React, { useEffect, useState, useContext, useRef } from 'react';
import { Flex, NeuButton, NeuIconButton, NeuInput, Text } from '../../../components/Base';
import { MenuIcon, SendIcon } from '../../../components/Icons';
import { Web3Context } from '../../../contexts/Web3Context';
import TabShell from '../../../components/TabShell';
import MessagesRenderer from '../../../components/MessagesRenderer';
import { getBehaviour } from '../behaviours';
import { getNftMetadata } from '../../../utils/nft';
import { useTheme } from 'styled-components';


function PublicTab({ setTabIndex }) {

    const { signerAddress, convo, getAuthToken } = useContext(Web3Context);
    const theme = useTheme();

    let [comments, setComments] = useState(undefined);
    let [customBehaviour, setCustomBehaviour] = useState(false);
    let [customBehaviourMeta, setCustomBehaviourMeta] = useState(false);
    let [sendingMessage, setSendingMessage] = useState(false);

    let [activeThreadId, setActiveThreadId] = useState(false);
    const newMessageRef = useRef(null);

    useEffect(async () => {

        // get page details.
        let url = window.location.origin + window.location.pathname;
        let threadId = "public";

        // check if the extension should adapt to a page.
        let customBehaviourChecker = getBehaviour(url);
        if (Boolean(customBehaviourChecker) === true) {
            console.log('got custom behaviour', customBehaviourChecker);
            setCustomBehaviour(customBehaviourChecker);

            if (customBehaviourChecker.behaviour.kind === 'nft') {
                threadId = "eip155:" + customBehaviourChecker.behaviour.chainId + "/erc721:" + customBehaviourChecker.match[1] + "/" + customBehaviourChecker.match[2];
                console.log('detected nft', threadId);
                setActiveThreadId(threadId)
                getNftMetadata(customBehaviourChecker.behaviour.chainId, customBehaviourChecker.match[1], customBehaviourChecker.match[2]).then(setCustomBehaviourMeta);
            }

        }
        else {
            setActiveThreadId(threadId)
        }

    }, []);

    useEffect(async () => {
        let url = window.location.origin + window.location.pathname;
        let snapshot = await convo.comments.query({
            url: encodeURIComponent(url),
            threadId: activeThreadId,
            latestFirst: true
        });
        setComments(snapshot.reverse());
    }, [activeThreadId]);


    async function scrollDown() {
        let commentsBox = document.getElementById('commentsBox');
        if (Boolean(commentsBox) === true) {
            const scroll = commentsBox.scrollHeight - commentsBox.clientHeight;
            commentsBox.scrollTo(0, scroll);
            console.log('scrolled');
        }
    }

    useEffect(async () => {
        setTimeout(scrollDown, 2000)
    }, [comments]);


    async function sendMessage() {

        // let url = 'https://theconvo.space/';
        // let threadId = "KIGZUnR4RzXDFheXoOwo";
        setSendingMessage(true);
        let token = await getAuthToken();
        let url = window.location.origin + window.location.pathname;
        console.log({
            signerAddress,
            token,
            comment: encodeURIComponent(newMessageRef.current.value),
            threadId: activeThreadId,
            url
        })
        let resp = await convo.comments.create(
            signerAddress,
            token,
            encodeURIComponent(newMessageRef.current.value),
            activeThreadId,
            url
        );
        console.log(resp);
        setComments((currentComments) => {
            let updatedComments = currentComments.concat([resp]);
            console.log(updatedComments);
            newMessageRef.current.value = "";
            return updatedComments;
        })
        setSendingMessage(false);
    }

    if (comments === undefined) {
        return (
            <TabShell>
                <Flex width="100%" height="450px" display="flex" justifyContent="center" alignContent="center">
                    <div className="loader" ></div>
                </Flex>
            </TabShell>
        );
    }
    else if (Boolean(comments) === true && comments.length === 0 && Boolean(comments.map) === false) {
        return (<TabShell> No comments </TabShell>);
    }
    else {
        return (
            <TabShell>
                {
                    Boolean(customBehaviourMeta) === true && Boolean(customBehaviourMeta.data.items[0].nft_data[0].external_data.description) === true ? (
                        <Flex height="130px" flexDirection="row" width="100%" display="flex" overflow="hidden" py="5px" backgroundColor={theme.colors.secondary} borderRadius="10px" alignItems="center" justifyContent="center" padding="5px" marginTop="5px">
                            <img src={customBehaviourMeta.data.items[0].nft_data[0].external_data.image} style={{ height: "100px", width: "100px" }} />
                            <Flex flexDirection="column" textAlign="left" padding="5px">
                                <Text fontWeight="800">
                                    {customBehaviourMeta.data.items[0].nft_data[0].external_data.name}
                                </Text>
                                <Text fontSize="small">
                                    {String(customBehaviourMeta.data.items[0].nft_data[0].external_data.description).slice(0, 90) + "..."}
                                </Text>
                            </Flex>
                        </Flex>
                    ) : (
                        <Flex height="50px" display="flex" flexDirection="column" overflow="hidden" py="5px">
                            <Text>{window.location.host.replace('www.', '')}</Text>
                        </Flex>
                    )
                }
                <Flex height={Boolean(customBehaviourMeta) === true && Boolean(customBehaviourMeta.data.items[0].nft_data[0].external_data.description) === true ? "320px" : "400px"} display="flex" flexDirection="column" overflow="scroll" className="publicTab" id="commentsBox">
                    <MessagesRenderer comments={comments} />
                </Flex>
                {
                    signerAddress !== "" ? (
                        <Flex height="50px" display="flex" flexDirection="row" alignItems="center">
                            <NeuIconButton>
                                <MenuIcon width="30px" height="30px" />
                            </NeuIconButton>
                            <NeuInput margin="4px" height="40px" type="text" ref={newMessageRef} />
                            <NeuIconButton onClick={sendMessage}>
                                {
                                    sendingMessage === false ? (
                                        <SendIcon width="15px" height="15px" />
                                    ) : (
                                        <div className="loader"></div>
                                    )
                                }
                            </NeuIconButton>
                        </Flex>
                    ) : (
                        <Flex height="50px" display="flex" flexDirection="row" >
                            <NeuButton onClick={() => { setTabIndex(2) }} width="100%" m="5px">
                                Login
                            </NeuButton>
                        </Flex>
                    )
                }
            </TabShell>
        );
    }
}

export default PublicTab;
