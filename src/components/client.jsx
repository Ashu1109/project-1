'use client'
import { useContext, useEffect, useReducer, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../Context/TokenContext";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
export const LogoutBtn = () => {
  const route = useRouter()
const [token,setToken] = useContext(Context);
  const logoutHandler = async () => {
    try {
      const res = await fetch("/api/logout");

      const data = await res.json();
      setToken(undefined);
      route.push('/');
      if (!data.success) toast.error(data.message);

      toast.success(data.message);
    } catch (error) {
      return toast.error(error.message);
    }
  };
    return (<>{token==undefined?<Link className='p-2 text-xl hover:text-indigo-100' href={"/login"}>Login</Link>:<button onClick={logoutHandler}  className='p-2 text-xl hover:text-indigo-100'>Logout</button>}</>)
}


export const TodoButton = ({id,isComplete}) => {
  const router = useRouter();
  const [loading,setLoading] = useState(false);
  const deleteHandler =  async(id) =>{
    try {
      setLoading(true);
      const res = await axios.delete(`/api/task?id=${id}`)
      const data = res.data;
      setLoading(false);
      router.refresh();
      if(!data.success) return toast.error(data.message)
      toast.success(data.message)
    } catch (error) {
      return toast.error(error)
    }finally{
      setLoading(false);
    }
  }
  return (loading?"Loading...":<>
      {/* <input  className="w-8 h-8 mr-3 rounded-xl " defaultValue={isComplete} type="checkbox" name="" id="" /> */}
      <button onClick={()=>{deleteHandler(id)}} className="p-4 text-lg bg-slate-100 rounded">Delete</button>
        </>)
}