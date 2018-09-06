// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    console.log("This is BrowserAction");
    chrome.tabs.create({"url": "http://www.baidu.com"});
    // Send a message to the active tab
    /*
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
      console.log("this is sender");

    });*/
  });