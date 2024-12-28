import React, { useContext } from 'react'
import {assets} from '../assets/assets.js'
import { AdminContext } from '../context/AdminContext'
import {useNavigate} from 'react-router-dom'
const Navbar = () => {

   const {atoken,setAtoken}=useContext(AdminContext)
   const navigate= useNavigate();

   const logoutHandler=()=>{
        navigate('/')
        atoken && setAtoken('')
        atoken && localStorage.removeItem('aToken')
   }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
        <div className='flex items-center gap-2 text-xs'>
           <img className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt=""/>
           <p className='border px-2.5 py-.5 rounded-full border-gray-500'>{atoken?'Admin' : 'Doctor'}</p>
        </div>
        <button onClick={logoutHandler} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar