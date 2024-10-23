import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const handleNavigateToOverview = () => {
    navigate('/dashboard'); // Navigate to the Dashboard (Overview) page
  };

  const handleNavigateToPolicies = () => {
    navigate('/my-policies'); // Navigate to the My Policies page
  };

  const handleNavigateToSettings = () => {
    navigate('/settings'); // Navigate to the Settings page
  };

  const handleNavigateToDocumentSummary = () => {
    navigate('/document-summary-page'); // Navigate to the Document Summary page
  };

  return (
    <div className="w-64 bg-gray-800 text-white p-6">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <ul className="space-y-4">
        <li
          className={`p-2 rounded cursor-pointer hover:bg-gray-700 ${location.pathname === '/' ? 'bg-gray-700' : ''}`}
          onClick={handleNavigateToOverview}
        >
          Overview
        </li>
        <li
          className={`p-2 rounded cursor-pointer hover:bg-gray-700 ${location.pathname === '/my-policies' ? 'bg-gray-700' : ''}`}
          onClick={handleNavigateToPolicies}
        >
          My Policies
        </li>
        {/* Document Summary link added above Settings */}
        <li
          className={`p-2 rounded cursor-pointer hover:bg-gray-700 ${location.pathname === '/document-summary' ? 'bg-gray-700' : ''}`}
          onClick={handleNavigateToDocumentSummary}
        >
          Document Summary
        </li>
        <li
          className={`p-2 rounded cursor-pointer hover:bg-gray-700 ${location.pathname === '/settings' ? 'bg-gray-700' : ''}`}
          onClick={handleNavigateToSettings}
        >
          Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
