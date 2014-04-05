/*  Code to handle loading external resources when running node-webkit as a
    packaged application. Context is changed in such a case for where the 
    app thinks it is running.
    The check that worked is this: http://stackoverflow.com/questions/13726877/target-node-webkit-browser-using-jquery
    What did not work was this check: typeof exports !== 'undefined' && this.exports !== exports
    that is supposed to tell if you are running a node.js module in the
    server or client, which is pretty telling as that means node-webkit is
    running in the server context: http://timetler.com/2012/10/13/environment-detection-in-javascript/
    These are other relevant discussions that center on this issue:
    https://groups.google.com/forum/#!topic/node-webkit/A6F-cBKW6Es
    https://groups.google.com/forum/#!topic/node-webkit/jdm-dtRdvAQ
    http://stackoverflow.com/questions/21746570/requiring-running-javascript-outside-of-node-webkit-application
    https://groups.google.com/forum/#!topic/node-webkit/IwGzluFC9iU/discussion
*/
var pathstr = '';
var isNodeWebkit = false;

if (typeof process == "object") {
    var isNodeWebkit = true;
    console.log("I'm in node-webkit.");
    console.log("node-webkit version " + process.versions['node-webkit']);
    var path = require("path");
    pathstr = path.dirname(process.execPath); 
    console.log("pathstr = " + pathstr);
    pathstr += '/';
} else {
    console.log("I'm not node-webkit.");
}

/* Global Variables (some basic default values)
These will all be replaced when the global quiz data script is loaded. */
var numberOfTeams = 6;
var gameName = "Jeopardy!";
var categoryNames = [];
var questionsPerCategory = 7;
var questionJSON = {};

