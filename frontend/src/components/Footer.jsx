import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='md:mx-10'>
    <div className='flex flex-col gap-14 my-10 mt-40 text-sm p-5'>
      {/* Top Section */}
      <div className='grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14'>
        {/* About Section */}
        <div className='flex flex-col'>
          <img className='mb-5 w-40' src={assets.logo} alt='Logo' />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Company Section */}
        <div>
          <h1 className='text-xl font-medium mb-5'>COMPANY</h1>
          <div className='flex flex-col gap-2 text-gray-600'>
            <p>Home</p>
            <p>About us</p>
            <p>Delivery</p>
            <p>Privacy policy</p>
          </div>
        </div>

        {/* Get in Touch Section */}
        <div>
          <h1 className='text-xl font-medium mb-5'>GET IN TOUCH</h1>
          <div className='flex flex-col gap-2 text-gray-600'>
            <p>+0-000-000-000</p>
            <p>saurav@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='border-t border-gray-300 pt-5 text-center'>
        <p className='text-sm text-gray-600'>
          Copyright 2024 @ Greatstack.dev - All Rights Reserved.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
