"use strict";
function createObjects() {
    const objects = {
        mountains: [
            { name: "Karakoram", height: 8611 },
            { name: "Himalayas", height: 8848 },
        ],
        rivers: [
            { name: "Indus", length: 2900 },
            { name: "Jhelum", length: 725 },
        ],
        countries: [
            { name: "Pakistan", capital: "Islamabad" },
            { name: "India", capital: "New Delhi" },
        ],
        cities: [
            { name: "Karachi", population: 14910352 },
            { name: "Lahore", population: 11126285 },
        ],
        languages: [
            { name: "Urdu", speakers: 100000000 },
            { name: "Punjabi", speakers: 90000000 },
        ],
    };
    try {
        // Intentional index error
        console.log(objects.countries[2].name);
    }
    catch (error) {
        console.log("An error occurred:", error);
    }
    return objects;
}
const myObjects1 = createObjects();
console.log(myObjects1.mountains);
console.log(myObjects1.rivers);
console.log(myObjects1.countries);
console.log(myObjects1.cities);
console.log(myObjects1.languages);
