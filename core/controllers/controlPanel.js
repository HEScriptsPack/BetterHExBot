function controlPanel(){

	if (!controllers.bot.controlPanel.fieldsContent[LANGUAGE_FIELD].length){
		controllers.bot.controlPanel.fieldsContent[LANGUAGE_FIELD] = detectLang()
		controllers.storage.set(controllers.bot)
		DETECTED_LANG = detectLang();
		if (!DETECTED_LANG) DETECTED_LANG = LANG_EN;
	} else {
		DETECTED_LANG = controllers.bot.controlPanel.fieldsContent[LANGUAGE_FIELD]
	}
	LANG = LANG_CONTENT[DETECTED_LANG];

	views.appendControlPanel()

	enableTab(WEBCRAWLER_SCRIPT)

	if (controllers.bot.controlPanel.isHidden){
		views.hideControlPanel()
	} else {
		views.switchToMainScreen()
		views.showControlPanel()
	}

	for(fieldId in controllers.bot.controlPanel.fieldsContent){
		if (document.getElementById(fieldId) === null){
			console.log(fieldId)
		}
		else{
			document.getElementById(fieldId).value = controllers.bot.controlPanel.fieldsContent[fieldId]
		}
	}

	for(checkBoxId in controllers.bot.controlPanel.checkBoxes){
		if(controllers.bot.controlPanel.checkBoxes[checkBoxId]){
			document.getElementById(checkBoxId).checked = true
		} else {
			document.getElementById(checkBoxId).checked = false
		}
	}

	var ipSearchResult = document.getElementById(FIELD_IP_SEARCH_RESULT)
	var regexFilter = document.getElementById(REGEX_INPUT_DOM_ID)
	if (ipSearchResult.value != ""){
		ipSearchResult.style.display = "block"
		regexFilter.style.display = "block"
	} else {
		ipSearchResult.style.display = "none"
		regexFilter.style.display = "none"
	}

	var customScriptDebug = document.getElementById(WEBCRAWLER_SCRIPT_DEBUG)
	if(customScriptDebug.value != "")
		customScriptDebug.style.display = "block"
	else
		customScriptDebug.style.display = "none"

	controllers.functions.filterCrawlerOutput(regexFilter.value)
	regexFilter.addEventListener("change", function(){
		controllers.functions.filterCrawlerOutput(regexFilter.value)
	})

	var fieldsContent = document.getElementsByClassName("fieldsContent")
	for (var i = 0; i < fieldsContent.length; i++) {
		fieldsContent[i].addEventListener("change", function(){
			controllers.bot.controlPanel.fieldsContent[this.id] = this.value
			controllers.storage.set(controllers.bot)
		})
	}

	/*var uploadModeCheckbox = document.getElementById(SET_UPLOAD_MODE)
	controllers.functions.checkUploadSoftwareFields()
	uploadModeCheckbox.addEventListener("click", function(){
		controllers.functions.checkUploadSoftwareFields()
	})*/

	var ignoreListCheckbox = document.getElementById(SET_IGNORE_LIST)
	controllers.functions.checkIgnoreIPsField()
	ignoreListCheckbox.addEventListener("click", function(){
		controllers.functions.checkIgnoreIPsField()
	})

	var signatureCheckbox = document.getElementById(SET_SIGNATURE)
	controllers.functions.checkSignatureField()
	signatureCheckbox.addEventListener("click", function(){
		controllers.functions.checkSignatureField()
	})

	var checkBoxes = document.getElementsByClassName("checkBoxes")
	for (var i = 0; i < checkBoxes.length; i++) {
		checkBoxes[i].addEventListener("change", function(){
			if(this.checked){
				controllers.bot.controlPanel.checkBoxes[this.id] = true
				switch(this.id){
					case SET_LOGS_MONITOR:
						$jSpaghetti.module("monitor").sequence("checkMyOwnLogs").run()
						console.log("HExBot: Logs monitor is started")
						break
					case SET_MISSIONS_MONITOR:
						$jSpaghetti.module("monitor").sequence("checkMission").run()
						console.log("HExBot: Missions monitor is started")
						break
					default: break
				}
			} else {
				controllers.bot.controlPanel.checkBoxes[this.id] = false
				switch(this.id){
					case SET_LOGS_MONITOR:
						$jSpaghetti.module("monitor").sequence("checkMyOwnLogs").reset()
						console.log("HExBot: Logs monitor is stopped")
						break
					case SET_MISSIONS_MONITOR:
						$jSpaghetti.module("monitor").sequence("checkMission").reset()
						console.log("HExBot: Missions monitor id stopped")
						break
					default: break
				}
			}
			controllers.storage.set(controllers.bot)
		})
	}

	//Hide command panel if close button is pressed
	document.getElementById(COMMAND_PANEL_CLOSE_BUTTON_DOM_ID).addEventListener("click", function(){
		controllers.functions.hidePanel()
	})

	controllers.functions.activeButtons(false)
}
	