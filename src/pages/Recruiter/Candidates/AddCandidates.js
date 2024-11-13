import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios to fetch data
import ExportIcon from '../../../Images/ExportIcon.png';
import Chat from '../../../Images/ChatIcon.png';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import Sidebar from '../../global/Sidebar';
import CandidateProgress from './CandidateProgress';

const AddCandidates = () => {
  const [currentIcon, setCurrentIcon] = useState('ArrowUp');
  const [isAccordionOpen, setIsAccordionOpen] = useState(null); // Track which accordion is open
  const [lockedJobDetails, setLockedJobDetails] = useState([]); // State to store locked job details
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  // Function to get locked job details
  const getJobDetails = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/showJDs');
      const jobDetails = response.data.jds;
      // Filter only locked JDs
      const lockedJDs = jobDetails.filter(jd => jd.locked === true);
      setLockedJobDetails(lockedJDs); // Set locked JDs in state
      console.log(lockedJDs);
    } catch (error) {
      console.error('Error fetching job details:', error);
      setErrorMessage('Error fetching job details.');
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

  return (
    <div className='max-h-screen flex flex-row gap-0'>
      <div className='max-[30%]'><Sidebar /></div>
      {/*  */}
      <div className='w-[100%] bg-[#EAF1F4] flex flex-col py-5 gap-33 flex-1 px-4'>
        {/* Header Section */}
        <div className='flex flex-col justify-center items-start gap-1 p-2.5 self-stretch bg-[#FBEFD0] mb-[20px] w-full'>
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

  {/* Buttons Section */}
  
</div>


        {/* Table Header */}
        <div className='h-[52px] self-stretch rounded-[8px] bg-[rgba(55,139,166,0.30)] flex justify-between items-center p-8 mt-[20px]'>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9 w-1/7'>JD ID</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9 w-1/7'>CLIENT DETAILS</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9 w-1/7'>JD DETAIL</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9 w-1/7'>CANDIDATES</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9 w-1/7'>DEADLINE</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9 w-1/7'>STATUS</h1>
          <h1 className='text-black text-center font-jost text-xl font-normal leading-9 w-1/7'>DETAIL</h1>
        </div>

        {/* Map through locked JDs */}
        <div className='flex flex-col justify-between items-end gap-5 self-stretch'>
          {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
          {lockedJobDetails.length > 0 ? (
            lockedJobDetails.map((jd, index) => (
              <div key={index} className='flex flex-col justify-between items-end gap-5 self-stretch'>
                <div className='flex justify-between items-center self-stretch rounded-md border border-[#9B9B9B] bg-white shadow-[6px_6px_20px_0px_rgba(0,0,0,0.12)] p-4 mt-6'>
                  <h1 className='text-gray-800 text-center font-sans text-base font-normal leading-6 tracking-tight w-1/9'>#{jd._id.slice(-4)}</h1>

                  <div className='flex flex-row items-center'>
                    <div className='flex w-[40px] h-[40px] p-[7.655px_7.832px_8.345px_8.168px] justify-center items-center rounded-[45px] bg-[#EAF1F3]'>
                      <img src={ExportIcon} alt="Recutify" className='w-16 h-auto' />
                    </div>
                    <h1 className='text-gray-800 text-center font-sans text-base font-normal leading-6 tracking-tight max-w-24 w-1/9'>{jd.client_name}</h1>
                  </div>

                  <div className='flex flex-row items-center w-1/9 max-w-42'>
                    <div className='flex w-[40px] h-[40px] justify-center items-center rounded-[45px] bg-[#EAF1F3]'>
                      <img src={Chat} alt="Recutify" className='w-16 h-auto' />
                    </div>
                    <h1 className='text-gray-800 text-center font-sans text-base font-normal leading-6 tracking-tight'>
                      <span className='overflow-hidden text-[#4F4F4F] truncate whitespace-nowrap font-jost text-base font-semibold leading-6 tracking-tight'>{jd.job_title}</span>
                      <br />{jd.companyName}
                    </h1>
                  </div>

                  <a href='/FinanceCandidate'>
                    <div className='flex w-[86px] p-[4px_12px] justify-center items-center gap-[10px] rounded-[12px] border border-[#000] bg-white w-1/9'>
                      <h1>02/02</h1>
                      <img src={ExportIcon} alt="Recutify" className='w-12 h-auto' />
                    </div>
                  </a>

                  <h1 className='text-[#4F4F4F] text-center font-sans text-base font-normal leading-6 tracking-tight w-1/9'>{jd.delivery_deadline}</h1>
                  <h1 className='text-[#FFA043] text-center font-sans text-base font-normal leading-6 tracking-tight w-1/9'>{jd.jd_status}</h1>

                  <button onClick={() => { }} className='flex justify-center items-center rounded-full border border-black bg-white px-3 py-2 w-1/9'>
                    <h1 className='text-black text-base font-normal leading-5'>Details</h1>
                  </button>

                  <div onClick={() => toggleAccordion(index)} className='flex justify-center items-center w-1/7 cursor-pointer'>
                    {renderIcon(index)}
                  </div>
                </div>
                {isAccordionOpen === index && (
                  <div className='flex flex-col items-start'>
                    <CandidateProgress jobId={jd._id} />
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>No locked job details available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddCandidates;