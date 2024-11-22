import React, { useState } from 'react';
import axios from 'axios';

const AddPolicy = () => {
  const [formData, setFormData] = useState({
    policyNumber: '',
    policyName: '',
    policyType: 'auto',
    provider: '',
    startDate: '',
    endDate: '',
    installmentDuration: 'monthly',
    installmentAmount: 0,
    nominees: [''], // Initialize with one empty string for the first nominee
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNomineeChange = (index, value) => {
    const updatedNominees = [...formData.nominees];
    updatedNominees[index] = value;
    setFormData({
      ...formData,
      nominees: updatedNominees,
    });
  };

  const addNominee = () => {
    setFormData({
      ...formData,
      nominees: [...formData.nominees, ''], // Add a new empty string for a new nominee
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const updatedFormData = {
        ...formData,
        installmentAmount: Number(formData.installmentAmount), // Convert string to number
      };
      console.log('Form data being submitted:', updatedFormData);
    try {
      // Make the POST request to the backend API
      const response = await axios.post('http://localhost:8080/api/v1/policy/addpolicy', formData, {headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
});
  
      // If successful, log the response
      console.log('Policy added successfully:', response.data);
  
      // Optionally reset the form or navigate to another page
      setFormData({
        policyNumber: '',
        policyName: '',
        policyType: 'auto',
        provider: '',
        startDate: '',
        endDate: '',
        installmentDuration: 'monthly',
        installmentAmount: 0,
        nominees: [''], // Reset nominees
      });
    } catch (error) {
      console.error('Error adding policy:', error);
      // Handle the error, check if response exists and show the message
      const errorMessage = error.response?.data?.message || 'Something went wrong';
      alert(errorMessage); // Display error to the user
    }
  };

  return (
    <div className="container mx-auto p-6 mt-2">
      <h1 className="text-2xl font-bold mb-4">Add New Policy</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mt-2">
        {/* Policy Number */}
        <div>
          <label className="block text-gray-700">Policy Number:</label>
          <input
            type="text"
            name="policyNumber"
            value={formData.policyNumber}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-2"
            placeholder="Enter policy number"
          />
        </div>
abshdjd
        {/* Policy Name */}
        <div>
          <label className="block text-gray-700">Policy Name:</label>
          <input
            type="text"
            name="policyName"
            value={formData.policyName}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-2"
            placeholder="Enter policy name"
          />
        </div>

        {/* Policy Type */}
        <div>
          <label className="block text-gray-700">Policy Type:</label>
          <select
            name="policyType"
            value={formData.policyType}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-2"
          >
            <option value="auto">Automobile</option>
            <option value="health">Health</option>
            <option value="life">Life</option>
            <option value="home">Home</option>
          </select>
        </div>

        {/* Provider */}
        <div>
          <label className="block text-gray-700">Provider:</label>
          <input
            type="text"
            name="provider"
            value={formData.provider}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-2"
            placeholder="Enter provider name"
          />
        </div>

        {/* Start Date */}
        <div>
          <label className="block text-gray-700">Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-2"
          />
        </div>

        {/* End Date */}
        <div>
          <label className="block text-gray-700">End Date:</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-2"
          />
        </div>

        {/* Installment Duration */}
        <div>
          <label className="block text-gray-700">Installment Duration:</label>
          <select
            name="installmentDuration"
            value={formData.installmentDuration}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-2"
          >
            <option value="monthly">Monthly</option>
            <option value="3 months">3 Months</option>
            <option value="annually">Annually</option>
          </select>
        </div>

        {/* Installment Amount */}
        <div>
          <label className="block text-gray-700">Installment Amount:</label>
          <input
            type="number"
            name="installmentAmount"
            value={formData.installmentAmount}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-2"
            placeholder="Enter installment amount"
          />
        </div>

        {/* Nominees */}
        <div>
          <label className="block text-gray-700">Nominees:</label>
          {formData.nominees.map((nominee, index) => (
            <input
              key={index}
              type="text"
              value={nominee}
              onChange={(e) => handleNomineeChange(index, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder={`Enter nominee ${index + 1} name`}
            />
          ))}
          <button
            type="button"
            onClick={addNominee}
            className="mt-2 text-blue-500"
          >
            Add Nominee
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPolicy;
