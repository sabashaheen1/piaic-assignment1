"use strict";
function createList() {
    const items = [];
    const mountains = ["Karakoram", "Hindukash"];
    items.push(...mountains);
    const cities = ["Faisalabad", "Lahore", "Islamabad", "Karachi"];
    items.push(...cities);
    const languages = ["Punjabi", "Urdu", "Sindhi", "Pashto"];
    items.push(...languages);
    return items;
}
const myArray = createList();
console.log(myArray);
