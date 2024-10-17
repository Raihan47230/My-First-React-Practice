

export default function Ueser({SingleName}) {
     // console.log(SingleName)
     const{name,email}=SingleName
  return (
    <div className="beautiful">
     <h5>Name:{ name} </h5>
     <p>Email:{email} </p>
    </div>
  )
}
