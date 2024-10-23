import React, { useState } from "react";
import Sidebar from '../Components/Sidebar'; 
import axios from 'axios';

export default function PolicyRegistration() {
  const [formData, setFormData] = useState({
    policyNumber: "",
    policyName: "",
    policyType: "life", // Match backend values (life, auto, home, health)
    provider: "",
    startDate: "",
    endDate: "",
    installmentDuration: "monthly", // Updated to match backend naming
    installmentAmount: 0,
    nominees: [''],
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle changes to nominees input
  const handleNomineeChange = (index, value) => {
    const updatedNominees = [...formData.nominees];
    updatedNominees[index] = value;
    setFormData({
      ...formData,
      nominees: updatedNominees,
    });
  };

  // Add a new nominee field
  const addNominee = () => {
    setFormData({
      ...formData,
      nominees: [...formData.nominees, ''],
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      installmentAmount: Number(formData.installmentAmount), 
    };
    console.log('Form data being submitted:', updatedFormData);
    
    try {
      // Make the POST request to the backend API
      const response = await axios.post('http://localhost:8080/api/v1/policy/addpolicy', updatedFormData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      console.log('Policy added successfully:', response.data);

      // Optionally reset the form
      setFormData({
        policyNumber: '',
        policyName: '',
        policyType: 'life',
        provider: '',
        startDate: '',
        endDate: '',
        installmentDuration: 'monthly',
        installmentAmount: 0,
        nominees: [''],
      });
    } catch (error) {
      console.error('Error adding policy:', error);
      const errorMessage = error.response?.data?.message || 'Something went wrong';
      alert(errorMessage);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-10">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">Policy Registration Form</h2>

          {/* Policy Number */}
          <div className="mb-4">
            <label className="block text-gray-700">Policy Number</label>
            <input type="text" name="policyNumber" value={formData.policyNumber} onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200" required />
          </div>

          {/* Policy Name */}
          <div className="mb-4">
            <label className="block text-gray-700">Policy Name</label>
            <input type="text" name="policyName" value={formData.policyName} onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200" required />
          </div>

          {/* Policy Type */}
          <div className="mb-4">
            <label className="block text-gray-700">Policy Type</label>
            <select name="policyType" value={formData.policyType} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded mt-2">
              <option value="auto">Automobile</option>
              <option value="health">Health</option>
              <option value="life">Life</option>
              <option value="home">Home</option>
            </select>
          </div>

          {/* Provider */}
          <div className="mb-4">
            <label className="block text-gray-700">Provider</label>
            <input type="text" name="provider" value={formData.provider} onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200" required />
          </div>

          {/* Start Date */}
          <div className="mb-4">
            <label className="block text-gray-700">Start Date</label>
            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200" required />
          </div>

          {/* End Date */}
          <div className="mb-4">
            <label className="block text-gray-700">End Date</label>
            <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200" required />
          </div>

          {/* Installment Duration */}
          <div className="mb-4">
            <label className="block text-gray-700">Installment Duration</label>
            <select name="installmentDuration" value={formData.installmentDuration} onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200">
              <option value="monthly">Monthly</option>
              <option value="3 months">Every 3 months</option>
              <option value="annually">Annually</option>
            </select>
          </div>

          {/* Installment Amount */}
          <div className="mb-4">
            <label className="block text-gray-700">Installment Amount</label>
            <input type="number" name="installmentAmount" value={formData.installmentAmount} onChange={handleChange} className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200" required />
          </div>

          {/* Nominees */}
          <div className="mb-4">
            <label className="block text-gray-700">Nominees</label>
            {formData.nominees.map((nominee, index) => (
              <input key={index} type="text" value={nominee} onChange={(e) => handleNomineeChange(index, e.target.value)} className="w-full p-2 mt-2 border rounded-md focus:ring focus:ring-blue-200" placeholder={`Enter nominee ${index + 1} name`} />
            ))}
            <button type="button" onClick={addNominee} className="text-blue-500 mt-2">Add Nominee</button>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
