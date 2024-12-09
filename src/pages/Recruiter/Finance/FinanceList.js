import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Sidebar from '../../global/Sidebar';
import ExportIcon from '../../../Images/ExportIcon.png';
import Chat from '../../../Images/ChatIcon.png';
import Pagination from '../../global/Pagination';
import AdminID from '../../global/AdminID';

function FinanceList() {
  const [lockedJobDetails, setLockedJobDetails] = useState([]);
  const [filteredJobDetails, setFilteredJobDetails] = useState([]); // New state for filtered data
  const [searchTerm, setSearchTerm] = useState(''); // State to store search term
  const [sortOption, setSortOption] = useState('Latest'); // New state for sorting
  const [errorMessage, setErrorMessage] = useState('');
  const [uniqueJobTitles, setUniqueJobTitles] = useState([]); // State for storing unique job titles
  const [selectedJobTitle, setSelectedJobTitle] = useState(''); // State for selected job title
  const [uniqueStatuses, setUniqueStatuses] = useState([]); // State for storing unique statuses
  const [selectedStatus, setSelectedStatus] = useState(''); // State for selected status
  const navigate = useNavigate(); // Initialize useNavigate
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Function to get job details
  const getJobDetails = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/showJDs');
      console.log(response.data);

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
        setFilteredJobDetails(lockedJDs); // Initialize filtered data with all locked JDs
      } catch (error) {
        console.error('Error fetching job details:', error);
        setErrorMessage('Error fetching job details.');
      }
    };
    fetchJobDetails();
  }, []);

  useEffect(() => {
    const jobTitles = [...new Set(lockedJobDetails.map(jd => jd.job_title))]; // Extract unique job titles
    setUniqueJobTitles(jobTitles);
  }, [lockedJobDetails]);

  // Function to handle search by jd._id
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setFilteredJobDetails(lockedJobDetails);
    } else {
      const filtered = lockedJobDetails.filter(jd => jd._id.includes(value.trim()));
      setFilteredJobDetails(filtered);
    }
  };

  // Function to handle sorting
  const handleSort = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);

    const sorted = [...filteredJobDetails].sort((a, b) => {
      if (selectedOption === 'Latest') {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else if (selectedOption === 'Oldest') {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }
      return 0;
    });

    setFilteredJobDetails(sorted);
  };

  const handleJobTitleFilter = (e) => {
    const selectedTitle = e.target.value;
    setSelectedJobTitle(selectedTitle);

    if (selectedTitle === '') {
      setFilteredJobDetails(lockedJobDetails); // Reset to all jobs if no title selected
    } else {
      const filtered = lockedJobDetails.filter(jd => jd.job_title === selectedTitle);
      setFilteredJobDetails(filtered);
    }
  };

  // Extract unique statuses when lockedJobDetails is updated
  useEffect(() => {
    const statuses = [...new Set(lockedJobDetails.map(jd => jd.jd_status))]; // Extract unique statuses
    setUniqueStatuses(statuses);
  }, [lockedJobDetails]);

  // Handle filtering by status
  const handleStatusFilter = (e) => {
    const selectedStatus = e.target.value;
    setSelectedStatus(selectedStatus);

    if (selectedStatus === '') {
      setFilteredJobDetails(lockedJobDetails); // Reset to all jobs if no status selected
    } else {
      const filtered = lockedJobDetails.filter(jd => jd.jd_status === selectedStatus);
      setFilteredJobDetails(filtered);
    }
  };

  // Function to reset filters
  const handleResetFilters = () => {
    setSearchTerm('');
    setSortOption('Latest');
    setSelectedJobTitle(''); // Reset the job title filter
    setSelectedStatus('');   // Reset the status filter
    setFilteredJobDetails(lockedJobDetails); // Reset to all jobs
  };



  // Function to handle navigation to FinanceSummery page
  const goToFinanceSummary = (jd) => {
    navigate('/FinanceSummery', { state: { job: jd } });
  };

  // Calculate the job details to show on the current page
  const totalPages = Math.ceil(filteredJobDetails.length / itemsPerPage);
  const indexOfLastJob = currentPage * itemsPerPage;
  const indexOfFirstJob = indexOfLastJob - itemsPerPage;
  const currentJobs = filteredJobDetails.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <div className='max-h-screen flex flex-row gap-0 h-[100%]'>
      <div className='max-[30%]'>
        <Sidebar />
      </div>
      <div className='w-[100%] bg-[#EAF1F4] flex flex-col p-5 gap-33 flex-1'>
        <div className='flex justify-between' style={{ marginBottom: "50px" }}>
          <h1 className='flex justify-center items-center'><i class="fa-solid fa-angle-left"></i> <strong style={{ fontSize: "25px" }}>&nbsp;&nbsp; Finance</strong> </h1>
          <AdminID />
        </div>
        {/* Header Section */}

        <div className='flex flex-col w-auto h-full flex-wrap justify-center items-start gap-1 p-2.5 self-stretch bg-[#FBEFD0] mb-[20px]'>

          {/* User Information */}
          <div className='flex justify-between items-center self-stretch md:items-center mb-4  m-8 flex-wrap'>
            <div className='flex flex-col w-[50%]'>
              <h1 className='text-gray-600 truncate text-2xl font-medium'>Samuel</h1>
              <h1 className='text-[#378BA6] truncate text-base font-medium'>ID: 67890987</h1>
            </div>
            <div className='flex items-center bg-white p-2 rounded'>
              <h1 className='text-teal-600 text-4xl font-medium'>10</h1>
              <div className='w-px h-7 bg-gray-500 mx-2'></div>
              <h1 className='text-[#4F4F4F]'>Locked JD’s</h1>
            </div>
            <div className='flex items-center bg-white p-2 rounded'>
              <h1 className='text-teal-600 text-4xl font-medium'>10</h1>
              <div className='w-px h-7 bg-gray-500 mx-2'></div>
              <h1 className='text-[#4F4F4F]'>Successful JD’s</h1>
            </div>
            <div className='flex items-center bg-white p-2 rounded'>
              <h1 className='text-teal-600 text-4xl font-medium'>10</h1>
              <div className='w-px h-7 bg-gray-500 mx-2'></div>
              <h1 className='text-[#4F4F4F]'>Total Incentives</h1>
            </div>
          </div>
        </div>

        <section id='candidateOne-filter'>
          <div className="candidateOne-filter_search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search by Employee ID"
              className="candidateOne-filter_search-bar"
              value={searchTerm}
              onChange={handleSearch} // Add onChange for search
            />
          </div>

          <div className="filter_option">
            <span><i className="fa-solid fa-sort"></i> Sort By:</span>
            <select name="Sort By" value={sortOption} onChange={handleSort}>
              <option value="Latest">Latest</option>
              <option value="Oldest">Oldest</option>
            </select>
          </div>

          <div className='filter_option'>
            <select name="Job Title" value={selectedJobTitle} onChange={handleJobTitleFilter}>
              <option value="">Job Title</option>
              {uniqueJobTitles.map((title, index) => (
                <option key={index} value={title}>
                  {title}
                </option>
              ))}
            </select>
          </div>

          <div className='filter_option'>
            <select name="Status" value={selectedStatus} onChange={handleStatusFilter}>
              <option value="">Status</option>
              {uniqueStatuses.map((status, index) => (
                <option key={index} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div className='filter_option'>
            <button onClick={handleResetFilters}>
              <i className="fa-solid fa-arrow-rotate-left"></i> Reset Filter
            </button>
          </div>

        </section>

        {/* Table Header */}
        <div className='h-[52px] self-stretch bg-[rgba(55,139,166,0.30)] flex justify-between items-center p-8 mt-[20px]'>
          <h1 className='text-black font-jost text-xl'>JD ID</h1>
          <h1 className='text-black font-jost text-xl'>CLIENT DETAILS</h1>
          <h1 className='text-black font-jost text-xl'>JD DETAIL</h1>
          <h1 className='text-black font-jost text-xl'>CANDIDATES</h1>
          <h1 className='text-black font-jost text-xl'>DATE</h1>
          <h1 className='text-black font-jost text-xl'>AMOUNT</h1>
          <h1 className='text-black font-jost text-xl'>STATUS</h1>
        </div>

        {/* Job List */}
        <div className='flex flex-col gap-5 mt-6'>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          {currentJobs.length > 0 ? (
            currentJobs.map((jd, index) => (
              <div key={index} className='flex justify-between items-center rounded-md border bg-white p-4 shadow-md'>
                <h1 className='text-gray-800'>{jd._id}</h1>
                <div className='flex items-center'>
                  <div className='flex w-[40px] h-[40px] justify-center items-center bg-[#EAF1F3] rounded-full'>
                    <img src={ExportIcon} alt='Export' className='w-16 h-auto' />
                  </div>
                  <h1 className='text-gray-800 ml-2 cursor-pointer' onClick={() => goToFinanceSummary(jd)}>
                    {jd.company_Name}
                  </h1>
                </div>
                <div className='flex items-center'>
                  <div className='flex w-[40px] h-[40px] justify-center items-center bg-[#EAF1F3] rounded-full'>
                    <img src={Chat} alt='Chat' className='w-16 h-auto' />
                  </div>
                  <h1 className='text-gray-800 ml-2'>{jd.jobTitle}</h1>
                </div>
                <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px]'>
                  {jd.job_title}
                </h1>
                <div>
                  <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px]'>
                    Aditya raj
                  </h1>
                </div>
                <h1>{new Date(jd.createdAt).toLocaleDateString()}</h1>
                <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px]'>
                  ${jd.delivery_payout}
                </h1>
                <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px]'>
                  {jd.jd_status}
                </h1>
              </div>
            ))
          ) : (
            <h2>No locked job descriptions available.</h2>
          )}
        </div>

        {/* Pagination */}
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </div>
  );
}

export default FinanceList;
