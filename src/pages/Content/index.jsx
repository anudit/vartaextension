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
        bg: "#e9e9e9",
        primary: "#efefef",
        primaryG: "linear-gradient(180deg, #dacaca, #a19696)",
        secondary: "#d1d1d1",
        accent: "linear-gradient(180deg, #026DBB, #0FA5FA)",
        text: "black",
        textDull: "gray",
    },
    dark: {
        bg: "#3F3F3F",
        primary: "#353636",
        primaryG: "linear-gradient(180deg , #332F2F, #221F1F)",
        secondary: "#444545",
        accent: "#026DBB",
        accentG: "linear-gradient(180deg, #026DBB, #0FA5FA)",
        text: "#ffffffd4",
        textDull: "gray",
    }
}

function getTheme(mode) {
    let finalTheme = baseTheme;
    finalTheme['colors'] = colors[mode];
    return finalTheme;
}


function App() {

    const [mode, setColorMode] = useState('dark')
    const themeValue = getTheme(mode);

    return (
        <Web3ContextProvider>
            <ThemeProvider theme={themeValue}>
                <ConvoApp setColorMode={setColorMode} colorMode={mode} />
            </ThemeProvider>
        </Web3ContextProvider>
    )
}

let appEle = document.createElement("div");
appEle.id = "#app-convo"
appEle.classList.add('app-convo')
render(<App />, window.document.body.appendChild(appEle));

if (module.hot) module.hot.accept();
