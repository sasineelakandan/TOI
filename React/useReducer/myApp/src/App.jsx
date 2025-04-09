import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react'

function reducerFn(state,action){
   switch(action.type){
    case 'increment':
     return {count:state.count+1}
    case 'decrement':
    return {count:state.count-1}
    case 'default':
      return state
   }
}

function App() {
  const intialstate={count:0}
const [state,dispatch]=useReducer(reducerFn,intialstate)
  return (
    <>
    <button onClick={()=>dispatch({type:'increment'})}>+</button>
      <p>{state.count}</p>
    <button onClick={()=>dispatch({type:'decrement'})}>-</button>
    </>
  )
}

export default App
