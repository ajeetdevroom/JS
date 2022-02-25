var num = 5
var factorial=1;
for( let i = num ; i >= 1; i-- ) {
   factorial *= i ;
}
console.log(factorial);
// factorial output 
// 120

// Definite Loop:A loop whose number of iterations are definite/fixed is termed as a definite loop.
"use strict"
for(let temp, i = 0, j = 1; j<30; temp = i, i = j, j = i + temp)
console.log(j);


// Fibonacci output 
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21