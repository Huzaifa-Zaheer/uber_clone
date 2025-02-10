import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})
  const submitHandler = (e) => {
    e.preventDefault()
    setUserData({
        email: email,
        password: password,
    })
    setEmail('')
    setPassword('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
            <h3 className='text-lg font-medium mb-2'>What's your email</h3>
            <input 
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              className='bg-[#eeeeee] mb-7 px-4 py-2 rounded border w-full text-lg placeholder:text-base'
              required type='email' 
              placeholder='email@gmail.com'/>
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input 
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              className='bg-[#eeeeee] mb-7 px-4 py-2 rounded border w-full text-lg placeholder:text-base'
              required type='password' 
              placeholder='password'/>
            <button
              className='bg-[#111] text-white font-semibold mb-3 px-4 py-2 rounded w-full text-lg placeholder:text-base'>Login</button>
            
        </form>
        <p className='text-center'>New here? <Link className='text-blue-600 hover:underline' to='/signup'>Create new account</Link></p>
        </div>
        <div>
            <Link to='/captain-login'
              className='bg-[#31c08e] flex items-center justify-center text-white font-semibold mb-5 px-4 py-2 rounded w-full text-lg placeholder:text-base'>
              Sign in as Captain</Link>
        </div>
    </div>
  )
}

export default UserLogin