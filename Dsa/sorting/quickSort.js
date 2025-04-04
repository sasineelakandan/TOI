let arr=[1,5,7,8,9,6,4,3,2]


function quickSort(arr){
  if(arr.length<=1){
    return arr
  }

  
  let pivot=arr[arr.length-1]
  let left=[]
  let right=[]
  for(let i=0;i<arr.length-1;i++){
     if(arr[i]<pivot){
        left.push(arr[i])
     }else{
        right.push(arr[i])
     }
  }

  return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort(arr))