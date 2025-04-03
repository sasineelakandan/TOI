let arr=[0,87,8,3,4,5,9,0,9,8]
let j=0
for(let i=0;i<arr.length;i++){
    if(arr[i]!=0){
        
       
        if(i!=j){
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
        j++
    }
}

console.log(arr)