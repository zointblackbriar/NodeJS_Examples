/**
 * Created by Orçun on 29.10.2014.
 */
function route(handle, pathName) {
    console.log("\nYou are about routing some stuff" + pathName);
    if(typeof handle[pathName] === 'function') {
        handle[pathName]();
    } else {
        console.log("\nNo request handler found for " + pathName);
        return "404 Not Found";
    }
}

exports.route = route;