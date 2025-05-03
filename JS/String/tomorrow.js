let str='tomorow'
let count=0
let res=''
for(let i=0;i<str.length;i++){
    if(str[i]=='o'){
        count++
       res+=String(count) 
    }else{
        res+=str[i]
    }
}

console.log(res)