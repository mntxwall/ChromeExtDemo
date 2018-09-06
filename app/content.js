// content.js


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        //var firstHref = $("a[href^='http']").eq(0).attr("href");        
        console.log("click event Cookies");
		var a = document.getElementById("div1")
		console.log(a.getElementsByTagName("li"));

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
  }
  );


//port.postMessage({joke: "Knock knock"});

