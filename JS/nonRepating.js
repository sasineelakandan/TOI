let str='malayalam'

let freq={}
let uniq=''
for(let i=0;i<str.length;i++){
    if(freq[str[i]]){
        continue
    }else{
        freq[str[i]]=1
        uniq+=str[i]
    }
}

console.log(uniq)