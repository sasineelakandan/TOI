let arr=[-4,-6,9,0,74,5,7,-2,null,undefined,false]
let sum=0
// for(let i=0;i<arr.length;i++){
//   if(arr[i]>0){
//     sum+=arr[i]
//   }
// }

// sum=arr.reduce((a,b)=>{
//     if(b>0){
//      a+=b
//     }
//    return a
    
// },0)
let i=0
// while(i<arr.length){
//     if(arr[i]>0){
//         sum+=arr[i]
//     }
//     i++
// }

do{
    if(arr[i]>0){
                sum+=arr[i]
    }
            i++
}while(i<arr.length)


console.log(sum)