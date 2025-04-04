let arr=[1,5,7,8,9,6,4,3,2]

function Bs(arr,t){
 
    arr.sort((a,b)=>a-b)
    let start=0
    let end=arr.length-1
    
    while(start<=end){
       
        let mid=Math.floor((start+end)/2)
        if(arr[mid]==t){
            return mid
        }

        if(arr[mid]<t){
            start=mid+1
        }

        if(arr[mid]>t){
            end=mid-1
        }
    }

    return start

}

console.log(Bs(arr,10))