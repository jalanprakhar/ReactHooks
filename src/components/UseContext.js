import React, { createContext } from 'react'
import CompA from './CompA'
const BioData=createContext();
const UseContext = () => {
    const myObj={
        name:"Prakhar",
        age:21,
    }
  return (
    <BioData.Provider value={myObj}>
      <CompA/>
    </BioData.Provider>
  )
}

export default UseContext
export {BioData};
