import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';

const DocumentSummaryPage = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [summary, setSummary] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
      // Set a placeholder summary for now
      setSummary(`Summary of the document "${file.name}" will be displayed here.`);
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('File submitted:', pdfFile);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex justify-center items-center p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-4 text-center">
            Document Summary Upload
          </h2>

          {/* PDF Upload */}
          <div className="mb-4">
            <label className="block text-gray-700">Upload PDF Document</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* Summary Display */}
          <div className="mb-4">
            <label className="block text-gray-700">Document Summary</label>
            <textarea
              value={summary}
              readOnly
              className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200 h-32"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Submit Document
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DocumentSummaryPage;
