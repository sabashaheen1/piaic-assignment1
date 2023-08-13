"use strict";
function show_magicians1(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
let magicianNames1 = ["Mystica", "Enigma", "Zephyr", "Astral"];
make_great(magicianNames1);
show_magicians1(magicianNames1);
