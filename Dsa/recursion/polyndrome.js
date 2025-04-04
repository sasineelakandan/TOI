let str='malayalamk'

function recursion(str,start=0,end=str.length-1){
    if(start>end){
        return true
    }

    if(str[start]!==str[end]){
        return false
    }

    return recursion(str,++start,--end)



}

console.log(recursion(str))