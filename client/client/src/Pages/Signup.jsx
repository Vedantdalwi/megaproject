import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Signup = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    gender: '',
    address: '',
    city: '',
    country: '',
  });

  const navigate = useNavigate();

  const handleRadioChange = (gender) => {
    setUser({ ...user, gender });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://megaproject-6bjc.onrender.com/api/v1/user/register', user, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate('/login');
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
      console.log(error);
    }

    setUser({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      age: '',
      gender: '',
      address: '',
      city: '',
      country: '',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">Signup</h1>
        
        <form onSubmit={onSubmitHandler}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Full Name</label>
            <input
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>

          {/* Email */}
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

          {/* Password */}
          <div className="mb-4">
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

          {/* Age */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Age</label>
            <input
              value={user.age}
              onChange={(e) => setUser({ ...user, age: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="number"
              placeholder="Age"
              required
            />
          </div>

          {/* Gender */}
          <div className="mb-4 flex items-center space-x-4">
            <p className="text-gray-700 font-semibold">Gender</p>
            <label>
              <input
                type="radio"
                checked={user.gender === 'Male'}
                onChange={() => handleRadioChange('Male')}
                className="mr-2"
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                checked={user.gender === 'Female'}
                onChange={() => handleRadioChange('Female')}
                className="mr-2"
              />
              Female
            </label>
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Address</label>
            <input
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Address"
              required
            />
          </div>

          {/* City */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">City</label>
            <input
              value={user.city}
              onChange={(e) => setUser({ ...user, city: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="City"
              required
            />
          </div>

          {/* Country */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Country</label>
            <input
              value={user.country}
              onChange={(e) => setUser({ ...user, country: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Country"
              required
            />
          </div>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mb-4">
            Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
          </p>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
