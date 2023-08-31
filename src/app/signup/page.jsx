'use client'
import React, { useState } from 'react'
import axios from 'axios';
import { useRouter } from "next/navigation";
import Loading from '../loading';
import {toast} from 'react-toastify'
import Link from 'next/link';
const OnSignUp = () => {
    const [loading,setLoading] = useState(false);
    const router = useRouter();
    const [user,setUser] = useState({
        email:"",
        password:"",
        username:"",
    })
    const handleClick = async () => {
        try {
            setLoading(true);
            const res = await axios.post("api/signup",user);
            const data = res.data;
            console.log("SignUp success",data);
            if(data.success==true){
                toast.success(data.message)
            }
            else{
                toast.error(data.message)
            }
            setLoading(false);
            router.push("/login");
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false);
        }
    }
    return (loading?<Loading />:
        <div className=' bg-indigo-100 flex flex-col min-h-screen pt-10 md:justify-center items-center justify-start'>
            <div className='h-3/4 w-72 md:w-1/2  rounded-xl flex flex-col items-center justify-center bg-indigo-300'>
                <div className='mt-4 text-3xl mb-5 font-serif'>Sign Up</div>
                <label className='m-0.5 text-lg' htmlFor="username">UserName</label>
                <input placeholder='Enter Your Name' onChange={(e)=>{setUser({...user,username:e.target.value})}} value={user.username} className='m-0.5 rounded p-2 text-black focus:outline-slate-300 ' id='username' type="text" />
                <label className='m-0.5 text-lg' htmlFor="email">Email</label>
                <input placeholder='Enter Email' onChange={(e)=>{setUser({...user,email:e.target.value})}} value={user.email} className='m-0.5 rounded p-2 text-black focus:outline-slate-300 ' id='email' type="email" />
                <label className='m-0.5 text-lg' htmlFor="password">Password</label>
                <input placeholder='Enter Password' onChange={(e)=>{setUser({...user,password:e.target.value})}} value={user.password} className='m-0.5 rounded p-2 text-black focus:outline-slate-300 ' id='password' type="password" />
                <button onClick={handleClick} className='mb-4  mt-5 bg-indigo-100 py-2 px-3 rounded'>Sign Up</button>
                <Link className=' text-lg mb-2 ' href={'/login'}>Already SignUp?</Link>
            </div>
        </div>
    )
}

export default OnSignUp