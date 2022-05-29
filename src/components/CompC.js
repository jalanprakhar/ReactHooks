import React, { useContext } from 'react'
import { BioData } from './UseContext'

const CompC = () => {
    const myObj=useContext(BioData);
  return (
    <div>
      <h1>Hello from component C this is {myObj.name}</h1>
    </div>
  )
}

export default CompC
