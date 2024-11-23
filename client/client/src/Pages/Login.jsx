import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      axios.defaults.withCredentials = true; 
      const res = await axios.post('https://megaproject-6bjc.onrender.com/api/v1/user/login', user, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // Navigate to the dashboard after successful login
      navigate('/dashboard');
      console.log(res);
      
    } catch (error) {
      // Show error toast if something went wrong
      toast.error(error.response?.data?.message || 'Something went wrong');
      console.log(error);
    }

    // Reset the user state after submission
    setUser({
      email: '',
      password: '',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">Login</h1>
        
        <form onSubmit={onSubmitHandler}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
            <input
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              placeholder="Email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600 mb-4">
            Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Signup</Link>
          </p>

          {/* Submit Button */}
          <div>
            <button type="submit" className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
