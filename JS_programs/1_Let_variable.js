var no = 10; 
var no = 20; 
console.log(no);
// 20


"use strict" 
function test() { 
   var num = 100 
   console.log("value of num in test() "+num)
   { 
      console.log("Inner Block begins") 
      let num = 200 
      console.log("value of num : "+num)  
   } 
} 
test()
// value of num in test() 100 
// Inner Block begins 
// value of num : 200

let count = 100
for (let count = 1;count <= 10;count++){
    //inside for loop brackets ,count value starts from 1
    console.log("count value inside loop is ",count);
}
//outside for loop brackets ,count value is 100
console.log("count value after loop is",count);

if(count == 100){
    //inside if brackets ,count value is 50
    let count = 50;
    console.log("count inside if block",count);
}
console.log(count);


// count value inside loop is 1
// count value inside loop is 2
// count value inside loop is 3
// count value inside loop is 4
// count value inside loop is 5
// count value inside loop is 6
// count value inside loop is 7
// count value inside loop is 8
// count value inside loop is 9
// count value inside loop is 10
// count value after loop is 100
// count inside if block 50
// 100