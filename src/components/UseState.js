import React, { useState } from 'react'

function UseState() {
    const[count,setCount]=useState(0);
    const [name,setName] = useState('Jalan');
    const handleIncrementCounter=()=>{
      setCount(prev=>prev+1);//if we are dependent on the previous states we use the prev state and change the value accordingly
    }
    const handleNameChange=()=>{
      setName('Pradip');// if we are not dependent on the previous states we can just passOn the new value
    } 
  return (
      <>
    <h1>Hello my name is {name} and you have clicked the button {count} times</h1>
    <button onClick={handleIncrementCounter}>Click Me to increment the counter</button>
    <button onClick={handleNameChange}>Click me to change my name</button>
    </>
  )
}

export default UseState
