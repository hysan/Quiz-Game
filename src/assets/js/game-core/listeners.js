
/*****************************************************************************/
/* This code listens for files that are picked by the browse button.
 * It then reads the file and puts the contents into a hidden textarea
 * with the id "gameData". This code isn't needed for anything now but 
 * is being experimentally tested to test alternative ways to load game
 * data as well as ways to save custom game data to disk.
 * ***************************************************************************/
/*  Special File Upload Scripts 
    http://stackoverflow.com/questions/21078905/parse-a-local-file-to-an-array-using-javascript
    http://jsfiddle.net/uTST5/1/
*/
var upl = document.getElementById('gameFile');
upl.addEventListener('change', eventHandler);

addEventListener('dragover', function(e){e.preventDefault();});
addEventListener('drop', function(e) {
    eventHandler.call((e.dataTransfer||e.clipboardData));
    e.preventDefault();
});

function eventHandler() {
    var file = this.files[0];
    var reader = new FileReader();
    reader.onloadend = callbackFn;
    reader.readAsText(file);
    if (this.id) { //only run if this is the input
        var id = this.id;
        // this.outerHTML = this.outerHTML; //this resets the input
        document.getElementById(id).addEventListener('change', eventHandler);
    }
}
function callbackFn(e) {
    document.getElementById('gameData').value = e.target.result;
}
/*****************************************************************************/
