// Generators are denoted by suffixing the function keyword with an asterisk; otherwise,
// their syntax is identical to regular functions.
// Note − Generator functions cannot be represented using arrow functions.
"use strict" 
function* rainbow() { 
   // the asterisk marks this as a generator 
   yield 'red'; 
   yield 'orange'; 
   yield 'yellow'; 
   yield 'green'; 
   yield 'blue'; 
   yield 'indigo'; 
   yield 'violet'; 
} 
for(let color of rainbow()) { 
   console.log(color); 
} 

// output 
// red
// orange
// yellow
// green
// blue
// indigo
// violet


function* ask() { 
    const name = yield "What is your name?"; 
    const sport = yield "What is your favorite sport?"; 
    return `${name}'s favorite sport is ${sport}`; 
 }  
 const it = ask(); 
 console.log(it.next()); 
 console.log(it.next('Ethan'));  
 console.log(it.next('Cricket'));
//  output 
//  { value: 'What is your name?', done: false }
// { value: 'What is your favorite sport?', done: false }
// { value: "Ethan's favorite sport is Cricket", done: true }