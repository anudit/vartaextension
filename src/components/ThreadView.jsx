import React, { useEffect, useState, useRef, useContext } from 'react';
import { Flex, Text, NeuIconButton, NeuInput } from './Base';
import { MenuIcon, SendIcon } from './Icons';
import styled from 'styled-components';
import MessagesRenderer from './MessagesRenderer';
import { Web3Context } from '../contexts/Web3Context';

const MessageBox = styled.input({
    width: "100%",
    margin: "4px",
    borderRadius: "10px",
    border: "none",
});

function ThreadView(props) {

    let [comments, setComments] = useState(null);
    let [sendingMessage, setSendingMessage] = useState(false);
    const newMessageRef = useRef(null);
    const { convo, signerAddress, getAuthToken } = useContext(Web3Context);

    useEffect(() => {
        convo.comments.query({
            threadId: props.screenData._id,
            latestFirst: true,
            page: 0,
            pageSize: 50
        }).then((snapshot) => {
            setComments(snapshot.reverse());
            scrollDown();
        });
    }, [])

    async function scrollDown() {
        let commentsBox = document.getElementById('commentsBox');
        if (Boolean(commentsBox) === true) {
            const scroll = commentsBox.scrollHeight - commentsBox.clientHeight;
            commentsBox.scrollTo(0, scroll);
            console.log('scrolled');
        }
    }

    async function createNewMessage() {
        setSendingMessage(true);
        let token = await getAuthToken();
        let url = window.location.origin + window.location.pathname;
        console.log({
            signerAddress,
            token,
            comment: encodeURIComponent(newMessageRef.current.value),
            threadId: props.screenData._id,
            url
        })
        let resp = await convo.comments.create(
            signerAddress,
            token,
            encodeURIComponent(newMessageRef.current.value),
            props.screenData._id,
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

    return (
        <Flex display="flex" flexDirection="column" height="500px">
            <Text style={{ margin: 0 }}>
                {decodeURIComponent(props.screenData.title)}
            </Text>
            <Flex height="400px" display="flex" flexDirection="column" overflowY="scroll" overflowX="hidden" className="custom-scroll" id="commentsBox" >
                <MessagesRenderer comments={comments} />
            </Flex>
            <Flex height="50px" display="flex" flexDirection="row" alignItems="center">
                <NeuIconButton>
                    <MenuIcon width="30px" height="30px" />
                </NeuIconButton>
                <NeuInput margin="4px" height="40px" type="text" ref={newMessageRef} />
                <NeuIconButton onClick={createNewMessage}>
                    {
                        sendingMessage === false ? (
                            <SendIcon width="15px" height="15px" />
                        ) : (
                            <div className="loader"></div>
                        )
                    }
                </NeuIconButton>
            </Flex>
        </Flex>
    );
}

export default ThreadView;
