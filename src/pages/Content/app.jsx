import React, { useState, useContext, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { NeuIconButton, Button, Flex } from '../../components/Base';
import '../../styles/react-tabs.css';
import '../../styles/app.css';
import '../../styles/react-toggle.css';
import { SettingsIcon, GlobeIcon, PersonalIcon, LoginIcon, ProfileIcon, DownArrowIcon, VartaIcon } from '../../components/Icons';
import Settings from './sections/Settings';
import Personal from './sections/personal';
import Public from './sections/public';
import Login from './sections/login';
import { Web3Context } from '../../contexts/Web3Context';
import styled, { useTheme } from 'styled-components';

const ScrollButton = styled.button({
    borderRadius: "100px",
    color: "black",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
    width: "50px",
    backgroundColor: "transparent",
    border: "none"
});

const ButtonShell = styled(Flex)({
    backgroundColor: (props) => props.theme.colors.secondary,
    boxShadow: (props) => `inset 9.91px 9.91px 15px ${props.theme.colors.secondary}, inset -9.91px -9.91px 15px ${props.theme.colors.accent}`,
    padding: "5px",
    borderRadius: "100%",
    marginBottom: "10px"
});

function App({ setColorMode, colorMode }) {

    const { signerAddress } = useContext(Web3Context);
    const theme = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [tabIndex, setTabIndex] = useState(0);

    async function scrollDown() {
        let commentsBox = document.getElementById('commentsBox');
        if (Boolean(commentsBox) === true) {
            const scroll = commentsBox.scrollHeight - commentsBox.clientHeight;
            commentsBox.scrollTo(0, scroll);
            console.log('scrolled');
        }
    }

    async function bindOpenWindow(e) {
        if (e.key == 'v' && e.altKey) {
            setIsOpen((current) => !current);
        };
    }

    useEffect(() => {
        document.onkeydown = bindOpenWindow;
    }, [])

    return (
        <>
            <Flex
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                zIndex="1000000"
                background={theme.colors.bg}
                backdropFilter="blur(10px)"
                position="fixed"
                right="10px"
                bottom="10px"
                height="500px"
                width="400px"
                flexDirection="row"
                borderRadius="10px"
                display={isOpen === true ? "flex" : "none"}
            >
                <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                    <Flex width="330px">
                        <TabPanel display="flex">
                            <Public setTabIndex={setTabIndex} />
                        </TabPanel>
                        <TabPanel display="flex">
                            <Personal />
                        </TabPanel>
                        <TabPanel display="flex">
                            <Login />
                        </TabPanel>
                        <TabPanel display="flex">
                            <Settings setColorMode={setColorMode} colorMode={colorMode} />
                        </TabPanel>
                    </Flex>
                    <Flex width="70px" backgroundColor={theme.colors.secondary} display="flex" paddingTop="10px" borderTopRightRadius="5px" borderBottomRightRadius="5px" justifyContent="space-between" flexDirection="column" alignItems="center" paddingBottom="10px">
                        <Flex>
                            <TabList>
                                <Tab style={{ marginBottom: "10px" }}>
                                    <ButtonShell>
                                        <NeuIconButton isSelected={tabIndex === 0}>
                                            <GlobeIcon height="20px" width="20px" />
                                        </NeuIconButton>
                                    </ButtonShell>
                                </Tab>
                                <Tab style={{ marginBottom: "10px" }}>
                                    <ButtonShell>
                                        <NeuIconButton isSelected={tabIndex === 1}>
                                            <PersonalIcon height="20px" width="20px" />
                                        </NeuIconButton>
                                    </ButtonShell>
                                </Tab>
                                <Tab style={{ marginBottom: "10px" }}>
                                    <ButtonShell>
                                        <NeuIconButton isSelected={tabIndex === 2}>
                                            {signerAddress === "" ? <LoginIcon height="20px" width="20px" /> : <ProfileIcon height="20px" width="20px" />}
                                        </NeuIconButton>
                                    </ButtonShell>
                                </Tab>
                                <Tab style={{ marginBottom: "10px" }}>
                                    <ButtonShell>
                                        <NeuIconButton isSelected={tabIndex === 3}>
                                            <SettingsIcon height="20px" width="20px" />
                                        </NeuIconButton>
                                    </ButtonShell>
                                </Tab>
                            </TabList>
                        </Flex>
                        <Flex flexDirection="column">
                            <ScrollButton onClick={scrollDown}>
                                <DownArrowIcon height="24px" width="24px" />
                            </ScrollButton>
                            <Button border="none" backgroundColor="#ffffff70" onClick={() => { setIsOpen(!isOpen) }} borderRadius="100px" height="50px" width="50px" padding={1}>
                                <VartaIcon />
                            </Button>
                        </Flex>
                    </Flex>
                </Tabs>
            </Flex>
            <Button display={isOpen === true ? "none" : "flex"} border="none" backgroundColor="#288ac3de" zIndex="1000000" position="fixed" onClick={() => { setIsOpen(!isOpen) }} borderRadius="100px" right="20px" bottom="20px" height="50px" width="50px" padding={1} justifyContent="center" alignItems="center">
                <VartaIcon />
            </Button>
        </>
    )
}

export default App
