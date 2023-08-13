"use strict";
function show_magicians2(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great2(magicians) {
    let greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
}
let magicianNames2 = ["Mystica", "Enigma", "Zephyr", "Astral"];
let greatMagicianNames = make_great2([...magicianNames2]);
show_magicians2(magicianNames2);
console.log("");
show_magicians2(greatMagicianNames);
