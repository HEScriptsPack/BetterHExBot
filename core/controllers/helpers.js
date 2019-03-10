function helpers() {
    function fixName() {
        var data = JSON.parse(sendXMLHttpRequest("/ajax.php", "POST", "func=getStatic", false)).msg
        var user = JSON.parse(data)[0].user
        if (document.getElementsByClassName("fa fa-inverse fa-user")[0].parentElement.innerText.indexOf(user) == -1) {
            document.getElementsByClassName("fa fa-inverse fa-user")[0].parentElement.innerText = " " + user
        }
    }

    function fixPasswordChanger() {
        if (window.location.origin.indexOf('br') > -1) {
            CHANGE_PASSWORD = "Alterar senha";
        } else {
            CHANGE_PASSWORD = "Change password";
        }
        $(".widget-box:contains('" + CHANGE_PASSWORD + "'):last form").attr("action", "reset");
        $(".widget-box:contains('" + CHANGE_PASSWORD + "'):last button").text(LANG.SEND);
        var inputs = $(".widget-box:contains('" + CHANGE_PASSWORD + "'):last .control-group");
        inputs[0].remove();
        inputs[1].remove();
        $(inputs[2]).find("input").attr("type", "email").attr("name", "email");
        $(inputs[2]).find(".control-label").text(LANG.INSERT_EMAIL);
    }

    function fixLanguageChanger() {
        if (window.origin.indexOf("br") > -1) {
            CHANGE_LANGUAGE = "Alterar linguagem"
        } else {
            CHANGE_LANGUAGE = "Change language"
        }
        var input = $(".widget-box:contains('" + CHANGE_LANGUAGE + "'):last .control-group .controls")[0];
        input.style.marginLeft = "100px";
    }

    function fixAccountDeleter() {
        if (window.origin.indexOf("br") > -1) {
            DELETE_ACCOUNT = "Deletar conta"
        } else {
            DELETE_ACCOUNT = "Delete account"
        }
        var input = $(".widget-box:contains('" + DELETE_ACCOUNT + "'):last .form-actions")[0];
        input.style.paddingLeft = "10px";
    }

    function sendDDoSNoVbrk() {
        var ddos_form = document.getElementsByClassName("ddos_form")[0]
        if (ddos_form.textContent.indexOf("DDoS Breaker") > -1) {
            ddos_form.getElementsByTagName("center")[0].remove()
            ddos_form.getElementsByTagName("script")[0].remove()
            if (window.origin.indexOf('br') > -1) {
                LAUNCH_DDOS = "LanĂ§ar DDoS"
            } else {
                LAUNCH_DDOS = "Launch DDoS"
            }
            ddos_form.innerHTML += `
<div class="control-group">
<div class="controls center">
<input type="submit" onClick="$(\"form.ddos_form\")[0].submit();" class="btn btn-danger" value="` + LAUNCH_DDOS + `">
</div>
</div>`
        }
    }

    fixName()
	if (controllers.bot.controlPanel.checkBoxes[SET_NAME_NOTIFICATION] == true && Notification.permission !== "denied" && Notification.permission !== "granted"){
		Notification.requestPermission().then(function (permission) {
			if (permission === "granted") {
				var notification = new Notification(LANG.NOTIFICATION_TITLE, {"icon": Monarchs_Image, "body": LANG.NOTIFICATION_BODY})
			}
			else {
				controllers.bot.controlPanel.checkBoxes[SET_NAME_NOTIFICATION] = false
			}
		})
	}
    if (window.location.pathname == '/settings') {
        fixPasswordChanger()
        fixLanguageChanger()
        fixAccountDeleter()
    }
    if (window.location.pathname == '/list' && window.location.search == "?action=ddos") {
        sendDDoSNoVbrk()
    }

    if (!controllers.bot.canHelp) {
        controllers.bot.canHelp = true
    }

}
