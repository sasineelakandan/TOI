let arr=[1,3,5,6,8,9,2,4]

function recursion(arr,i=0,sum=0){
   
    if(i>=arr.length){
        return sum
    }

    sum+=arr[i]
    return recursion(arr,++i,sum)
}
console.log(recursion(arr))