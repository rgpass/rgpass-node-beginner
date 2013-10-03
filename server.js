// Require the http module which ships with Node
var http = require("http"); 
// Require the URL module. This allows you to determine
// the different parts of a URL -- i.e. separating req path
// and query string. Ex: path  query
// http://localhost:8888/start?foo=bar&hello=world
var url = require("url");

// Define a function start -- this is where we define what
// we want to be exported. We are creating a module to be
// called by another file. This allows us to easily organize
// our files, rather than having one large file.
function start(route, handle) {
// Define what to do on request. This is separated from the
// createServer function to allow for asyncronous callbacks
	function onRequest(request, response) {
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		route(handle, pathname, response, request);
	}

	// Call the http module function createServer which returns
	// an object with a method listen
	http.createServer(onRequest).listen(8888);

	console.log("Server has started.");
}

// Here we explicitly say which parts of this file can be
// called -- i.e. what we are exporting
exports.start = start;