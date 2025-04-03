let arr=[2,3,4,5,6,7,8,9]

for(let i=0;i<arr.length;i++){
    let notPrime=false
    for(let j=2;j<arr[i];j++){
      if(arr[i]%j==0){
        notPrime=true
        break
      }
    }
 if(!notPrime){
    arr.splice(i,1)
 }
}

console.log(arr)