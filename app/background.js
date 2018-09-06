// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    console.log("This is BrowserAction");
//    chrome.tabs.create({"url": "http://www.baidu.com"});
    // Send a message to the active tab
    /*
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
      console.log("this is sender");
    });*/
  });

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message == "background"){
      console.log("BackGround");
    }
  }
);

chrome.runtime.onConnect.addListener(function(port) {
  console.log(port);
  port.onMessage.addListener(function(msg) {
    if (msg.message == "start alarm test"){

      console.log("hellomessage")
      for(i=0; i<3; i++){
        setTimeout(function() {
          chrome.tabs.create({
            "url": "http://www.baidu.com",
            "active": false
          }, function (tab) {
            //console.log(tab);
            setTimeout(function () {
              chrome.tabs.remove(tab.id)
            }, 3000);
          });
        }, 3000 * (i + 1));
      }
    }
    if(msg.message == "download"){
      console.log("begin Download");
      chrome.downloads.download({
        "url":"http://insight.dev.schoolwires.com/HelpAssets/C2Assets/C2Files/C2ImportCalEventSample.csv"
      });

      chrome.downloads.onDeterminingFilename.addListener(function(item, suggest){

        console.log("Download Change");
        suggest({filename: "chromeChange/" + item.filename});

      });
    }
  });
});

