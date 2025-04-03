

function *gn(){
    for(let i=1;i<=100;i++){
        if(i%2==0){
            yield i
        }
    }
}

let res=gn()

let start=new Date()
for(let i of res){
    if(new Date()-start<6){
        console.log(i)
    }
}

