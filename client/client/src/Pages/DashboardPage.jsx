// src/Pages/DashboardPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Components/Sidebar'; // Adjust the path as necessary

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleAddPolicy = () => {
    navigate('/policy-registration');
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10 bg-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
          {/* Add Policy Button */}
          <button
            onClick={handleAddPolicy}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Policy
          </button>
        </div>

        {/* Dashboard Content */}
        <div className="bg-white shadow p-6 rounded-lg">
          <p className="text-lg">
            Here you can manage all your insurance policies, view details, and perform actions related to your account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
