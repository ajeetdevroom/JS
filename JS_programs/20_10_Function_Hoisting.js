hoist_function();  
function hoist_function() { 
   console.log("foo"); 
} 
// output
foo 



// Function Expression and Function Declaration
// Function expression and function declaration are not synonymous. 
// Unlike a function expression, a function declaration is bound by the function name.

// The fundamental difference between the two is that, 
// function declarations are parsed before their execution. 
// On the other hand, 
// function expressions are parsed only when the script engine encounters it during an execution.

// When the JavaScript parser sees a function in the main code flow, 
// it assumes function declaration. When a function comes as a part of a statement, 
// it is a function expression.
