// The some() method tests whether any of the array elements pass the given test function.
function isEven(element) {
    return element % 2 === 0;
  }
  let numbers = [1, 3, 2, 5, 4];
  console.log(numbers.some(isEven));  
  // Output: true 

// -----------------------------------------------------------------------------------------------------
function checkAdult(age) {
    return age >= 18;
}
const ageArray = [34, 23, 20, 26, 12];
let check = ageArray.every(checkAdult);
// Output: false

// -----------------------------------------------------------------------------------------------------
// The includes() method checks if an array contains a specified element or not.
let languages = ["JavaScript", "Java", "C"];
// checking whether the array contains 'Java'
let checks = languages.includes("Java");
console.log(checks); 
// Output: true