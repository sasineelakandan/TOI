let max=-Infinity
let sl=-Infinity
let tl=-Infinity


let arr=[1,2,3,4,5,6,7,8,9,-10,-33,55,87,90]

for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        tl=sl
        sl=max
        max=arr[i]
    }

    if(arr[i]>sl&&arr[i]!=max){
        tl=sl
        sl=arr[i]
    }

    if(arr[i]>tl&&arr[i]!=sl&&arr[i]!=max){
        tl=arr[i]
    }
}

console.log(max,sl,tl)


