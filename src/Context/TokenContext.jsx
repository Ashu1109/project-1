'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
export const Context = createContext();
export function ContextProvider({children}) {
    const [token,setToken] = useState("");
    console.log(token);
    useEffect(()=>{
        axios.get('/api/me').then(res=>res.data).then(data=>setToken(data.token));
    },[])
  return (
    <Context.Provider value={[token,setToken]}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider