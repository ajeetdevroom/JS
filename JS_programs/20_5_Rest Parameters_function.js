// Rest parameters doesn’t restrict the number of values that you can pass to a function. 
// However, the values passed must all be of the same type.
function fun1(...params) { 
    console.log(params.length); 
 }  
 fun1();  
 fun1(5); 
 fun1(5, 6, 7);

// output 
// 0 
// 1 
// 3