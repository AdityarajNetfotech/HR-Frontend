import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../global/Sidebar';
import ExportIcon from '../../../Images/ExportIcon.png';
// EmployerMaster

const EmployerMaster = () => {
    const [users, setUsers] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
  
    
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/allUsers');
        const allUsers = response.data.users;
        console.log('Fetched Users Data:', allUsers);
  
        
        const recruiterUsers = allUsers.filter(user => user.joinAs === 'client');
        console.log('Filtered Recruiter Users:', recruiterUsers);
  
        setUsers(recruiterUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
        setErrorMessage('Error fetching user data.');
      }
    };
  
    useEffect(() => {
      fetchUsers();
    }, []);
  
    return (
      <div className='flex flex-row gap-0 h-full'>
        <div className='max-[30%]'>
          <Sidebar />
        </div>
        <div className='w-[100%] bg-[#EAF1F4] flex flex-col p-5 flex-1'>
          {/* Header Section */}
          {/* Table Header */}
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
            {users.length > 0 ? (
              users.map((user, index) => (
                <div key={index} className='flex items-center rounded-md border bg-white p-3 shadow-md justify-between'>
                  <h1 className='text-gray-800 mr-10'>{ user._id}</h1>
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
        </div>
      </div>
    );
  };

export default EmployerMaster
