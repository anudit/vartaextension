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

chrome.commands.onCommand.addListener((command) => {
    console.log(`Command "${command}" triggered`);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        var activeTab = tabs[0];
        try {
            let url = new URL(activeTab.url);
            let link = url.origin + url.pathname;
            console.log(btoa(link), link);
            chrome.tabs.create({active: true, url: `https://theconvo.space/site/${btoa(link)}`});
        } catch (error) {
            console.log(error);
        }

    });
});

chrome.contextMenus.onClicked.addListener((data)=>{
    console.log(data);
});
