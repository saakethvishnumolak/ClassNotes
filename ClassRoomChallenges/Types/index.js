/* BRONZE
​
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
 
*/


var person = {
    name: "Saaki Vish",
    age: 19,
    hasBlackHair: true,
    myDog: {
        random: "Marley"
    }
}

console.log(typeof person.age);
​
/* SILVER
​
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
​
*/

let value = person.age;

if(typeof value == "string") {
    console.log("This is a string");
} else if(typeof value == "number") {
    console.log("This is a number")
} else if(typeof value == "boolean") {
    console.log("This is a boolean");
} else if(typeof value == "object") {
    console.log("This is an object");
} else {
    console.log("what are you?");
}