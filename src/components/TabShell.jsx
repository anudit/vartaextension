import React from 'react';
import { Flex } from './Base';

function TabShell(props) {
    return (
        <Flex display="flex" flexDirection="column" height="500px" alignItems={props?.alignItems}>
            {props.children}
        </Flex>
    );
}

export default TabShell;
