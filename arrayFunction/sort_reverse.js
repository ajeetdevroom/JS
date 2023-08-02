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

// -----------------------------------------------------------------------------------------------------
// The reverse() method returns the array in reverse order.
let strArr = ['ajeet', 'Ananya', 'Rangeeta', 'Ankit', 'Ashwani', 'Alok'];
console.log(strArr)
console.log(strArr.reverse())
console.log(strArr)
// Note: The reverse() method reverses the order of elements in place, it means the method changes the original array.
let numArr = [10,20,30,40,50,60]
console.log(numArr)
let numReverseArray = numArr.reverse()
console.log('revese array',numReverseArray)
console.log('orignal array',numArr)

let nnumArr = [10,20,30,40,50,60]
let nnumReverseArray = [100,...nnumArr].reverse()
console.log('revese array but without chnage orignal array',nnumReverseArray)
console.log('orignal array',nnumArr)