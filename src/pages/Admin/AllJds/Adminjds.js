import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
// import Sidebar from '../../global/Sidebar';
import Sidebar from '../../global/Sidebar';
import ExportIcon from '../../../Images/ExportIcon.png';
import Chat from '../../../Images/ChatIcon.png';
import AdminSidebar from '../../global/AdminSidebar';
import AdminID from '../../global/AdminID';
import Pagination from '../../global/Pagination';

function Adminjds() {
    const [allJobDetails, setAllJobDetails] = useState([]);
    const [lockedJobDetails, setLockedJobDetails] = useState([]);
    const [industries, setIndustries] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [selectedIndustry, setSelectedIndustry] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 6; 
    const navigate = useNavigate();

    // Fetch job details from API
   const fetchJobDetails = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/showJDs');
            const jobDetails = response.data.jds;
            setAllJobDetails(jobDetails);

            const lockedJDs = jobDetails.filter((jd) => jd.locked === true);
            setLockedJobDetails(lockedJDs);

            const uniqueIndustries = [
                ...new Set(jobDetails.map((jd) => jd.industry).filter((industry) => industry))
            ];
            setIndustries(uniqueIndustries);

            const uniqueStatuses = [
                ...new Set(jobDetails.map((jd) => jd.jd_status).filter((status) => status))
            ];
            setStatuses(uniqueStatuses);
        } catch (error) {
            console.error('Error fetching job details:', error);
            setErrorMessage('Error fetching job details.');
        }
    };

    useEffect(() => {
        fetchJobDetails();
    }, []);

    // Handle search input change
    const handleSearchChange = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);

        const filteredJobs = allJobDetails.filter((jd) => {
            const idMatch = jd._id.toLowerCase().includes(value);
            const industryMatch = jd.industry.toLowerCase().includes(value);
            const companyMatch = jd.company_Name.toLowerCase().includes(value);

            return jd.locked === true && (idMatch || industryMatch || companyMatch);
        });

        setLockedJobDetails(filteredJobs);
    };

    // Handle industry filter change
    const handleIndustryChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedIndustry(selectedValue);

        if (selectedValue) {
            const filteredJobs = allJobDetails.filter(
                (jd) =>
                    jd.locked === true &&
                    jd.industry === selectedValue &&
                    (!selectedStatus || jd.jd_status === selectedStatus) &&
                    (jd._id.toLowerCase().includes(searchTerm) ||
                        jd.industry.toLowerCase().includes(searchTerm) ||
                        jd.company_Name.toLowerCase().includes(searchTerm))
            );
            setLockedJobDetails(filteredJobs);
        } else {
            resetFilters();
        }
    };

    // Handle status filter change
    const handleStatusChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedStatus(selectedValue);

        if (selectedValue) {
            const filteredJobs = allJobDetails.filter(
                (jd) =>
                    jd.locked === true &&
                    jd.jd_status === selectedValue &&
                    (!selectedIndustry || jd.industry === selectedIndustry) &&
                    (jd._id.toLowerCase().includes(searchTerm) ||
                        jd.industry.toLowerCase().includes(searchTerm) ||
                        jd.company_Name.toLowerCase().includes(searchTerm))
            );
            setLockedJobDetails(filteredJobs);
        } else {
            resetFilters();
        }
    };

    // Handle sorting
    const handleSortChange = (event) => {
        const selectedOrder = event.target.value;
        setSortOrder(selectedOrder);

        const sortedJobs = [...lockedJobDetails].sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
            return selectedOrder === 'Old' ? dateA - dateB : dateB - dateA;
        });

        setLockedJobDetails(sortedJobs);
    };

    // Reset filters
    const resetFilters = () => {
        setSelectedIndustry('');
        setSelectedStatus('');
        setSortOrder('');
        setSearchTerm('');
        const lockedJDs = allJobDetails.filter((jd) => jd.locked === true);
        setLockedJobDetails(lockedJDs);
    };

    useEffect(() => {
        setTotalPages(Math.ceil(lockedJobDetails.length / itemsPerPage));
    }, [lockedJobDetails]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const paginatedJobs = lockedJobDetails.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );


    // Navigate to FinanceSummary page
    const goToFinanceSummary = (jd) => {
        navigate('/AdminSummery', { state: { job: jd } });
    };

    return (
        <div className=' flex flex-row gap-0 h-full'>
            <div className='max-[30%]'>
                <AdminSidebar />
            </div>
            <div className='w-[100%] bg-[#EAF1F4] flex flex-col p-5 gap-33 flex-1'>
                {/* Header Section */}
                <div className='flex justify-between' style={{ marginBottom: "50px" }}>
                    <h1 className='flex justify-center items-center'><i class="fa-solid fa-angle-left"></i> <strong style={{ fontSize: "25px" }}>&nbsp;&nbsp; JD Master</strong> </h1>
                    <AdminID />
                </div>

                <section id='candidateOne-filter'>
                    <div className="candidateOne-filter_search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input
                            type="text"
                            placeholder="Search"
                            className="candidateOne-filter_search-bar"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>

                    <div className='filter_option'>
                        <span><i className="fa-solid fa-sort"></i> Sort By:</span>
                        <select
                            name="Sort Order"
                            value={sortOrder}
                            onChange={handleSortChange}
                        >
                            <option value="New">Latest</option>
                            <option value="Old">Oldest</option>
                        </select>
                    </div>

                    <div className='filter_option'>
                        <span><i className="fa-solid fa-filter"></i> Filter By:</span>
                        <select
                            name="Filter By"
                        >
                            <option value="">All</option>
                        </select>
                    </div>

                    <div className='filter_option'>
                        <select
                            name="Industry"
                            value={selectedIndustry}
                            onChange={handleIndustryChange}
                        >
                            <option value="">Job Title</option>
                            {industries.map((industry, index) => (
                                <option key={index} value={industry}>
                                    {industry}
                                </option>
                            ))}
                        </select>

                    </div>

                    <div className='filter_option'>
                        <select
                            name="Status"
                            value={selectedStatus}
                            onChange={handleStatusChange}
                        >
                            <option value="">Status</option>
                            {statuses.map((status, index) => (
                                <option key={index} value={status}>
                                    {status}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='filter_option'>
                        <select
                            name="Location"
                        >
                            <option value="">Location</option>
                        </select>
                    </div>

                    <div className='filter_option'>
                        <button onClick={resetFilters}>
                            <i className="fa-solid fa-arrow-rotate-left"></i> Reset Filter
                        </button>
                    </div>
                </section>

                {/* Table Header */}
                <div>
  {/* Header */}
  <div className="h-[82px] bg-[rgba(55,139,166,0.30)] grid grid-cols-5 items-center p-8 mt-[20px]">
    <h1 className="text-black font-jost text-xl">JD ID</h1>
    <h1 className="text-black font-jost text-xl mx-auto">JD DETAIL</h1>
    {/* <h1 className="text-black font-jost text-xl">CLIENT DETAIL</h1> */}
    <h1 className="text-black font-jost text-xl mx-auto">UPLOAD DATE</h1>
    <h1 className="text-black font-jost text-xl mx-auto">DEADLINE DATE</h1>
    <h1 className="text-black font-jost text-xl mx-auto">STATUS</h1>
    {/* <h1 className="text-black font-jost text-xl">DETAILS</h1> */}
  </div>

  {/* Job List */}
  <div className="flex flex-col gap-5 mt-6">
    {errorMessage && <p className="text-red-500">{errorMessage}</p>}

    {paginatedJobs.length > 0 ? (
      paginatedJobs.map((jd, index) => (
        <div
          key={index}
          className="grid grid-cols-5 items-center rounded-md border bg-white p-4 shadow-md"
        >
          <h1 className="text-gray-800">{jd._id}</h1>

          {/* JD DETAIL */}
          <div className="flex items-center">
            {/* <div className="flex w-[40px] h-[40px] justify-center items-center bg-[#EAF1F3] rounded-full">
              <img src={ExportIcon} alt="Export" className="w-16 h-auto" />
            </div> */}
            <div className="flex flex-col mx-auto">
              <h1
                className="text-gray-800 ml-2 cursor-pointer font-semibold"
                onClick={() => goToFinanceSummary(jd)}
              >
                {jd.company_Name}
              </h1>
              <h2 className="text-gray-600 ml-2 text-sm">{jd.industry}</h2>
            </div>
          </div>

          {/* CLIENT DETAIL */}
          {/* <div className="flex items-center">
        
          </div> */}

          {/* UPLOAD DATE */}
          <h1 className="text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px] mx-auto">
            {jd.createdAt.substring(0, 10)}
          </h1>

          {/* DEADLINE DATE */}
          <h1 className="text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px] mx-auto">
            {jd.delivery_deadline.substring(0, 10)}
          </h1>

          {/* STATUS */}
          <h1 className="text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px] mx-auto">
            {jd.jd_status}
          </h1>

          {/* DETAILS */}
          {/* <h1 className="text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px]">
            Details Placeholder
          </h1> */}
        </div>
      ))
    ) : (
      <h2>No locked job descriptions available.</h2>
    )}
  </div>
</div>

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />

            </div>
        </div>
    );
}

export default Adminjds;