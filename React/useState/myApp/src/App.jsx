import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState('')
  const [colors,setColor]=useState(false)

  // function increment(){
  //   setCount((prev)=>prev+1)
  // }

  // function decrement(){
  //   setCount((prev)=>prev-1)
  // }

  function addvalue(){
    setCount(count+Number(value))
    setValue('')
  }
  function toggle(){
    setColor((prev)=>!prev)
  }

  return (
    <>
    <button onClick={()=>setCount((prev)=>prev+1)} >inc</button>
     <p>{count}</p>
     <button onClick={()=>setCount((prev)=>prev-1)} > dec</button>
     
     <input value={value} onChange={(e)=>setValue(e.target.value)} type="text" /> <button onClick={addvalue} >Add</button>
      <button style={colors?{backgroundColor:'green' }:{backgroundColor:'red'}} onClick={toggle}>toggle</button>
    </>
  )
}

export default App
