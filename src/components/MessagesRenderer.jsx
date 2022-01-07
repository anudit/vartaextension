import React, { useContext } from 'react';
import { Flex } from './Base';
import styled from 'styled-components';
import timeAgo, { truncateAddress } from '../utils/stringUtils';
import { Web3Context } from '../contexts/Web3Context';

const MessageAuthor = styled.p({
    fontSize: "0.8em",
    paddingBottom: "0px",
    paddingTop: "0px",
    marginBottom: "0px",
    marginTop: "0px",
    color: (props) => props.theme.colors.textDull,
    textAlign: (props) => props.align ? props.align : "left",
});

const MessageText = styled.p({
    fontSize: "1em",
    fontWeight: "600",
    paddingBottom: "0px",
    paddingTop: "0px",
    marginBottom: "0px",
    marginTop: "0px",
    color: (props) => props.theme.colors.text,
    textAlign: (props) => props.align ? props.align : "left",
});

const Bubble = styled(Flex)({
    borderRadius: "10px",
    width: "70%",
    wordBreak: "break-word",
    marginBottom: "10px",
    padding: "8px",
    backgroundColor: (props) => props.type === 0 ? props.theme.colors.primary : props.theme.colors.secondary,
    boxShadow: (props) => props.type === 0 ? `inset 2px -10px 13px rgba(0, 0, 0, 0.15), inset 0px 12px 45px rgba(0, 0, 0, 0.21)` : `2px -10px 13px #3B3C3C, 0px 12px 45px rgba(0, 0, 0, 0.33)`,
});

const MessageRow = styled(Flex)({
    width: "96%",
    display: "flex",
    marginRight: "5px",
    marginLeft: "5px",
    flexDirection: "column",
    alignItems: (props) => props?.type === 1 ? 'flex-end' : 'flex-start'
});

function MessagesRenderer({ comments }) {
    const { signerAddress } = useContext(Web3Context);

    if (Boolean(comments) === false || Boolean(comments.map) === false) {
        return (<></>)
    }
    else {
        return comments.map(comment => {
            const type = comment.author.toLowerCase() == signerAddress.toLowerCase() ? 1 : 0;

            return (
                <MessageRow type={type} key={comment._id} display="flex" flexDirection="column">
                    <Flex display="flex" flexDirection="row" justifyContent="space-between" width="70%" px="5px">
                        <MessageAuthor>
                            {Boolean(comment.authorENS) === true ? comment.authorENS : truncateAddress(comment.author)}
                        </MessageAuthor>
                        <MessageAuthor>
                            {timeAgo(parseInt(comment.createdOn))}
                        </MessageAuthor>
                    </Flex>
                    <Bubble display="flex" flexDirection="column" direction="column" type={type} pb="10px">
                        <MessageText>{decodeURIComponent(comment.text)}</MessageText>
                    </Bubble>
                </MessageRow>
            )
        })

    }
}

export default MessagesRenderer;
