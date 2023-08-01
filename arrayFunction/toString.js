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