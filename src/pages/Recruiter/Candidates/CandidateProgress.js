import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteIcon from '../../../Images/DeleteIcon.png';
import ExportIcon from '../../../Images/ExportIcon.png';

const CandidateProgress = ({ jdId }) => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:4000/api/jds/${jdId}/candidates`);
        setCandidates(response.data.candidates);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };
  
    fetchCandidates();
  }, [jdId]);
  


  const handleDeleteCandidate = async (candidateId) => {
    try {
      // Make the API request to remove the candidate from the JD
      const response = await axios.post('http://localhost:4000/api/jd/remove-candidate', {
        jdId,
        candidateId
      });
  
      // Remove the candidate from the local state if successful
      if (response.data.success) {
        setCandidates(candidates.filter(candidate => candidate._id !== candidateId));
      }
    } catch (error) {
      console.error('Error deleting candidate:', error);
    }
  };

  if (loading) {
    return <div>Loading candidates...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {candidates.length === 0 ? (
        <div>No candidates available for this JD.</div>
      ) : (
        candidates.map((candidate, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg border border-[#378BA6] shadow-md mx-auto my-4"
          >
            <div className="flex flex-row justify-between">
              {/* Candidate Info */}
              <div className="flex items-center mb-4">
                <div className="ml-4">
                  <p>Sr.No: {index + 1}</p>
                  <div className="flex flex-col items-stretch justify-center text-[#4F4F4F] font-jost text-2xl font-medium leading-7">
                    Name: {candidate.First_name} {candidate.Last_name}
                  </div>
                  <div className="text-sm text-gray-500">
                    Candidate ID: {candidate._id}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-2">
                <button className="p-2 h-12 rounded-lg hover:bg-[rgba(55,139,166,0.20)] bg-[rgba(55,139,166,0.30)]" onClick={() => handleDeleteCandidate(candidate._id)} >
                  <img src={DeleteIcon} alt="Delete" />
                </button>
                <button className="p-2 h-12 rounded-lg hover:bg-[rgba(55,139,166,0.20)] bg-[rgba(55,139,166,0.30)]">
                  <img src={ExportIcon} alt="Export" />
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

            {/* Employer Remarks */}
            <div className="mb-4 flex flex-row">
              <label className="text-[#378BA6] font-jost text-base font-bold leading-[20.8px] tracking-[0.08px]">
                Employer Remarks:
              </label>
              <input
                type="text"
                className="w-full p-2 border border-b-[#378BA6] border-transparent mt-1"
                placeholder="remark"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <button className="px-4 py-2 bg-[#378BA6] text-white rounded-lg hover:bg-[#2e6e85]">
                Submit Candidate
              </button>
              <button className="px-4 py-2 bg-[#378BA6] text-white rounded-lg hover:bg-[#2e6e85]">
                Add Candidates
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CandidateProgress;
