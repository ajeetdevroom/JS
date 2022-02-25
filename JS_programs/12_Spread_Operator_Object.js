// Spread Operator and Object copy and concatenation
 //copy object
 let student1 ={firstName:'Mohtashim',company:'TutorialsPoint'}
 let student2 ={...student1}
 console.log(student2)
 //concatenate objects
 let student3 = {lastName:'Mohammad'}
 let student4 = {...student1,...student3}
 console.log(student4)

//  The output 
// {firstName: "Mohtashim", company: "TutorialsPoint"}
// {firstName: "Mohtashim", company: "TutorialsPoint", lastName: "Mohammad"}