import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {
  const inputref1 = useRef(null)
  const inputref2= useRef(null)

  const [input, setInput] = useState('')
  const [input1, setInput1] = useState('')
   const count=useRef(0)
  function handleinput(){
    setInput(inputref1.current.value)
    
  }
  function handleinput2(){
    setInput1(inputref1.current.value)
    
  }

  console.log(input1)
  console.log(input)

  function checking(){
    if(input==input1){
      console.log('same')
    }else{
      console.log('Not same')
    }
  }

  function Increment(){
    count.current+=1
    console.log('count',count.current)
  }

  return (
    <>
     <input  ref={inputref1} type="text" /> <button onClick={handleinput} >add</button>
     <input  ref={inputref2} type="text" /> <button onClick={handleinput2} >add</button>

     <button onClick={Increment} >incr</button>

     <button onClick={checking}>check</button>
    </>
  )
}

export default App
