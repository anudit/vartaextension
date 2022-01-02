import React, { useState } from 'react';
import { render } from 'react-dom';
import ConvoApp from './app';
import { ThemeProvider } from 'styled-components'
import { Web3ContextProvider } from '../../contexts/Web3Context';

const baseTheme = {
    initialColorModeName: 'dark',
    fonts: {
        body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    }
};

const colors = {
    light: {
        bg: "#1a1a1a",
        primary: "#1E2327",
        secondary: "#202020",
        accent: "#735DB7",
        text: "black",
        textDull: "gray",
    },
    dark: {
        bg: "#1a1a1a",
        primary: "#1E2327",
        secondary: "#202020",
        accent: "#735DB7",
        text: "white",
        textDull: "gray",
    }
}

function getTheme(mode) {
    let finalTheme = baseTheme;
    finalTheme['colors'] = colors[mode];
    console.log('finalTheme', finalTheme)
    return finalTheme;
}


function App() {

    const [mode, setColorMode] = useState('dark')
    const themeValue = getTheme(mode);

    return (
        <Web3ContextProvider>
            <ThemeProvider theme={themeValue}>
                <ConvoApp setColorMode={setColorMode} />
            </ThemeProvider>
        </Web3ContextProvider>
    )
}

let appEle = document.createElement("div");
appEle.id = "#app-convo"
appEle.classList.add('app-convo')
render(<App />, window.document.body.appendChild(appEle));

if (module.hot) module.hot.accept();
