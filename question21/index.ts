interface Mountain {
    name: string;
    height: number;
}

interface River {
    name: string;
    length: number;
}

interface Country {
    name: string;
    capital: string;
}

interface City {
    name: string;
    population: number;
}

interface Language {
    name: string;
    speakers: number;
}

function createObjects1() {
const objects: {
    mountains: Mountain[];
    rivers: River[];
    countries: Country[];
    cities: City[];
    languages: Language[];
} = {
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

return objects;
}

const myObjects = createObjects1();

console.log(myObjects.mountains);
console.log(myObjects.rivers);
console.log(myObjects.countries);
console.log(myObjects.cities);
console.log(myObjects.languages);