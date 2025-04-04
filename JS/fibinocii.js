let arr=[0,1]

for(let i=0;i<arr.length;i++){
    let nextvalue=arr[i]+arr[i+1]
    if(nextvalue<100){
        arr.push(nextvalue)
    }
}

console.log(arr)