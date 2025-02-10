import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const CaptainLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captainData, setCaptainData] = useState({})
  const submitHandler = (e) => {
    e.preventDefault()
    setCaptainData({
        email: email,
        password: password,
    })
    setEmail('')
    setPassword('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-16 mb-10' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
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
        <p className='text-center'>Join a fleet? <Link className='text-blue-600 hover:underline' to='/captain-signup'>Register as a Captain</Link></p>
        </div>
        <div>
            <Link to='/login'
            className='bg-[#f28744] flex items-center justify-center text-white font-semibold mb-5 px-4 py-2 rounded w-full text-lg placeholder:text-base'>
            Sign in as User</Link>
        </div>
    </div>
  )
}

export default CaptainLogin