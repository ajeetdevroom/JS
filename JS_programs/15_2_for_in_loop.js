// Definite Loop:A loop whose number of iterations are definite/fixed is termed as a definite loop.
// The for...in loop is used to loop through an object's properties.
var obj = {a:1, b:2, c:3};

for (var prop in obj) {
   console.log(obj[prop]);
}

// output 
// 1
// 2
// 3