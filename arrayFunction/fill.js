// The fill() method returns an array by filling all elements with a specified value.
let fruit = ['Apple','orange','banana','grape'];
// console.log(fruit);
let fillArraywithNewElement = fruit.fill('fillNewOne')
// console.log()
// console.log(fruit);
let newfruit = ['Apple','orange','banana','grape'];
let addReplaceFruit = newfruit.fill('mango',1,2 )
// console.log(addReplaceFruit)
// modifies the original array and hence both
let orignalArray = ['Apple','orange','banana','grape'];
let replaceArray = [...orignalArray].fill('mango',-2,-1 )
console.log(orignalArray)
console.log(replaceArray)
//from back side
let orignalArr = ['Apple','orange','banana','grape'];
let replaceArr = [...orignalArr].fill('mango',-2 )
console.log(orignalArr)
console.log(replaceArr)