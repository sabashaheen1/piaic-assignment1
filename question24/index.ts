let fruitType = 'apple';
console.log("Is fruitType == 'apple'? I predict True.");
console.log(fruitType == 'apple');

let colorName = 'blue';
console.log("Is colorName != 'red'? I predict True.");
console.log(colorName != 'red');

let personName = 'John';
console.log("Is personName.toLowerCase() == 'john'? I predict True.");
console.log(personName.toLowerCase() == 'john');

let countryName = 'CANADA';
console.log("Is countryName.toLowerCase() != 'canada'? I predict False.");
console.log(countryName.toLowerCase() != 'canada');

let numberX = 10;
console.log("Is numberX == 10? I predict True.");
console.log(numberX == 10);

let numberY = 5;
console.log("Is numberY != 5? I predict False.");
console.log(numberY != 5);

let firstNumber = 20;
let secondNumber = 15;
console.log("Is firstNumber > secondNumber? I predict True.");
console.log(firstNumber > secondNumber);

console.log("Is firstNumber <= secondNumber? I predict False.");
console.log(firstNumber <= secondNumber);

let sunnyWeather = true;
let warmWeather = false;
console.log("Is sunnyWeather and warmWeather? I predict False.");
console.log(sunnyWeather && warmWeather);

let rainyWeather = true;
let coldWeather = true;
console.log("Is rainyWeather or coldWeather? I predict True.");
console.log(rainyWeather || coldWeather);

let fruitList = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in fruitList array? I predict True.");
console.log(fruitList.includes('banana'));

let vegetableList = ['carrot', 'broccoli', 'spinach'];
console.log("Is 'cabbage' not in vegetableList array? I predict True.");
console.log(!vegetableList.includes('cabbage'));
