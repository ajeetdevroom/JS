// let person = [
//   {
//     name: "john",
//     age: 12,
//     gender: "male",
//     contact: {
//         phone: "934-379-1420",
//         email: "shaun2000@abc.com",
//         address: {
//           city: "London",
//           country: "United Kingdom",
//         },
//       },
//   },
//   {
//     name: "jane",
//     age: 15,
//     gender: "female",
//     contact: {
//         phone: "934-379-1420",
//         email: "shaun2000@abc.com",
//         address: {
//           city: "London",
//           country: "United Kingdom",
//         },
//       },
//   },
//   {
//     name: "julie",
//     age: 20,
//     gender: "trans",
//     contact: {
//         phone: "934-379-1420",
//         email: "shaun2000@abc.com",
//         address: {
//           city: "London",
//           country: "United Kingdom",
//         },
//       },
//   },
// ];
let person = 
    {
      name: "john",
      age: 12,
      gender: "male",
      contact: {
          phone: "934-379-1420",
          email: "shaun2000@abc.com",
          address: {
            city: "London",
            country: "United Kingdom",
          },
        },
    }
    
let data='[{"name":"John", "age":30, "city":"New York"},{"name":"sohan", "age":33, "city":"New delhi"},{"name":"mohan", "age":31, "city":"New jursy"}]'
const obj = JSON.parse(data)
let stringData = JSON.stringify(obj)

// array of object access
// person.forEach((item)=>{
//     console.log(item.contact);
// })
    
// for(let i of person){
//     console.log(i.gender)
// }
// console.log(person[0])


// object access
// console.log(person.name)
// console.log(person["name"])

// object change property value 
// console.log(person.name="mohan")
// console.log(person["name"]="mohan")

console.log(data)
console.log(obj)

console.log(stringData)
// obj.forEach(elm => {
//     console.log(elm)
// });
// for(let i of obj){
//     console.log(i)
// }
for(let i=0; i< 3; i++){
    console.log(obj[i])
}