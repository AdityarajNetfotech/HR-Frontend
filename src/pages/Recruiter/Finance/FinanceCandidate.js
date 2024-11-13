import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { FaBriefcase, FaExternalLinkAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { GoTrash } from "react-icons/go";
import axios from 'axios'; 

const FinanceCandidate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { jd } = location.state || {}; 
  const [candidates, setCandidates] = useState([]); 
  useEffect(() => {
    if (jd) {
      console.log('JD:', jd);
      fetchCandidates(); 
    }
  }, [jd]);

  const fetchCandidates = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/jds/${jd._id}/candidates`);
      setCandidates(response.data.candidates);
      console.log('Fetched Candidates:', response.data); 
    } catch (error) {
      console.error('Error fetching candidates:', error);
    }
  };

  const handleViewMore = (candidateId) => {
    navigate(`/CandidatesOne/${candidateId}`); 
  };

  console.log('Candidates State:', candidates);
  if (candidates.length === 0) {
    console.log('No candidates returned from API.');
  }

  return (
    <div className='min-h-screen flex items-center bg-[#FBEFD0] justify-center p-4'>
      <div className='flex flex-col items-start p-4 lg:p-8 gap-4 rounded-lg bg-white w-full lg:w-[1200px] lg:h-[auto]'>
        <div className='flex p-2 lg:p-4 justify-between items-center self-stretch rounded-[8px] bg-[rgba(55,139,166,0.30)]'>
          <p className='text-[#4F4F4F] text-center font-jost text-base lg:text-[20px] font-medium leading-custom'>CANDIDATES</p>
          <button className='w-[24px] h-[24px] text-lg lg:text-xl'><IoMdClose /></button>
        </div>

        
        {jd && (
          <h1 className='flex px-2 py-1 lg:px-2 lg:py-1 justify-center items-center rounded-lg bg-[#E8E8E8] text-sm lg:text-base'>
            JD ID : {jd._id}
          </h1>
        )}

        <div className="w-full h-px bg-[#848484]"></div>

        {candidates.length > 0 ? (
          candidates.map((candidate, index) => (
            <div key={index} className='rounded-lg border border-teal-500 bg-white flex flex-col gap-3 p-4 lg:p-6 self-stretch'>
              <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                  <div className='h-10 w-10 bg-[#ECB015] text-white items-center'>
                    {candidate.First_name.charAt(0)}{candidate.Last_name.charAt(0)}
                  </div>
                  <div>
                    <div className='font-jost font-semibold'>{candidate.First_name} {candidate.Last_name}</div>
                    <div className='text-[var(--Teal,#378BA6)] font-jost'><p>Candidate ID: <b>{candidate._id}</b></p></div>
                  </div>
                </div>
                <div className='flex gap-10'>
                  <div className='flex items-center gap-1'><b>Exp : </b><div className='bg-[#FFFB9A] text-[#A38740] px-2 py-1 rounded-lg'>{candidate.Total_Experiences}</div></div>
                  <GoTrash className='h-10 w-10 py-3 px-2 bg-[#EAF1F3]' />
                </div>
              </div>
              <div className='w-full h-px bg-black my-4 lg:my-6'></div>

              
              {jd ? (
                <div className='flex justify-between'>
                  <div className='flex justify-between gap-6'>
                    <div className='flex flex-row items-center text-sm lg:text-base gap-1'>
                      <FaBriefcase className='w-5 h-5 text-[#378BA6]' />
                      <h1 className='text-gray-600 font-jost ml-2'>Job Title:</h1>
                      <h1 className='text-gray-600 font-jost font-semibold'>{jd.job_title}</h1>
                    </div>
                    <div className='flex flex-row items-center text-sm lg:text-base gap-1'>
                      <FaLocationDot className='w-5 h-5 text-[#378BA6]' />
                      <h1 className='text-gray-600 font-jost ml-2'>Location:</h1>
                      <h1 className='text-gray-600 font-jost font-semibold'>{candidate.Current_location}</h1>
                    </div>
                    <div className='flex flex-row items-center text-sm lg:text-base gap-1'>
                      <RiMoneyRupeeCircleFill className='w-5 h-5 text-[#378BA6]' />
                      <h1 className='text-gray-600 font-jost ml-2'>Salary:</h1>
                      <h1 className='text-gray-600 font-jost font-semibold'>{candidate.Expected_salary}/- p.a.</h1>
                    </div>
                  </div>
                  <div className='flex flex-row items-center justify-center gap-2 py-2 px-3 rounded-md border border-gray-400 bg-white' onClick={() => handleViewMore(candidate._id)}>
                    <h1 className='text-xl lg:text-xl font-jost font-semibold text-[#4F4F4F]'>View More</h1>
                    <FaExternalLinkAlt />
                  </div>
                </div>
              ) : (
                <div className='text-gray-600 text-sm lg:text-base'>
                  No job description data available.
                </div>
              )}
            </div>
          ))
        ) : (
          <div className='text-gray-600 text-sm lg:text-base'>
            No candidates available for this job description.
          </div>
        )}
      </div>
    </div>
  );
};

export default FinanceCandidate;
