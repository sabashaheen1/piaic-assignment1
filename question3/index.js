"use strict";
const myName = "Saba Shaheen";
const lowercaseName = myName.toLowerCase();
const uppercaseName = myName.toUpperCase();
const titlecaseName = myName.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
});
console.log("Lowercase: " + lowercaseName);
console.log("Uppercase: " + uppercaseName);
console.log("Titlecase: " + titlecaseName);
