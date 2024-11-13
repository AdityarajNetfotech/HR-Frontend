import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
// import Sidebar from '../../global/Sidebar';
import Sidebar from '../../global/Sidebar';
import ExportIcon from '../../../Images/ExportIcon.png';
import Chat from '../../../Images/ChatIcon.png';

function Adminjds() {
    const [lockedJobDetails, setLockedJobDetails] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    // Function to get job details
    const getJobDetails = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/showJDs');
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
                console.log(lockedJDs)
            } catch (error) {
                console.error('Error fetching job details:', error);
                setErrorMessage('Error fetching job details.');
            }
        };
        fetchJobDetails();
    }, []);

    // Function to handle navigation to FinanceSummery page
    const goToFinanceSummary = (jd) => {
        navigate('/AdminSummery', { state: { job: jd } }); // Navigate with state
    };

    return (
        <div className='max-h-screen flex flex-row gap-0 h-[100%]'>
            <div className='max-[30%]'>
                <Sidebar />
            </div>
            <div className='w-[100%] bg-[#EAF1F4] flex flex-col p-5 gap-33 flex-1'>
                {/* Header Section */}


                {/* Table Header */}
                <div className='h-[52px] self-stretch bg-[rgba(55,139,166,0.30)] flex justify-between items-center p-8 mt-[20px]'>
                    <h1 className='text-black font-jost text-xl'>JD ID</h1>
                    <h1 className='text-black font-jost text-xl'>JD DETAIL</h1>
                    <h1 className='text-black font-jost text-xl'>CLIENT DETAIL</h1>
                    <h1 className='text-black font-jost text-xl'>UPLOAD DATE</h1>
                    <h1 className='text-black font-jost text-xl'>DEADLINE DATE</h1>
                    <h1 className='text-black font-jost text-xl'>STATUS</h1>
                    <h1 className='text-black font-jost text-xl'>DETAILS</h1>
                </div>

                {/* Job List */}
                <div className='flex flex-col gap-5 mt-6'>
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}

                    {lockedJobDetails.length > 0 ? (
                        lockedJobDetails.map((jd, index) => (
                            <div key={index} className='flex justify-between items-center rounded-md border bg-white p-4 shadow-md'>
                                <h1 className='text-gray-800'>{jd._id}</h1>
                                <div className='flex items-center'>
                                    <div className='flex w-[40px] h-[40px] justify-center items-center bg-[#EAF1F3] rounded-full'>
                                        <img src={ExportIcon} alt='Export' className='w-16 h-auto' />
                                    </div>
                                    {/* When clicking company name, navigate to FinanceSummery with the selected JD */}
                                    <div className="flex flex-col">
                                        <h1
                                            className="text-gray-800 ml-2 cursor-pointer font-semibold"
                                            onClick={() => goToFinanceSummary(jd)}
                                        >
                                            {jd.company_Name}
                                        </h1>
                                        <h2 className="text-gray-600 ml-2 text-sm">{jd.industry}</h2>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    {/* <div className='flex w-[40px] h-[40px] justify-center items-center bg-[#EAF1F3] rounded-full'>
                    <img src={Chat} alt='Chat' className='w-16 h-auto' />
                  </div> */}
                                    {/* <h1 className='text-gray-800 ml-2'>{jd.jobTitle}</h1> */}
                                </div>
                                <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px]'>
                                {jd.createdAt.substring(0, 10)}
                                </h1>
                                <div>
                                    <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px]'>
                                        {jd.delivery_deadline.substring(0, 10)}
                                    </h1>
                                </div>
                                <h1>{new Date(jd.createdAt).toLocaleDateString()}</h1>
                                <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px]'>
                                    ${jd.jd_status}
                                </h1>

                                {/* Status */}
                                <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px]'>
                                    {jd.jd_status}
                                </h1>
                            </div>
                        ))
                    ) : (
                        <h2>No locked job descriptions available.</h2>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Adminjds;