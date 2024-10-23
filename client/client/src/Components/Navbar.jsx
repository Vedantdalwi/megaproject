import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../assets/Images/logo.PNG';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleLogin = () => {
    // login process
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-between p-4 bg-blue-600 text-white">
      <div className="logo">
        <img src={require('../assets/Images/logo.PNG')} alt="logo" className="h-10" />
      </div>

      <div className="menu flex-1">
        <ul className="flex space-x-4 justify-center">
          <li className="hover:text-gray-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </div>

      {/* Conditionally render the Login button */}
      {(currentPath === '/' || currentPath === '/about' || currentPath === '/services') && (
        <div className="button">
          <button
            onClick={handleLogin}
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}
