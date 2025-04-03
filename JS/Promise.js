let promise=new Promise ((res,rej)=>{

    let data=false
    setTimeout(()=>{
        if(data){
            res('data is comming')
        }else{
            rej('data not comming')
        }
    },2000)
})


promise.then((data)=>console.log(data)).catch((err)=>console.log(err))