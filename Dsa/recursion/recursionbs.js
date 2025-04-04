let arr=[1,5,7,8,9,6,4,3,2]

function recursion(arr,t,start=0,end=arr.length-1){
 if(start>end){
    return -1
 }
  arr.sort((a,b)=>a-b)
  let mid=Math.floor((start+end)/2)
  if(arr[mid]==t){
    return mid
  }

  if(arr[mid]<t){
    return recursion(arr,t,++start,end)
  }else{
    return recursion(arr,t,start,--end)
  }


}

console.log(recursion(arr,9))