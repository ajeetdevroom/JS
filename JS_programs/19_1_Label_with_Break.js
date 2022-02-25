outerloop: // This is the label name
for (var i = 0; i < 5; i++) {
   console.log("Outerloop: " + i);
   innerloop:
   for (var j = 0; j < 5; j++){
      if (j > 3 ) break ; // Quit the innermost loop
      if (i == 2) break innerloop; // Do the same thing
      if (i == 4) break outerloop; // Quit the outer loop
      console.log("Innerloop: " + j);
   }
}
// output 
// Outerloop: 0
// Innerloop: 0
// Innerloop: 1
// Innerloop: 2
// Innerloop: 3
// Outerloop: 1
// Innerloop: 0
// Innerloop: 1
// Innerloop: 2
// Innerloop: 3
// Outerloop: 2
// Outerloop: 3
// Innerloop: 0
// Innerloop: 1
// Innerloop: 2
// Innerloop: 3
// Outerloop: 4