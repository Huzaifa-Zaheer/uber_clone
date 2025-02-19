import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const CaptainSignup = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setfirstName] = useState('')
  const [lastName, setLastName] = useState('')
  
  const [ vehicleColor, setVehicleColor ] = useState('')
  const [ vehiclePlate, setVehiclePlate ] = useState('')
  const [ vehicleType, setVehicleType ] = useState('')
  const [ vehicleCapacity, setVehicleCapacity ] = useState('')


  const { captain, setCaptain } = React.useContext(CaptainDataContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    const CaptainData = {
        fullname: {
            firstname: firstName,
            lastname: lastName,
        },
        email: email,
        password: password,
        vehicle: {
            color: vehicleColor,
            plate: vehiclePlate,
            vehicleType: vehicleType,
            capacity: vehicleCapacity,
        },
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, CaptainData)
    
    if(response.status === 201) {   
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
    }

    setfirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setVehicleCapacity('')
    setVehiclePlate('')
    setVehicleColor('')
    setVehicleType('')
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
            <h3 className='text-lg font-medium mb-2'>Vehicle Details</h3>
            <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className='bg-[#eeeeee] mb-6 px-4 py-2 rounded border w-full text-lg'
                required
            >
                <option value="">Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="moto">Moto</option>
            </select>
            <input 
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                className='bg-[#eeeeee] mb-6 px-4 py-2 rounded border w-full text-lg placeholder:text-medium'
                required 
                type='text'
                placeholder='Vehicle Color'
            />
            <input 
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                className='bg-[#eeeeee] mb-6 px-4 py-2 rounded border w-full text-lg placeholder:text-medium'
                required 
                type='text'
                placeholder='Vehicle Plate Number'
            />
            <input 
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                className='bg-[#eeeeee] mb-6 px-4 py-2 rounded border w-full text-lg placeholder:text-medium'
                required 
                type='number'
                min="1"
                placeholder='Vehicle Capacity'
            />
            <button
            className='bg-[#111] text-white font-semibold mb-3 px-4 py-2 rounded w-full text-lg placeholder:text-base'>
                Create Captain Account
            </button>
            
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