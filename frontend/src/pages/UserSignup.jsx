import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'


const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setfirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})
  const navigate = useNavigate()
  const [ user, setUser ] = useContext(UserDataContext)
  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = ({
        fullname: {
            firstname: firstName,
            lastname: lastName,
        },
        email: email,
        password: password,
    })

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if (response.status === 201) {
        const data = response.data
        setUser(data.user)
        localStorage.setItem('token', data.token)
        navigate('/home')
    }

    setfirstName('')
    setLastName('')
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
        <p className='text-center'>Already have an account? <Link className='text-blue-600 hover:underline' to='/login'>Login here</Link></p>
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

export default UserSignup