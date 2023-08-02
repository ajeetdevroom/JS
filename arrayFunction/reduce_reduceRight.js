// The reduce() method executes a reducer function on each element of the array and returns a single output value.
const message = ["JavaScript ", "is ", "fun."];
// function to join each string elements
function joinStrings(accumulator, currentValue) {
  return accumulator + currentValue;
}
// reduce join each element of the string
let joinedString = message.reduce(joinStrings);
console.log(joinedString);
// Output: JavaScript is fun.

// arr.reduce(callback(accumulator, currentValue), initialValue)
// reduce() Parameters
// The reduce() method takes in:

// callback - The function to execute on each array element (except the first element if no initialValue is provided). It takes in
// accumulator - It accumulates the callback's return values.
// currentValue - The current element being passed from the array.
// initialValue (optional) - A value that will be passed to callback() on first call. If not provided, the first element acts as the accumulator on the first call and callback() won't execute on it.
const numbers = [1, 2, 3, 4, 5, 6];
function sum_reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}
let sum = numbers.reduce(sum_reducer);
console.log(sum); // 21

// using arrow function
let summation = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(summation); // 21
// --------------------------------------------------------
const expenses = [1800, 2000, 3000, 5000, 500];
const salary = 15000;
// function that subtracts all array elements from given number
// 15000 - 1800 - 2000 - 3000 - 5000 - 500
// arr.reduce(callback(accumulator, currentValue), initialValue)
let remaining = expenses.reduce((accumulator, currentValue) => accumulator - currentValue,salary);
console.log(remaining); // 2700
// -----------------------------------------------------------------------------------------------------

// The reduceRight() method reduces the array to a single value by executing a callback function 
// on two values of the array (from right to left).

// reduce join each element of the string
let joinedStringRight = message.reduceRight(joinStrings);
console.log(joinedStringRight);
// Output: fun.is JavaScript 