import React, { useState } from 'react';
import axios from 'axios';
import industryIcon from '../../../Images/IndustryIcon.png';
import LocationIcon from '../../../Images/LocationIcon.png';
import SalaryIcon from '../../../Images/SalaryIcon.png';
import PDFIcon from '../../../Images/PDFIcon.png';
import ExportIcon from '../../../Images/ExportIcon.png';

const CandidateCard = ({ candidates, jobId }) => {
  const [Rejectcandidates, setRejectCandidates] = useState([]);

  const jd_id = jobId

  if (!candidates) return <div>No candidate details available</div>;

  if (candidates.candidate != null) {
    candidates = candidates.candidate;
  }



  const handleSelectCandidate = async () => {
    try {
      // Fetch current candidates from the JD progress to check if the candidate is already added
      const response = await axios.get(`http://localhost:4000/api/jds/${jd_id}/candidates`);
      const existingCandidates = response.data.candidates;

      // Check if the candidate is already added by comparing the candidate's ID
      const isCandidateAlreadyAdded = existingCandidates.some(candidate => candidate._id === candidates._id);

      if (isCandidateAlreadyAdded) {
        alert('This candidate is already added.');
        return; // Exit if candidate is already in the progress
      }

      // If not already added, proceed with adding the candidate
      const addResponse = await axios.post('http://localhost:4000/api/add-candidate', {
        jd_id,
        candidate_id: candidates._id,
      });

      if (addResponse.data.success) {
        alert('Candidate successfully added!');
      } else {
        alert('Failed to add candidate. Please try again.');
      }

    } catch (error) {
      console.error('Error adding candidate to JD:', error);
      alert('Failed to add candidate. Please try again.');
    }
  };


  const handleRejectCandidate = async (candidateId) => {
    try {
      const response = await axios.post('http://localhost:4000/api/jd/remove-candidate', {
        jdId: jd_id, // Align with backend parameter names
        candidateId,
      });
  
      if (response.data.success) {
        alert('Candidate successfully removed!');
        // Update the candidates list in state
        setRejectCandidates((prevCandidates) => 
          prevCandidates.filter((candidate) => candidate._id !== candidateId)
        );
      } else {
        alert('Failed to remove candidate. Please try again.');
      }
    } catch (error) {
      console.error('Error removing candidate:', error);
      alert('An error occurred. Please try again.');
    }
  };
  


  return (
    <div>
      <div className="p-4 bg-[#EAF1F3] rounded-lg shadow-md my-4">
        <div className="flex justify-between items-center mb-2 pb-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#ECB015] rounded-xl flex items-center justify-center text-white mr-4  text-center font-jost text-[17.5px] font-normal leading-[22.75px] tracking-[0.088px]">
              {/* {candidates.name && candidates.name.split(' ').map(n => n[0]).join('')} Shows initials */}
            </div>
            <div>
              <h2 className="flex h-[22.595px] flex-col justify-center self-stretch overflow-hidden text-[#4F4F4F] text-ellipsis whitespace-nowrap font-jost text-[20px] font-medium leading-[28px]">
                {candidates.First_name} {candidates.Last_name}
              </h2>
              <p className="overflow-hidden text-[#378BA6] text-ellipsis font-jost text-[16px] font-bold leading-[20.8px] tracking-[0.08px]">
                Candidate ID: {candidates._id}
              </p>
            </div>
          </div>
          <div className='flex flex-row'>
            <div className="flex flex-row text-[#000] font-jost text-[14px] font-semibold leading-[36px] ">
              Status: <span className="flex p-[1px_25px] items-center justify-center bg-[#FFFB9A] text-[#A38740] text-center font-jost text-[16px] font-normal border border-[#A38740] rounded-lg">New</span>
            </div>
            <div>
              <p className="flex flex-row text-[#000] gap-1 font-jost text-[14px] font-semibold leading-[36px]">
                Exp:<span className='text-[#4F4F4F] text-center font-jost text-[16px] font-normal leading-[36px] border border-[#4F4F4F] rounded-lg p-[1px_12px]'>{candidates.Total_Experiences}</span>
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div className='flex flex-row justify-between'>
          <div>
            <div className="mb-4 pt-4 flex flex-row gap-6">
              <p className="flex flex-row gap-1.5 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">
                <img src={industryIcon} alt="Industry" /> Job Title: {candidates.jobTitle}
              </p>
              <p className="flex flex-row gap-1.5 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">
                <img src={LocationIcon} alt="Location" /> Location: {candidates.Current_location}
              </p>
              <p className="flex flex-row gap-1.5 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">
                <img src={SalaryIcon} alt="Salary" /> Expected Salary: {candidates.Expected_salary}
              </p>
            </div>

            <div className="flex items-center gap-5 mb-4">
              <button className="flex text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] gap-3 p-3 border border-[#378BA6] rounded-lg bg-white">
                <img src={PDFIcon} alt="Resume" className="mr-2" />
                {candidates.resume}
              </button>
              <button className="flex text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] gap-3 p-3 border border-[#378ba6] rounded-lg bg-white">
                <img src={PDFIcon} alt="Website Link" className="mr-2" />
                {candidates.Linkedin}
              </button>
            </div>
          </div>
          <div>
            <p className='text-[#4F4F4F] bg-white font-jost text-[20px] font-extrabold leading-[36px] flex flex-row border border-[#4F4F4F] rounded-lg gap-2 justify-center items-center p-[10px_20px]'>
              <img src={ExportIcon} alt="Export Icon" /> View Form
            </p>
          </div>
        </div>
        <hr />
        <div className='flex flex-row justify-between mt-4'>
          <div className='flex flex-row items-center w-60%'>
            <p className='text-[#378BA6] font-jost text-[16px] font-bold leading-[20.8px] tracking-[0.08px]'>Remarks : </p>
            <textarea className='border-[#378BA6] border-[0.5px] w-40%' />
          </div>
          <div className='flex flex-row justify-between gap-4 '>
            <button className="flex w-[120px] h-[34px] p-[8px_12px] justify-center items-center gap-2 rounded-[8px] bg-[#A4A4A4] text-white text-center font-jost text-[18px] font-semibold leading-[28px]" onClick={handleSelectCandidate}>Select</button>
            <button onClick={() => handleRejectCandidate(candidates._id)} className="flex w-[120px] h-[34px] p-[8px_12px] justify-center items-center gap-2 rounded-[8px] bg-[#378BA6] text-white text-center font-jost text-[18px] font-semibold leading-[28px]">Reject</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;