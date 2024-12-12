import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
    const navigate=useNavigate();
    const [showMenu,setshowMenu]=useState(false);
    const [token,setToken]=useState(true);
    const navigateFn=()=>{
          navigate('/login')
    }
    return (
        <div className='flex  items-center justify-between py-5 mb-5 text-sm border-b border-b-gray-400 '>
            <img  onClick={()=>navigate("/")}src={assets.logo} className='w-44 cursor-pointer' alt="Logo" />
            <ul className='md:flex hidden items-center gap-5 font-medium'>
                <NavLink to="/">
                    <li  className='py-1'>HOME</li>
                    <hr className='border-none outline-none bg-primary m-auto w-4/5 h-0.5 hidden'/>
                </NavLink>
                <NavLink to='/doctor'>
                    <li className='py-1'>ALL DOCTORS</li>
                    <hr className='border-none outline-none bg-primary m-auto w-4/5 h-0.5 hidden'/>
                </NavLink>
                <NavLink to="about">
                    <li className='py-1'>ABOUT</li>
                    <hr className='border-none outline-none bg-primary m-auto w-4/5 h-0.5 hidden'/>
                </NavLink>
                <NavLink to="contact">
                    <li className='py-1'>CONTACT</li>
                    <hr className='border-none outline-none bg-primary m-auto w-4/5 h-0.5 hidden'/>
                </NavLink>
            </ul>
            <div className="flex items-center gap-4">
                {
                    token?
                    <div className='flex gap-2 group relative cursor-pointer'>
                       <img className='rounded-full w-10' src={assets.profile_pic} alt=""></img>
                       <img className='2.5' src={assets.dropdown_icon}/>
                       <div  className='hidden absolute right-0  top-0 pt-14 text-base group-hover:block font-medium'>
                          <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                           <p onClick={()=>navigate("/my-profile")}className='hover:text-stone-600 cursor-pointer'>My Profile</p>
                           <p onClick={()=>navigate("/my-appointment")}className='hover:text-stone-600 cursor-pointer'>My Appointments</p>
                           <p onClick={()=>setToken(false)}className='hover:text-stone-600 cursor-pointer'>Logout</p>
                           </div>
                       </div>
                    </div>
                    : <button onClick={navigateFn} className="bg-primary text-white px-8 py-3 shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 md:block hidden rounded-full">
                    Create Account
                    </button>
                }
               
            </div>

        </div>
    );
};

export default Navbar;
