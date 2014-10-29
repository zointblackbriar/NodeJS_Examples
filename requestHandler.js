/**
 * Created by Orçun on 29.10.2014.
 */
function start() {
    console.log("\n Request handler start was called");
    return "Hello Start";
}

function upload(){
    console.log("\nRequest handler upload was called");
    return "Hello Upload";
}

exports.start = start;
exports.upload = upload;