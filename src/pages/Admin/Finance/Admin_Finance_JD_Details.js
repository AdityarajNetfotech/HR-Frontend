import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { PiChatsBold } from "react-icons/pi";
import { PiStarFill } from "react-icons/pi";
import { PiStarHalfFill } from "react-icons/pi";
import { PiStar } from "react-icons/pi";
import Admin_Finance_JD_card from './Admin_Finance_JD_card';



const Admin_Finance_JD_Details = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className=' w-[80%] mx-auto p-6 bg-white border rounded-xl shadow-[6px_6px_20px_0px_rgba(0,0,0,0.12)]'>
                <div>
                    <hr className='my-4' />
                    <div className=' flex justify-between items-center'>
                        <div className='flex items-center'>
                            <FaExternalLinkAlt className='h-12 w-12 p-4 bg-[#EAF1F3] rounded-lg' />
                            <div>
                                <div className=' flex gap-1'><p>Job Title:</p><div className='font-semibold'>Graphic Designer</div></div>
                                <div className=' flex gap-1 text-[var(--Teal,#378BA6)]'><p>Company: </p><div className='font-semibold'>Netfotech Solutions</div></div>
                            </div>
                        </div>
                        <div>
                            <div className='bg-[#E8E8E8] max-w-max px-3 flex gap-1 items-center mb-4'><p>JD ID :</p>123456</div>
                            <div className='flex gap-1'><p>Exp: </p><div className='border border-black rounded-xl w-24 h-7 items-center text-center'>02 Years</div></div>
                        </div>
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
                    <hr className=' my-4' />
                    <div className='bg-[#ECB01533] py-2 px-3'>
                        <p>Recruiter Details: </p>
                        <hr className='my-1.5' />
                        <div className=' flex items-center justify-between'>
                            <div className=' flex items-center gap-3'>
                                <PiChatsBold className=' h-10 w-10 bg-white p-2 rounded-full' />
                                <div className='w-[0.737px] h-[42px] bg-[#848484]'></div>
                                <div>
                                    <p>Samuel Matthew</p>
                                    <div className='text-[var(--Teal,#378BA6)] flex gap-1'><p>ID : </p> <div className=' font-semibold'>123456</div></div>
                                </div>
                            </div>
                            <div className=' flex items-center gap-3'>
                                <div className='text-[var(--Teal,#378BA6)] text-3xl font-semibold font-jost'>02</div>
                                <div className='w-[0.737px] h-[42px] bg-[#848484]'></div>
                                <p className='font-jost text-xl font-thin'>Candidates Submitted</p>
                            </div>
                            <div className=' flex gap-3 items-center'>
                                <p className=' font-jost text-xl'>Rate User</p>
                                <div className='w-[0.737px] h-[42px] bg-[#848484]'></div>
                                <div className='flex items-center' >
                                    <PiStarFill className=' h-8 w-8 text-[#f7c438]' />
                                    <PiStarFill className=' h-8 w-8 text-[#f7c438]' />
                                    <PiStarFill className=' h-8 w-8 text-[#f7c438]' />
                                    <PiStarHalfFill className=' h-8 w-8 text-[#f7c438]' />
                                    <PiStar className=' h-8 w-8 text-[#f7c438]' />
                                </div>
                                <div className='w-[0.737px] h-[42px] bg-[#848484]'></div>
                                <p className=' font-jost text-xl text-[var(--Teal,#378BA6)]'>3.5/5</p>
                            </div>
                        </div>
                    </div>
                    <hr className='my-4' />
                    <div className=' grid grid-cols-2 md:grid-cols-2 gap-4 mb-6'>
                        <Admin_Finance_JD_card/>
                        <Admin_Finance_JD_card/>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Admin_Finance_JD_Details
