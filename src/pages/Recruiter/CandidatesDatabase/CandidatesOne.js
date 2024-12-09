import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../../global/Sidebar';
import { MdDelete } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import Pagination from '../../global/Pagination';
import Filter, { initialFilters } from '../../global/Filter';
import AdminID from '../../global/AdminID';


const CandidatesOne = ({ limit = Infinity }) => {
  const [candidates, setCandidates] = useState([]);
  const [filters, setFilters] = useState(initialFilters);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [paginatedCandidates, setPaginatedCandidates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const itemsPerPage = 4;

  useEffect(() => {
    getCandidateData();
  }, []);

  const getCandidateData = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/candidates');
      setCandidates(res.data.data || []);
    } catch (error) {
      console.log('Error in fetching data from backend:', error);
    }
  };


  useEffect(() => {
    paginateCandidates();
  }, [filteredCandidates, currentPage]);


  const paginateCandidates = () => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    const paginated = filteredCandidates.slice(startIdx, startIdx + itemsPerPage);
    setPaginatedCandidates(paginated);
  };

  const handleMoveToJD = (candidate) => {
    navigate('/SelectFromJD', { state: { candidate } });
  };

  const totalPages = Math.ceil(filteredCandidates.length / itemsPerPage);

  return (
    <div className='h-full flex flex-row gap-6'>
      <div className='max-[30%]'>
        <Sidebar />
      </div>
      <div className='w-[100%] bg-[#EAF1F4] flex flex-col py-5 gap-33 flex-1 p-6'>
        <div className='flex justify-between' style={{ marginBottom: "50px" }}>
          <h1 className='flex justify-center items-center'><i class="fa-solid fa-angle-left"></i> <strong style={{ fontSize: "25px" }}>&nbsp;&nbsp; Candidates Database</strong> </h1>
          <AdminID />
        </div>

        <Filter candidates={candidates} setFilteredCandidates={setFilteredCandidates} filters={filters} setFilters={setFilters} />

        <div className='w-full flex flex-col gap-4 mt-4'>
          {paginatedCandidates.length > 0 ? (
            paginatedCandidates.map((candidate, index) => (
              <div key={index} className='rounded-lg border border-teal-500 bg-white flex flex-col gap-3 p-4 self-stretch w-[full] h-auto'>
                <div className='flex justify-between self-stretch'>
                  <div className='flex flex-row items-center gap-4 w-[100%]'>
                    <div className='flex flex-col w-[75%]'>
                      <h1 className='overflow-hidden text-gray-600 truncate whitespace-nowrap text-2xl font-medium leading-7'>
                        {candidate.First_name} {candidate.Last_name}
                      </h1>
                      <h1 className='overflow-hidden text-[#378BA6] truncate whitespace-nowrap text-base font-medium leading-5'>
                        Candidate ID: {candidate._id}
                      </h1>
                    </div>

                    <div className='text-black text-sm font-semibold font-jost leading-9 flex flex-row gap-2 ml-20 items-center'>
                      Exp:
                      <h1 className='text-[#A38740] text-base font-normal font-jost leading-7 text-center bg-[#FFFB9A]'>
                        {candidate.Total_Experiences || 'N/A'}
                      </h1>
                    </div>

                    <div className='flex h-[40px] w-[40px] justify-end items-end bg-[#EAF1F3] ml-8'>
                      <MdDelete className='w-16 h-auto' />
                    </div>
                  </div>
                </div>
                <div className='w-full h-px bg-black'></div>
                <div className='mt-4 flex flex-row gap-8 items-center'>
                  <div className='flex flex-row text-center'>
                    <FaBriefcase className='w-5 h-5 text-[#378BA6]' />
                    <h1 className='text-gray-600 text-base font-normal ml-2'>Job Title:</h1>
                    <h1 className='text-gray-600 text-base font-normal'>{candidate.Job_Title || 'Not specified'}</h1>
                  </div>

                  <div className='flex flex-row text-center'>
                    <FaLocationDot className='w-5 h-5 text-[#378BA6]' />
                    <h1 className='text-gray-600 text-base font-normal ml-2'>Location:</h1>
                    <h1 className='text-gray-600 text-base font-normal'>{candidate.Current_location || 'Not specified'}</h1>
                  </div>

                  <div className='flex flex-row text-center'>
                    <RiMoneyRupeeCircleFill className='w-5 h-5 text-[#378BA6]' />
                    <h1 className='text-gray-600 text-base font-normal ml-2'>Expected Salary:</h1>
                    <h1 className='text-gray-600 text-base font-normal'>{candidate.Expected_Salary || 'Not specified'}</h1>
                  </div>

                  <div className='flex flex-row text-center'>
                    <FaExternalLinkAlt className='w-5 h-5 text-[#378BA6]' />
                    <h1 className='text-gray-600 text-base font-normal ml-2'>CV Link:</h1>
                    <a className='text-gray-600 text-base font-normal underline' href={candidate.cv_link || '#'}>
                      {candidate.cv_link ? 'Download' : 'Not available'}
                    </a>
                  </div>
                </div>

                <div className='flex justify-end mt-2'>
                  <button
                    className='rounded-lg bg-[#378BA6] text-[#FFFEFE] flex flex-row gap-2 items-center px-6 py-2 self-end'
                    onClick={() => handleMoveToJD(candidate)}
                  >
                    Move to JD
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No candidates found.</p>
          )}
        </div>

        {/* Dynamic Pagination */}
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />

      </div>
    </div>
  );
};

export default CandidatesOne;
