let sm=Infinity
let ssm=Infinity
let tsm=Infinity


let arr=[1,2,3,4,5,6,7,8,9,-10,-33,55,87,90]

for(let i=0;i<arr.length;i++){
    if(arr[i]<sm){
        tsm=ssm
        ssm=sm
        sm=arr[i]
    }

    if(arr[i]<ssm&&arr[i]!=sm){
        tsm=ssm
        ssm=arr[i]
    }

    if(arr[i]<tsm&&arr[i]!=ssm&&arr[i]!=sm){
        tsm=arr[i]
    }
}

console.log(sm,ssm,tsm)


