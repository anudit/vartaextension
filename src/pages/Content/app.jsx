import React, { useState, useContext } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button, Flex } from '../../components/Base';
import '../../styles/react-tabs.css';
import '../../styles/app.css';
import { ContactsIcon, GlobeIcon, PersonalIcon, LoginIcon, ProfileIcon, DownArrowIcon } from '../../components/Icons';
import Contacts from './sections/contacts';
import Personal from './sections/personal';
import Public from './sections/public';
import Login from './sections/login';
import { Web3Context } from '../../contexts/Web3Context';
import styled from 'styled-components';

const ScrollButton = styled.button`
    border-radius: 100px;
    color: black;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
`;

function App() {

    const { signerAddress } = useContext(Web3Context);
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

    return (
        <>
            <Flex
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                zIndex="1000000"
                backgroundColor="#9a9a9a1f"
                backdropFilter="blur(10px)"
                position="fixed"
                right="10px"
                bottom="10px"
                height="500px"
                width="400px"
                flexDirection="row"
                borderRadius="20px"
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
                            <Contacts />
                        </TabPanel>
                        <TabPanel display="flex">
                            <Login />
                        </TabPanel>
                    </Flex>
                    <Flex width="70px" backgroundColor="#ffffff42" display="flex" paddingTop="10px" borderTopRightRadius="20px" borderBottomRightRadius="20px" justifyContent="space-between" flexDirection="column" alignItems="center" paddingBottom="10px">
                        <Flex>
                            <TabList>
                                <Tab>
                                    <GlobeIcon />
                                </Tab>
                                <Tab>
                                    <PersonalIcon />
                                </Tab>
                                <Tab>
                                    <ContactsIcon />
                                </Tab>
                                <Tab>
                                    {signerAddress === "" ? <LoginIcon /> : <ProfileIcon />}
                                </Tab>
                            </TabList>
                        </Flex>
                        <Flex>
                            <ScrollButton onClick={scrollDown}>
                                <DownArrowIcon />
                            </ScrollButton>
                            <Button border="none" backgroundColor="#ffffff70" onClick={() => { setIsOpen(!isOpen) }} borderRadius="100px" height="50px" width="50px" padding={1}>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1000 1000" height="40px" width="40px">
                                    <path fill="#010101" d="M461 500l234 226a326 326 0 11-8-461L461 500z" />
                                    <circle fill="#010101" cx="762.4" cy="500" r="137.2" />
                                </svg>
                            </Button>
                        </Flex>
                    </Flex>
                </Tabs>
            </Flex>
            <Button display={isOpen === true ? "none" : "flex"} border="none" backgroundColor="#288ac3de" zIndex="1000000" position="fixed" onClick={() => { setIsOpen(!isOpen) }} borderRadius="100px" right="20px" bottom="20px" height="50px" width="50px" padding={1}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1000 1000" height="40px" width="40px">
                    <path fill="#010101" d="M461 500l234 226a326 326 0 11-8-461L461 500z" />
                    <circle fill="#010101" cx="762.4" cy="500" r="137.2" />
                </svg>
            </Button>
        </>
    )
}

export default App