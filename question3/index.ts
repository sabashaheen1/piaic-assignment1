const myName: string = "Saba Shaheen";

const lowercaseName: string = myName.toLowerCase();
const uppercaseName: string = myName.toUpperCase();
const titlecaseName: string = myName.replace(/\w\S*/g, (txt: string) => {
  return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
});

console.log("Lowercase: " + lowercaseName);
console.log("Uppercase: " + uppercaseName);
console.log("Titlecase: " + titlecaseName);
