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
import AdminID from '../../global/AdminID';
import '../../global/Filter.css';
import { Link } from 'react-router-dom';

const initialFilters = {
  location: '',
  jobTitle: '',
  status: '',
  search: '',
  sortBy: 'Latest',
};

const CandidatesOne = ({ limit = Infinity }) => {
  const [candidates, setCandidates] = useState([]);
  const [filters, setFilters] = useState(initialFilters);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [paginatedCandidates, setPaginatedCandidates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [statuses, setStatuses] = useState([]);
  const [locations, setLocations] = useState([]);
  const [jobTitles, setJobTitles] = useState([]);
  const navigate = useNavigate();
  const itemsPerPage = 4;

  useEffect(() => {
    getCandidateData();
  }, []);

  const getCandidateData = async () => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("User not authenticated.");
      return;
    }

    try {
      const res = await axios.get('http://localhost:4000/api/candidates', {
        params: { userId },
      })
      
      // console.log("res here", res.data);

      const data = res.data.data || [];
      setCandidates(data);

      // Extract unique statuses, locations, and job titles
      const uniqueStatuses = [...new Set(data.map((candidate) => {
        if (!candidate.Total_Experiences || candidate.Total_Experiences === "fresher") {
          return "Fresher";
        }
        return "Experienced";
      }))];

      const uniqueLocations = [...new Set(data.map((candidate) => candidate.Current_location).filter(Boolean))];
      const uniqueJobTitles = [...new Set(data.map((candidate) => candidate.Job_Title).filter(Boolean))];

      setStatuses(uniqueStatuses);
      setLocations(uniqueLocations);
      setJobTitles(uniqueJobTitles);
    } catch (error) {
      console.log('Error in fetching data from backend:', error);
    }
  };

  const candidateDelete = async (candidateId) => {
    try {
      const res = await axios.delete(`http://localhost:4000/api/candidate/delete/${candidateId}`);
      console.log(res.data);

      if (res.data.success) {
        alert('Candidate successfully Deleted!');
        setCandidates((prevCandidates) =>
          prevCandidates.filter((candidate) => candidate._id !== candidateId)
        );
      }
    } catch (error) {
      console.error("Error deleting candidate:", error.message);
    }
  };


  useEffect(() => {
    applyFilters();
  }, [candidates, filters]);

  const applyFilters = () => {
    let filtered = [...candidates];

    if (filters.search) {
      filtered = filtered.filter(candidate =>
        `${candidate.First_name} ${candidate.Last_name}`
          .toLowerCase()
          .includes(filters.search.toLowerCase())
      );
    }

    if (filters.location) {
      filtered = filtered.filter(candidate => candidate.Current_location === filters.location);
    }

    if (filters.jobTitle) {
      filtered = filtered.filter(candidate => candidate.Job_Title === filters.jobTitle);
    }

    if (filters.status) {
      if (filters.status === "Fresher") {
        filtered = filtered.filter(candidate => candidate.Total_Experiences === "fresher" || !candidate.Total_Experiences);
      } else if (filters.status === "Experienced") {
        filtered = filtered.filter(candidate => candidate.Total_Experiences !== "fresher" && candidate.Total_Experiences > 0);
      }
    }

    if (filters.sortBy === 'Latest') {
      filtered = filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (filters.sortBy === 'Oldest') {
      filtered = filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    setFilteredCandidates(filtered);
  };

  useEffect(() => {
    paginateCandidates();
  }, [filteredCandidates, currentPage]);

  const paginateCandidates = () => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    const paginated = filteredCandidates.slice(startIdx, startIdx + itemsPerPage);
    setPaginatedCandidates(paginated);
  };

  const handleResetFilters = () => {
    setFilters(initialFilters);
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


        {/* Filter Section */}
        <section id='candidateOne-filter'>
          <div className="candidateOne-filter_search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder=" Search"
              className="candidateOne-filter_search-bar"
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            />
          </div>

          <div className='filter_option'>
            <span><i className="fa-solid fa-sort"></i> Sort By:</span>
            <select
              name="Sort By"
              value={filters.sortBy}
              onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
            >
              <option value="Latest">Latest</option>
              <option value="Oldest">Oldest</option>
            </select>
          </div>

          <div className='filter_option'>
            <select
              name="Job Title"
              value={filters.jobTitle}
              onChange={(e) => setFilters({ ...filters, jobTitle: e.target.value })}
            >
              <option value="">Job Title</option>
              {jobTitles.map((title, index) => (
                <option key={index} value={title}>{title}</option>
              ))}
            </select>
          </div>

          <div className='filter_option'>
            <select
              name="Status"
              value={filters.status}
              onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            >
              <option value="">Status</option>
              {statuses.map((status, index) => (
                <option key={index} value={status}>{status}</option>
              ))}
            </select>
          </div>

          <div className='filter_option'>
            <select
              name="Location"
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            >
              <option value="">Location</option>
              {locations.map((location, index) => (
                <option key={index} value={location}>{location}</option>
              ))}
            </select>
          </div>

          <div className='filter_option'>
            <button onClick={handleResetFilters}>
              <i className="fa-solid fa-arrow-rotate-left"></i> Reset Filter
            </button>
          </div>
        </section>
        <div className="w-full flex justify-end mt-4">
          <button className="w-[20%] flex p-2 px-3 justify-center items-center gap-2 self-stretch rounded-lg bg-gray-400">
            <Link to="/Candidate-Form" className="text-white text-center font-semibold text-xl leading-7 font-jost">Add New Candidate</Link>
          </button>
        </div>

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

                    <div className='flex h-[40px] w-[40px] justify-end items-end bg-[#EAF1F3] ml-8 cursor-pointer'>
                      <MdDelete onClick={() => candidateDelete(candidate._id)} className='w-16 h-auto' />
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
                  <div className='flex justify-end mt-2'>
                    <button
                      className='rounded-lg bg-[#378BA6] text-[#FFFEFE] flex flex-row gap-2 items-center px-6 py-2 self-end'
                      onClick={() => handleMoveToJD(candidate)}
                    >
                      Move to JD
                    </button>
                  </div>
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