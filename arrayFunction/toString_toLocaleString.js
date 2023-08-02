// The toString() method returns a string formed by the elements of the given array.
let message = ['you','are',420];
let getMessageString = message.toString()
console.log(getMessageString)
// The toString() method does not take any parameters.

// defining a nested array
let nestedArray = [1, 2, 4, ["Apple", 5]];

// returns string representation of the nested array by flattening the array 
let resultingArray = nestedArray.toString();

console.log(resultingArray);
// output 1,2,4,Apple,5


// -----------------------------------------------------------------------------------------------------
// The Array.toLocaleString() method returns a string representing the elements of the array in a particular locale.
let array1 = [1, "JavaScript", new Date()];
// returns string representation of array
let stringFromArray = array1.toLocaleString();

console.log(stringFromArray);

// Example 2: toLocaleString() Method with Parameters// 
// defining an array 
let prices = [689, 100, 4577, 56];

// passing locales and options: 
// using United States Dollar currency string format
let resultingString = prices.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
});

console.log(resultingString); 