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
    const newMessageRef = useRef(null);
    const { convo } = useContext(Web3Context);

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
                    <SendIcon width="15px" height="15px" />
                </NeuIconButton>
            </Flex>
        </Flex>
    );
}

export default ThreadView;
