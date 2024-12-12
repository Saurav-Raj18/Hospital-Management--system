import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const navigate=useNavigate();
  return (
    <div className='flex bg-primary items-center p-5 rounded-lg m-4'>
        <div className='items-center justify-center'>
            <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
             <p>Book Appointment</p>
             <p>With 100+ Trusted Doctors</p> 
             </div>
             <button onClick={()=>navigate('/login')}className='bg-white text-sm sm:text-base text-[#595959] px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all '>Create account</button>
        </div>
        <div className='hidden md:block'>
           <img className='w-full  bottom-0 right-0 max-w-md'src={assets.appointment_img}/>
        </div>
      
    </div>
  )
}

export default Banner