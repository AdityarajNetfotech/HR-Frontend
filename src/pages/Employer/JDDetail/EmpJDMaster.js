import React, { useEffect, useState } from 'react';
import ExportIcon from '../../../Images/ExportIcon.png';
// import Chat from '../../../Images/ChatIcon.png';
import axios from 'axios';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const EmpJDMaster = () => {
    const [jds, setJDs] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/JD_Master_Details/${id}`);
      };

    useEffect(() => {
        const fetchJDs = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/showJDs', {
                    // headers: {
                    //     Authorization: `Bearer ${localStorage.getItem('token')}`
                    // }
                });
                console.log(response.data.jds);

                setJDs(response.data.jds); // Assuming response.data.jds is an array
            } catch (error) {
                setErrorMessage('Error fetching JDs. Please try again later.');
                console.error('Error fetching JDs:', error);
            }
        };

        fetchJDs();
    }, []);

    return (
        <div>
            <div className='h-[52px] self-stretch rounded-[8px] bg-[rgba(55,139,166,0.30)] flex justify-between items-center p-8 mt-[20px]'>
                <h1 className='text-black text-center font-jost text-xl font-normal leading-9 '>JD ID</h1>
                <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>JD DETAIL</h1>
                <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>CANDIDATES</h1>
                <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>UPLOAD DATE</h1>
                <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>DEADLINE DATE</h1>
                <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>STATUS</h1>
                <h1 className='text-black text-center font-jost text-xl font-normal leading-9'>DETAIL</h1>
            </div>

            <div className='flex flex-col justify-center items-end gap-5 self-stretch rounded-md border border-[#9B9B9B] bg-white shadow-[6px_6px_20px_0px_rgba(0,0,0,0.12)] p-4 mt-6'>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                {jds.length > 0 ? (
                    jds.map((jd, index) => (
                        <div key={jd._id} className='flex justify-between items-center self-stretch flex-wrap'>
                            <h1 className='text-gray-800 text-center font-sans text-base font-normal leading-6 tracking-tight'>{`#${index + 1} ${jd._id}`}</h1>
                            <div className='flex flex-row items-center'>
                                <div className='flex flex-row'>
                                    <img src={ExportIcon} alt="Export" className='flex w-[40px] h-[40px] p-[7.655px_7.832px_8.345px_8.168px] justify-center items-center rounded-[45px] bg-[#EAF1F3]' />
                                    <div className=''>
                                        <div className='w-20px'>{jd.job_title}</div>
                                        <div className='w-30px'>{jd.company_Name}</div>
                                    </div>
                                </div>
                                {/* <h1 className='text-gray-800 text-center font-sans text-base font-normal leading-6 tracking-tight'>{jd.createdAt}</h1> */}
                            </div>
                            {/* <div className='flex flex-row items-center'>
                                <div className='flex w-[40px] h-[40px] p-[7.655px_7.832px_8.345px_8.168px] justify-center items-center rounded-[45px] bg-[#EAF1F3]'>
                                    <img src={Chat} alt="Chat" className='w-16 h-auto' />
                                </div>
                                <h1 className='text-gray-800 text-center font-sans text-base font-normal leading-6 tracking-tight'>
                                    <span className='overflow-hidden text-[#4F4F4F] truncate whitespace-nowrap font-jost text-base font-semibold leading-6 tracking-tight'>{jd.jobTitle}</span><br />
                                    {jd.companyName}
                                </h1>
                            </div> */}
                            <a href='/FinanceCandidate'>
                                <div className='flex w-[86px] p-[4px_12px] justify-center items-center gap-[10px] rounded-[12px] border border-[#000] bg-white'>
                                    <h1>02/02</h1>
                                    <img src={ExportIcon} alt="Export" className='w-12 h-auto' />
                                </div>
                            </a>
                            <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px]'>{new Date(jd.createdAt).toLocaleDateString()}</h1>
                            <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px]'>{new Date(jd.delivery_deadline).toLocaleDateString()}</h1>
                            <a href='/FinancePayroll'>
                                <div className='flex flex-col w-[86px] p-[4px_12px] justify-center items-center gap-[10px] rounded-[12px] border'>
                                    <button className={`flex h-[26px] p-[6px_12px] justify-center items-center ${jd.status === 'Open' ? 'bg-[#DBF0CA] text-[#477C1D]'
                                            : jd.status === 'Closed' ? 'bg-[var(--Primary-Orange,#ECB015)] text-white'
                                                : jd.status === 'Rework' ? 'bg-[#D2EAF2] text-[#115469]'
                                                    : 'bg-[#FFFB9A] text-[#A38740]'}`}>
                                        <h1 className='text-[#7F672A] text-center font-jost text-sm font-bold leading-[28px] w-full '>{jd.jd_status}</h1>
                                    </button>
                                    <h1 className='text-gray-500 text-center font-sans text-base font-small leading-6 tracking-tight'>View</h1>
                                </div>
                            </a>
                            <button onClick={() => handleClick(jd._id)} className=' border outline-1 border-rounded p-3'><MdOutlineArrowForwardIos/></button>
                        </div>
                    ))
                ) : (
                    <h2 className="text-gray-500">No job descriptions available.</h2>
                )}
            </div>
        </div>
    );
};

export default EmpJDMaster;
