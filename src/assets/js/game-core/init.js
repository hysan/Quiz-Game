// This also works with:
// window.onload = function() {
$( document ).ready(function() {
    hideGameComponents();
    if (isNodeWebkit) {
        // Listen to the minimize event
        win.on('minimize', function() {
            console.log('Window is minimized');
        });
        
        // Start maximized
        win.maximize();
    }
});
