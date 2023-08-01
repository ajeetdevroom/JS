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