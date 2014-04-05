function createScoreTable () {
    for (var i = 0; i < numberOfTeams; i++) {
        $( "tr#teams" ).append( $( '<th>Team ' + (i+1) + '</th>' ) );
        $( "tr#scores" ).append( $( '<td id="team-' + (i+1) + '-score">0</td>' ) );
        $( "tr#controls" ).append( $( '<td> \
                <label value="team-' + (i+1) + '-score" class="btn points add">+100</label> \
                <label value="team-' + (i+1) + '-score" class="btn points subtract">-100</label> \
            </td>' ) );
    }
}

function createGameGrid () {
    var numberOfCategories = categoryNames.length;
    var questionButtons = "";
    for (var i = 0; i < numberOfCategories; i++) {
        $( "div#category-headings" ).append( $( '<div class="span2 topic"><h2>' + categoryNames[i] + '</h2></div>' ) );
    }
    for (var i = 0; i < questionsPerCategory; i++) {
        questionButtons = "";
        for (var j = 0; j < numberOfCategories; j++) {
            questionButtons += '<div class="span2 category' + (j+1) + '"><a href="#modalC' + (j+1) + 'Q' + (i+1) + '" role="button" class="btn question" data-toggle="modal">' + (i+1) + '00</a></div>'
        }
        $( "div#game-grid" ).append( $( '<div class="row show-grid">' + questionButtons + '</div>' ) );
    }
}
    
function createModalButtons () {
    /* Original Style
    var modalButtons = "";
    for (var i = 0; i < numberOfTeams; i++) {
        modalButtons += '<button class="btn" data-dismiss="modal" aria-hidden="true" value="team-' + (i+1) + '-score">Team ' + (i+1) + '</button>';
    }
    modalButtons += '<button class="btn btn-primary" data-dismiss="modal" value="no-score">Nobody</button>';            
    */
    /* New Table Style */
    var modalButtons = '<table style="width: 100%"><tbody><tr>';
    var perRowLimit = 7; // TODO: hardcoded until I find time to dynamically change the width of the button elements here
    /* Perhaps using something like this:
    var btnWidth = (940 - (10 * numberOfTeams)) / numberOfTeams;
    $('.modal-footer button').css({ width: btnWidth + 'px' });
    */
    var rowCounter = 0;
    for (var i = 0; i < numberOfTeams; i++) {
        if (i % perRowLimit == 0) {
            modalButtons += '</tr><tr>';
        }
        modalButtons += '<td><button class="btn" data-dismiss="modal" aria-hidden="true" value="team-' + (i+1) + '-score">Team ' + (i+1) + '</button></td>';
    }
    if (numberOfTeams % perRowLimit == 0) {
        modalButtons += '</tr><tr>';
    }
    modalButtons += '<td><button class="btn btn-primary" data-dismiss="modal" value="no-score">Nobody</button></td></tr></tbody></table>';
    
    return modalButtons;
}

// TODO: use cannonical names for category titles on the questions
function createQuestionModals (modalButtonElements) {
    var categoryName = "";
    var categoryVideoBonus = "Surprise Video Question!";
    var question = "";
    var hint = "";
    var answer = "";
    var list = "";
    var videoBonus = false;
    var videoNames = [];
    for (var i = 0; i < questionJSON.categories.length; i++) {
        categoryName = questionJSON.categories[i].category;
        for (var j = 0; j < questionJSON.categories[i].questions.length; j++) {
            question = questionJSON.categories[i].questions[j].question;
            hint = questionJSON.categories[i].questions[j].hint;
            answer = questionJSON.categories[i].questions[j].answer;
            videoBonus = questionJSON.categories[i].questions[j].videoBonus;

            if (videoBonus) {
                videoNames.push(videoBonus);
            }
            $( "div#modalData" ).append( $( '<div id="modalC' + (i+1) + 'Q' + (j+1) + '" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="modalLabelC' + (i+1) + 'Q' + (j+1) + '" aria-hidden="true"> \
                    <div class="modal-header"> \
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> \
                        <h3 id="modalLabelC' + (i+1) + 'Q' + (j+1) + '">' + (videoBonus ? categoryVideoBonus : categoryName) + '</h3> \
                    </div> \
                    <div class="modal-body"> \
                        <p>' + (videoBonus ? '<p>What movie is this from?</p><div id="video' + videoNames.length + '"></div>' : question) + '</p> ' + (hint ? '<p class="hint">' + hint + '</p>' : '') + ' \
                        <!-- http://stackoverflow.com/questions/9419470/how-do-i-get-my-accordion-to-load-with-all-the-menus-closed \
                        To have accordian collapsed by default, remove class "in". Include the class to open by default. --> \
                        <div class="accordion" id="accordionC' + (i+1) + 'Q' + (j+1) + '"> \
                            <div class="accordion-group"> \
                                <div class="accordion-heading"> \
                                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordionC' + (i+1) + 'Q' + (j+1) + '" href="#collapseC' + (i+1) + 'Q' + (j+1) + '"> \
                                        Answer \
                                    </a> \
                                </div> \
                                <div id="collapseC' + (i+1) + 'Q' + (j+1) + '" class="accordion-body collapse"> \
                                    <div class="accordion-inner"> \
                                        <p>' + answer + '</p> \
                                    </div> \
                                </div> \
                            </div> \
                        </div> \
                    </div> \
                    <div class="modal-footer"> \
                        ' + modalButtonElements + ' \
                        <!-- Text example to show how to close this modal and simultaneously open another modal. \
                        <a href="#modalC2Q1" role="button" class="btn" data-toggle="modal" data-dismiss="modal">Test</a> \
                        --> \
                    </div> \
                </div>' ) );
        }
    }
    
    return videoNames;
}

function insertSWFVideos (videoNames) {
    /* You also can't use HTML5 video with Internet Explorer 
        (and perhaps others, but only tested IE, FF, and Chrome).
        So you need to replace the videos with object elements instead. 
        We will be inserting all videos dynamically for all browsers.
        For multiline strings in code in javascript, use trailing slashes:
        http://stackoverflow.com/a/5391984/148212
    */
    for (i = 0; i < videoNames.length; i++) {
        swfobject.registerObject(pathstr + "videos/" + videoNames[i] + "-Video", "9.0.0");
        replaceTargetWith( 'video' + (i+1), '<div class="swf-video"> \
            <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="640" height="360" id="' + videoNames[i] + '-Video"> \
                <param name="movie" value="' + pathstr + "videos/" + videoNames[i] + '.swf"> \
                <!--[if !IE]>--> \
                <object type="application/x-shockwave-flash" data="' + pathstr + "videos/" + videoNames[i] + '.swf" width="640" height="360"> \
                <!--<![endif]--> \
                    <a href="http://www.adobe.com/go/getflashplayer"> \
                        <img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player"> \
                    </a> \
                <!--[if !IE]>--> \
                </object> \
                <!--<![endif]--> \
            </object> \
        </div>' );
    }
}

function insertHTML5Videos (videoNames) {
    /* A single element replace would also work since the video tag is just a single element:
        http://stackoverflow.com/questions/843680/how-to-replace-dom-element-in-place-using-javascript
    */

    for (i = 0; i < videoNames.length; i++) {
        replaceTargetWith( 'video' + (i+1), '<video src="' + pathstr + 'videos/' + videoNames[i] + '.ogg" controls></video>' );
    }
}

function loadGameBoard () {
    var points = 0;

    // Initialize the game assets
    $("h1#game-title").text(gameName);
    createScoreTable();
    createGameGrid();
    var modalButtonElements = createModalButtons();
    var videoNames = createQuestionModals(modalButtonElements);
    
    /* Special IE Browser Detection for some CSS properties that don't fit right due to Trident's rendering. */
    /* This is good browser detection code:
    http://stackoverflow.com/a/2401861/148212
    */
    navigator.sayswho = (function(){
        var ua= navigator.userAgent, tem, 
        M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if(/trident/i.test(M[1])){
            tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE '+(tem[1] || '');
        }
        if(M[1]=== 'Chrome'){
            tem= ua.match(/\bOPR\/(\d+)/)
            if(tem!= null) return 'Opera '+tem[1];
        }
        M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
        return M.join(' ');
    })();

    /* Finding if the string contains some other string x:
    http://stackoverflow.com/a/13833963/148212
    */
    /* var internetExplorer = "MSIE";
    if ( navigator.sayswho.indexOf( internetExplorer ) > -1 ) {
        $("label.points").text("success");
    } */
    /* Alternative is a regex match:
    http://stackoverflow.com/a/6603043/148212
    */
    if ( /MSIE*/.test(navigator.sayswho) ) {
        /* IE is doing some crazy rendering shit with resizing the tables and margins after click the label buttons.
        To get everything sized correctly, simulate clicks for all of those label buttons so the scores are at 0.
        The reset the colors. After doing a click on one of each pair of buttons, the table should be rendered correctly.
        http://stackoverflow.com/questions/17569012/simulate-a-click-on-a-element-using-javascript-jquery
        */
        $("label.points").css("margin", "0px");
        $("label.points").click();
        for (var i = 0; i < numberOfTeams ; i++) {
            $("#team-" + (i+1) + "-score").css('background-color', '#D5D6D6');
        }
        /* Refresh button doesn't retain color in IE... oh so many bugs with trident. */
        $("a.restart").css("background-color", "#CED96A");

        insertSWFVideos(videoNames);
    } else {
        insertHTML5Videos(videoNames);
    }
}

function centerGameBoard () {
    if ( categoryNames.length < 6 ) {
        var offset = "offset" + (6 - categoryNames.length);
        // http://api.jquery.com/first-child-selector/
        $( "#category-headings div:first-child" ).addClass(offset);
        // $(".topic:first").addClass(offset);
        $("div.category1").addClass(offset);
    }
}

function hideGameComponents () {
    $("div#game-container").addClass('hide');
}

/* getScript is asynchronous by default.
What we want is to wait for it to load before running loadGameBoard().
To do this, use the ajaxSetup call to set async to false.
Then for the callback, make sure to not include brackets as that would cause the callback to run before getScript returns.
http://stackoverflow.com/a/9738224/148212
http://api.jquery.com/jQuery.ajaxSetup/
http://api.jquery.com/jQuery.getScript/
*/
function loadGameData(gameDataFile) {
    // http://stackoverflow.com/questions/920930/how-to-create-json-by-javascript-for-loop
    // TODO: Manually create the json from a csv or from input fields...
    gameName = $("#nameSetup").val();
    numberOfTeams = parseInt($("#teamSetup").val());
    // this works too:
    // http://stackoverflow.com/questions/2780566/to-get-selected-value-of-a-dropdown-select-element-in-jquery
    // numberOfTeams = parseInt($('#teamSetup :selected').text());
    questionsPerCategory = parseInt($("#questionSetup").val());
    $.ajaxSetup({async:false});
    // node-webkit and a plain browser will have different window contexts
    // so the chosen file will be different (full path vs filename only).
    // To handle this, we need to split based on the possible path separators (/ and \),
    // then pass in only the file name so we can use relative paths with getScript().
    // This will make the code work on both node-webkit and in plain browsers.
    // Notes:
    //     full file path works on node-webkit because it is desktop aware, but does not in browsers
    //     relative paths work on both, thus we use this instead. 
    // https://github.com/rogerwang/node-webkit/wiki/Differences-of-JavaScript-contexts
    // https://github.com/rogerwang/node-webkit/wiki/File-dialogs
    // http://stackoverflow.com/questions/650022/how-do-i-split-a-string-with-multiple-separators-in-javascript
    // http://stackoverflow.com/questions/3216013/get-the-last-item-in-an-array
    console.log(gameDataFile.split(/\/|\\/).slice(-1)[0]);
    $.getScript(pathstr + 'games/' + gameDataFile.split(/\/|\\/).slice(-1)[0], loadGameBoard);
    // TODO: one problem is that jquery (or just any local html file in general) cannot access files above the parent directory
    //       http://forum.jquery.com/topic/how-can-i-use-getscript-to-point-to-a-parent-directory
    //       while node-webkit can.
    //       So when distributing the game, it would be best to maintain two slightly different versions of the game.
    //       The web version will need to place the extra user assets folder with the .html file.
    //       Meanwhile, node-webkit can be packaged completely and then access user files outside of the actual game itself.
    centerGameBoard();
}

function updateScore(team) {
    for (var i = 0; i < numberOfTeams ; i++) {
        $("#team-" + (i+1) + "-score").css('background-color', '#D5D6D6');
    }
    if (team != "no-score") {
        $("#" + team).text(parseInt($("#" + team).text(), 10) + points);
        if (points > 0) {
            $("#" + team).css('background-color', '#4AF216');    
        }
        else if (points < 0) {
            $("#" + team).css('background-color', '#FF2929');
        }
    }
}

/* How to replace elements using javascript:
http://stackoverflow.com/a/13388745/148212
*/
function replaceTargetWith( targetID, html ){
    /// find our target
    var i, tmp, elm, last, target = document.getElementById(targetID);
    /// create a temporary div or tr (to support tds)
    tmp = document.createElement(html.indexOf('<td')!=-1?'tr':'div');
    /// fill that div with our html, this generates our children
    tmp.innerHTML = html;
    /// step through the temporary div's children and insertBefore our target
    i = tmp.childNodes.length;
    /// the insertBefore method was more complicated than I first thought so I 
    /// have improved it. Have to be careful when dealing with child lists as  
    /// they are counted as live lists and so will update as and when you make
    /// changes. This is why it is best to work backwards when moving children 
    /// around, and why I'm assigning the elements I'm working with to `elm` 
    /// and `last`
    last = target;
    while (i--) {
        target.parentNode.insertBefore((elm = tmp.childNodes[i]), last);
        last = elm;
    }
    /// remove the target.
    target.parentNode.removeChild(target);
}
