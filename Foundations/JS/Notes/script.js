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

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0