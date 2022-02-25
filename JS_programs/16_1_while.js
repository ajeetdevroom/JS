// Indefinite Loop:An indefinite loop is used when the number of iterations in a loop is indeterminate or unknown.
var num = 5;
var factorial = 1;
while(num >=1) {
   factorial = factorial * num;
   num--;
}
console.log("The factorial is "+factorial);