

function recursion(n){
    if(n<=1){
        return n
    }

    return recursion(n-1)+recursion(n-2)
}

console.log(recursion(10))


