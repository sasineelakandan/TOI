let Input= "leetcode"
// Output: '-'
let obj={}
for(let i=0;i<Input.length;i++){
    if(obj[Input[i]]){
        obj[Input[i]]+=1
    }else{
        obj[Input[i]]=1
    }
}
let res=''
for(let i in obj){
    if(obj[i]==1){
        res=i
        break
    }
}
let b=Object.values(obj)
let novalue=b.every((val)=>val>1)
if(novalue){
    console.log('-')
}
console.log(res)