import React from 'react'
import { useState } from 'react'

const useContext = () => {

  const [isToggle,setToogle]=useState(false)
  return {isToggle,setToogle}
    
  
}

export default useContext