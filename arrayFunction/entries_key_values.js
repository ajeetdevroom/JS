
let arr=['ajeet','mohit','ramesh','rahul'];
console.log(arr)
// The entries() method returns a new Array Iterator object containing key/value pairs for each array index.
let keyValueArr=arr.entries()
console.log('keyValueArr ',keyValueArr)
for(let elm of keyValueArr){
    console.log(elm)
}
// -----------------------------------------------------------------------------------------------------

// The keys() method returns a new Array Iterator object that contains the keys for each element in the array.
let keyArr=arr.keys()
console.log('keyArr ',keyArr)
for(let elm of keyArr){
    console.log(elm)
}
// -----------------------------------------------------------------------------------------------------

// The values() method returns a new Array Iterator object that contains the values for each index in the array.
let valueArr=arr.values()
console.log('valueArr ',valueArr)
for(let elm of valueArr){
    console.log(elm)
}


