import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure axios is installed
import Sidebar from '../Components/Sidebar'; // Adjust the path as necessary

const MyPoliciesPage = () => {
  const navigate = useNavigate();
  const [policies, setPolicies] = useState([]); // State to hold policies
  const [loading, setLoading] = useState(true); // Loading state

  const handleAddPolicy = () => {
    navigate('/policy-registration');
  };

  const handleDeletePolicy = async (policyId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/v1/policy/deletePolicy/${policyId}`, {
        withCredentials: true,
      });

      if (response.data.success) {
        setPolicies(policies.filter((policy) => policy._id !== policyId)); // Update state
        alert(`Policy ${policyId} deleted successfully!`);
      }
    } catch (error) {
      console.error("Error deleting policy:", error);
      alert(error.response?.data?.message || "Failed to delete policy. Please try again.");
    }
  };

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/policy/policies', {
          withCredentials: true,
        });
        setPolicies(response.data.policies); // Assuming response contains { policies: [...] }
      } catch (error) {
        console.error("Error fetching policies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPolicies();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Simple loading state
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">My Policies</h1>

        {/* Centered Add Policy Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={handleAddPolicy}
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Add Policy
          </button>
        </div>

        {/* Policy Table */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
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
                  <th className="py-3 px-6 text-center">Delete</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm">
                {policies.length === 0 ? (
                  <tr>
                    <td colSpan="10" className="py-3 px-6 text-center">No policies found.</td>
                  </tr>
                ) : (
                  policies.map((policy) => (
                    <tr key={policy._id} className="border-b border-gray-200 hover:bg-gray-100">
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
                          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                          onClick={() => handleDeletePolicy(policy._id)}
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
      </div>
    </div>
  );
};

export default MyPoliciesPage;
