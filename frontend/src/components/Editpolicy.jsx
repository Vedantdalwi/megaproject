import React, { useState, useEffect } from 'react';

const EditPolicy = ({ policyData, onSave }) => {
  const [formData, setFormData] = useState({
    policyNumber: '',
    policyName: '',
    policyType: '',
    provider: '',
    startDate: '',
    endDate: '',
    installmentDuration: 'monthly',
    installmentAmount: 0,
  });

  // Populate form with existing policy data if available
  useEffect(() => {
    if (policyData) {
      setFormData({
        policyNumber: policyData.policyNumber,
        policyName: policyData.policyName,
        policyType: policyData.policyType,
        provider: policyData.provider,
        startDate: policyData.startDate.split('T')[0], // Format date to YYYY-MM-DD
        endDate: policyData.endDate.split('T')[0], // Format date to YYYY-MM-DD
        installmentDuration: policyData.installmentDuration,
        installmentAmount: policyData.installmentAmount,
      });
    }
  }, [policyData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the modified policy data (you can implement API calls here)
    console.log('Updated policy data:', formData);
    if (onSave) onSave(formData); // Optional callback for handling save action
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Policy</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
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
            readOnly // Assuming policy number is not editable
          />
        </div>

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
            <option value="auto">Auto</option>
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

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditPolicy;
