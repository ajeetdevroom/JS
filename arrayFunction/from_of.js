// The from() method creates a new array from any array-like or iterable object.
// creating a new array from string
let newArray = Array.from("abc");
console.log(newArray);
// Output:
// [ 'a', 'b', 'c' ]

// -----------------------------------------------------------------------------------------------------
// The of() method creates a new Array instance from the given arguments.
// creating an array 1 element
let numbers = Array.of(3);
console.log(numbers); // [ 3 ]
// creating an array with 3 string elements
let fruits = Array.of("Apple", "Banana", "Grapes");
console.log(fruits); // [ 'Apple', 'Banana', 'Grapes' ]
// creating an array with 4 integers 
let primeNumbers = Array.of(2, 3, 5, 7);
console.log(primeNumbers); // [ 2, 3, 5, 7 ]