let str='abcdeefffgggggg'
let curr=''
let max=''
for(let i=0;i<str.length;i++){
   if(curr[curr.length-1]===str[i]){
    curr+=str[i]
   }else{
    curr=str[i]
   }

   max=curr.length<max.length?max:curr

}

console.log(max)