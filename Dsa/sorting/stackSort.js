let arr=[1,5,7,8,9,6,4,3,2]

let tempstck=[]

while(arr.length){

    let temp=arr.pop()

    while(tempstck.length&&tempstck[tempstck.length-1]>temp){
        arr.push(tempstck.pop())
    }

    tempstck.push(temp)
}

console.log(tempstck)