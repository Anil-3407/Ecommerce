import { useState } from "react";
import "./Counter.css"

function Counter(){
    let[state,setState]=useState(0);
  const  increaseCount=()=>{
        setState(state+1)
    }
    return(
        <div className="counter">
            <h2>Counter App</h2>
            <h2>value is: {state}</h2>
            <button onClick={increaseCount}>Inc_count</button>
        </div>
    )
}
export default Counter;