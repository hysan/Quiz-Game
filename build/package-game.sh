#!/bin/sh

# Excluding directories: http://askubuntu.com/questions/28476/how-do-i-zip-up-a-folder-but-exclude-the-git-subfolder
cd ../src && zip -r ../distributables/Game.nw . --exclude="*games*" --exclude="*videos*" && cd ../build

