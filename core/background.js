/*
	@prototype: sendXMLHttpRequest(script_target, method, parameters, isAsynchronous, function_callback, sendXRequestedWithHeader)
	@definition: This function sends a AJAX request to the server
	@author: GRSa
	@parameters: 
		*script_target (String): The server-side script (e.g. "riddle.php")
		*method (String): GET or POST
		*parameters (String): The string containing the parameters message or something (e.g. "foo=bar&baz=qux")
		*isAsynchronous (boolean) True if request is asynchronous or false if request is synchronous
		*function_callback (Function) It is ignorable if the request is synchronous. The function that must be executed after server response. This callback function receives the server response. The response content can be accessed from arguments[0] variable inside the callback function.
		*sendXRequestedWithHeader (boolean) True if X-Requested-With header must be sent
	@return: It returns an object {response: "response of the synchronous request (or null)", xmlhttp: "xmlhttp objectss"} 
*/
function sendXMLHttpRequestMod(script_target, method, parameters, isAsynchronous, function_callback, sendXRequestedWithHeader) {
    var xmlhttp = new XMLHttpRequest()
    var synchronousResponse = null
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var result = xmlhttp.responseText
            if (isAsynchronous) {
                function_callback(result)
            } else {
                synchronousResponse = result
            }
        }
    }
    switch (method) {
        case "POST":
            xmlhttp.open("POST", script_target, isAsynchronous)
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8")
            xmlhttp.setRequestHeader("Accept", "*/*")
            if (sendXRequestedWithHeader)
                xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest")
            xmlhttp.send(parameters)
            break
        case "GET":
            xmlhttp.open("GET", script_target + "?" + parameters, isAsynchronous)
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8")
            xmlhttp.setRequestHeader("Accept", "*/*")
            if (sendXRequestedWithHeader)
                xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest")
            xmlhttp.send()
            break
        default:
            break
    }
    return {response: synchronousResponse, xmlhttp: xmlhttp}
}

var storage = []

//It sends messages to content script
function respond(request, tabId) {
    chrome.tabs.sendMessage(tabId, {message: request}, function (response) {
        console.log(response.backMessage)
    })
}

//It process requests comming from content script
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        var request = request.message
        switch (request.action) {
            case "get":
                sendResponse({backMessage: "GET request received by background script"})
                respond(storage[String(request.item + ":" + sender.tab.id)], sender.tab.id)
                console.log("GET request processed. Data sent (\"" + request.item + "\")", storage[request.item])
                break
            case "set":
                sendResponse({backMessage: "SET request received by background script"})
                storage[String(request.item + ":" + sender.tab.id)] = request.data
                console.log("SET request processed. Data stored (\"" + request.item + "\")")
                break
            case "reset":
                sendResponse({backMessage: "RESET request received by background script"})
                storage[String(request.item + ":" + sender.tab.id)] = null
                console.log("RESET request processed. Item removed (\"" + request.item + "\")")
                break
            default:
                break
        }
    }
)
