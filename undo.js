chrome.commands.onCommand.addListener(function (command) {
    if(command === "undo") {
        // find the active tab and send a message to the content script page 
        // on that tab
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {}, function(response) {
            });
        });
    }
});
