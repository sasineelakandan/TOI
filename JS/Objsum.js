const ab = [{a:[3,34,33],n:34},{a:[3,34,33],n:34},{a:[3,34,33],n:34},{a:[3,34,33],n:34}]
let sum=0
// for(let i=0;i<ab.length;i++){
//     let obj=ab[i]
//     for(let j in obj){
//       if(Array.isArray(obj[j])){
//         sum+= obj[j].reduce((a,b)=>a+b)
//       }else{
//         sum+=obj[j]
//       }
//     }
// }

// console.log(sum)

const abc = [{price:3,pl:34},{price:3,pl:34},{price:343,pl:34}]
let count=0
for(let i=0;i<abc.length;i++){
    let obj=abc[i]

    for(let j in obj){
        if(j=='price'){
            count++
            sum+=obj[j]
        }
    }
}

let avg=Math.floor(sum/count)

console.log(avg)