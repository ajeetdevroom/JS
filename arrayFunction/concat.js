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