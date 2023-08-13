function show_magicians2(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}

function make_great2(magicians: string[]): string[] {
    let greatMagicians: string[] = [];

    for (let i = 0; i < magicians.length; i++) {
      greatMagicians.push("the Great " + magicians[i]);
    }

    return greatMagicians;
}

let magicianNames2: string[] = ["Mystica", "Enigma", "Zephyr", "Astral"];
let greatMagicianNames: string[] = make_great2([...magicianNames2]);

show_magicians2(magicianNames2);
console.log("");
show_magicians2(greatMagicianNames);