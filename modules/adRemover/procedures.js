var adRemover = $jSpaghetti.module("adRemover")
adRemover.config.debugMode = false

adRemover.procedure("removeAds", function () {
    function removeInsTags() {
        var adTags = document.getElementsByTagName("ins")
        if (adTags) {
            for (var i = 0; i < adTags.length; i++) {
                adTags[i].style.display = "none"
                adTags[i].innerHTML = ""
            }
        }
    }

    function removeHE2Message() {
        var message = document.getElementById("he2")
        if (message !== null) {
            message.remove()
        }
    }

    removeHE2Message()
    removeInsTags()
    setInterval(function () {
        removeInsTags()
    }, 300)
})