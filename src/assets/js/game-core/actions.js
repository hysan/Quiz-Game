/* For dynamic elements, we now need to use on() for the bindings to work:
http://stackoverflow.com/questions/203198/event-binding-on-dynamically-created-elements
http://stackoverflow.com/questions/15090942/jquery-on-method-not-working-on-dynamic-content
*/
$(document.body).on('click', 'a.question' ,function() {
//$("a.question").click(function(event) {
    points = parseInt($(this).text(), 10);

    /* Use this code to hide questions after being selected. */
    /* event.preventDefault(); /* not sure what this line does, but it was in the demo. works fine without the line. */
    /* $(this).hide("slow");
    $(this).parent().css('height', '46px'); */

    /* Use this code to change question colors and remove animations on hover.
    Can still click on them to redo the questions. */
    $(this).css('background-image', 'none');
    $(this).css('background-repeat', 'none');
    $(this).css('background-color', '#BD5BB8');
    $(this).css('border', '3px solid #FE2EF7');
    $(this).css('-webkit-box-shadow', 'none');
    $(this).css('-moz-box-shadow', 'none');
    $(this).css('box-shadow', 'none');
    $(this).css('-webkit-transition', 'none');
    $(this).css('-moz-transition', 'none');
    $(this).css('-ms-transition', 'none');
    $(this).css('-o-transition', 'none');
    $(this).css('transition', 'none');
    $(this).css('text-shadow', 'none');
});

$(document.body).on('click', 'button' ,function() {
//$("button").click(function(event) {
    updateScore($(this).attr("value"));
});

$(document.body).on('click', 'label.add' ,function() {
//$("label.add").click(function(event) {
    $(this).toggle("highlight", 10);
    $(this).toggle("highlight", {color: "#00FF00"}, 500);

    points = parseInt($(this).text(), 10);
    updateScore($(this).attr("value"));
});

$(document.body).on('click', 'label.subtract' ,function() {
//$("label.subtract").click(function(event) {
    $(this).toggle("highlight", 10);
    $(this).toggle("highlight", {color: "#FF0040"}, 500);

    points = parseInt($(this).text(), 10);
    updateScore($(this).attr("value"));
});

$(document.body).on('click', '#load-game' ,function() {
    $("div#setup-container").addClass('hide');
    // Show loading gif
    // Get input file value: http://stackoverflow.com/questions/740114/how-to-use-jquery-to-get-the-current-value-of-a-file-input-field
    loadGameData($("#gameFile").val());
    // Hide loading gif
    $("div#game-container").removeClass('hide');
});

$(document.body).on('click', '#generate-new-game' ,function() {
    if ($('#generate-new-game').text() == "New Game") {
        $('#generate-new-game').text("Update");

        var tmpElementString = "";
        // TODO: don't make this hardcoded for max category size
        for (i = 0; i < 6; i++) {
            tmpElementString += '<div class="span2 topic"><a href="#ceditor" data-toggle="modal" style="color: black; text-decoration: none;"><h2 id="category' + (i+1) + '">Edit</h2></a></div>';
        }
        $("div#new-game-board").append( $( '<div class="row text-center">' + tmpElementString + '</div>'));
    
        // TODO: get rid of hardcoded max questions and cats
        for (i = 0; i < 10; i++) {
            tmpElementString = "";
            for (j = 0; j < 6; j++) {
                tmpElementString += '<div id="question-' + (j+1) + '-' + (i+1) + '" class="span2"><span class="label label-info" style="font-size: 16px; line-height: 20px; vertical-align: middle; margin-right: 10px; padding: 10px; width: 70px;">New</span><a href="#qeditor" role="button" class="btn" data-toggle="modal">Edit</a></div>';
            }
            $("div#new-game-board").append( $( '<div class="row text-center">' + tmpElementString + '</div><br />'));
        }

    }

    // Now do the hiding and revealing of questions.
    // Reversed looping here because it's actually more efficient for handling the categories combined with the questions.
    $( "h2[id^='category']" ).removeClass("hide");
    $( "div[id^='question-']" ).removeClass("hide");
    for (j = 0; j < 6; j++) {
        if (j >= parseInt($("#categorySetup").val())) {
            $( 'h2#category' + (j+1) ).addClass("hide");
        }
        for (i = 0; i < 10; i++) {
            if ( (i >= parseInt($("#questionSetup").val())) || (j >= parseInt($("#categorySetup").val())) ) {
                $( 'div#question-' + (j+1) + '-' + (i+1) ).addClass("hide");
            }
        }
    }
});

$(document.body).on('click', '#save-new-game' ,function() {
    // TODO
    window.alert("save the game");
});

// Match all ids starting with x: http://api.jquery.com/attribute-starts-with-selector/
$(document.body).on('click', "h2[id^='category']" ,function() {
    $( "#ceditorHeader" ).text($(this).attr('id'))
});

$(document.body).on('click', "div[id^='question-']" ,function() {
    $( "#qeditorHeader" ).text($(this).attr('id'))
});