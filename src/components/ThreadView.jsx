import React, { useEffect, useState, useRef } from 'react';
import { Flex, IconButton, Input } from './Base';
import { MenuIcon, SendIcon } from './Icons';
import styled from 'styled-components';

const MessageBox = styled.input`
    width: 100%;
    margin: 4px;
    border-radius: 10px;
    border: none;
`;

function ThreadView(props) {

    let [messages, setMessages] = useState(null);
    const newMessageRef = useRef(null);

    useEffect(() => {

    }, [])

    async function createNewMessage() {

    }


    return (
        <Flex display="flex" flexDirection="column" height="500px">
            <p style={{ margin: 0 }}>
                {decodeURIComponent(props.screenData.title)}
            </p>
            <Flex height="50px" display="flex" flexDirection="row">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <MessageBox type="text" ref={newMessageRef} />
                <IconButton onClick={createNewMessage}>
                    <SendIcon />
                </IconButton>
            </Flex>
        </Flex>
    );
}

export default ThreadView;
