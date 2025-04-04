let arr=[1,5,7,8,9,6,4,3,2]

let swaped

do{
    swaped=false
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            let temp=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp
            swaped=true
        }
    }
}while(swaped)


console.log(arr)