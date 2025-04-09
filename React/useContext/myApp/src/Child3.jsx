import React from 'react'
import { useContext } from 'react'
import { themeContext } from './App'

const child3 = () => {
    const {isTogle,toggle}=useContext(themeContext)
   console.log(isTogle,toggle)
    
function handleclick(){
    console.log('hai')
    toggle((prev)=>!prev)
}
  return (
    <div>
     <button onClick={handleclick} style={isTogle?{backgroundColor:'red'}:{backgroundColor:'green'}} >{isTogle?'block':'unblock'}</button>
    </div>
  )
}

export default child3