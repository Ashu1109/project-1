'use client'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useRouter } from "next/navigation";
import Loading from '../loading'
import Link from 'next/link';
import { toast } from 'react-toastify';
import { Context } from '../../Context/TokenContext';
const Profile = () => {
    const router = useRouter();
    const [token,setToken] = useContext(Context)
    const [loading,setLoading] = useState(false);
    const [user,setUser] = useState({
        email:"",
        password:"",
    })
    const HandleClick = async () => {
        try {
            setLoading(true)
            const res = await axios.post("api/login",user);
            const data = res.data;
            axios.get('/api/me').then(res=>res.data).then(data=>setToken(data.token));
            if(data.success==true){
                toast.success(data.message)
            }
            else{
                toast.error(data.message)
            }
            setLoading(false);
            router.push("/profile");
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false);
        }
    }
    return (loading?<Loading />:
        <div className='flex bg-indigo-100 flex-col min-h-screen items-center pt-10 justify-start md:justify-center'>
            <div className=' max-h-full w-72  md:w-1/2 rounded-xl flex flex-col items-center justify-center bg-indigo-300'>
                <div className='mt-4 text-3xl mb-6 font-serif'>Login</div>
                <label className='m-0.5 text-xl' htmlFor="email">Email</label>
                <input placeholder='Enter Email' onChange={(e)=>{setUser({...user,email:e.target.value})}} value={user.email} className='m-0.5 rounded p-3 text-black focus:outline-slate-300 ' id='email' type="email" />
                <label className='m-0.5 text-xl' htmlFor="password">Password</label>
                <input placeholder='Enter Password' onChange={(e)=>{setUser({...user,password:e.target.value})}} value={user.password} className='m-0.5 rounded p-3 text-black focus:outline-slate-300 ' id='password' type="password" />
                <button onClick={HandleClick} className='mb-3  mt-8 bg-indigo-100 py-2 px-3 text-lg rounded'>Login</button>
                <Link className='text-lg mb-3' href={'/signup'}>SignUp?</Link>
            </div>
        </div>
    )
}

export default Profile;