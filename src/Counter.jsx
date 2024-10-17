import { useState } from "react"


export default function Counter() {
     const [count,setCount]=useState(0)
     const addNum=()=>{
          setCount(count+1)
     }
     const removeNumber=()=>{
          setCount(count-1)
     }
  return (
    <div>
     <h5>Counter : {count} </h5>
     <button onClick={addNum}>add Number</button>
     <button onClick={removeNumber}>remove Number</button>
     </div>
  )
}
