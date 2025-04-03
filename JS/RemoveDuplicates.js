let arr = [3,1,2,3,3,3,3,4,4,5,7,7]

for(let i=0; i<arr.length; i++){
    
    for(let j=0; j<arr.length; j++){
        if(arr[i]==arr[j]&&i!=j){
            
            arr.splice(i,1)
            
        }
    }
    
}

console.log(arr)