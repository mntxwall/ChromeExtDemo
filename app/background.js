// background.js

// Called when the user clicks on the browser action.
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message == "background"){
      console.log("BackGround");
    }
  }
);

chrome.storage.onChanged.addListener(function (changes, areaName) {

    console.log(changes.favoriteColor);
    console.log(areaName);

    //var port = chrome.runtime.connect({name: "helloStorage"});
    chrome.runtime.sendMessage({message: "valueChange"}, function(response) {
        console.log(response);
    });

});

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
          }, function (tab) {cd
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
        suggest({filename: "chromeChange/" + item.filename, conflictAction: "uniquify"});

      });
    }
  });
});

