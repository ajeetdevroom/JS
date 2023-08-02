// The join() method returns a new string by concatenating all of the elements in an array, 
// separated by a specified separator.
let message = ['javascript','is','programming','language'] 
let getMessage = message.join(" + ")
console.log(getMessage)
// The join() method does not change the original array.
// Elements like undefined, null, or empty array have an empty string representation.
let details = ['javascript','is', ,'programming', undefined,'language',null,'ok'] 
let detailsJoin = details.join("+")
console.log(details)
console.log(detailsJoin)

// -----------------------------------------------------------------------------------------------------

// The concat() method returns a new array by merging two or more values/arrays.
let primeNumber = [1,3,5,7];
let evenNumber=[2,4,6,8,10];
let joinArray=primeNumber.concat(evenNumber)
let jd=joinArray.concat("Ajeeet",78)
console.log(joinArray)
console.log(primeNumber)
console.log(jd)
// Returns a newly created array after merging all arrays/values passed in the argument.
let arr=[1,3,4,5,6];
let nestedArr=[[4,6],[99,88,100]]
let combinArr=arr.concat(nestedArr)
console.log(combinArr)

// -----------------------------------------------------------------------------------------------------

// The flat() method creates a new array by flattening a nested array up to the specified depth.
let multiDimentionalArr = [1,2,3,4,[9,8,7,[10,11,12,13,14],[21,22,33,44]]]
let flatArr = multiDimentionalArr.flat()
console.log(multiDimentionalArr)
console.log(flatArr)
// Notes: The flat() method:
// does not change the original array.
// removes empty slots in arrays.