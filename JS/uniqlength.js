let str='ababcabcdabcde'

let max=''
let curr=''

for(let i=0;i<str.length;i++){
    let index=curr.indexOf(str[i])
    if(index!=-1){
        curr=curr.slice(index+1)
    }
    curr+=str[i]

    max=max.length<curr.length?curr:max
}

console.log(max)