chrome.action.onClicked.addListener((tab) => {

    try {
        let url = new URL(tab.url);
        let link = url.origin + url.pathname;
        console.log(btoa(link), link);
        chrome.tabs.create({active: true, url: `https://theconvo.space/site/${btoa(link)}`});
    } catch (error) {
        console.log(error);
    }

});
