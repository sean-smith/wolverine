// Sean Smith 2016
// Please Copy!


var flags = {
	urls: ["https://*.googleusercontent.com/proxy/*"]
};

// Correctly add a listener with a filter
chrome.webRequest.onBeforeRequest.addListener(function (blocked) {
	// alert(blocked.url);
	// Send a message to the content script
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {url: blocked.url}, function(response) {
			console.log(response.farewell);
		});
	});
	return {cancel: true};
},flags ,["blocking"]);



// Check url to see if it's gmail
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (~tab.url.indexOf('mail.google.com')) {
		chrome.pageAction.show(tabId);
	}
});