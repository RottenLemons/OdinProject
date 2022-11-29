"use strict"; // Must be on top if comapatibiltiy with old scripts are not needed

let message;

message = 'Hello';
alert(message);

let message2 = 'Hi';
alert(message2);

// let user = 'John', age = 35, message3 = 'Howdy';  Not recommeneded
let user = 'John';
let age = 35;
let message3 = 'Howdy';

const PI = 3.14;

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

let color = COLOR_ORANGE;
alert(color); 

let str = "This is" + 20 + 10; // This is 2010 NOT This is 30
// number + string = string, string + number = string!!
let num = 10 + 20 + "30"; // 3030 NOT 102030

alert("20"/"2"); // JS will try to convert string to number
alert("20"/2); // This also works
let x = 100 / "Apple"; // x will be a NaN
isNaN(x) // True
// NaN + num = NaN, typeof NaN returns number
// / 0 = Infinity, typeof Infinity returns number
let y = 0xFF //255
// Doing string + hexa will result in String|number
let myNumber = 32;
myNumber.toString(32); // 10
myNumber.toString(16); // 20
myNumber.toString(12); // 28
myNumber.toString(10); // 32
myNumber.toString(8);  // 40
myNumber.toString(2)   // 100000
// == does type conversion, === does not do type conversion, === is recommended

const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;


let balls = "74";
balls = Number(balls) + 3;

// Converts non-numbers, unary + acts like Number()
alert( +true ); // 1
alert( +"" );   // 0
alert( +"2" + +"3" );

// = returns the value at the left of it, thus chaining is possible
let a;
let b;
a = b = 2; // First b=2, which returns 2, thus a = 2
let c = (1 + 2, 3 + 4); // c = 7: First expression is evaluated, but 3 is thrown. Only return of last expression is not thrown
// = occurs before ,

// null + 1, null becomes 0 after the numeric conversion thus 1
// undefined + 1, undefined becomes NaN after the numeric conversion thus NaN
// " \t \n" - 2, space characters are trimmed off string start and end when a string is converted to a number thus -2

alert( `the result is ${1 + 2}` ); // Only with ``

const output = `I like the song.
I gave it a score of 90%.`;
console.log(output);

/*
I like the song.
I gave it a score of 90%.
For '', use \n
*/

let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13); // Banana
// substring() is the same, but -ve values are treated as 0
// substr() is the same, but the second argument is the length of the slice

let text1 = "Please eat candy!";
let newText = text1.replace("candy", "apples");
// To replace all matches, use a regular expression with a /g flag (global match)
// text.replace(/Microsoft/g, "W3Schools"); or replaceAll()
// If the parameter is a regular expression, the global flag (g) must be set set, otherwise a TypeError is thrown.

let text2 = "5";
let padded = text2.padEnd(4,"0"); // 50000
// There is also a padStart

let text3 = "HELLO WORLD";
text3[0] = "A";    // Gives no error, but does not work, it is read only
// use charAt as if no character is found, it returns an empty string
text3.split(" ") // ['HELLO', 'WORLD']

const areEqual = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0; // For string comparison
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

let result = value1 || value2 || value3; // OR goes through from left to right and convert values to boolean. When the first True is found, the original value is returned, or the last if none are found
// e.g. ("" || "" || "Super" || "Anoynomous") // Super is returned

result = value1 && value2 && value3; // AND goes through from left to right and convert values to boolean. When the first False is found, the original value is returned, or the last if none are found
// e.g. (1 && 2 && null && 3) // null is returned

let result2 = condition ? value1 : value2;

// Only NaN, false, undefined, 0, null, '' return false

switch (expression) {
  case choice1:
    alert(1);
    break;

  case choice2:
    alert(2);
    break;

  // include as many cases as you like

  default:
    alert(3);
}

console.assert(1 == 1, 'ouch'); // Only shows error if assertion is wrong

console.log(document.querySelector('p')); // Shows element
console.dir(document.querySelector('p')); // Shows classlist, children, style and other propeties and methods

console.group(); // groupCollapsed()
console.log('Hello');
console.log('World');
console.groupEnd();

console.count('Hello');
console.count('Hello');
console.count('World');

a ?? b; // Gets the first defined value, if a is not null or undefined, it will return a, if not, b
// Similar to || but || returns the first truthy value, ?? returns the first defined

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label 

let sayHi = function() {
  alert( "Hello" );
};

let func = sayHi; // sayHi() and func() does the same thing now



function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel); // showOk and showCancel are call back functions

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
); // Does the same as above, but with anoynomous functions

// Function Expressions are created when the execution reaches them.
// A Function Declaration can be called earlier than it is defined, as they are created before any code is executed
// In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.
// But for Function Expressions, if the variable is declared earlier outside the block, then one can run the Functon Expression outside the block

// https://javascript.info/arrow-functions

function defer(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function sayHi(who) {
  alert('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); 

// Explanation:

function test(){
    console.log(this); // Window, or this of the function
    console.log(arguments); // Arguments of test
}

test('a', 'b'); // Will log Window and ['a', 'b']

// So defer(sayHi, 2000); returns this function 
function sayHiDeferred () {
    setTimeout(() => sayHi(arguments), 2000);
  };
// sayHiDeferred("John") -> sayHi("John"), sayHiDeferred("John",{},[],"asdasd") -> sayHi("John",{},[],"asdasd")

let h = ['Big', 'City', 'Balls'];
h.indexOf('Big') // Returns index, if not in list, -1
const person = {firstName:"John", lastName:"Doe", age:46};  // Array is an object, but uses numbers to access while objects use namse
person.firstName; // John
h.sort(); // Sorts array
h.forEach(function (val) {
  console.log(val);
});
h.push("Lemon"); // Push array element at the back
h.pop(); // Remove last element
h.shift() // Removes the first element, and shifts everything forward; returns the removed item
h.unshift("Lemon"); // Adds element at the font and shifts everything back; returns new array length
h.toString(); // Converts array to string
h.join(" "); // Converts to string, but with a separator
h.concat(h); // Concats multiple list; can take multiple arguments
h.splice(2, 2, "Lemon", "Kiwi"); // The splice() method can be used to add new items to an array
// The first parameter (2) defines the position where new elements should be added (spliced in)
// The second parameter (0) defines how many elements should be removed
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added; returns an array with the deleted items
h.splice(0, 1); // Can be used to delete
// Note JS can have holes where by deleting, it does not shift the array, but just makes the value undefine
// h[1000] = 'Balls'; is allowed but will leave a lot of holes
h.slice(3, 5) // Basically JS version of h[3:5]

for (const items of h) {
  console.log(items); // For of loop
}

function toUpper(string) {
  return string.toUpperCase();
}

const upperH = h.map(toUpper); // You can use map() to do something to each item in a collection and create a new collection containing the changed items
function lItem(item) {
  return item.startsWith('L');
}
const filtered = h.filter(lItem); // Filters based on a condition specified by the function; Function must return true or false

for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
} // This is better than printing if odd

outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (A label is an identifier with a colon before a loop, and it allows us to break outer loops if needed)

    // do something with the value...
  }
}

let us = {
  name: 'John', 
  age: 30,}; // can have a trailing comma 
us.isAdmin = true;
delete us.age;
us['name'];
us.name; // Does the same thing

let key = "isAdmin";
user[key] = true; // Works
// Thus allows us to do:
key = prompt("What do you want to know about the user?", "name"); // name is default
alert( user[key] );

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"

function makeUser(name, age) {
  return {
    name, // same as name: name in functions
    age,  // same as age: age
    // ...
  };
}

"key" in object; // true if object.key exists
user.noSuchProperty === undefined; // also works, but will also be true when we set a key to undefined but it exists

for (let key in us) {
  alert(key);
} //  keys that are integer properties are sorted, others appear in creation order. 
// The “integer property” term here means a string that can be converted to-and-from an integer without a change. "49" is but not "+49", "1.2"

const bob = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  }, // both bio and introduceSelf works
};

person.farewell = function () {
  console.log("Bye everybody!");
};

function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
} // Constructor in JS

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
