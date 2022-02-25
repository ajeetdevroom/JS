// Recursion
function factorial(num) { 
    if(num <= 0) { 
       return 1; 
    } else { 
       return (num * factorial(num-1)  ) 
    } 
 } 
 console.log(factorial(6)) 
//  output 
// 720 


// Anonymous Recursive Function
//  The function calls itself using a pair of parentheses (). 
(function() { 
    var msg = "Hello World" 
    console.log(msg)
 })()

//  output
// Hello World 