// Functions that are not bound to an identifier (function name) are called as anonymous functions.
// These functions are dynamically declared at runtime.
// Variables can be assigned an anonymous function. Such an expression is called a function expression


// Anonymous Function
var f = function(){ return "hello"} 
console.log(f()) 
// output 
// hello 


// Anonymous Parameterized Function
var func = function(x,y){ return x*y }; 
function product() { 
   var result; 
   result = func(10,20); 
   console.log("The product : "+result) 
} 
product()
// output
// The product : 200 