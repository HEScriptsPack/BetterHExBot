var controllers = {}

controllers.storage = new Storage(BOT_STORAGE_NAME)
var storageContent = controllers.storage.get(function(storageContent){
	if (storageContent){
		controllers.bot = storageContent
	} else { 
		controllers.bot = new Bot()
	}
	//It checks if the current page is a regular page game
	var regularPageId = document.getElementById("header")
	var isRegularPage = (regularPageId) && (regularPageId.innerHTML.indexOf('<a href="#">Hacker Experience</a>') >= 0)
	controllers.isRegularGamePage = false
	if (isRegularPage){ 
		controllers.isRegularGamePage = true
		
		functions()
		controlPanel()
		buttonToAction()
		botButton()

	}	
})
