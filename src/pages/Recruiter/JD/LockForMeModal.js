import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function LockForMeModal({ id, onClose }) {
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleConfirm = async () => {
    if (isChecked) {
      if (!id) {
        alert('Job Description ID is missing.');
        console.log('JD Value:', id);
        return;
      }

      setLoading(true);
      try {
        console.log('Locking JD with ID:', id);

        // Corrected endpoint and method
        const response = await axios.put(`http://localhost:4000/api/lock/${id}`);
        console.log('Response:', response.data);
        alert('Job Description Locked!');

        onClose(); // Notify parent component that modal is closed

        // Redirect to JDSummary page and pass data through state
        navigate(`/jdsummary`, { state: { jobData: response.data } }); // Adjust the path based on your route setup
      } catch (error) {
        console.error('Error locking JD:', error);
        if (error.response) {
          console.error('Server Response:', error.response.data);
          setError(`Failed to lock the Job Description. Status: ${error.response.status}`);
        } else if (error.request) {
          console.error('No Response:', error.request);
          setError('Failed to lock the Job Description. No response from server.');
        } else {
          console.error('Request Error:', error.message);
          setError('Failed to lock the Job Description. Please try again.');
        }
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please accept the terms to proceed.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <div className="flex p-1 px-4 mb-5 justify-between items-center self-stretch rounded-lg bg-[#378BA6]/30 text-[#4F4F4F] text-center font-jost text-2xl font-semibold leading-9">
          LOCK FOR ME
        </div>
        <p className="flex w-auto flex-col justify-center flex-1 text-[#4F4F4F] font-jost text-xl font-normal leading-[28px] text-wrap">
          Please confirm if you want to lock this Job Description
        </p>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <span className="text-[#4F4F4F] ml-2 mt-6 font-jost text-base font-light leading-[20px]">
              I have read and accept the terms of the Job Description.
            </span>
          </label>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => navigate(-1)} // Go back to the previous page
            className="flex p-2 px-3 justify-center items-center gap-2 flex-1 rounded-lg border border-[#A4A4A4] bg-white text-[#4F4F4F] text-center font-jost text-base font-bold leading-[36px]"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className={`flex p-2 px-3 justify-center items-center gap-2 flex-1 self-stretch rounded-lg ${loading ? 'bg-gray-400' : 'bg-[#378BA6]'} text-white text-center font-jost text-2xl font-semibold leading-[28px]`}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Confirm'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LockForMeModal;
