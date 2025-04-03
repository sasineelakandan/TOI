let arr=[2,4,3,2,6,4,5,6,7,1,4,7]

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
      for(j=0;j<i;j++){
        if(arr[i]==arr[j]){
            arr.splice(i,1)
            i--
        }
      }
    }
}

console.log(arr)