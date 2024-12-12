import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doctors } from '../assets/assets';

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const [filterDoc, setfilterDoc] = useState([]);

  const applyFilter = () => {
    if (speciality) {
      setfilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setfilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className='px-4 py-8'>
      <p className='text-2xl font-semibold mb-4'>Browse through the doctors specialist</p>
      <div className='flex flex-col md:flex-row gap-5'>
        {/* Specialties List */}
        <div className='md:w-1/4 mb-6 md:mb-0'>
          <p className='font-medium text-lg mb-2'>Specialties</p>
          <ul className='space-y-2'>
            <p onClick={()=>(speciality==='General physician'?navigate('/doctor'):navigate('/doctor/General physician'))} className='px-3 rounded-lg border border-gray-500 cursor-pointer hover:text-blue-500'>General Physician</p>
            <p onClick={()=>(speciality==='Gynecologist'?navigate('/doctor'):navigate('/doctor/Gynecologist'))} className='px-3 rounded-lg border border-gray-500 cursor-pointer hover:text-blue-500'>Gynecologist</p>
            <p onClick={()=>(speciality==='Pediatricians')?navigate('/doctor'):navigate('/doctor/Pediatricians')} className='px-3 rounded-lg border border-gray-500 cursor-pointer hover:text-blue-500'>Pediatricians</p>
            <p onClick={()=>(speciality==='Dermatologist')?navigate('/doctor'):navigate('/doctor/Dermatologist')} className='px-3 rounded-lg border border-gray-500 cursor-pointer hover:text-blue-500'>Dermatologist</p>
            <p className='px-3 rounded-lg border border-gray-500 cursor-pointer hover:text-blue-500'>Neurologist</p>
            <p className='px-3 rounded-lg border border-gray-500 cursor-pointer hover:text-blue-500'>Gastroenterologist</p>
          </ul>
        </div>

        {/* Doctors Grid */}
        <div className='md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6'>
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              key={index}
              className='border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-5px] transition-transform duration-300 shadow-md hover:shadow-lg'
            >
              {/* Doctor Image */}
              <img
                className='w-full h-48 sm:h-40 object-cover bg-gray-100'
                src={item.image}
                alt={item.name}
              />
              {/* Doctor Details */}
              <div className='p-4'>
                <p className='flex items-center gap-2 text-sm text-green-500 '>Available</p>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
