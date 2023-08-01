// The sort() method sorts the items of an array in a specific order (ascending or descending).
let familyName = ['RCfgkjh','Ankit', 'rangeeta', 'ghinka'];
console.log(familyName)
let sortArrayItem = familyName.sort()
console.log(sortArrayItem)
console.log(sortArrayItem)
// Returns the array after sorting the elements of the array in place (meaning that it changes the original array and no copy is made).
let numberArray = [10,88,22,0,66,83,33,5];
console.log(numberArray)
console.log(numberArray.sort())
console.log(familyName.sort((a,b)=>{
    return  b.length - a.length
}))
