// The findIndex() method returns the index of the first array element that satisfies the provided test function or else returns -1.

// function that returns odd number
function isOdd(element) {
    return element % 2 !== 0;
  }
  let numbers = [2, 8, 1, 3, 4];
  let firstOdd = numbers.findIndex(isOdd);
  console.log(firstOdd);  
  // Output: 2

// -----------------------------------------------------------------------------------------------------

//   The indexOf() method returns the first index of occurance of an array element, or -1 if it is not found.
let languages = ["Java", "JavaScript", "Python", "JavaScript"];
let index = languages.indexOf("JavaScript");
console.log(index);
// Output: 1

// -----------------------------------------------------------------------------------------------------

// The lastIndexOf() method returns the index of the last occurrence of a specified element in the array.
let priceList = [10, 8, 2, 31, 10, 31, 65];
let lastIndex = priceList.lastIndexOf(31);
console.log(lastIndex); 

// Output: 5