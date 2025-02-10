import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const CaptainSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setfirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [captainData, setCaptainData] = useState({})
  const submitHandler = (e) => {
    e.preventDefault()
    setCaptainData({
        fullName: {
            firstName: firstName,
            lastName: lastName,
        },
        email: email,
        password: password,
    })
    setfirstName('')
    setLastName('')
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
            <h3 className='text-lg font-medium mb-2'>What's your full name</h3>
            <div className='flex gap-4 mb-6'>
                <input    
                    value={firstName}  
                    onChange={(e)=>{
                        setfirstName(e.target.value)
                    }}              
                    className='bg-[#eeeeee] px-4 py-2 rounded border w-1/2 text-lg placeholder:text-medium'
                    required type='text' 
                    placeholder='First name'/>
                <input
                    value={lastName}
                    onChange={(e)=>{
                        setLastName(e.target.value)
                    }}  
                    className='bg-[#eeeeee] px-4 py-2 rounded border w-1/2 text-lg placeholder:text-medium'
                    required type='text' 
                    placeholder='Last name'/>
            </div>
            <h3 className='text-lg font-medium mb-2'>What's your email</h3>
            <input 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-6 px-4 py-2 rounded border w-full text-lg placeholder:text-medium'
            required type='email' 
            placeholder='email@gmail.com'/>
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            className='bg-[#eeeeee] mb-6 px-4 py-2 rounded border w-full text-lg placeholder:text-medium'
            required type='password' 
            placeholder='password'/>
            <button
            className='bg-[#111] text-white font-semibold mb-3 px-4 py-2 rounded w-full text-lg placeholder:text-base'>Signup</button>
            
        </form>
        <p className='text-center'>Already have an account? <Link className='text-blue-600 hover:underline' to='/captain-login'>Login here</Link></p>
        </div>
        <div className="w-full py-6 text-center leading-tight text-gray-600 text-sm">
            
            <p className="mb-2">
                By signing up, you agree to Uber’s  
                <Link to="/terms" className="text-black font-medium hover:underline mx-1">Terms of Service</Link> 
                and  
                <Link to="/privacy" className="text-black font-medium hover:underline mx-1">Privacy Policy</Link>.
            </p>
            
        </div>
    </div>
  )
}

export default CaptainSignup