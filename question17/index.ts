let guestList1: string[] = ['Mahnoor', 'Maryam', 'Mehru', 'Iqra', 'Ayesha', 'Madiha'];
console.log('Good news! We found a bigger dinner table.');
guestList1.unshift('Hira');
guestList1.splice(Math.floor(guestList1.length / 2), 0, 'Saima');
guestList1.push('Anila');
for (let i = 0; i < guestList1.length; i++) {
  console.log(`Dear ${guestList1[i]}, you are invited to dinner!`);
}
console.log('\n\nUnfortunately, our new dinner table won\'t arrive in time.');
console.log('We can only invite two people for dinner.\n\n');
while (guestList1.length > 2) {
  const removedGuest = guestList1.pop();
  console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
for (let i = 0; i < guestList1.length; i++) {
  console.log(`Dear ${guestList1[i]}, you are still invited to dinner!`);
}
guestList1.pop();
guestList1.pop();
console.log('Final guest list:', guestList1);