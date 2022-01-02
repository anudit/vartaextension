import React, { useContext } from 'react';
import { Flex } from './Base';
import styled from 'styled-components';
import timeAgo, { truncateAddress } from '../utils/stringUtils';
import { Web3Context } from '../contexts/Web3Context';

const MessageAuthor = styled.p`
  font-size: 0.8em;
  padding-bottom: 0px;
  padding-top: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
  color: ${props => props.theme.colors.textDull};
  text-align: ${props => props.align ? props.align : "left"};
`;

const MessageText = styled.p`
  font-size: 1.2em;
  font-weight: 600;
  padding-bottom: 0px;
  padding-top: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
  color: ${props => props.theme.colors.text};
  text-align: ${props => props.align ? props.align : "left"};
`;

const Bubble = styled(Flex)`
  border-radius: 10px;
  width: 70%;
  word-break: break-word;
  margin-bottom:10px;
  padding: 8px;
  background-color: ${props => props.type === 0 ? props.theme.colors.primary : props.theme.colors.secondary};
`;

const MessageRow = styled(Flex)`
  width: 96%;
  display:flex;
  margin-right:5px;
  margin-left:5px;
  flex-direction: ${props => props.flexDirection ? props.flexDirection : props.type === 0 ? "row" : "row-reverse"};
`;

const MessageBox = styled.input`
    width: 100%;
    margin: 4px;
    border-radius: 10px;
    border: none;
`;


function MessagesRenderer({ comments }) {
    const { signerAddress } = useContext(Web3Context);

    if (Boolean(comments) === false || Boolean(comments.map) === false) {
        return (<></>)
    }
    else {
        return comments.map(comment => {
            return (
                <MessageRow type={comment.author === signerAddress ? 1 : 0} key={comment._id} display="flex" flexDirection="column">
                    <Flex display="flex" flexDirection="row" justifyContent="space-between" width="70%">
                        <MessageAuthor>
                            {Boolean(comment.authorENS) === true ? comment.authorENS : truncateAddress(comment.author)}
                        </MessageAuthor>
                        <MessageAuthor>
                            {timeAgo(parseInt(comment.createdOn))}
                        </MessageAuthor>
                    </Flex>
                    <Bubble display="flex" flexDirection="column" direction="column" type={comment.author === signerAddress ? 1 : 0} pb="10px">
                        <MessageText>{decodeURIComponent(comment.text)}</MessageText>
                    </Bubble>
                </MessageRow>
            )
        })

    }
}

export default MessagesRenderer;
