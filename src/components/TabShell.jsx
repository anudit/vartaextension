import React from 'react';
import { Flex } from './Base';

function TabShell({ children }) {
    return (
        <Flex display="flex" flexDirection="column" height="500px">
            {children}
        </Flex>
    );
}

export default TabShell;
