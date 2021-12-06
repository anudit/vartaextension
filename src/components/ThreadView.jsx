import React from 'react';
import { Flex } from './Base';

function ThreadView(props) {

    // Fetch messages
    // new message


    return (
        <Flex display="flex" flexDirection="column" height="500px">
            <p>
                {decodeURIComponent(props.screenData.title)}
            </p>
        </Flex>
    );
}

export default ThreadView;
