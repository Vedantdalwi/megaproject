import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Signup = () => {
  const [user, setUser] = useState({
    name: '', // Change to 'name'
    email: '', // Add 'email'
    password: '',
    confirmPassword: '',
    age: '', // Add 'age'
    gender: '', // Keep gender
    address: '', // Add 'address'
    city: '', // Add 'city'
    country: '', // Add 'country'
  });

  const navigate = useNavigate();

  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/v1/user/register', user, {
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
      age: '',
      gender: '',
      address: '',
      city: '',
      country: '',
    });
  };

  return (
    <div className='h-full'>
<div className="min-w-96 mx-auto mb-2">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-center">Signup</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Full Name"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="w-full input input-bordered h-10"
              type="email"
              placeholder="Email"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full input input-bordered h-10"
              type="password"
              placeholder="Password"
            />
          </div>


          <div>
            <label className="label p-2">
              <span className="text-base label-text">Age</span>
            </label>
            <input
              value={user.age}
              onChange={(e) => setUser({ ...user, age: e.target.value })}
              className="w-full input input-bordered h-10"
              type="number"
              placeholder="Age"
            />
          </div>

          <div className="flex items-center my-4">
            <div className="flex items-center">
              <p>Male</p>
              <input
                type="checkbox"
                checked={user.gender === 'Male'}
                onChange={() => handleCheckbox('Male')}
                className="checkbox mx-2"
              />
            </div>
            <div className="flex items-center">
              <p>Female</p>
              <input
                type="checkbox"
                checked={user.gender === 'Female'}
                onChange={() => handleCheckbox('Female')}
                className="checkbox mx-2"
              />
            </div>
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Address</span>
            </label>
            <input
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Address"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">City</span>
            </label>
            <input
              value={user.city}
              onChange={(e) => setUser({ ...user, city: e.target.value })}
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="City"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Country</span>
            </label>
            <input
              value={user.country}
              onChange={(e) => setUser({ ...user, country: e.target.value })}
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Country"
            />
          </div>

          <p className="text-center my-2">
            Already have an account? <Link to="/login"> login </Link>
          </p>

          <div>
            <button type="submit" className="btn btn-block btn-sm mt-2 border border-slate-700">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
    
  );
};

export default Signup;
