"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity30 = void 0;
const Activity30 = () => {
    let usernames = ['admin', 'soha', 'madiha', 'amna', 'ainee'];
    for (let i = 0; i < usernames.length; i++) {
        if (usernames[i] === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello " + usernames[i] + ", thank you for logging in again.");
        }
    }
};
exports.Activity30 = Activity30;
