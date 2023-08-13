"use strict";
let guestList2 = ['Mahnoor', 'Maryam', 'Mehru', 'Iqra', 'Ayesha', 'Madiha'];
console.log('Good news! We found a bigger dinner table.');
guestList2.unshift('Anila');
guestList2.splice(Math.floor(guestList2.length / 2), 0, 'Fozia');
guestList2.push('Hira');
for (let i = 0; i < guestList2.length; i++) {
    console.log(`Dear ${guestList2[i]}, you are invited to dinner!`);
}
console.log('\n\nUnfortunately, our new dinner table won\'t arrive in time.');
console.log('We can only invite two people for dinner.\n\n');
while (guestList2.length > 2) {
    const removedGuest = guestList2.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
for (let i = 0; i < guestList2.length; i++) {
    console.log(`Dear ${guestList2[i]}, you are still invited to dinner!`);
}
console.log(`\n\nNumber of people invited to dinner: ${guestList2.length}`);
