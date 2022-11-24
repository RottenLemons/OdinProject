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