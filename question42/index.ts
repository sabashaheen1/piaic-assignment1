function show_magicians1(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}

function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "the Great " + magicians[i];
  }
}

let magicianNames1: string[] = ["Mystica", "Enigma", "Zephyr", "Astral"];

make_great(magicianNames1);
show_magicians1(magicianNames1);