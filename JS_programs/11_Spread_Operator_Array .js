// Spread Operator
// ES6 provides a new operator called the spread operator. 
// The spread operator is represented by three dots “...” .

// The spread operator converts an array into individual array elements.
function addThreeNumbers(a,b,c){
    return a+b+c;
 }
 const arr = [10,20,30]
 console.log('sum is :',addThreeNumbers(...arr))
 console.log('sum is ',addThreeNumbers(...[1,2,3]))
// The output 
//  sum is : 60
// sum is 6


// Spread operator and Array copy and concat
 //copy array using spread operator
 let source_arr = [10,20,30]
 let dest_arr = [...source_arr]
 console.log(dest_arr)
 //  The output
// [10, 20, 30]
  
 //concatenate two arrays
 let arr1 = [10,20,30]
 let arr2 =[40,50,60]
 let arr3 = [...arr1,...arr2]
 console.log(arr3)
//  The output
// [10, 20, 30, 40, 50, 60]

