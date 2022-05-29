import React, { useState } from 'react'

function UseStateObject() {
    const [myObject,setMyObject]=useState({
        name:"Prakhar",
        age:21,
        degree:"IT"
    })
    const handleUpdate=()=>{
        setMyObject({...myObject,name:"Pradip"})
    }
  return (
    <div>
      <h1>Name : {myObject.name} & age : {myObject.age} & degree : {myObject.degree}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  )
}

export default UseStateObject
