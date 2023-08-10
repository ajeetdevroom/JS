// The replace() method returns a new string with the specified string/regex replaced.
// Example 1: Replace the first occurrence
const text = "Java is awesome. Java is fun."
// passing a string as the first parameter
let pattern = "Java";
let new_text = text.replace(pattern, "JavaScript");
console.log(new_text);

// passing a regex as the first parameter
pattern = /Java/;
new_text = text.replace(pattern, "JavaScript");
console.log(new_text);
// Output
// JavaScript is awesome. Java is fun.
// JavaScript is awesome. Java is fun.


// Example 2: Replace all occurrences
const text2 = "Java is awesome. Java is fun."
// notice the g switch in the regex pattern
const pattern2 = /Java/g;
const new_text2 = text.replace(pattern2, "JavaScript");
console.log(new_text2);

// Example 3: Case-Insensitive Replacement
const text3 = "javaSCRIPT JavaScript"
// the first occurrence of javascript is replaced
let pattern3 = /javascript/i;  // case-insensitive search
let new_text3 = text.replace(pattern3, "JS");
console.log(new_text3)  // JS JavaScript

// all occurrences of javascript is replaced
let pattern4 = /javascript/gi;  // case-insensitive and global search
let new_text4 = text.replace(pattern4, "JS");
console.log(new_text4)  // JS JS


// replace() Parameter
// The replace() method takes in:
// pattern - either a string or a regex that is to be replaced
// replacement - the pattern is replaced with this replacement (can be either a string or a function)

const text6 = "Random digit: 3"

// generate a random digit between 0 and 9
function generateRandomDigit() {
  return Math.floor(Math.random() * 10)}
// regex to match a digit
const pattern6 = /\d/;
const new_text6 = text.replace(pattern6, generateRandomDigit);
console.log(new_text6)
//Output: 
// Random digit: 8