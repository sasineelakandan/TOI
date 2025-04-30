import express from 'express'
import fs from 'fs'
const app=express()

app.get('/',(req,res)=>{
    try{
        
       
         
           if( fs.existsSync('file.txt')){
            console.log ('hai')
            fs.appendFileSync('file.txt',`${new Date()}\n`)
           }else{
            fs.writeFileSync('file.txt',`${new Date()}`)
           }
           
        res.send('hello world')
    
    }catch(err){
        console.log(err)
    }
})


app.listen(8000,()=>{
    console.log('server start')
})