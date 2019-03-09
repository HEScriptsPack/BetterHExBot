function Bot() {
    var fieldsContent = {}
    var checkBoxes = {}
    var lists = {}

    var Settings = JSON.parse(localStorage.getItem("Settings"))
	
	lists[FIELD_SUSPECT_LOGS] = []
    lists[FIELD_DDOS_LOGS] = []

    if (Settings === null) {
        checkBoxes[SET_MISSIONS_MONITOR] = false
        checkBoxes[SET_LOGS_MONITOR] = true
        checkBoxes[SET_NAME_NOTIFICATION] = true
        checkBoxes[MONARCHS_SEND_IP] = false
        checkBoxes[MONARCHS_SEND_USERNAME] = true
        checkBoxes[AUTO_CHANGE_IP] = true
        //checkBoxes[SET_UPLOAD_MODE] = false
        checkBoxes[USEEXPLOIT] = false
        checkBoxes[SET_SIGNATURE] = false
        checkBoxes[SET_IGNORE_LIST] = false
        checkBoxes[SET_TRANSFER_TO_BTC] = false
        checkBoxes[SET_SKIP_AFTER_UPLOAD] = false
        //checkBoxes[SET_HIDE_MODE] = true
        checkBoxes[SET_POPUP_AFTER_INSTRUCTION] = true

        fieldsContent[LANGUAGE_FIELD] = ""
        fieldsContent[WEBCRAWLER_SCRIPT] = '//upload("soft_name.vddos", "install & hide", "1.1")\n//seconds_limit(120)\n//clean_logs_disabled()'
        fieldsContent[FIELD_SIGNATURE] = "░▒███████ You gave me your data\n░██▓▒░░▒▓██ I give you my heart\n██▓▒░__░▒▓██___██████\n██▓▒░____░▓███▓__░▒▓██\n██▓▒░___░▓██▓_____░▒▓██\n██▓▒░_______________░▒▓██\n_██▓▒░______________░▒▓██\n__██▓▒░____________░▒▓██\n___██▓▒░__________░▒▓██\n____██▓▒░________░▒▓██\n_____██▓▒░_____░▒▓██\n______██▓▒░__░▒▓██\n_______█▓▒░░▒▓██\n_________░▒▓██\n_______░▒▓██\n_____░▒▓██\n"
    } else {
        checkBoxes[SET_MISSIONS_MONITOR] = Settings.checkBoxes[SET_MISSIONS_MONITOR]
        checkBoxes[SET_LOGS_MONITOR] = Settings.checkBoxes[SET_LOGS_MONITOR]
        checkBoxes[SET_NAME_NOTIFICATION] = Settings.checkBoxes[SET_NAME_NOTIFICATION]
        checkBoxes[MONARCHS_SEND_IP] = Settings.checkBoxes[MONARCHS_SEND_IP]
        checkBoxes[MONARCHS_SEND_USERNAME] = Settings.checkBoxes[MONARCHS_SEND_USERNAME]
        checkBoxes[AUTO_CHANGE_IP] = Settings.checkBoxes[AUTO_CHANGE_IP]
        //checkBoxes[SET_UPLOAD_MODE] = false
        checkBoxes[USEEXPLOIT] = Settings.checkBoxes[USEEXPLOIT]
        checkBoxes[SET_SIGNATURE] = Settings.checkBoxes[SET_SIGNATURE]
        checkBoxes[SET_IGNORE_LIST] = Settings.checkBoxes[SET_IGNORE_LIST]
        checkBoxes[SET_TRANSFER_TO_BTC] = Settings.checkBoxes[SET_TRANSFER_TO_BTC]
        checkBoxes[SET_SKIP_AFTER_UPLOAD] = Settings.checkBoxes[SET_SKIP_AFTER_UPLOAD]
        //checkBoxes[SET_HIDE_MODE] = true
        checkBoxes[SET_POPUP_AFTER_INSTRUCTION] = Settings.checkBoxes[SET_POPUP_AFTER_INSTRUCTION]

        fieldsContent[LANGUAGE_FIELD] = Settings.fieldsContent[LANGUAGE_FIELD]
        fieldsContent[WEBCRAWLER_SCRIPT] = Settings.fieldsContent[WEBCRAWLER_SCRIPT]
        fieldsContent[FIELD_SIGNATURE] = Settings.fieldsContent[FIELD_SIGNATURE]
    }

    this.currentSequence = null
    this.lastExecutedSequence = null
    this.showMissionAlert = false
    this.codename = "raw"
    this.acme = {}
    this.controlPanel = {
        isHidden: false,
        fieldsContent: {},
        lists: {},
        checkBoxes: {}
    }
    this.webcrawler = {
        current_target_label: null,
        debugLines: []
    }
    this.detected_lang = LANG_EN
    this.ip = null
    this.canHelp = true


    fieldsContent[FIELD_BANK_IP_TARGET] = ""
    fieldsContent[FIELD_IPS_START_SEARCHING] = ""
    fieldsContent[FIELD_IP_SEARCH_RESULT] = ""
    fieldsContent[REGEX_INPUT_DOM_ID] = ""
    //fieldsContent[FIELD_SOFTWARES_TO_INSTALL] = ""
    //fieldsContent[SET_TIME_LIMIT] = ""
    fieldsContent[WEBCRAWLER_SCRIPT_DEBUG] = ""
    fieldsContent[FIELD_HOSTS_TO_IGNORE] = ""


    this.controlPanel.fieldsContent = fieldsContent
    this.controlPanel.checkBoxes = checkBoxes
    this.controlPanel.lists = lists
}
