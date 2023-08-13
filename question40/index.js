"use strict";
function make_album(artist, title, tracks) {
    let album = {
        "artist": artist,
        "title": title
    };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("Abrar Ul haq", "Nachan main"));
console.log(make_album("Atif", "Doori", 1));
console.log(make_album("Ali Zafar", "Channo", 2));
