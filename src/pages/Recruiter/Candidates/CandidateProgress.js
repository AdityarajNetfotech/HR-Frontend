import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import DeleteIcon from '../../../Images/DeleteIcon.png';
import ExportIcon from '../../../Images/ExportIcon.png';

const CandidateProgress = () => {
  const navigate = useNavigate();  // Initialize the navigate function

  const handleSubmit = () => {
    navigate('/SelectCandidate');  // Navigate to the SelectCandidate page
  };

  return (
    <div className="p-4 bg-white rounded-lg border border-[#378BA6] shadow-md mx-auto">

      <div className='flex flex-row justify-between'>
        {/* Candidate Info */}
        <div className="flex items-center mb-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(55,139,166,0.20)] text-gray-700 font-semibold">
            C01
          </div>
          <div className="ml-4">
            <div className="flex flex-col items-stretch justify-center text-[#4F4F4F] overflow-hidden text-dark-grey text-ellipsis whitespace-nowrap font-jost text-2xl font-medium leading-7">Samuel Matthew</div>
            <div className="text-sm text-gray-500">Candidate ID: 1254631</div>
            <div className="text-red-500 text-sm font-semibold">
              ! Incomplete Form
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-2">
          <button className="p-2 h-12 rounded-lg hover:bg-[rgba(55,139,166,0.20)] bg-[rgba(55,139,166,0.30)]">
            <img src={DeleteIcon} alt='Delete' />
          </button>
          <button className="p-2 h-12 rounded-lg hover:bg-[rgba(55,139,166,0.20)] bg-[rgba(55,139,166,0.30)]">
            <img src={ExportIcon} alt='Export' />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-4 px-[10%]">
        <div className="flex flex-grow items-center">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#378BA6] text-white font-semibold">
            01
          </div>
          <div className="flex-grow border-t border-gray-300"></div>
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#378BA6] text-white font-semibold">
            02
          </div>
          <div className="flex-grow border-t border-gray-300"></div>
          <div className="relative flex items-center justify-center w-10 h-10 border border-dashed border-[#378BA6] rounded-full text-[#378BA6] font-semibold">
            03
          </div>
          <div className="flex-grow border-t border-gray-300"></div>
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-dashed border-[#378BA6] text-[#378BA6] font-semibold">
            04
          </div>
        </div>
      </div>

      <div className="flex justify-between text-xs text-gray-500 mb-4">
        <span className="flex-1 text-center">Delivery <br />Pending</span>
        <span className="flex-1 text-center">Interview <br />Pending</span>
        <span className="flex-1 text-center">Offer <br />Pending</span>
        <span className="flex-1 text-center">Payment <br />Pending</span>
      </div>

      {/* Employer Remarks */}
      <div className="mb-4 flex flex-row">
        <label className="text-[#378BA6] font-jost text-base font-bold leading-[20.8px] tracking-[0.08px]">Employer Remarks:</label>
        <input
          type="text"
          className="w-full p-2 border border-b-[#378BA6] border-transparent mt-1 "
          placeholder="."
        />
      </div>

      {/* New Buttons */}
      <div className="flex justify-between mt-4">
        <button 
          className="px-4 py-2 bg-[#378BA6] text-white rounded-lg hover:bg-[#2e6e85]"
          onClick={handleSubmit}  // Attach the handleSubmit function to the onClick event
        >
          Submit Candidate
        </button>
        <button className="px-4 py-2 bg-[#378BA6] text-white rounded-lg hover:bg-[#2e6e85]" onClick={handleSubmit}>
          Add Candidates
        </button>
      </div>

    </div>
  );
};

export default CandidateProgress;
