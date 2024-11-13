import React from 'react'
import { BsDownload } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { FaExternalLinkAlt } from "react-icons/fa";
import ChatIcon from '../../../Images/ChatIcon.png';
import CandidateCard from '../DashBoard/CandidateCard';
import CandidateStages from '../DashBoard/CandidateStages';

const EmpJDdetail = () => {
    return (
        <div className='p-5 '>
            <div className='bg-[#378BA6]/30 flex flex-row justify-between px-3 py-2 rounded-lg'>
                <p className='text-gray-600 text-center font-jost text-lg font-medium leading-9'>Job Description Detail</p>
                <div className='flex gap-5 pt-2'>
                    <BsDownload />
                    <RxCross1 />
                </div>
            </div>
            <div className='flex justify-between py-4'>
                <p className="flex w-32 items-center justify-center px-2 py-1 mb-2 my-2 bg-gray-200 text-gray-700 rounded text-center text-sm font-normal leading-[18.2px] tracking-[0.07px]">JD ID: 12345678</p>
                <input
                    type="text"
                    placeholder="Search"
                    className=" border border-[#848484] rounded-md h-7 w-1/5 focus:outline-none focus:border-[var(--Teal,#4F4F4F)] border-[var(--Teal,#4F4F4F)] text-[var(--Teal,#4F4F4F)]"
                />
            </div>
            <div className=' flex items-center justify-between mb-5'>
                <div className='flex flex-row items-center gap-4'>
                    <FaExternalLinkAlt className='bg-[#378BA6]/30 h-10 w-10 p-2 rounded-lg' />
                    <div>
                        <p className='flex flex-row self-stretch overflow-hidden text-gray-600 text-ellipsis whitespace-nowrap font-jost text-xl font-normal leading-9" style="height: 22.595px;'>Job Title: <b>Graphic Designer</b> </p>
                        <p className="overflow-hidden text-[#378BA6] text-ellipsis font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] -webkit-box -webkit-box-orient-vertical -webkit-line-clamp-1">Company: <b>Netfotech Solutions</b> </p>
                    </div>
                </div>
                <div><p className="flex flex-row text-[#000] gap-1 font-jost text-[14px] font-semibold leading-[36px]">Exp:<span className='text-[#4F4F4F] text-center font-jost text-[16px] font-normal leading-[36px] border border-[#4F4F4F] rounded-lg p-[1px_12px]'> 02 Years</span></p></div>
                <div className='text-[#4F4F4F] font-jost text-base font-normal leading-[20.8px] tracking-[0.08px] space-y-2 '>
                    <div className='flex gap-3'>
                        <p>30th Aug'24</p>
                        <div className='w-[0.737px] h-[21px] bg-[#848484]'></div>
                        <p>Upload date</p>
                    </div>
                    <div className='flex gap-3'>
                        <p>30th Aug'24</p>
                        <div className='w-[0.737px] h-[21px] bg-[#848484] '></div>
                        <p>Deadline date</p>
                    </div>
                </div>
            </div>

            <div className='p-4 border rounded-lg border-[#4F4F4F]'>
                <div className='bg-[#FAD97F] px-3 py-2 rounded-xl'>
                    <p className='text-black overflow-hidden text-ellipsis font-jost text-lg font-bold leading-7" style="-webkit-box-orient: vertical; -webkit-line-clamp: 1; display: -webkit-box;'>Recruiter Details:</p>
                    <hr className='my-2' />
                    <div className='flex justify-between items-center '>
                        <div className=' flex gap-4'>
                            <img src={ChatIcon} className='bg-white rounded-full h-10 w-10 p-1.5' />
                            <div className='w-[0.737px] h-[42px] bg-[#848484]'></div>
                            <div>
                                <h2 className="flex h-[22.595px] flex-col justify-center self-stretch overflow-hidden text-[#4F4F4F] text-ellipsis whitespace-nowrap font-jost text-[20px] font-medium leading-[28px]">Samuel Matthew</h2>
                                <p className="overflow-hidden text-[#378BA6] text-ellipsis font-jost text-[16px] font-bold leading-[20.8px] tracking-[0.08px] -webkit-box -webkit-box-orient-vertical -webkit-line-clamp-1">ID: 1254631</p>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <h1 className='text-[#378BA6] text-center font-jost text-[36px] font-medium leading-[41.285px]'>10</h1>
                            <div className='w-[0.737px] h-[42px] bg-[#848484]'></div>
                            <h1 className='text-[#4F4F4F] font-jost text-[23.591px] font-normal leading-[30.669px] tracking-[0.118px]'>Locked JD's </h1>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <p className='text-[#4F4F4F] overflow-hidden text-ellipsis font-jost text-lg font-medium leading-7'>Rate User</p>
                            <div className='w-[0.737px] h-[42px] bg-[#848484]'></div>
                            <div>coming soon</div>
                        </div>
                    </div>

                </div>
                <CandidateCard/>
                <CandidateStages className='rounded-lg'/>
                <div></div>
            </div>
        </div>
    )
}

export default EmpJDdetail;
