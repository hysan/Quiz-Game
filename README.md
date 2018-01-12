# README

This is a game meant to look like Jeopardy that I used when teaching ESL in junior high schools. It works well as a review mechanism or to simply have fun in class. There are no strict rules in place within the game itself as it just facilitates displaying questions & answers, showing picture & video questions, giving out points, and making point adjustments on the fly. There's no rules against you randomly throwing bonus questions and giving out points manually ;)

**Tip to teachers using this:**

* The key to a successful game & lesson is the questions and your execution in the classroom.
* Questions should have some basis on what will be on tests and should be well thought out with a clear difficulty curve.
* However, I do encourage you to be creative and include 1-2 categories that use English but in an interesting way (song lyrics, other subjects, etc.) that stretch the students' imaginations.
* Lastly, similar to [Calvinball](https://en.wikipedia.org/wiki/Calvin_and_Hobbes#Calvinball), your ability to adjust rules on the fly, play up the energy, and even out the fairness for all level of students is what will make this game really take off.

Being digital isn't what makes this game work. You, the Dungeon Master, are the key to fun!

## Screenshots

![Game Setup](/screenshots/game-setup.png?raw=true "Game Setup")

![Pick Game Dialog](/screenshots/dialog.png?raw=true "Pick Game Dialog")

![New Game Board](/screenshots/new-game-board.png?raw=true "New Game Board")

![Question](/screenshots/question.png?raw=true "Question")

![Answer](/screenshots/answer.png?raw=true "Answer")

![Awarding Points (automatically)](/screenshots/points.png?raw=true "Awarding Points (automatically)")

## History

This was built a long time ago and underwent several revisions that weren't all caught in the commit history as I never imagined making it this complex. Some limitations that I used to work against were:

* IE6 Compatibility - The computers in the classrooms did not receive updates for IE and were permanently stuck on IE6 for the first 4 years I was teaching.
* Optimization - No fancy JavaScript frontend frameworks (not that many existed) as the classroom computers were also very old and slow.
* USB Portable - It had to run off a USB drive as I needed to jump from class to class. Carrying around a personal computer was not really allowed and not practical.
* Visibility on Projectors - The use of colors to create better contrast + adjusting font sizes were of utmost importance so students at the back of the classroom could see.

Some of the early (non-versioned) milestone builds were:

* Single html page app that would run off a USB on any browser.
* Batch scripts + [Portable Apps](https://portableapps.com) for 1-click launching.
* [Node Webkit](https://github.com/nwjs/nw.js) builds for 1-click running and more browser features.

## Features

Once I started version controlling my work, I decided to make it easier for non-technical people to create games themselves. So I added a _setup screen_ with the following changes:

* custom game name title
* choose number of teams
* choose a game file to load

Future features that I never finished building out are:

* question & game editor that would allow you to save your games
* one-click build system on any OS

Right now, the game has a build system for packaging everything into the format that node-webkit (at the time) expected. It would allow you to drag and drop the game onto the node-webkit executable on Windows and have it run without hitch.

## Instructions

node-webkit (now nw.js) has since changed and uses the same security model with browser with regards to loading JavaScript files from `file://`. So if you want to run this game, a workaround is to launch Chrome with these two flags: `--disable-web-security --user-data-dir`. The resulting window will allow you to pick games and load them correctly.

## Versioning

Versioning system is defined by three numbers: 0.2.5

* The first number, 0, is a major release. These are huge milestones and will require end users to possibly update their game files (e.g., backwards compatibility is not guaranteed).
* The second number, 2, is a minor release. These are new features or improvements to existing ones.
* The third number, 5, designated a bug fix release.
