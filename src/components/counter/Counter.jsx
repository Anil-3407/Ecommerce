import React from 'react'
import "./Counter.css"
import { useState } from 'react'
const Counter = () => {
  let[state,setState]=useState(0);
  const increaseCount=()=>{
    setState(state+1);
  }
  const decreaseCount=()=>{
    if(state!=0){
        setState(state-1)
    }
    
  }
  return (
    <div className='countApp'>
        <h2>Counter App</h2>
        <h3>Count Value is: {state}</h3>
        <button onClick={increaseCount}>IncCount</button> 
        <button onClick={decreaseCount}>DecsCount</button>
    </div>
  )
}

export default Counter