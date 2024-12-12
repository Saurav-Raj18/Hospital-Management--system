import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id="speciality-menu">
      {/* Header Section */}
      <div className='flex flex-col items-center gap-4 py-16 text-[#262626]'>
        <p className='text-3xl font-medium'>Find by Speciality</p>
        <p className='sm:w-1/3 text-center text-sm'>
          Simply browse through our extensive list <br />
          of trusted doctors, schedule your <br />
          appointment hassle-free.
        </p>
      </div>

      {/* Speciality Section */}
      <div className='flex flex-wrap gap-5 items-center justify-center px-4'>
        {specialityData.map((speciality, index) => (
          <Link onClick={()=>scrollTo(0,0)}to={`/doctor/${speciality.speciality}`} key={index} className='flex flex-col items-center transition-transform duration-300 hover:scale-110'>
            {/* Image with Hover Effect */}
            <img
              className='w-16 sm:w-24 mb-2 '
              src={speciality.image}
              alt={speciality.speciality}
            />
            {/* Speciality Name */}
            <div className='text-center text-sm font-medium'>
              {speciality.speciality}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
