// Calls the server.js file
var server = require("./server");
// Calls the router.js file
var router = require("./router");
// Calls the requestHandlers.js file
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

// Executes the start function in server.js and passes
// the router information as the parameter
server.start(router.route, handle);