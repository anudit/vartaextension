import { Convo } from '@theconvospace/sdk';
import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { ensToAddress } from '../../utils/stringUtils';

// render(<App />, window.document.body.appendChild(appEle));

export default function updateUI() {
    let convo = new Convo('CSCpPwHnkB3niBJiUjy92YGP6xVkVZbWfK8xriDO');
    let scoreDataCache = {}

    if (window.document.location.href.match(/https:\/\/twitter.com\/(#!\/)?(\w*)/gm)) {
        const eles = document.getElementsByClassName('css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0');
        console.log('matched twitter', eles);
        for (let index = 0; index < eles.length; index++) {
            const e = eles[index];
            if (e.childElementCount === 0) {
                const possibleEnsNames = e.innerText.split(' ').filter((e) => e != '');
                for (let i = 0; i < possibleEnsNames.length; i++) {
                    if (possibleEnsNames[i].endsWith('.eth') === true) {
                        ensToAddress(possibleEnsNames[i].toLowerCase()).then((add) => {
                            if (Boolean(add) === true) {
                                if (Boolean(scoreDataCache[add]) === false) {
                                    convo.omnid.getTrustScore(add).then((scoreData) => {
                                        scoreDataCache[add] = scoreData;
                                        e.innerHTML += `<span style="margin-left: 5px;margin-right: 5px;font-size: initial;display: inline-flex;background: #d9d9d9;color: #000;border-radius: 5px;padding-left: 5px;padding-right: 5px;justify-content: center;flex-direction: row;height: 22px;padding-top: 0;padding-bottom: 0;align-items: center;">${scoreData.score}</span>`
                                    });
                                }
                                else {
                                    e.innerHTML += `<span style="margin-left: 5px;margin-right: 5px;font-size: initial;display: inline-flex;background: #d9d9d9;color: #000;border-radius: 5px;padding-left: 5px;padding-right: 5px;justify-content: center;flex-direction: row;height: 22px;padding-top: 0;padding-bottom: 0;align-items: center;">${scoreDataCache[add].score}</span>`
                                }
                            }
                        });
                        break;
                    }
                }
            }
        }
    }
}

