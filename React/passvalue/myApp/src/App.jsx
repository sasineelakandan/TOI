import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './Child'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <p>{count}</p>
     <Child  setCount={setCount} />
    </>
  )
}

export default App
