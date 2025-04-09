import React from 'react'

const Child = ({setCount}) => {
 
function increment(){
    setCount((prev)=>prev+1)
}
    
  return (
    <div>Child
      
     <button onClick={increment} >inc</button>
    </div>
 
  )
}

export default Child