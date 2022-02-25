// The continue statement skips the subsequent statements in the current iteration 
// and takes the control back to the beginning of the loop.

var num = 0
var count = 0;
for(num = 0;num <= 20;num++) {
   if (num % 2 == 0) {
      continue
   }
   count++ //skip the point when num will be event 
}
console.log(" The count of odd values between 0 and 20 is: "+count)

// output 
// The count of odd values between 0 and 20 is: 10