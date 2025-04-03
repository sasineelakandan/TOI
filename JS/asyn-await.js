function myPromise(){
    return new Promise((res,rej)=>{
        let data=true
        setTimeout(()=>{
          if(data){
            res('data is comming')
          }else{
            rej('data is not comming')
          }
        },2000)
    })
}



async function myfunction() {
    try{
      let response= await myPromise()
      console.log(response)
    }catch(err){
        console.log(err)
    }
}

myfunction()