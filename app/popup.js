(function(){

    document.getElementById("btn1").addEventListener("click", function(){

		console.log("Hello");
        /*chrome.tabs.create({
            "url": "http://www.baidu.com",
            "active": false
        }, function (tab) {
            console.log(tab);
        });*/


		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			var activeTab = tabs[0];
			//chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
			//chrome.tabs.sendMessage(activeTab.id, {"message": "alarm_test"});
			chrome.tabs.sendMessage(activeTab.id, {"message": "background"});



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


})();