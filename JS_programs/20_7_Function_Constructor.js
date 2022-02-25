
// Function Constructor
var func = new Function("x", "y", "return x*y;"); 
function product() { 
   var result; 
   result = func(10,20); 
   console.log("The product : "+result)
} 
product()

// In the above example, the Function() constructor is used to define an anonymous function. 
// The function accepts two parameters and returns their product.
// output 
// The product : 200