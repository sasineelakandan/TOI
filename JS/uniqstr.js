let str='helloworlddyttt'
let freq={}
let uniq=''
for(let i=0;i<str.length;i++){
    if(freq[str[i]]){
        freq[str[i]]+=1
    }else{
        freq[str[i]]=1
        uniq+=str[i]
    }
}

console.log(uniq)