let phrase = "Hello";
let myName = "Saaki";

console.log(`${phrase} ${myName}`);

//Booleans
let on = true;
let off = false;

//Null
let empty = null;

//Undefined
//Starts empty but we inted to fill it
let undef = undefined;
let undef;

//Numbers
let degrees = 90;
let precise = 9999999999999999999;
console.log(precise);

//Strings
let stringOne = "double quotes";
let stringTwo = 'single quotes';
let stringThree = `backticks`;

let first = 1050 + 100;
let second = "1050" + "100";
let third = 1050 + "100";
console.log(first, second, third);

//Objects
let frodo = 
{
    race: "Hobbit",
    rings: 1,
    cloak: true
}

console.log(frodo);

//Arrays
let list = ["item1", 2, true];
console.log(typeof list);

/*
DataType literals are fixed values that we as developers insert into the code, not data that is coming from a third party source.
*/

let myName = "Saaki";
console.log(myName.length);
console.log(myName.toUpperCase());

let home = "My home is in greenwood";
console.log(home.includes("greenwood"));

let sent = "This sentence will be split into individual parts";
console.log(sent.split(" "));