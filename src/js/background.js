const toB64 = (url) => {
    if (Boolean(url) == false){
        return "";
    }
    else {
        let buff = new Buffer.from(url, 'ascii');
        let text = buff.toString('base64');
        return text;
    }
};

chrome.browserAction.onClicked.addListener(function(tab) {
    try {
        let url = new URL(tab.url);
        let link = url.origin + url.pathname;
        console.log(toB64(link), link);
        chrome.tabs.create({active: true, url: `https://alpha.theconvo.space/site/${toB64(link)}`});

    } catch (error) {

    }
});
