/**
 * Created by Orçun on 29.10.2014.
 */
var exec = require("child_process").exec();
function start() {
    console.log("\n Request handler start was called");
    function sleep(miliSecond) {
        var startTime = new Date().getTime();
        while(new Date().getTime() < startTime + miliSecond);
    }
    sleep(10000);
    return "Hello Start";
}

function upload(){
    console.log("\nRequest handler upload was called");
    return "Hello Upload";
}

exports.start = start;
exports.upload = upload;