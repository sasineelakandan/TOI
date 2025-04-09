import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useContext from './useContext'
function App() {
  const {isToggle, setToogle} = useContext()
function handleClick(){
  setToogle((prev)=>!prev)
}
  return (
    <>
      <button style={isToggle?{backgroundColor:'green'}:{backgroundColor:'red'}} onClick={handleClick} >{isToggle?'unblock':'block'}</button>
    </>
  )
}

export default App
