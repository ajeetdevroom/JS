const x = 10
x = 12 // will result in an error!!


const DEPT_NOS = [10,20,30,50]
DEPT_NOS.push(40)
console.log('dept numbers is ',DEPT_NOS)

const EMP_IDS = [1001,1002,1003]
console.log('employee ids',EMP_IDS)
//re assigning variable employee ids
EMP_IDS = [2001,2002,2003]
console.log('employee ids after changing',EMP_IDS)


// dept numbers is (5) [10, 20, 30, 50, 40]
// employee ids (3) [1001, 1002, 1003]
// Uncaught TypeError: Assignment to constant variable.