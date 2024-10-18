import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure to install axios if you haven't

const PolicyTable = () => {
  const navigate = useNavigate();
  const [policies, setPolicies] = useState([]); // State to hold policies
  const [loading, setLoading] = useState(true); // State to handle loading status

  const handleAddPolicy = () => {
    navigate('/addpolicy');
  };

  const handleEditPolicy = (policyNumber) => {
    alert(`Edit policy ${policyNumber} clicked`);
  };

  const handleDeletePolicy = (policyNumber) => {
    alert(`Delete policy ${policyNumber} clicked`);
  };

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/policy/policies',{
            withCredentials:true
          }); // Adjust API endpoint as necessary
        setPolicies(response.data.policies); // Assuming the response is in the format { policies: [...] }
      } catch (error) {
        console.error("Error fetching policies:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchPolicies();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Simple loading state
  }

  return (
    <div className="container mx-auto p-6 ">
      <h1 className="text-2xl font-bold mb-6">Policies</h1>

      {/* Add Policy Button */}
      <button 
        className="bg-green-500 text-white px-4 py-2 mb-4 rounded hover:bg-green-600"
        onClick={handleAddPolicy}
      >
        Add Policy
      </button>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Policy Number</th>
              <th className="py-3 px-6 text-left">Policy Name</th>
              <th className="py-3 px-6 text-left">Type</th>
              <th className="py-3 px-6 text-left">Provider</th>
              <th className="py-3 px-6 text-left">Start Date</th>
              <th className="py-3 px-6 text-left">End Date</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Installment Duration</th>
              <th className="py-3 px-6 text-left">Installment Amount</th>
              <th className="py-3 px-6 text-center">Edit</th>
              <th className="py-3 px-6 text-center">Delete</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {policies.length === 0 ? (
              <tr>
                <td colSpan="11" className="py-3 px-6 text-center">No policies found.</td>
              </tr>
            ) : (
              policies.map((policy) => (
                <tr key={policy.policyNumber} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">{policy.policyNumber}</td>
                  <td className="py-3 px-6 text-left">{policy.policyName}</td>
                  <td className="py-3 px-6 text-left">{policy.policyType}</td>
                  <td className="py-3 px-6 text-left">{policy.provider}</td>
                  <td className="py-3 px-6 text-left">{new Date(policy.startDate).toLocaleDateString()}</td>
                  <td className="py-3 px-6 text-left">{new Date(policy.endDate).toLocaleDateString()}</td>
                  <td className="py-3 px-6 text-left">{policy.status}</td>
                  <td className="py-3 px-6 text-left">{policy.installmentDuration}</td>
                  <td className="py-3 px-6 text-left">${policy.installmentAmount}</td>
                  <td className="py-3 px-6 text-center">
                    <button 
                      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                      onClick={() => handleEditPolicy(policy.policyNumber)}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <button 
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      onClick={() => handleDeletePolicy(policy.policyNumber)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PolicyTable;
