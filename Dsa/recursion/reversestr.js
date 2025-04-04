let str='karate hit'
let res=''
function recursion(str,i=str.length-1){
    if(i<0){
        return res
    }
   
    res+=str[i]
    return recursion(str,--i)

}

console.log(recursion(str))