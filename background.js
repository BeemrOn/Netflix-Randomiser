


// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {
    // Replace all rules ...
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        // With a new rule ...
        chrome.declarativeContent.onPageChanged.addRules([
        {
            // That fires when a page's URL contains netflix.com' ...
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: { urlContains: 'https://www.netflix.com/browse/my-list' },
                })
                ],
                // And shows the extension's page action.
                actions: [ new chrome.declarativeContent.ShowPageAction() ]
        },
        ]);
    });
});

chrome.pageAction.onClicked.addListener(function() {
    chrome.tabs.executeScript(
        {file:
        "contentscript.js"
        }, 
        readTitles
    );
});

function readTitles(result){
    console.log(result[0]);
    if (result[0] != 'null') {
        chrome.tabs.create({ url: result[0]});
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}