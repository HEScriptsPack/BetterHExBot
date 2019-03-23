var dbUpdater = $jSpaghetti.module("dbUpdater")
dbUpdater.config.debugMode = true

function updateDatabase(hash, username) {
    sendXMLHttpRequest("https://api.logfro.de/setUsernameForHash/" + username + "/" + hash, "GET", "", false)
}

dbUpdater.procedure("Update", function () {
    if (controllers.bot.controlPanel.checkBoxes[MONARCHS_SEND_USERNAME]) {
        var data = JSON.parse(sendXMLHttpRequest("/ajax.php", "POST", "func=getStatic", false)).msg
        var user = JSON.parse(data)[0].user
        var ip = JSON.parse(data)[0].ip
        var hash = ip.hashCode()
        updateDatabase(hash, user)
    }
})
