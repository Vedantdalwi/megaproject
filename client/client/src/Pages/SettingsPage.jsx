import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import axios from 'axios'; // Import axios for making HTTP requests

const SettingsPage = () => {
  // Define state to hold form values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    address: '',
    city: '',
    country: '',
  });

  // State to hold loading and error messages
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.put('https://megaproject-6bjc.onrender.com/api/v1/user/profile/edit', formData, {
        withCredentials: true, // If using authentication cookies or JWT in headers
      });

      if (response.data.success) {
        alert('Profile updated successfully');
      } else {
        setError(response.data.message || 'Failed to update profile');
      }
    } catch (err) {
      console.error('Error updating profile:', err);
      setError(err.response?.data?.message || 'An error occurred while updating the profile.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>

        {/* Profile Settings */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label className="block text-lg mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="border rounded w-full p-2"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-lg mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border rounded w-full p-2"
                placeholder="Enter your email"
              />
            </div>

            {/* Age */}
            <div className="mb-4">
              <label className="block text-lg mb-2">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="border rounded w-full p-2"
                placeholder="Enter your age"
              />
            </div>

            {/* Gender */}
            <div className="mb-4">
              <label className="block text-lg mb-2">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="border rounded w-full p-2"
              >
                <option value="">Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Address */}
            <div className="mb-4">
              <label className="block text-lg mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="border rounded w-full p-2"
                placeholder="Enter your address"
              />
            </div>

            {/* City */}
            <div className="mb-4">
              <label className="block text-lg mb-2">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="border rounded w-full p-2"
                placeholder="Enter your city"
              />
            </div>

            {/* Country */}
            <div className="mb-4">
              <label className="block text-lg mb-2">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="border rounded w-full p-2"
                placeholder="Enter your country"
              />
            </div>

            {/* Error message */}
            {error && <div className="text-red-500 mb-4">{error}</div>}

            {/* Save Changes Button */}
            <button
              type="submit"
              className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 ${loading ? 'opacity-50' : ''}`}
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </form>
        </section>

       
      </div>
    </div>
  );
};

export default SettingsPage;
