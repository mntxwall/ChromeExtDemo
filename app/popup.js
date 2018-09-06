(function(){

    document.getElementById("btn1").addEventListener("click", function(){

		console.log("Hello");
        chrome.tabs.create({
            "url": "http://www.baidu.com",
            "active": false
        }, function (tab) {
            console.log(tab);
        });
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			var activeTab = tabs[0];
			chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
	  });
        //console.log("popup event");
        //chrome.runtime.sendMessage({"message": "popup"}, function(response) {
        //    console.log("popup send event");
       // });
       /* chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var activeTab = tabs[0];
            //chrome.tabs.sendMessage(activeTab.id, {"message": "popup"});
			chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
            //console.log("this is popup sender");
            //chrome.tabs.create({"url": "http://www.baidu.com"});
          });*/

/*
		chrome.cookies.get({"url":"https://www.v2ex.com/t/483319", "name":"PB3_SESSION"}, function(cookies){
			
			console.log(cookies);
			console.log("Hello");

			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				var activeTab = tabs[0];
				chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action", "code":cookies.value});
          });
		});*/
		/*console.log("hello");
		chrome.cookies.get("https://www.v2ex.com/t/483319", function(cookies){
			
			console.log(cookies)
		})*/
    });

    chrome.runtime.onConnect.addListener(function(port) {
        console.assert(port.name == "knockknock");
        port.onMessage.addListener(function(msg) {
          if (msg.joke == "Knock knock"){
              port.postMessage({
                "question": "Who's there?"
            });
            console.log("question Who's there?");
        }
        else if (msg.answer == "Madame"){
            port.postMessage({
                "question": "Madame who?"
            });
            console.log("question madame who");
        }
        else if(msg.answer == "Madame... Bovary"){
            port.postMessage({
                "question": "I don't get it."
            });
            console.log("question I don't get it");

        }
      } );
    });

})();