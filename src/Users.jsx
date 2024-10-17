import { useEffect, useState } from "react"
import './Uesers.css'
import Ueser from "./Ueser"
export default function Users() {
     const [count,setCount]=useState([])
     useEffect(()=>{
          fetch('https://jsonplaceholder.typicode.com/users')
          .then(res=>res.json())
          .then(data=>setCount(data))
     },[])
  return (
    <div className="beautiful">


     <h4>Users:{count.length}</h4>
     {
          count.map(Name=> <Ueser SingleName={Name} />)
     }


     </div>
  )
}
