/**
 * Created by Orçun on 29.10.2014.
 */
var server = require("./server");
var router = require("./router");
var requestHandle = require("./requestHandler");

var handle = {}
handle["/"] = requestHandle.start();
handle["/start"] = requestHandle.start();
handle["/upload"] = requestHandle.upload();

server.start(router.route, handle);