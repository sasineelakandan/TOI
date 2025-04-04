let str='a1b2c3d14'
let res=''
for(let i=0;i<str.length;i++){
    let char=str[i]
    let count=''
    while(i+1<str.length&&Number(str[i+1])){
        count+=str[i+1]
        i++
    }

    count=Number(count)
    for(let i=0;i<count;i++){
       res+=char 
    }
}

console.log(res)