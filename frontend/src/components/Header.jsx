import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='md:flex-row flex-col justify-center flex items-center bg-primary p-8'>
      {/* This is left side part */}
      <div className='p-5 flex flex-col items-center justify-between gap-4'>
        <p className='text-5xl font-semibold text-white'>Book Appointment With Trusted Doctors</p>
        <div className='md:flex-row flex-col flex items-center justify-between gap-2'>
          <div>
            <img src={assets.group_profiles} alt='Group Profiles' />
          </div>
          <div>
            <p className='text-white'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
          </div>
        </div>
        <div className='flex items-center px-3 bg-white rounded-full justify-between hover:bg-gray-50 hover:text-blue-500 hover:scale-105 transition-transform duration-100'>
          <a
            href="#speciality-menu"
            className='text-black rounded-full bg-white p-3 md:mx-0 mx-auto'
          >
            Book appointment
          </a>
          <img src={assets.arrow_icon} alt='Arrow Icon' />
        </div>
      </div>

      {/* This is right side part */}
      <div>
        <img src={assets.header_img} alt='Header' />
      </div>
    </div>
  )
}

export default Header
