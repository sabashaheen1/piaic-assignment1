"use strict";
let guestsList = ["Amna", "Sadia", "Aqsa"];
for (let i = 0; i < guestsList.length; i++) {
    console.log(`Dear ${guestsList[i]}, you are invited to dinner!`);
}
const guestCannotMakeIt = guestsList[1];
console.log(`\n\n${guestCannotMakeIt} cannot make it to the dinner.\n\n`);
guestsList[1] = 'Madiha';
for (let i = 0; i < guestsList.length; i++) {
    console.log(`Dear ${guestsList[i]}, you are invited to dinner!`);
}
console.log('\n\nGood news! We found a bigger dinner table.');
guestsList.unshift('Sadia');
guestsList.splice(Math.floor(guestsList.length / 2), 0, 'Ainee');
guestsList.push('Mehwish');
for (let i = 0; i < guestsList.length; i++) {
    console.log(`Dear ${guestsList[i]}, you are invited to dinner!`);
}
