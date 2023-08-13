"use strict";
let guestList = ["Amna", "Sadia", "Aqsa"];
guestList.forEach(guest => {
    const message = `Dear ${guest}, you are invited to dinner. Please join us on Saturday at 7:00 PM.`;
    console.log(message);
});
const guestUnableToAttend = guestList[1];
guestList[1] = "Anila";
console.log(`\nUnfortunately, ${guestUnableToAttend} can't make it to the dinner.\n`);
guestList.forEach(guest => {
    const message = `Dear ${guest}, you are invited to dinner. Please join us on Saturday at 7:00 PM.`;
    console.log(message);
});
