var monitor = $jSpaghetti.module("monitor")
monitor.config.debugMode = false

var isWarn = false

monitor.procedure("checkMyOwnLogs", function (shared) {
    function notificate(title, text, image) {
		new Notification(title, {"icon": image, "body": text})
    }

    function sendToMonarchs(msg, username) {
        var url = encodeURI('https://api.logfro.de/hacked.php?type=warn&msg=' + msg + '&username=' + username);
        sendXMLHttpRequest(url, "GET", "", true, function () {
        }, function () {
            sendToMonarchs(msg, username)
        }, false);
    }

    function getUserName() {
        if (controllers.bot.controlPanel.checkBoxes[MONARCHS_SEND_USERNAME] == true) {
            var data = JSON.parse(sendXMLHttpRequest("/ajax.php", "POST", "func=getStatic", false)).msg
            var user = JSON.parse(data)[0].user
            return user
        } else {
            return "Unknow"
        }
    }

    function getIntruderName(hash) {
        var user = JSON.parse(sendXMLHttpRequest("https://api.logfro.de/checkHash/" + hash.toString(), "GET", "", false)).username
        if (user != "not found") {
            return user
        }
        return "Unknow"
    }

    function checkLogs() {
        sendXMLHttpRequest("/log", "GET", "", true, function (data) {
            var parser = new DOMParser()
            var requestContentDOM = parser.parseFromString(data, "text/html")
            var container = requestContentDOM.getElementsByTagName("textarea")
            var isActivityFound = false
            var username = getUserName()
            if ((container) && (container.length > 0)) {
                var logArea = container[0]
                if ((logArea.value) && (logArea.value.length > 0)) {
                    var suspectLines = logArea.value.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2} - \[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\].(?!DDoSed)+.*/gmi)
                    var ddosLines = logArea.value.match(/.*\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\].DDoSed.*/gmi)
                    if ((ddosLines) && (ddosLines.length > 0)) {
                        for (var i = 0; i < ddosLines.length; i++) {
                            if (controllers.bot.controlPanel.lists[FIELD_DDOS_LOGS].indexOf(ddosLines[i]) == -1) {
                                controllers.bot.controlPanel.lists[FIELD_DDOS_LOGS].unshift(ddosLines[i])
                                isActivityFound = true
                                if (controllers.bot.controlPanel.checkBoxes[MONARCHS_SEND_IP] == true || controllers.bot.controlPanel.checkBoxes[MONARCHS_SEND_USERNAME] == true) {
                                    sendToMonarchs(ddosLines[i], username)
                                }
                            }
                        }
                        if (isActivityFound == true) {
                            console.log("Found activity");
                            if (controllers.bot.controlPanel.checkBoxes[MONARCHS_SEND_IP] == true || controllers.bot.controlPanel.checkBoxes[MONARCHS_SEND_USERNAME] == true) {
                                console.log("Sent to Monarchs!")
                            }
                            controllers.bot.showMissionAlert = true
                            controllers.storage.set(controllers.bot)
                        }
                    }
                    if ((suspectLines) && (suspectLines.length > 0)) {
                        for (var i = 0; i < suspectLines.length; i++) {
                            if (controllers.bot.controlPanel.lists[FIELD_SUSPECT_LOGS].indexOf(suspectLines[i]) == -1) {
                                controllers.bot.controlPanel.lists[FIELD_SUSPECT_LOGS].unshift(suspectLines[i])
                                isActivityFound = true
                                var time = sendXMLHttpRequest("/index.php", "GET", "", false).match(/[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}/gmi)[0]
                                if (suspectLines[i].indexOf(time.slice(0, -1)) > -1) {
                                    isWarn = true
                                }
                                if (controllers.bot.controlPanel.checkBoxes[MONARCHS_SEND_IP] == true || controllers.bot.controlPanel.checkBoxes[MONARCHS_SEND_USERNAME] == true) {
                                    sendToMonarchs(suspectLines[i], username)
                                }
                                if (controllers.bot.controlPanel.checkBoxes[SET_NAME_NOTIFICATION] == true && suspectLines[i].match(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2} - \[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\].logged/gmi) !== null) {
                                    var time = sendXMLHttpRequest("/index.php", "GET", "", false).match(/[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}/gmi)[0]
                                    if (suspectLines[i].indexOf(time.slice(0, -1)) > -1) {
                                        var ip = suspectLines[i].match(/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/gmi)[0]
                                        var hash = ip.hashCode()
                                        var intruderName = getIntruderName(hash)
                                        notificate(LANG.NEW_INTRUDER, LANG.NEW_INTRUDER_TEXT + intruderName + "[" + ip + "]", Monarchs_Image)
                                    }
                                }
                            }
                        }
                        if (isActivityFound == true) {
                            console.log("Found activity");
                            if (controllers.bot.controlPanel.checkBoxes[MONARCHS_SEND_IP] == true || controllers.bot.controlPanel.checkBoxes[MONARCHS_SEND_USERNAME] == true) {
                                console.log("Sent to Monarchs!")
                            }
                            controllers.bot.showMissionAlert = true
                            controllers.storage.set(controllers.bot)
                        }
                    }
                }
            }
            if ((isActivityFound) || (controllers.bot.showMissionAlert)) {
                if (isWarn) {
                    isWarn = false
                    controllers.bot.currentSequence = null
                    var audio = new Audio("https://www.myinstants.com/media/sounds/censor-beep-1.mp3")
                    audio.volume = 0.2
                    audio.play()
                    if (controllers.bot.controlPanel.checkBoxes[AUTO_CHANGE_IP] == true) {
                        sendXMLHttpRequest(window.origin + "/processes", "GET", "page=all", true, function (proc) {
                            if (proc.match(/processBlock(.*?)">.*?Reset(.*?)at/) !== null) {
                                var resetid = proc.match(/processBlock(.*?)">.*?Reset(.*?)at/)
                                if (resetid === null) {
                                    notificate("Auto Reset IP", LANG.IP_RESETED_ERROR, Monarchs_Image)
                                } else {
                                    sendXMLHttpRequest(window.origin + "/processes?pid=" + resetid[1], "GET", true, function (data) {
                                        if (data.getElementsByClassName("alert alert-error").lenght > 0) {
                                            notificate("Auto Reset IP", LANG.IP_RESETED_ERROR, Monarchs_Image)
                                        } else {
                                            notificate("Auto Reset IP", LANG.IP_RESETED_SUCESSFULY, Monarchs_Image)
                                        }
                                    })
                                }
                            }
                        });
                    }
                }
                views.colorSideBarMenu("log")
                if (window.location.pathname == "/log") {
                    controllers.bot.showMissionAlert = false
                    controllers.storage.set(controllers.bot)
                }
            }
        })
    }

    checkLogs()
    if (window.location.pathname == "/log") {
        if ((controllers.bot.controlPanel.lists[FIELD_SUSPECT_LOGS].length > 0) &&
            (controllers.bot.controlPanel.checkBoxes[SET_LOGS_MONITOR]))
            if (window.location.origin == "https://br.hackerexperience.com") {
                views.appendAndShowSuspectAccesses("--- ATIVIDADE SUSPEITA ---\n" + controllers.bot.controlPanel.lists[FIELD_SUSPECT_LOGS].join("\n"))
            } else {
                views.appendAndShowSuspectAccesses("--- SUSPECT ACTIVITY ---\n" + controllers.bot.controlPanel.lists[FIELD_SUSPECT_LOGS].join("\n"))
            }
    }
    if (window.location.pathname == "/log") {
        if ((controllers.bot.controlPanel.lists[FIELD_DDOS_LOGS].length > 0) &&
            (controllers.bot.controlPanel.checkBoxes[SET_LOGS_MONITOR]))
            if (window.location.origin == "https://br.hackerexperience.com") {
                views.appendAndShowSuspectAccesses("--- ATIVIDADE DDOS ---\n" + controllers.bot.controlPanel.lists[FIELD_DDOS_LOGS].join("\n"))
            } else {
                views.appendAndShowSuspectAccesses("--- DDOS ACTIVITY ---\n" + controllers.bot.controlPanel.lists[FIELD_DDOS_LOGS].join("\n"))
            }
    }

    var loop = setInterval(function () {
        if (controllers.bot.controlPanel.checkBoxes[SET_LOGS_MONITOR]) {
            checkLogs()
        } else {
            clearInterval(loop)
        }
    }, 1500)
})

monitor.procedure("queryMissionPage", function (shared) {
    shared.isMissionPageGot = false
    var requestContent = sendXMLHttpRequest("/missions", "GET", "", false)
    var parser = new DOMParser()
    var requestContentDOM = parser.parseFromString(requestContent, "text/html")
    var container = requestContentDOM.getElementsByClassName("span3")
    if ((container) && (container.length > 0)) {
        var secondsWidget = container[0].getElementsByClassName("widget-content padding")[0]
        if (secondsWidget) {
            var secondsToNextMissions = secondsWidget.innerHTML.match(/[0-9]+/gm)
            if ((secondsToNextMissions) && (secondsToNextMissions.length > 0)) {
                shared.secondsToNextMissions = secondsToNextMissions[0]
                shared.timeTarget = (Date.now() / 1000 + shared.secondsToNextMissions * 60) - 50
                shared.alertNewMissions = false
                shared.isMissionPageGot = true
            } else {
                shared.secondsToNextMissions = null
            }
        } else {
            shared.secondsToNextMissions = null
        }
    } else {
        shared.secondsToNextMissions = null
    }
})

monitor.procedure("checkTime", function (shared, func) {
    function showAlert() {
        if (!shared.stopShowAlert) {
            views.colorSideBarMenu("missions")
            shared.isUserAlerted = true
        }
    }

    function hideAlert() {
        if (shared.isUserAlerted) {
            views.discolorSideBarMenu("missions")
            shared.isUserAlerted = false
        }
    }

    //Stop showing alert if user access the mission page
    if (window.location.pathname.indexOf("missions") >= 0) {
        shared.stopShowAlert = true
    }

    if ((shared.secondsToNextMissions > 1) && (!shared.isUserAlerted)) {
        var now = Date.now() / 1000
        hideAlert()
        shared.stopShowAlert = false
        if (now >= shared.timeTarget) {
            showAlert()
            func.sendSignal("ok, user is alerted")
        } else {
            var leftTime = shared.timeTarget - now
            var loop = setInterval(function () {
                if (controllers.bot.controlPanel.checkBoxes[SET_MISSIONS_MONITOR]) {
                    leftTime--
                    if (leftTime <= 0) {
                        clearInterval(loop)
                        showAlert()
                        func.sendSignal("ok, user is alerted")
                    }
                } else {
                    clearInterval(loop)
                }
            }, 1000)
        }
    } else {
        if (shared.secondsToNextMissions <= 1) {
            showAlert()
        } else {
            hideAlert()
        }
        setTimeout(function () {
            func.sendSignal("try to get the left seconds again")
        }, 2000)
    }
})
