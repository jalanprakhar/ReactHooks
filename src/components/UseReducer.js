import React, { useReducer } from 'react'

const reducer=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        default:
            return state;
    }
}
const initialState=0;
function UseReducer() {

    const [state,dispatch]=useReducer(reducer,initialState);



  return (
    <div style={{textAlign:"center"}}>
      <p>{state}</p>
      <br />
      <button onClick={()=>{dispatch({type:'INCREMENT'})}}>Increment</button>
      <br />
      <button onClick={()=>{dispatch({type:'DECREMENT'})}}>Decrement</button>
    </div>
  )
}

export default UseReducer
