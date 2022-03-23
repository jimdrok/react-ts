import { useState } from "react"

export const Counter = () => {
  const [couter, setCouter] = useState(0);

  const increment = (number:number = 1):void =>{
    setCouter( couter + number)
  }
  return (
    <div className="mt-5">
      <h3>Counter: useState</h3>
      <span> Valor: {couter}</span>
      <br/>
      <button 
        onClick={ ()=> increment(1)}
        className="btn btn-outline-primary mt-2 ml-100 mx-auto">
          +1
      </button>
      <button 
        onClick={()=> increment(2) }
        className="btn btn-outline-primary mt-2">
          +2
      </button>
      <button 
        onClick={()=> setCouter(0)}
        className="btn btn-outline-danger mt-2">
          reset
      </button>
    </div>
  )
}
