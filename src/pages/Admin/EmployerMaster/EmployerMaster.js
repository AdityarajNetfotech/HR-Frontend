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
      console.log('Fetched Users Data:', allUsers);

      const recruiterUsers = allUsers.filter(user => user.joinAs === 'client');
      console.log('Filtered Recruiter Users:', recruiterUsers);
      setUsers(recruiterUsers);

    } catch (error) {
      setErrorMessage('Error fetching user data.');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  const handleDeleteCandidate = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:4000/api/user/delete/${id}`)
      console.log("Candidate deleted. ", res.data)
      alert("Candidate deleted successfully!");
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));

    } catch (error) {
      console.error("Error deleting Candidate: ", error);
      alert("Failed to delete Candidate.");
    }
  }


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
    <div className='min-h-screen flex flex-row gap-10 bg-[#EAF1F3]'>
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
        {/* first table */}
        {/* Header Row using Grid */}
        <div className='grid grid-cols-7 gap-5 h-[82px] bg-[rgba(55,139,166,0.30)] text-center items-center p-4 mt-[20px] rounded-md shadow-md'>
          <h1 className='text-black font-jost text-xl'>EMPLOYEE ID</h1>
          <h1 className='text-black font-jost text-xl mx-auto'>NAME</h1>
          <h1 className='text-black font-jost text-xl mx-auto'>CREATED AT</h1>
          <h1 className='text-black font-jost text-xl'>MOBILE NUMBER</h1>
          <h1 className='text-black font-jost text-xl'>PERFORMANCE </h1>
          <h1 className='text-black font-jost text-xl'>PRESENCE</h1>
          <h1 className='text-black font-jost text-xl'>DELETE CANDIDATE</h1>
        </div>

        <div className='flex flex-col gap-4 mt-6'>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {currentUsers.length > 0 ? (
            currentUsers.map((user, index) => (
              <div key={index} className='grid grid-cols-7 gap-4 items-center rounded-md border bg-white p-3 shadow-md'>
                <h1 className='text-gray-800'>#{user._id.slice(0, 15)}</h1>
                <div className='flex items-center'>

                  <div className="flex flex-row gap-2 mx-auto">
                    <h1 className="text-[#4F4F4F] cursor-pointer font-semibold ">
                      {user.firstName}
                    </h1>
                    <h1 className="text-[#4F4F4F] cursor-pointer font-semibold ">
                      {user.lastName}
                    </h1>
                  </div>
                </div>
                <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px] mx-auto'>
                  {user.mobileNumber}
                </h1>
                <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px] mx-auto'>
                  {user.createdAt.split('T')[0]}
                </h1>
                <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px] mx-auto'>
                  {user.jdPosting || '04'}
                </h1>
                <div
                  className={`flex flex-row gap-4 px-4 py-2 rounded-md mx-auto${index % 2 === 0
                    ? 'bg-[#DBF0CA] text-[#477C1D]'
                    : 'bg-[#A4A4A480] text-[#4F4F4F]'
                    }`}
                >
                  <h1 className='font-jost text-base font-normal leading-custom tracking-[0.08px]'>
                    {index % 2 === 0 ? 'Active' : 'Inactive'}
                  </h1>
                </div>
                <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px] mx-auto'>
                  <i onClick={() => handleDeleteCandidate(user._id)} className="fa-solid fa-trash" style={{ fontSize: "16px" }}></i>
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