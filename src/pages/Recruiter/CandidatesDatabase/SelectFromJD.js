import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ExportIcon from '../../../Images/ExportIcon.png';
import Chat from '../../../Images/ChatIcon.png';

function SelectFromJD() {
  const location = useLocation();
  const candidate = location.state?.candidate;
  const [lockedJobDetails, setLockedJobDetails] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();


  const getJobDetails = async () => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("User not authenticated.");
      return;
    }

    try {
      const response = await axios.get("http://localhost:4000/api/ShowUserLockJD", {
        params: { userId },
      });
      return response.data.jds;
    } catch (error) {
      console.error('Error fetching job details:', error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const jobDetails = await getJobDetails();
        const lockedJDs = jobDetails.filter(jd => jd.locked === true);
        setLockedJobDetails(lockedJDs);
        console.log(lockedJDs);
      } catch (error) {
        console.error('Error fetching job details:', error);
        setErrorMessage('Error fetching job details.');
      }
    };

    fetchJobDetails();

    if (candidate) {
      console.log('Candidate Data:', candidate);
    }
  }, [candidate]);


  const handleAddCandidateToJD = async (jd) => {
    // Check if the candidate is already added to the JD
    if (jd.candidates && jd.candidates.includes(candidate._id)) {
      alert('This candidate has already been added to this JD.');
      return;
    }

    try {
      await axios.post(`http://localhost:4000/api/add-candidate`, { jd_id: jd._id, candidate_id: candidate._id });
      alert('Candidate successfully added to the JD!');

      setTimeout(() => {
        navigate('/FinanceCandidate', { state: { jd, candidate } });
      }, 3000);
    } catch (error) {
      console.error('Error adding candidate to JD:', error);
      setErrorMessage('Error adding candidate to JD.');
    }
  };


  return (
    <div className='h-full gap-6 p-4 bg-[#EAF1F4] flex flex-col items-center lg:h-[auto]'>
      <div className='flex flex-col w-[1156px] py-8 px-0 items-end gap-6'>
        <div className='w-full'>
          {/* <JobFilters /> */}
        </div>
        <div className='h-[52px] self-stretch rounded-[8px] bg-[rgba(55,139,166,0.30)] flex justify-between items-center p-8 mt-[20px]'>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>Serial no</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>JD ID</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>CLIENT DETAILS</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>JD DETAIL</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>DATE</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>AMOUNT</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>STATUS</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>Action</h1>
        </div>

        {/* Show error message if there is one */}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        {/* Map over locked JDs array */}
        <div className='flex flex-col justify-center items-end gap-5 self-stretch'>
          {lockedJobDetails.length > 0 ? (
            lockedJobDetails.map((jd, index) => (
              <div
                key={index}
                className='flex justify-between items-center self-stretch rounded-md border border-[#9B9B9B] bg-white shadow-[6px_6px_20px_0px_rgba(0,0,0,0.12)] p-4 mt-6'
              >
                {/* Serial number */}
                <h1 className='text-gray-800 text-center font-sans text-base font-normal leading-6 tracking-tight'>
                  {index + 1}
                </h1>

                {/* JD ID */}
                <div className='flex flex-row items-center'>
                  <h1 className='text-gray-800 text-center font-sans text-base font-normal leading-6 tracking-tight'>
                    #{jd._id.slice(-4)}
                  </h1>
                </div>

                {/* Client Details */}
                <div className='flex flex-row items-center'>
                  <div className='flex w-[40px] h-[40px] justify-center items-center rounded-[45px] bg-[#EAF1F3]'>
                    <img src={ExportIcon} alt='Export' className='w-16 h-auto' />
                  </div>
                  <h1 className='text-gray-800 text-center font-sans text-base font-normal leading-6 tracking-tight'>
                    {jd.client_name}
                  </h1>
                </div>

                {/* JD Details */}
                <div className='flex flex-row items-center'>
                  <div className='flex w-[40px] h-[40px] justify-center items-center rounded-[45px] bg-[#EAF1F3]'>
                    <img src={Chat} alt='Chat' className='w-16 h-auto' />
                  </div>
                  <h1 className='text-gray-800 text-center font-sans text-base font-normal leading-6 tracking-tight'>
                    <span className='overflow-hidden text-[#4F4F4F] truncate whitespace-nowrap font-jost text-base font-semibold leading-6 tracking-tight'>
                      {jd.jobTitle}
                    </span>
                    <br />
                    {jd.companyName}
                  </h1>
                </div>

                {/* Date */}
                <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px]'>
                  {jd.createdAt.split('T')[0]}
                </h1>

                {/* Amount */}
                <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px]'>
                  ${jd.amount}
                </h1>

                {/* Status */}
                <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px]'>
                  {jd.status}
                </h1>

                {/* Add Candidate Button */}
                <button
                  onClick={() => handleAddCandidateToJD(jd)}
                  className='px-4 py-2 bg-blue-500 text-white rounded-md'
                >
                  Add Candidate
                </button>
              </div>
            ))
          ) : (
            <h2 className='text-lg font-semibold'>No locked job descriptions available.</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default SelectFromJD;
