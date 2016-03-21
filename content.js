// Sean Smith 2016
// Please Copy!

// Mark the message as unread
function insert_eye(url) {
	// alert("inserting image");
	$("img[src$='" + url + "']").replaceWith("<img id='all_seeing_eye' src='"+chrome.extension.getURL('images/eye_48x48.png')+"' title='Blocked Read receipt.' data-url='"+url+"'><p>Blocked Read Receipt.</p>");
	$("img#all_seeing_eye").click(function (){
		var url = $(this).attr("data-url");
		$.get(url, function (data) {
			$(this).replaceWith("<img src='"+chrome.extension.getURL('images/open_eye_48x48.png')+"' title='Sent Read receipt.' data-url='"+url+"'><p>Sent Read Receipt.</p>");
  			alert("Replaced eye");	
		});
	});
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	insert_eye(request.url);
	sendResponse({farewell: "goodbye"});
});

