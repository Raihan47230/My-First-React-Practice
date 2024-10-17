

export default function Event() {

     const hendeleClick1=()=>{
          alert('click me 1')
     }
     const hendeleClick2=(num)=>{
          alert(num+3)
     }
  return (
    <div>
     <p>Hello React World</p>
     <button onClick={hendeleClick1}>click me1</button>
     <button onClick={()=> hendeleClick2(12)}>click me 2</button>
    </div>
  )
}
