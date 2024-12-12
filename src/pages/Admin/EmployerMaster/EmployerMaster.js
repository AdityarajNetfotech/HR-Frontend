import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../global/Sidebar';
import ExportIcon from '../../../Images/ExportIcon.png';
import Pagination from '../../global/Pagination';
import AdminSidebar from '../../global/AdminSidebar';
import AdminID from '../../global/AdminID';

const EmployerMaster = () => {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [sortOrder, setSortOrder] = useState('Latest'); 
  const [jobTitle, setJobTitle] = useState(''); 
  const [status, setStatus] = useState(''); 
  const [location, setLocation] = useState(''); 
  const itemsPerPage = 6; 

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/allUsers');
      const allUsers = response.data.users;
      const recruiterUsers = allUsers.filter(user => user.joinAs === 'client');
      setUsers(recruiterUsers);
    } catch (error) {
      setErrorMessage('Error fetching user data.');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  const filteredUsers = users
    .filter(user =>
      user._id.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) || 
      (user.company && user.company.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .filter(user => (jobTitle ? user.jobTitle === jobTitle : true))
    .filter(user => (status ? user.status === status : true))
    .filter(user => (location ? user.location === location : true));


  const sortedUsers = filteredUsers.sort((a, b) => {
    if (sortOrder === 'Latest') {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    return new Date(a.createdAt) - new Date(b.createdAt);
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when search changes
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    setCurrentPage(1); // Reset to first page when sort order changes
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSortOrder('Latest');
    setJobTitle('');
    setStatus('');
    setLocation('');
    setCurrentPage(1); // Reset to first page
  };

  useEffect(() => {
    console.log(users); // Log all user data
  }, [users]);

  return (
    <div className='flex flex-row gap-0 h-full'>
      <div className='max-[30%]'>
        <AdminSidebar />
      </div>
      <div className='w-[100%] bg-[#EAF1F4] flex flex-col p-5 flex-1'>
        <div className='flex justify-between' style={{ marginBottom: "50px" }}>
          <h1 className='flex justify-center items-center'><i class="fa-solid fa-angle-left"></i> <strong style={{ fontSize: "25px" }}>&nbsp;&nbsp; Employer Master</strong> </h1>
          <AdminID />
        </div>
        <section id='candidateOne-filter'>
          <div className="candidateOne-filter_search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search Here"
              className="candidateOne-filter_search-bar"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <div className='filter_option'>
            <span><i className="fa-solid fa-sort"></i> Sort By:</span>
            <select name="Sort By" value={sortOrder} onChange={handleSortChange}>
              <option value="Latest">Latest</option>
              <option value="Oldest">Oldest</option>
            </select>
          </div>

          <div className='filter_option'>
            <select name="Job Title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}>
              <option value="">Job Title</option>
              <option value="Developer">Google</option>
            </select>
          </div>

          <div className='filter_option'>
            <select name="Status" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="">Status</option>
            </select>
          </div>

          <div className='filter_option'>
            <select name="Location" value={location} onChange={(e) => setLocation(e.target.value)}>
              <option value="">Location</option>
            </select>
          </div>

          <div className='filter_option'>
            <button onClick={resetFilters}>
              <i className="fa-solid fa-arrow-rotate-left"></i> Reset Filter
            </button>
          </div>
        </section>

        <div className='h-[52px] self-stretch bg-[rgba(55,139,166,0.30)] flex justify-between items-center p-8 mt-[20px]'>
          <h1 className='text-black font-jost text-xl'>EMPLOYEE ID</h1>
          <h1 className='text-black font-jost text-xl'>NAME</h1>
          <h1 className='text-black font-jost text-xl'>COMPANY</h1>
          <h1 className='text-black font-jost text-xl'>JD POSTING</h1>
          <h1 className='text-black font-jost text-xl'>PERFORMANCE STATUS</h1>
          <h1 className='text-black font-jost text-xl'>DETAILS</h1>
        </div>
        <div className='flex flex-col gap-4 mt-6'>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {currentUsers.length > 0 ? (
            currentUsers.map((user, index) => (
              <div key={index} className='flex items-center rounded-md border bg-white p-3 shadow-md justify-between'>
                <h1 className='text-gray-800 mr-10'>{user._id}</h1>
                <div className='flex items-center mr-16'>
                  <div className='flex w-[40px] h-[40px] justify-center items-center bg-[#EAF1F3] rounded-full'>
                    <img src={ExportIcon} alt='Export' className='w-16 h-auto' />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-gray-800 ml-2 cursor-pointer font-semibold text-[16px]">
                      {user.firstName}
                    </h1>
                    <h1 className="text-gray-800 ml-2 cursor-pointer font-semibold text-[16px]">
                      {user.lastName}
                    </h1>
                  </div>
                </div>
                <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px] mr-32'>
                  {user.company || 'Google'}
                </h1>
                <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px] mr-64'>
                  {user.jdPosting || '04'}
                </h1>
                <div className='flex flex-row mr-[220px] gap-4'>
                  <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px] '>
                    {user.performanceStatus || 'Active'}
                  </h1>
                  <button className="w-[78px] h-[26px] px-[12px] py-[4px] gap-[10px] rounded-[12px] border border-black">
                    <p className="font-[Jost] text-[14px] font-normal leading-[18.2px] tracking-[0.005em] text-center text-[#4E4949]">
                      Stats
                    </p>
                  </button>
                </div>
                <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px] '>
                  {user.details || '0'}
                </h1>
              </div>
            ))
          ) : (
            <h2>No users available.</h2>
          )}
        </div>

        {/* Pagination Component */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default EmployerMaster;