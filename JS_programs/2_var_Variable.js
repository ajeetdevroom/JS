var num = 10 
function test() { 
   var num = 100 
   console.log("value of num in test() "+num) 
} 
console.log("value of num outside test() "+num) 
test()

// value of num outside test() 10
// value of num in test() 100


var balance = 5000
   console.log(typeof balance)
   var balance = {message:"hello"}
   console.log(typeof balance)

// number
// object