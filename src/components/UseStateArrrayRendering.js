import React from 'react'

function UseStateArrrayRendering() {
  const bioData=[
    {
      id:0,
      myName:"Prakhar",
      age:26
    },
    {
      id:1,
      myName:"Pradip",
      age:53
    },
    {
      id:2,
      myName:"Surabhi",
      age:52
    }
  ]
  const [array,setArray]=React.useState(bioData);
  const clearArray=()=>{
    setArray([]);
  }
  const handleRemove=(id)=>{
    const myNewArray=array.filter(cur=>cur.id!==id)
    setArray(myNewArray)
  }
  return (
    <>
      {/* <h1>My name is Prakhar</h1> */}
      {
        array.map((curElement)=>{
          return (
            <>
            <h1 key={curElement.id}>Name : {curElement.myName} and age:{curElement.age}</h1>
            <button onClick={()=>handleRemove(curElement.id)}>Remove</button>
            </>
          )
        })
      }
      <button onClick={clearArray}>Clear</button>
    </>
  )
}

export default UseStateArrrayRendering;
