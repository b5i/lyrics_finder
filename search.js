const { exec } = require("child_process");
const fs = require('fs')
var singers = ''; //artist here
var songname = ''; //songname here

function get_lyrics (singers, songname){
    var split_artists = singers.split(", "); // Separate differents artists : for Riton, Kah-Lo it will search for Riton, Kah-Lo - Riton - Kah-Lo
split_artists.splice(2, 0, singers);
for (let i = 0; i < split_artists.length; i++) {
    console.log(split_artists[i]);
    exec("python3 searcher.py '"+split_artists[i]+"' '"+songname+"' '"+singers+"' '", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    if (`${stdout}` == 'LYRICS NOT FOUND\n'){
        console.log('LYRICS NOT FOUND')
        let lyrics = ''
        return;
    }
    else{
        console.log('LYRICS FOUNDS')
        console.log(singers + ' - ' + 'songname' + '.lrc')

    }

});
}
}
get_lyrics(singers, songname)
