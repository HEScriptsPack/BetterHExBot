function botButton(){
	function sendRequest() {
		var decision = confirm(LANG.ASK_PROTECTION_CONFIRM)
		if (decision == true){
			console.log("Help Requested!")
			var data = JSON.parse(sendXMLHttpRequest("/ajax.php","POST", "func=getStatic", false)).msg
			var user = JSON.parse(data)[0].user
			var ip = JSON.parse(data)[0].ip
			if (controllers.bot.canHelp){
				controllers.bot.canHelp = false
				sendXMLHttpRequest("https://api.logfro.de/hacked.php", "GET", "type=warn&msg=IP That Need Assistance: "+ip+"&username="+user, true)
				setTimeout(function(){
					controllers.bot.canHelp = true
				}, 5 * 60 * 1000)
			}
		}
    }
	
	views.showAssistanceButton()
	views.showBotButton()
	
	//Show command panel
	document.getElementById(BOT_BUTTON_DOM_ID).addEventListener("click", function(){
		if(controllers.bot.controlPanel.isHidden)
			controllers.functions.resetBotAndShowPanel()
		else {
			controllers.bot.controlPanel.isHidden = true
			controllers.functions.hidePanel()
		}
	})
	
	document.getElementById(BOT_BUTTON_DOM_ID2).addEventListener("click", function(){
		sendRequest()
	})
	
}