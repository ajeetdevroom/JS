// The Logical AND assignment operator
let person = {
    firstName: 'Jane',
    lastName: 'Doe',
};
person.lastName &&= 'Smith';
console.log(person);

// example -2 
let person2 = {
    firstName: 'Jane',
    lastName: "",
};
person2.lastName &&= 'Smith';
console.log(person2);
//--------------------------------------------------------------------------
// The Logical OR assignment operator
let title;
title ||= 'untitled';

console.log(title);
// second example
let titled ="javascript logical operator";
titled ||= 'untitled';

console.log(titled);
//--------------------------------------------------------------------------
// The nullish coalescing assignment operator

let user = {
    username: 'Satoshi',
    nickname:undefined,
};
user.nickname ??= 'anonymous';

console.log(user);