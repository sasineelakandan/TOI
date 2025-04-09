import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count,setCount]=useState(0)
  const [isRunning, setRunning] = useState(false)

  useEffect(()=>{
    let time=setInterval(()=>{
      if(isRunning){
         setCount((prev)=>prev+1)
      }
    },1000) 

    return ()=>clearInterval(time)
  },[isRunning])

  function handelestop(){
    setRunning((prev)=>!prev)
    setCount((prev)=>prev=0)
  }

  return (
    <>
    <button onClick={()=>setRunning((prev)=>!prev)}  >start</button>
    <p>{count}</p>
    <button onClick={()=>setRunning((prev)=>!prev)} >pause</button>
    <button onClick={handelestop} >stop</button>
  

    </>
  )
}

export default App
