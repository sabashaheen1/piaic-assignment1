"use strict";
let usernames = ['Alice', 'Bob', 'Charlie'];
let ageVar = 25;
const printUsers = (usernames, ageVar) => {
    if (usernames.length === 0) {
        console.log("We need to find some users!");
    }
    else {
        if (ageVar < 2) {
            console.log("The person is a baby.");
        }
        else if (ageVar >= 2 && ageVar < 4) {
            console.log("The person is a toddler.");
        }
        else if (ageVar >= 4 && ageVar < 13) {
            console.log("The person is a kid.");
        }
        else if (ageVar >= 13 && ageVar < 20) {
            console.log("The person is a teenager.");
        }
        else if (ageVar >= 20 && ageVar < 65) {
            console.log("The person is an adult.");
        }
        else {
            console.log("The person is an elder.");
        }
    }
};
printUsers(usernames, ageVar);
usernames = [];
printUsers(usernames, ageVar);
