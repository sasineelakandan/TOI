let arr=[1,5,7,8,9,6,4,3,2]


for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[i]<arr[j]&&i!=j){
         let temp=arr[i]
         arr[i]=arr[j]
         arr[j]=temp
        }
    }
}

console.log(arr)