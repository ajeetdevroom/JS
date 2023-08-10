let stringData = "welcome* t(0 #javascript%";
let newString = stringData.replace(/[^a-zA-z]/g, "");
// console.log("without removing special char", stringData);
// console.log("removing special char",newString);
let target = 9;
//Output: [0,1]
let nums = [2, 7, 11, 15];
let result = (arr, targetValue) => {
    let resultArr=[];
  for (let i=0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] == targetValue) {
        resultArr.push(i)
       resultArr.push(i+1);
       return resultArr
    }
  }
};
console.log(result(nums, target));
