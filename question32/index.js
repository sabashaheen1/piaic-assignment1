"use strict";
let current_users = ['Ainee', 'Soha', 'Madiha', 'Mehwish', 'Munazza'];
let new_users = ['Anila', 'Saima', 'Nadia', 'Aqsa', 'Sadia'];
let current_users_lowercase = current_users.map(user => user.toLowerCase());
for (let i = 0; i < new_users.length; i++) {
    let new_user_lower = new_users[i].toLowerCase();
    if (current_users_lowercase.includes(new_user_lower)) {
        console.log("Sorry, the username '" + new_users[i] + "' is already taken. Please enter a new username.");
    }
    else {
        console.log("Congratulations! The username '" + new_users[i] + "' is available.");
    }
}
