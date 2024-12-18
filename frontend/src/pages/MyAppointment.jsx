import React from 'react'
import {doctors} from '../assets/assets'
const MyAppointment = () => {
  return (
    <div>
      <p className='pb-3 mt-12 text-lg font-medium text-gray-600 border-b'>My appointments</p>
      <hr/>
      <div className=''>
          {doctors.slice(0,2).map((item,index)=>(
              <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b'> 
                  <img className='w-36 bg-[#EAEFFF]'src={item.image} />
                  <div className='flex-1 text-sm text-[#5E5E5E]'> 
                      <h1 className='text-[#262626] text-base font-semibold'>{item.name}</h1>
                      <p>{item.speciality}</p>
                      <h1 className='text-[#464646] font-medium mt-1'>Address:</h1>
                      <p>{item.address.line1}</p>
                      <p>{item.address.line2}</p>
                      <p className='text-sm text-[#3C3C3C] font-medium'>Date & Time :"16-03-2025" | "10.30"</p>
                      
                  </div>
                  <div className='flex flex-col gap-2 justify-end text-sm text-center'>
                  <button className='-text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel appointment</button>
                  <button className='-text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>
                  </div>
              </div>
          ))}
      </div>
         
    </div>
  )
}

export default MyAppointment