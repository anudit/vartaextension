import React from 'react';
import { Flex, NeuButton, Text } from '../../../components/Base';
import { MoonIcon, SunIcon } from '../../../components/Icons';
import Toggle from 'react-toggle';
import TabShell from '../../../components/TabShell';

function Row({ children }) {
    return (
        <Flex flexDirection="row" width="100%" justifyContent="space-between" alignItems="center" px={2}>
            {children}
        </Flex>
    )
}

function Settings({ setColorMode, colorMode }) {

    function setMode(checkboxState) {
        if (checkboxState === true) {
            setColorMode('light');
        }
        else {
            setColorMode('dark');
        }
    }

    return (
        <TabShell>
            <Flex flexDirection="column" w="100%" h="100%">
                <br />
                <Text fontWeight="900" m={0}>Settings</Text>
                <br />
                <Row>
                    <Text fontWeight="500">Light Theme</Text>
                    <Toggle
                        id="darkModeOn"
                        defaultChecked={colorMode === 'dark' ? false : true}
                        onChange={(e) => setMode(e.target.checked)}
                        icons={{
                            checked: <SunIcon fill="white" width="20px" height="20px" />,
                            unchecked: <MoonIcon fill="white" width="11px" height="14px" />,
                        }}
                    />
                </Row>
                <Flex flexDirection="row" width="100%" justifyContent="center" alignItems="center" px={2}>
                    <NeuButton px="5px" py="10px" variant="danger" onClick={() => {
                        localStorage.removeItem("walletconnect");
                    }}>
                        Purge Walletconnect Session
                    </NeuButton>
                </Flex>
            </Flex>
        </TabShell>
    );
}

export default Settings;
