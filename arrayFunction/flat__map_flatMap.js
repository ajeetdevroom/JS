// The map() method creates a new array with the results of calling a function for every array element.
let number = [2, 4, 6, 8, 10];
function square(number) {
  return number * number;}
let square_numbers = number.map(square);
console.log(square_numbers);
// Output: [ 4, 16, 36, 64, 100 ]

// -----------------------------------------------------------------------------------------------------

// The flat() method creates a new array by flattening a nested array up to the specified depth.
let multiDimentionalArr = [1,2,3,4,[9,8,7,[10,11,12,13,14],[21,22,33,44]]]
let flatArr = multiDimentionalArr.flat()
console.log(multiDimentionalArr)
console.log(flatArr)
// Notes: The flat() method:
// does not change the original array.
// removes empty slots in arrays.

// -----------------------------------------------------------------------------------------------------

// The flatMap() method first maps each element of an array using a mapping function, then flattens it into a new array.
let numbers = [11, 22, 33, 44, 55];
const resultingArray = numbers.flatMap((x) => x*2);
console.log(numbers);
console.log(resultingArray);
// The flatMap() method does not change the original array.
// The flatMap() method is equivalent to array.map().flat().