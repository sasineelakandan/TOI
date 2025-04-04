let arr=[1,3,5,6,8,9,2,4]

function recursion(arr,start=0,end=arr.length-1){
    if(start>end){
        return arr
    }

    [arr[start],arr[end]]=[arr[end],arr[start]]

    return recursion(arr,++start,--end)



}

console.log(recursion(arr))