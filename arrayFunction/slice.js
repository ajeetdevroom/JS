// The slice() method returns a shallow copy of a portion of an array into a new array object.
let numbers = [2, 3, 5, 7, 11, 13, 17];
// create another array by slicing numbers from index 3 to 5
let newArray = numbers.slice(3, 6);
console.log(newArray);
// Output: [ 7, 11, 13 ]


// slice() Parameters
// The slice() method takes in:
// start (optional) - Starting index of the selection. If not provided, the selection starts at start 0.
// end (optional) - Ending index of the selection (exclusive). If not provided, the selection ends at the index of the last element.

let languages = ["JavaScript", "Python", "C", "C++", "Java"];

// slicing the array (from start to end)
let new_arr = languages.slice();
console.log(new_arr); // [ 'JavaScript', 'Python', 'C', 'C++', 'Java' ]

// slicing from the third element
let new_arr1 = languages.slice(2);
console.log(new_arr1); // [ 'C', 'C++', 'Java' ]

// slicing from the second element to fourth element
let new_arr2 = languages.slice(1, 4);
console.log(new_arr2); // [ 'Python', 'C', 'C++' ]