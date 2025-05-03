let str='olleh dlrow'
let ind;
for(let i=0;i<str.length;i++){
    if(str[i]==' '){
        ind=i
    }
}
let str1=''
for(let i=ind-1;i>=0;i--){
   str1+=str[i] 
}

let str2=''
for(let i=str.length-1;i>=ind;i--){
   str2+=str[i] 
}
console.log(str1+' '+str2)