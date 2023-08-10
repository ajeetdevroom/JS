function checkPalindrom(string){
    const arrayValue = string.split("");
    const reverseArrayValue = arrayValue.reverse();
    const reverseString = reverseArrayValue.join("");
    if(string ==reverseString){
        console.log("the enter string is pallindrom string")
    }else{
        console.log("the enter string is not pallindrom string")
    }
}
const string = prompt('enter the string that want to check pallindrom')
checkPalindrom(string)