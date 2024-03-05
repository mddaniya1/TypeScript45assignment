"use strict";
//Q#01:
//Install Node.js, TypeScript and VS Code on your computer
//Q#02:Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName = "Eric";
console.log("Hello ${personName}, would you like to learn some Python today?");
// Question #03 Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase.
let person = "Daniyal";
let Inlowercase = person.toLowerCase();
let InUppercase = person.toUpperCase();
let titlecasename = person.split('');
for (let i = 0; i < titlecasename.length; i++) {
    titlecasename[i] = titlecasename[i].charAt(0).toUpperCase() + titlecasename[i].slice(1).toLowerCase();
}
console.log(titlecasename.toString().replace(/,/g, ''));
console.log("Name in Lowercase:${Inlowercase}");
console.log("Name in Upperase:${InUppercase}");
