import express from 'express'
import fs from 'fs'
const app=express()
const router=express.Router()

app.get('/',(req,res)=>{
    try{
        
       
         
          
           
        res.send('hello world')
    
    }catch(err){
        console.log(err)
    }
})

router.get('/user',(req,res)=>{
    try{
        
        res.send('from router')

    }catch(err){
        console.log(err)
    }
})

app.use('/api',router)

app.listen(8000,()=>{
    console.log('server start')
})