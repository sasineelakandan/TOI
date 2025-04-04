const arr = [2,4,8,9,12,3,4,9,13]

// output = [{a1:2,a2:13},{a1:2,a2:4,a3:9,a4:13},{a1:2,a2:4,a3:8,a4:4,a5:9,a6:13},{a1:2,a2:4,a3:8,a4:9,a5:3,a6:4,a7:9,a8:13},{a1:2,a2:4,a3:8,a4:9,a5:12,a6:3,a7:3,a8:4,a9:9,a10:13}]

let start=0
let end=arr.length-1
let res=[]
while(start<=end){
   let obj={}
   let key=1

   for(let i=0;i<=start;i++){
    obj[`a${key}`]=arr[i]
    key++
   }
  

   for(let i=end;i<arr.length;i++){
    obj[`a${key}`]=arr[i]
    key++
   }
   res.push(obj)
   start++
   end--

}

console.log(res)