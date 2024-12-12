import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='text-center text-2xl pt-10 text-[#707070]'>
       <h1>CONTACT US</h1>

       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
            <img  className='w-full md:max-w-[360px]'src={assets.contact_image}/>
            <div className='flex flex-col justify-center items-start gap-6'>
                  <h1 className=' font-semibold text-lg text-gray-600'>OUR OFFICE</h1>
                  <p className=' text-gray-500'>00000 Willms Station
                    <br/>
                    Suite 000, Washington, USA
                  </p>
                
                  <p className=' text-gray-500'>Tel:96235689
                    <br></br>
                    Email:saurav@gmail.com
                  </p>         
                  <h1 className=' font-semibold text-lg text-gray-600'>CAREERS AT PRESCRIPTO</h1>
                  <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
                  <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
            </div>
            
       </div>
    
    </div>
  )
}

export default Contact