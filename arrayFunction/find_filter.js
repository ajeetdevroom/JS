let numbers = [1, 3, 4, 9, 7 ,4];
function isEven(element) {
  return element % 2 == 0;
}
let evenNumber = numbers.find(isEven);
console.log('find - ',evenNumber);

// Output: 4

// -----------------------------------------------------------------------------------------------------

// function to check even numbers
function checkEven(number) {
  if (number % 2 == 0)
    return true;
  else
    return false;
}

// create a new array by filter even numbers from the numbers array
let evenNumbers = numbers.filter(checkEven);
console.log("filter - ",evenNumbers);