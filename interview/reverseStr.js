// without built-in function
function reversStr(str)
{
    let newStr=" ";
    for (i=str.length -1;i>=0;i--){
        newStr += str[i]
    }
    return newStr;
}
reversStr("alok")

// with built-in function
function recStr(str){ return str.split("").reverse().join("")}
recStr("rangeeta")