import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React,{ useCallback } from 'react'

const Child=React.memo(({onClick})=>{
  console.log('child renderd')
  return(
    
    <>

    <button onClick={onClick} >click</button>
    </>
  )
})

function App() {
  const [count, setCount] = useState(0)
  const [text,setText]=useState('')

  const handleclick=useCallback(()=>{
      setCount((prev)=>prev+1)
  },[count])

  return (
    <>
      <Child onClick={handleclick} />
      <input onChange={(e)=>setText(e.target.value)} type="text" />
    </>
  )
}

export default App
