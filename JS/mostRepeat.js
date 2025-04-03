let arr=[1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4]

let freq={}
for(let i=0;i<arr.length;i++){
    if(freq[arr[i]]){
        freq[arr[i]]+=1
    }else{
        freq[arr[i]]=1
    }
}
let max=0
let key=''
for(let i in freq){
   if(freq[i]>max){
     max=freq[i]
     key=i
   }
}

console.log(key)