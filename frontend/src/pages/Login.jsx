import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
            <input 
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
            <input 
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Don't have an account? 
            <a href="/signup" className="text-blue-600 hover:text-blue-800"> Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
