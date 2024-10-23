// src/Pages/SettingsPage.jsx
import React from 'react';
import Sidebar from '../Components/Sidebar'; // Adjust the path as necessary

const SettingsPage = () => {
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
          <form>
            <div className="mb-4">
              <label className="block text-lg mb-2">Name</label>
              <input type="text" className="border rounded w-full p-2" placeholder="Enter your name" />
            </div>

            <div className="mb-4">
              <label className="block text-lg mb-2">Email</label>
              <input type="email" className="border rounded w-full p-2" placeholder="Enter your email" />
            </div>

            <div className="mb-4">
              <label className="block text-lg mb-2">Phone Number</label>
              <input type="tel" className="border rounded w-full p-2" placeholder="Enter your phone number" />
            </div>

            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
              Save Changes
            </button>
          </form>
        </section>

        {/* Change Password */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
          <form>
            <div className="mb-4">
              <label className="block text-lg mb-2">Current Password</label>
              <input type="password" className="border rounded w-full p-2" placeholder="Enter current password" />
            </div>

            <div className="mb-4">
              <label className="block text-lg mb-2">New Password</label>
              <input type="password" className="border rounded w-full p-2" placeholder="Enter new password" />
            </div>

            <div className="mb-4">
              <label className="block text-lg mb-2">Confirm New Password</label>
              <input type="password" className="border rounded w-full p-2" placeholder="Confirm new password" />
            </div>

            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
              Change Password
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SettingsPage;
