import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch,useSelector } from 'react-redux'
import { increment,decrement } from './redux/slice'
function App() {
  const count=useSelector((state)=>state.counter.count)
  const dispatch=useDispatch()
  
  return (
    <>
     <button onClick={()=>dispatch(increment())} >
      +
     </button>
      <p>{count}</p>

      <button onClick={()=>dispatch(decrement())} >
      -
     </button>
    </>
  )
}

export default App
