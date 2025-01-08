import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios to fetch data
import ExportIcon from '../../../Images/ExportIcon.png';
import DeleteIcon from '../../../Images/DeleteIcon.png';
import Chat from '../../../Images/ChatIcon.png';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import Sidebar from '../../global/Sidebar';
import CandidateProgress from './CandidateProgress';
import Pagination from '../../global/Pagination';
import AdminID from '../../global/AdminID';

const AddCandidates = () => {
  const [currentIcon, setCurrentIcon] = useState('ArrowUp');
  const [isAccordionOpen, setIsAccordionOpen] = useState(null);
  const [lockedJobDetails, setLockedJobDetails] = useState([]);
  const [filteredJobDetails, setFilteredJobDetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [selectedJobTitle, setSelectedJobTitle] = useState('');
  const [jobTitles, setJobTitles] = useState([]);
  const [locations, setLocations] = useState([]);
  const [statuses, setStatuses] = useState([]); // State for storing unique statuses
  const [statusFilter, setStatusFilter] = useState(''); // Add this state if not defined yet
  // const [errorMessage, setErrorMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('Latest');
  const itemsPerPage = 5;

  // Function to get locked job details
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
      const jobDetails = response.data.jds;
      console.log(jobDetails);

      const lockedJDs = jobDetails.filter(jd => jd.locked === true);
      setLockedJobDetails(lockedJDs);

      // Extract unique job titles, locations, and statuses
      const uniqueJobTitles = [...new Set(lockedJDs.map(jd => jd.job_title))];
      const uniqueLocations = [...new Set(lockedJDs.map(jd => jd.location))];
      const uniqueStatuses = [...new Set(lockedJDs.map(jd => jd.jd_status))]; // Unique statuses

      setJobTitles(uniqueJobTitles);
      setLocations(uniqueLocations);
      setStatuses(uniqueStatuses); // Set unique statuses

      setFilteredJobDetails(lockedJDs);
    } catch (error) {
      console.error("No locked JDs found for this user");
      // setErrorMessage("No locked JDs found for this user")
    }
  };

  useEffect(() => {
    getJobDetails();
  }, []);


  const deleteJD = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/jd/delete/${id}`);
      if (response.data.success) {
        setLockedJobDetails((prevJDs) => prevJDs.filter((jd) => jd._id !== id)); // Remove the deleted JD from the state
        console.log(response.data);
      }
    } catch (error) {
      console.log("Error deleting JD:", error);
    }
  };



  // Fetch job details when component mounts
  useEffect(() => {
    getJobDetails();
  }, []);

  const toggleAccordion = (index) => {
    setIsAccordionOpen(prevIndex => (prevIndex === index ? null : index)); // Toggle the accordion
  };

  const renderIcon = (index) => {
    return isAccordionOpen === index ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />;
  };

  // Adjusted handleSearch and pagination logic for filtering.
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      const filtered = lockedJobDetails.filter((jd) =>
        jd._id.toLowerCase().includes(query) || jd.job_title.toLowerCase().includes(query)
      );
      setFilteredJobDetails(filtered);
    } else {
      setFilteredJobDetails(lockedJobDetails);
    }
  };

  // Sorting function
  const handleSort = (order) => {
    setSortOrder(order);
    const sortedDetails = [...filteredJobDetails].sort((a, b) => {
      if (order === 'Latest') {
        return new Date(b.delivery_deadline) - new Date(a.delivery_deadline);
      } else if (order === 'Oldest') {
        return new Date(a.delivery_deadline) - new Date(b.delivery_deadline);
      }
      return 0;
    });
    setFilteredJobDetails(sortedDetails);
  };

  const handleJobTitleFilter = (e) => {
    const selectedTitle = e.target.value;
    setSelectedJobTitle(selectedTitle);

    let filtered = lockedJobDetails.filter(jd =>
      jd.job_title.includes(selectedTitle)
    );

    if (searchQuery) {
      filtered = filtered.filter(jd =>
        jd._id.toLowerCase().includes(searchQuery) || jd.job_title.toLowerCase().includes(searchQuery)
      );
    }

    setFilteredJobDetails(filtered);
  };

  const handleStatusFilter = (e) => {
    const selectedStatus = e.target.value;
    setStatusFilter(selectedStatus); // Set the selected status in state

    let filtered = lockedJobDetails;

    if (selectedStatus) {
      filtered = filtered.filter(jd => jd.jd_status === selectedStatus);
    }

    if (searchQuery) {
      filtered = filtered.filter(jd =>
        jd._id.toLowerCase().includes(searchQuery) || jd.job_title.toLowerCase().includes(searchQuery)
      );
    }

    setFilteredJobDetails(filtered);
  };


  const handleLocationFilter = (e) => {
    const location = e.target.value;
    setLocationFilter(location);

    filterJobDetails(searchQuery, location);
  };

  const filterJobDetails = (query, location) => {
    let filtered = lockedJobDetails;

    if (query) {
      filtered = filtered.filter((jd) =>
        jd._id.toLowerCase().includes(query) || jd.job_title.toLowerCase().includes(query)
      );
    }

    if (location) {
      filtered = filtered.filter((jd) => jd.location.toLowerCase().includes(location.toLowerCase()));
    }

    setFilteredJobDetails(filtered);
  };

  useEffect(() => {
    setFilteredJobDetails(lockedJobDetails); // Initialize filtered data with full data
  }, [lockedJobDetails]);

  // Pagination calculation updated to use filteredJobDetails
  const totalPages = Math.ceil(filteredJobDetails.length / itemsPerPage);
  const currentItems = filteredJobDetails.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const resetFilter = () => {
    setSearchQuery('');
    setSortOrder('Latest'); // Reset sorting order to 'Latest'
    setSelectedJobTitle(''); // Reset job title filter
    setLocationFilter('');
    setStatusFilter(''); // Reset the status filter
    setFilteredJobDetails(lockedJobDetails); // Reset to original locked job details
  };




  return (
    <div className='min-h-screen flex flex-row gap-4'>
      <div className='max-[30%]'><Sidebar /></div>
      <div className='w-[100%] bg-[#EAF1F4] flex flex-col py-5 gap-33 flex-1 px-4'>
        <div className='flex justify-between' style={{ marginBottom: "50px" }}>
          <h1 className='flex justify-center items-center'><i class="fa-solid fa-angle-left"></i> <strong style={{ fontSize: "25px" }}>&nbsp;&nbsp; My Workplace</strong> </h1>
          <AdminID />
        </div>
        {/* Header Section */}
        {/* <div className='flex flex-col justify-center items-start gap-1 p-2.5 self-stretch bg-[#FBEFD0] mb-[20px] w-full'>
          <div className='flex justify-between items-center self-stretch w-full'>
            <div className='flex flex-col w-[100%]'>
              <h1 className='overflow-hidden text-gray-600 truncate whitespace-nowrap text-2xl font-medium leading-7'>Samule</h1>
              <h1 className='overflow-hidden text-[#378BA6] truncate whitespace-nowrap text-base font-medium leading-5'>ID : 67890987</h1>
            </div>
            <div className='flex p-2 px-3 gap-3 justify-center items-center rounded bg-white'>
              <h1 className='text-teal-600 text-center text-4xl font-medium leading-7'>10</h1>
              <div className='w-px h-7 bg-gray-500'></div>
              <h1 className='text-dark-grey font-jost text-base font-normal leading-custom tracking-custom text-[#4F4F4F]'>Locked JD’s</h1>
            </div>
            <div className='flex p-2 px-3 gap-3 justify-center items-center rounded bg-white'>
              <h1 className='text-teal-600 text-center text-4xl font-medium leading-7'>10</h1>
              <div className='w-px h-7 bg-gray-500'></div>
              <h1 className='text-dark-grey font-jost text-base font-normal leading-custom tracking-custom text-[#4F4F4F]'>Successful JD’s</h1>
            </div>
            <div className='flex p-2 px-3 gap-3 justify-center items-center rounded bg-white'>
              <h1 className='text-teal-600 text-center text-4xl font-medium leading-7'>10</h1>
              <div className='w-px h-7 bg-gray-500'></div>
              <h1 className='text-dark-grey font-jost text-base font-normal leading-custom tracking-custom text-[#4F4F4F]'>Total Incentives</h1>
            </div>
          </div>
        </div> */}

        {/* Filter */}
        <div id='candidateOne-filter'>
          <div className="candidateOne-filter_search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder=" Search Here"
              className="candidateOne-filter_search-bar"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>

          <div className='filter_option'>
            <span><i className="fa-solid fa-sort"></i> Sort By:</span>
            <select
              name="Sort By"
              value={sortOrder}
              onChange={(e) => handleSort(e.target.value)}
            >
              <option value="Latest">Latest</option>
              <option value="Oldest">Oldest</option>
            </select>
          </div>

          <div className='filter_option'>
            <span><i className="fa-solid fa-filter"></i> Filter By:</span>
            <select
              name="Filter By"
            >
              <option value="">All</option>
              <option value="Latest">Latest</option>
              <option value="Oldest">Oldest</option>
            </select>
          </div>

          <div className='filter_option'>
            <select
              name="Job Title"
              value={selectedJobTitle}
              onChange={handleJobTitleFilter}
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
              value={statusFilter}
              onChange={handleStatusFilter}
            >
              <option value="">Status</option>
              {statuses.map((status, index) => (
                <option key={index} value={status}>{status}</option>
              ))}
            </select>

          </div>

          <div className='filter_option'>
            <select
              name="Job Title"
              onChange={handleLocationFilter}
              value={locationFilter}
            >
              <option value="">Location</option>
              {locations.map((location, index) => (
                <option key={index} value={location}>{location}</option>
              ))}
            </select>
          </div>

          <div className='filter_option'>
            <button onClick={resetFilter}>
              <i className="fa-solid fa-arrow-rotate-left"></i> Reset Filter
            </button>
          </div>
        </div>

        {/* Table Header */}
        {/* Map through locked JDs */}
        <div className="flex flex-col">
  {/* Header Section */}
  <div className="h-[72px] self-stretch rounded-[8px] bg-[rgba(55,139,166,0.30)] grid grid-cols-8 items-center mt-[20px]">
  {/* <div className="h-[52px] self-stretch rounded-[8px] bg-[rgba(55,139,166,0.30)] flex justify-between items-center p-8 mt-[20px]'"> */}
    <h1 className="text-black text-center font-jost text-xl font-normal leading-9">JD ID</h1>
    <h1 className="text-black text-center font-jost text-xl font-normal leading-9">COMPANY NAME</h1>
    <h1 className="text-black text-center font-jost text-xl font-normal leading-9">JOB TITLE</h1>
    <h1 className="text-black text-center font-jost text-xl font-normal leading-9">JOB LOCATION</h1>
    <h1 className="text-black text-center font-jost text-xl font-normal leading-9">DEADLINE</h1>
    <h1 className="text-black text-center font-jost text-xl font-normal leading-9">STATUS</h1>
    <h1 className="text-black text-center font-jost text-xl font-normal leading-9">DETAIL</h1>
    <h1 className="text-black text-center font-jost text-xl font-normal leading-9">DELETE JD</h1>
  </div>

  {/* Map through locked JDs */}
  <div className="flex flex-col gap-5 mt-6 self-stretch">
    {/* {errorMessage && <p className="text-red-500">{errorMessage}</p>} */}
    {currentItems.length > 0 ? (
      currentItems.map((jd, index) => (
        <div key={index} className="flex flex-col gap-5 self-stretch">
          <div className="grid grid-cols-8 items-center rounded-md border border-[#9B9B9B] bg-white shadow-[6px_6px_20px_0px_rgba(0,0,0,0.12)] p-4">
            {/* JD ID */}
            <h1 className="text-gray-800 text-center font-sans text-base font-normal leading-6 tracking-tight">
              {jd._id.slice(0,18)}
            </h1>

            {/* Company Name */}
            <h1 className="text-gray-800 text-center font-sans text-base font-normal leading-6 tracking-tight">
              {jd.company_Name}
            </h1>

            {/* Job Title */}
            <h1 className="text-gray-800 text-center font-sans text-base font-normal leading-6 tracking-tight truncate">
              {jd.job_title}
            </h1>

            {/* Job Location */}
            <h1 className="text-gray-800 text-center font-sans text-base font-normal leading-6 tracking-tight truncate">
              {jd.location}
            </h1>

            {/* Deadline */}
            <h1 className="text-[#4F4F4F] text-center font-sans text-base font-normal leading-6 tracking-tight">
              {jd.delivery_deadline.split('T')[0]}
            </h1>

            {/* Status */}
            <h1 className="text-[#3AB13A] text-center font-sans text-base font-semibold leading-6 tracking-tight">
              {jd.jd_status}
            </h1>

            {/* Detail Button */}
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-center items-center w-[108px] py-2 px-4 rounded-[12px] border border-[#1C3941] bg-[#378BA6] mx-auto"
            >
              <h1 className="text-white font-jost text-base font-semibold leading-5 tracking-tight">
                More
              </h1>
              {renderIcon(index)}
            </button>

            {/* Delete Button */}
            <button
              className="p-2 mx-auto h-10 rounded-lg hover:bg-[rgba(55,139,166,0.20)] bg-[rgba(55,139,166,0.30)]"
              onClick={() => deleteJD(jd._id)}
            >
              <img src={DeleteIcon} alt="Delete" />
            </button>
          </div>

          {/* Accordion Content */}
          {isAccordionOpen === index && (
            <div className="self-stretch bg-[#D9E1E3] shadow-[4px_4px_20px_0px_rgba(0,0,0,0.12)] p-4">
              <CandidateProgress jdId={jd._id} />
            </div>
          )}
        </div>
      ))
    ) : (
      <p className="text-center">No locked job details available.</p>
    )}
  </div>
</div>

        {/* Pagination */}
        <div className='flex justify-end items-center mt-6'>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default AddCandidates;
