// Lambda Functions
// Lambda refers to anonymous functions in programming. 
// Lambda functions are a concise mechanism to represent anonymous functions. 
// These functions are also called as Arrow functions.

// Lambda Function - Anatomy
    // There are 3 parts to a Lambda function −
        // Parameters − A function may optionally have parameters.
        // The fat arrow notation/lambda notation (=>): It is also called as the goes to operator.
        // Statements − Represents the function’s instruction set.
        // ([param1, parma2,…param n] )=>statement;

// Example − Lambda Expression
var foo = (x)=>10+x 
console.log(foo(10))
// output 
// 20


// Example − Lambda Statement
// It is an anonymous function declaration that points to a block of code. 
// This syntax is used when the function body spans multiple lines. 
var msg = ()=> { 
    console.log("function invoked") 
 } 
 msg() 
 // output 
//  function  invoked 


// Syntactic Variations
// Optional parentheses for a single parameter.
var msg = x=> { 
   console.log(x) 
} 
msg(10)
 // output 
//  10


// Optional braces for a single statement. Empty parentheses for no parameter.
var disp = ()=>console.log("Hello World") 
disp();

// Array.prototype.map() function. 
// The map() function executes the arrow function for each element in the array. 
// The arrow function in this case, displays each element in the array and its index.

   const names = ['TutorialsPoint','Mohtashim','Bhargavi','Raja']
   names.map((element,index) => {
      console.log('inside arrow function')
      console.log('index is '+index+' element value is :'+element)
   })
//    The output of the above code will be as given below −

//    inside arrow function
//    index is 0 element value is :TutorialsPoint
//    inside arrow function
//    index is 1 element value is :Mohtashim
//    inside arrow function
//    index is 2 element value is :Bhargavi
//    inside arrow function
//    index is 3 element value is :Raj

setTimeout(()=>{
    console.log('Learning at TutorialsPoint is fun!!')
 },1000)
//  output is shown after 1 second −
// Learning at TutorialsPoint is fun!!

   //constructor function
   function Student(rollno,firstName,lastName) {
    this.rollno = rollno;
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullNameUsingAnonymous = function(){
       setTimeout(function(){
          //creates a new instance of this ,hides outer scope of this
          console.log(this.firstName+ " "+this.lastName)
       },2000)
    }
    this.fullNameUsingArrow = function(){
       setTimeout(()=>{
          //uses this instance of outer scope
          console.log(this.firstName+ " "+this.lastName)
       },3000)
    }
 }
 const s1 = new Student(101,'Mohammad','Mohtashim')
 s1.fullNameUsingAnonymous();
 s1.fullNameUsingArrow();

//  When an anonymous function is used with setTimeout(), 
//  the function gets invoked after 2000 milliseconds.
//  A new instance of “this” is created and it shadows the instance of the Student function. 
//  So, the value of this.firstName and this.lastName will be undefined. 
//  The function doesn't use the lexical scope or the context of current execution. 
//  This problem can be solved by using an arrow function.

//  The output of the above code will be as follows −
// undefined undefined
// Mohammad Mohtashim