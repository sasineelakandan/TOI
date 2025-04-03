let promise1= new Promise((res)=>res(10))
let promise2= new Promise((rej)=>rej(10))
let promise3= new Promise((res)=>res(10))


let res= Promise.all([promise1,promise2,promise3])
res.then((val)=>{
    let sum=val.reduce((a,b)=>{
        return a+b
    })
    console.log(sum)
})