import React from 'react';
import { Flex } from './Base';

function TabShell(props) {
    return (
        <Flex className={"custom-scroll"} display="flex" flexDirection="column" height="500px" alignItems={props?.alignItems} overflowY="scroll">
            {props.children}
        </Flex>
    );
}

export default TabShell;
