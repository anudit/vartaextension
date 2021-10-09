import React, { useState } from 'react';
import { render } from 'react-dom';
import { ChakraProvider, extendTheme, Flex } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
// import GreetingComponent from '../../containers/Greetings/Greetings';
import Component from './components/floatingButton';

const customTheme = extendTheme({
    styles: {
        global: {
            body: {
                color: null,
                background: "",
                transitionProperty: null,
                transitionDuration: null,
                fontFamily: null,
                lineHeight: null
            }
        }
    }
})

function App() {

    let [isOpen, setIsOpen] = useState(false);

    return (
        <ChakraProvider theme={customTheme}>
            <Flex alignItems="center" justifyContent="center" textAlign="center" zIndex="1000000" display={isOpen === true ? "flex" : "none"} background="#ffffff00" backdropFilter="blur(10px)" position="fixed" bottom="60px" right="10px" direction="column" height="500px" width="300px">
                <Tabs variant="soft-rounded" colorScheme="blue" height="inherit" flexDirection="column" width="inherit">
                    <TabList justifyContent="center">
                        <Tab>Public</Tab>
                        <Tab>Private</Tab>
                        <Tab>Contacts</Tab>
                    </TabList>
                    <TabPanels height="400px">
                        <TabPanel>
                            <Component />
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Contacts!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
            <Button zIndex="1000000" position="fixed" colorScheme="blue" onClick={() => { setIsOpen(!isOpen) }} borderRadius="100px" right="10px" bottom="10px" height="50px" width="50px" padding={1}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1000 1000" height="40px" width="40px">
                    <path fill="#010101" d="M461 500l234 226a326 326 0 11-8-461L461 500z" />
                    <circle fill="#010101" cx="762.4" cy="500" r="137.2" />
                </svg>
            </Button>
        </ChakraProvider>
    )
}

let appEle = document.createElement("div");
appEle.id = "#app-convo"
render(<App />, window.document.body.appendChild(appEle));

if (module.hot) module.hot.accept();
