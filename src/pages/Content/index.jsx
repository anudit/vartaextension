import React from 'react';
import { render } from 'react-dom';
import ConvoApp from './app';
import { ThemeProvider } from 'styled-components'
import { Web3ContextProvider } from '../../contexts/Web3Context';

const theme = {
    colors: {
        black: '#000e1a',
        white: '#fff',
        blue: '#007ce0',
        navy: '#004175',
    },
};

function App() {

    return (
        <Web3ContextProvider>
            <ThemeProvider theme={theme}>
                <ConvoApp />
            </ThemeProvider>
        </Web3ContextProvider>
    )
}

let appEle = document.createElement("div");
appEle.id = "#app-convo"
appEle.classList.add('app-convo')
render(<App />, window.document.body.appendChild(appEle));

if (module.hot) module.hot.accept();
