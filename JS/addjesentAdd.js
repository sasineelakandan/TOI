

let arr=[1,2,3,11,2,2,5,5,5,7,8,8]

for(let i=0;i<arr.length;i++){
    let start=i
    if(arr[i]%2!==0&&arr[i+1]%2!==0){
       while(arr[i]%2!==0&&i<arr.length){
         i++
       }
      arr.splice(start,i-start)
      i=Math.max(0,start)
       
    }
}

console.log(arr)