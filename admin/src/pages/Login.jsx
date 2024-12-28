import React, { useContext, useState } from 'react';
import { AdminContext } from '../context/AdminContext';
import axios from 'axios'
import { toast } from 'react-toastify';
const Login = () => {
  const [state, setState] = useState('Admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const { setAtoken, backendUrl } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  
    try {
      if (state === 'Admin') {
        const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password });
        console.log(data);
        if (data.success) {
          localStorage.setItem('aToken', data.token);
          setAtoken(data.token);
          //toast.success('Login successful!');
        } 
        else {
          toast.error(data.message); // Use toast.error for error notifications
        }
      } else {
        // Add handling for Doctor login if needed
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.'); // Generic error notification
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center bg-gray-50 px-4">
      <div className="flex flex-col gap-3 m-auto items-start p-6 sm:p-8 w-full max-w-[400px] border rounded-xl text-[#5E5E5E] text-sm shadow-lg bg-white">
        <p className="text-2xl font-semibold m-auto text-center">
          <span className="text-primary">{state}</span> Login
        </p>
        <div className="w-full">
          <p className="text-gray-700 font-medium">Email</p>
          <input onChange={(e) => setEmail(e.target.value)}
            className="border border-[#DADADA] rounded w-full p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-primary"
            type="email"
            value={email}
            required
          />
        </div>
        <div className="w-full">
          <p className="text-gray-700 font-medium">Password</p>
          <input onChange={(e) => setPassword(e.target.value)}
            className="border border-[#DADADA] rounded w-full p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-primary"
            type="password"
            value={password}
            required
          />
        </div>
        <button className="bg-primary text-white w-full py-2 rounded-md text-base hover:bg-primary-dark transition">
          Login
        </button>
        {
          state === 'Admin' ?
            <p>Doctor Login? <span className='text-primary underline cursor-pointer' onClick={() => setState('Doctor')}>click here</span></p> :
            <p>Admin Login? <span className='text-primary underline cursor-pointer' onClick={() => setState('Admin')}>click here</span> </p>
        }
      </div>
    </form>
  );
};

export default Login;
