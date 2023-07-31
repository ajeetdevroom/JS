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