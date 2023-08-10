let person ={
    firstName:"ajeet",
    lastName:"verma"
}

// let {firstName, lastName, middalName}=person;
// console.log("middalName  : ",middalName)
// let {firstName = fname,lastName = lname}=person;
// console.log("firstName  : ",firstName, lastName)
let { firstName, lastName, middleName = '', currentAge: age = 18 } = person;
console.log(firstName, lastName)

for (let prop in person){
    console.log(prop +" : "+person[prop])
}