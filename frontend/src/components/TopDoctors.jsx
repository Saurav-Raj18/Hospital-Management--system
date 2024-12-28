import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
  const navigate=useNavigate();
  const {doctors}=useContext(AppContext)
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10'>
      {/* Header Section */}
      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/* Image Grid Section */}
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-5 px-3 sm:px-0'>
        {doctors.slice(0, 10).map((item, index) => (
          <div onClick={()=>navigate(`/appointment/${item._id}`)}
            key={index}
            className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-transform duration-300'
          >
            {/* Doctor Image */}
            <img
              className='bg-[#EAEFFF] w-full h-48 sm:h-40 object-cover'
              src={item.image}
              alt={item.name}
            />
            {/* Doctor Details */}
            <div className='p-4'>
              <p className='flex items-center gap-2 text-sm text-green-500'>Available</p>
              <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
              <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
            </div>
           
          </div>
        ))}
      </div>
      <button onClick={()=>{navigate('/doctor');scrollTo(0,0)}} className='bg-blue-50 text-gray-600 py-3 rounded-full px-12 mt-10'>more</button>
    </div>
  );
};

export default TopDoctors;
