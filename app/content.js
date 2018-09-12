// content.js

chrome.runtime.onConnect.addListener(function(port) {


    console.log("Message Change from background");
    port.disconnect()
});
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        //var firstHref = $("a[href^='http']").eq(0).attr("href");
        console.log("click event Cookies");
		//var a = document.getElementById("div1")
		//console.log(a.getElementsByTagName("li"));

       // console.log(document.getElementById("p1").innerText);
      }
    else if (request.message === "popup") {
      console.log("popup event");
      var port = chrome.runtime.connect({name: "knockknock"});
      port.postMessage({
        "joke": "Knock knock"
      });
      port.onMessage.addListener(function(msg) {
        if (msg.question == "Who's there?"){
          port.postMessage({
            "answer": "Madame"});
          console.log("answer:Madame");
        }
        else if (msg.question == "Madame who?"){
          port.postMessage({
            "answer": "Madame... Bovary"
          });
          console.log("answer:Madame... Bovary");
        }

      });
    }
    else if(request.message === "background"){

        console.log("fire alarm");
        var port = chrome.runtime.connect({name: "alarm_test"});
        //port.postMessage({message: "start alarm test"});
        port.postMessage({message: "download"});





        //port.postMessage({message: "start alarm test"});
        /*
        port.onMessage.addListener(function(msg) {
          if (msg.message == "JobDone"){
            console.log("alarmFinished");
            port.postMessage({message: "start alarm test"});

          }
        });*/




    }
    else if (request.message == "valueChange"){

        console.log("storagechange")

      }
  }
  );


//port.postMessage({joke: "Knock knock"});

