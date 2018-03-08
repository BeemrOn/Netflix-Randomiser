
function scroll() {
    chrome.tabs.executeScript(
        {file: "autoscroll.js"
        }
    );
};

function randomise() {
    chrome.tabs.executeScript(
        {file: "randomise.js"
        },
        readTitles
    )
};

function readTitles(result){
    if (result[0] != 'null') {
        chrome.tabs.create({ url: result[0]});
    }
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('scroll').addEventListener('click', scroll);
    document.getElementById('randomise').addEventListener('click', randomise);
})


