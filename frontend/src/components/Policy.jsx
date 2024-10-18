import React from 'react';
import { useNavigate } from 'react-router-dom';

const PolicyTable = () => {
    const navigate = useNavigate();
    const handleAddPolicy = () => {
        navigate('/addpolicy');
      };

  const handleEditPolicy = (policyNumber) => {
    alert(`Edit policy ${policyNumber} clicked`);
  };

  const handleDeletePolicy = (policyNumber) => {
    alert(`Delete policy ${policyNumber} clicked`);
  };

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
            {/* Row 1 */}
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">P12345</td>
              <td className="py-3 px-6 text-left">Health Insurance</td>
              <td className="py-3 px-6 text-left">Health</td>
              <td className="py-3 px-6 text-left">Provider A</td>
              <td className="py-3 px-6 text-left">2023-01-01</td>
              <td className="py-3 px-6 text-left">2024-01-01</td>
              <td className="py-3 px-6 text-left">Active</td>
              <td className="py-3 px-6 text-left">12 Months</td>
              <td className="py-3 px-6 text-left">$120</td>
              <td className="py-3 px-6 text-center">
                <button 
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                  onClick={() => handleEditPolicy('P12345')}
                >
                  Edit
                </button>
              </td>
              <td className="py-3 px-6 text-center">
                <button 
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => handleDeletePolicy('P12345')}
                >
                  Delete
                </button>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">P67890</td>
              <td className="py-3 px-6 text-left">Car Insurance</td>
              <td className="py-3 px-6 text-left">Auto</td>
              <td className="py-3 px-6 text-left">Provider B</td>
              <td className="py-3 px-6 text-left">2023-05-01</td>
              <td className="py-3 px-6 text-left">2024-05-01</td>
              <td className="py-3 px-6 text-left">Expired</td>
              <td className="py-3 px-6 text-left">6 Months</td>
              <td className="py-3 px-6 text-left">$300</td>
              <td className="py-3 px-6 text-center">
                <button 
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                  onClick={() => handleEditPolicy('P67890')}
                >
                  Edit
                </button>
              </td>
              <td className="py-3 px-6 text-center">
                <button 
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => handleDeletePolicy('P67890')}
                >
                  Delete
                </button>
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">P54321</td>
              <td className="py-3 px-6 text-left">Life Insurance</td>
              <td className="py-3 px-6 text-left">Life</td>
              <td className="py-3 px-6 text-left">Provider C</td>
              <td className="py-3 px-6 text-left">2022-07-01</td>
              <td className="py-3 px-6 text-left">2027-07-01</td>
              <td className="py-3 px-6 text-left">Active</td>
              <td className="py-3 px-6 text-left">60 Months</td>
              <td className="py-3 px-6 text-left">$50</td>
              <td className="py-3 px-6 text-center">
                <button 
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                  onClick={() => handleEditPolicy('P54321')}
                >
                  Edit
                </button>
              </td>
              <td className="py-3 px-6 text-center">
                <button 
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => handleDeletePolicy('P54321')}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PolicyTable;
