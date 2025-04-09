import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[number,setNumber]=useState(0)
  const squred=useMemo(()=>{
    console.log('expensive colculation there')
     return number*number
  },[number])

  return (
    <>
      <input onChange={(e)=>setNumber(Number(e.target.value))} type="text" />
     
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>{number} of {squred}</p>
        
      </div>
      
      
    </>
  )
}

export default App
