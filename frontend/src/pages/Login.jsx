import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const {backendUrl,token,setToken}=useContext(AppContext)
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault(); // Correct usage to prevent default form submission
    
    try {
      
       if(state==='Sign Up'){
           const {data}=await axios.post(backendUrl+'/api/user/register',{name,password,email});
           if(data.success){
              localStorage.setItem('token',data.token)
              setToken(data.token)
              navigate('/')
           }
           else{
               toast.error(data.message)
           }
       }
       else{

           const {data}=await axios.post(backendUrl+'/api/user/login',{password,email});
           if(data.success){
              localStorage.setItem('token',data.token)
              setToken(data.token)
              navigate('/')
           }
           else{
               toast.error(data.message)
           }
       }

    } catch (error) {
      toast.error(error.message)
    }
  };

  return (
    <form
      className="min-h-[80vh] flex items-center justify-center px-4 sm:px-8 lg:px-16"
      onSubmit={handleSubmit} // Changed to onSubmit
    >
      <div className="w-full max-w-md bg-white shadow-2xl rounded-lg p-6 sm:p-8 lg:p-10">
        <p className="text-2xl font-bold text-gray-800 mb-2">
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </p>
        <p className="text-sm text-gray-600 mb-6">
          Please {state === 'Sign Up' ? 'Sign Up' : 'Login'} to book an appointment
        </p>
        {state === 'Sign Up' && (
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter your full name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit" // Button type set to submit
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          {state === 'Sign Up' ? 'Sign Up' : 'Login'}
        </button>

        <p className="text-sm text-gray-600 text-center mt-4">
          {state === 'Sign Up' ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span
            className="text-blue-500 font-medium cursor-pointer hover:underline"
            onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
          >
            {state === 'Sign Up' ? 'Login' : 'Sign Up'}
          </span>
        </p>
      </div>
    </form>
  );
};

export default Login;
