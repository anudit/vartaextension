function getBehaviour(url) {

    // console.log('analysing', url);

    const regexMappings = {
        opensea: {
            regex: /https:\/\/opensea\.io\/assets\/(0x[a-fA-F0-9]{40})\/([A-Za-z0-9_]+$)/i,
            behaviour: {
                kind: 'nft',
                chainId: 1,
            }
        },
        openseaMatic: {
            regex: /https:\/\/opensea\.io\/assets\/matic\/(0x[a-fA-F0-9]{40})\/([A-Za-z0-9_]+$)/i,
            behaviour: {
                kind: 'nft',
                chainId: 137,
            }
        }
    }

    const keyList = Object.keys(regexMappings);
    for (let index = 0; index < keyList.length; index++) {
        const deets = regexMappings[keyList[index]];
        const matchResponse = String(url).match(deets.regex);
        if (Boolean(matchResponse) === true) {
            return {
                sitekey: keyList[index],
                behaviour: deets.behaviour,
                match: matchResponse
            };
        }
    }
    return false;
}

export { getBehaviour }

