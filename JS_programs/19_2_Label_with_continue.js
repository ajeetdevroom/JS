outerloop: // This is the label name
for (var i = 0; i < 3; i++) {
   console.log("Outerloop: " + i);
   for (var j = 0; j < 5; j++) {
      if (j == 3) {
      continue outerloop;
      }
      console.log("Innerloop: " + j );
   }
}

// Output
// Outerloop: 0
// Innerloop: 0
// Innerloop: 1
// Innerloop: 2
// Outerloop: 1
// Innerloop: 0
// Innerloop: 1
// Innerloop: 2
// Outerloop: 2
// Innerloop: 0
// Innerloop: 1
// Innerloop: 2