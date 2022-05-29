import React, { useState } from 'react'

function Forms() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newObject={email,password};
        console.log(newObject);
    }
  return (
    
    <>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <label htmlFor="password">Password</label>
            <input type="password" name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}  />
            <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default Forms
