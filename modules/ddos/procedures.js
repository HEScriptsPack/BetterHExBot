var ddos = $jSpaghetti.module("ddos")
ddos.config.debugMode = true

ddos.procedure("goToSoftwarePage", function () {
    if (window.location.pathname != "/software" || (window.location.pathname == "/software" && window.location.search != "")) {
        goToPage("/software")
    }
})

ddos.procedure("deleteRelatory", function () {
    var elms = $(".link.delete-ddos");
    if (elms.length > 0) {
        var Rate = elms[0];
        Rate.click();
        setTimeout(function () {
            document.getElementById("modal-form").submit();
        }, 1000);
    }
})