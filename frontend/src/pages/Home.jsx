import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="h-screen w-full pt-8 justify-between flex flex-col items-start 
                      bg-[url('https://images.pexels.com/photos/30587183/pexels-photo-30587183/free-photo-of-busy-urban-intersection-with-pedestrians-and-cars.jpeg?auto=compress&cs=tinysrgb&w=600')] 
                      bg-cover bg-center">
        
        {/* Uber White Logo from Public Folder */}
        <img className="w-20 ml-9" src="/uber_white.png" alt="Uber Logo" />

        <div className="bg-white pb-7 w-full py-4 px-4">
          <h2 className="text-3xl font-bold">Get started with Uber</h2>
          <Link to='/login' className="w-full flex items-center justify-center bg-black text-white py-3 rounded mt-5">
            Continue
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Home
