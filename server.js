/**
 * Created by Orçun on 13.10.2014.
 */
var http = require("http");
var url = require("url");

//http.createServer(function(req, res) {
//    res.writeHead(200, {"Content-type" : "text/plain"});
//    res.write("Mission accomplished");
//    res.end();
//}).listen(8888);

function start(route,handle) {
function onRequest(request, response) {
    console.log("\nRequest received");
    var pathName =  url.parse(request.url);
    console.log("Object is->" + JSON.stringify(pathName));
    console.log("Request for " + pathName + "received");
    var content = route(handle,pathName);

    response.writeHead(200, {"Content-type" : "text/plain"});
    response.write(content);
    response.end();
}

http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}

//function say(word) {
//    console.log("Word is :" + word);
//}
//
//function execute(someFunction, value) {
//    someFunction(value);
//}
//
//execute(say, "hello");

exports.start = start;