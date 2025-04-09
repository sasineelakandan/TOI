import { useState,createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child1 from './Child1'

export const themeContext=createContext()

function App() {
  
  const [isTogle,toggle]=useState(false)

  return (
    <themeContext.Provider value ={{isTogle ,toggle}}>
     <Child1 />
    </themeContext.Provider>
  )
}

export default App
