// The forEach() method executes a provided function for each array element.
// forEach() does not change the original array.
// forEach() executes callback once for each array element in order.
// forEach() does not execute callback for array elements without values.

function printElements(element, index) {
    console.log('Array Element ' + index + ': ' + element);
}
const prices = [1800, 2000, 3000, , 5000, 500, 8000];
// forEach does not execute for elements without values
// in this case, it skips the third element as it is empty
prices.forEach(printElements);
// Array Element 0: 1800
// Array Element 1: 2000
// Array Element 2: 3000
// Array Element 4: 5000
// Array Element 5: 500
// Array Element 6: 8000

let keyArr=arr.keys()
for(let elm of keyArr){
    console.log(elm)
}