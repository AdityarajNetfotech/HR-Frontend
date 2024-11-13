import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { FaSackDollar } from "react-icons/fa6";
import { FaFilePdf } from "react-icons/fa";

const Admin_Finance_JD_card = () => {
    return (
        <div className=' p-6 bg-white border rounded-xl shadow-[6px_6px_20px_0px_rgba(0,0,0,0.12)]'>
            <div className='flex justify-between items-center mb-2'>
                <div>
                    <div className=' font-semibold text-xl text-[var(--Dark-grey,#4F4F4F)]'>Samuel Matthew</div>
                    <div className='font-jost text-xl text-[var(--Teal,#378BA6)] flex'> <p>Candidate ID:</p><div className=' font-semibold'>1254631</div></div>
                </div>
                <div className=' flex gap-1 items-center'>
                    <p className='font-bold'>Status : </p>
                    <div className='bg-[#ECB015] max-w-max px-6'>New</div>
                </div>
            </div>
            <div className='flex justify-between px-3'>
                <div className='font-jost font-extralight text-[#477C1D] bg-[#DBF0CA] px-3 py-1 max-w-max'>Selected Candidate</div>
                <div className='flex gap-1'><b>Exp: </b><div className='border border-black rounded-xl w-24 h-7 items-center text-center'>02 Years</div></div>
            </div>
            <hr className='my-4' />
            <div className=' flex flex-row items-center justify-between w-[70%]'>
                <div className=' flex flex-row items-center gap-2'><IoBriefcaseOutline className='text-[var(--Teal,#378BA6)]' /><p>Job Title:</p></div>
                <div className=' flex flex-row items-center gap-2'><SlLocationPin className='text-[var(--Teal,#378BA6)]' /><p>Location:</p></div>
                <div className=' flex flex-row items-center gap-2'><FaSackDollar className='text-[var(--Teal,#378BA6)]' /><p>Expected Salary:</p></div>
            </div>
            <div className=' flex justify-between items-center '>
                <div className=' flex gap-4 mt-4'>
                    <button className='flex border rounded-lg px-3 py-2 items-center gap-2 border-[var(--Teal,#378BA6)] font-jost text-base'><FaFilePdf className='text-[var(--Teal,#378BA6)]' /><p>Resume.pdf</p></button>
                    <button className='flex border rounded-lg px-3 py-2 items-center gap-2 border-[var(--Teal,#378BA6)] font-jost text-base'><FaFilePdf className='text-[var(--Teal,#378BA6)]' /><p>Resume.pdf</p></button>
                </div>
                <div>
                    <button className='border rounded-lg border-black flex gap-2 items-center p-3 '><p className='font-jost font-semibold text-xl md:text-base'>View Form</p> <FaExternalLinkAlt className='text-2xl' /></button>
                </div>
            </div>
            <hr className='my-4' />
            {/* Progress Bar */}
            <div className="flex items-center justify-between mb-4 px-[10%]">
                <div className="flex flex-grow items-center">
                    <div className="relative font-jost flex items-center justify-center w-10 h-10 rounded-full bg-[var(--Teal,#378BA6)] text-white font-semibold">
                        01
                    </div>
                    <div className="flex-grow border-t-4 border-[var(--Teal,#378BA6)]"></div>
                    <div className="relative font-jost flex items-center justify-center w-10 h-10 rounded-full bg-[var(--Teal,#378BA6)] text-white font-semibold">
                        02
                    </div>
                    <div className="flex-grow border-t-4 border-[var(--Teal,#378BA6)]"></div>
                    <div className="relative font-jost flex items-center justify-center w-10 h-10 border border-dashed border-[var(--Teal,#378BA6)] rounded-full text-[var(--Teal,#378BA6)] font-semibold">
                        03
                    </div>
                    <div className="flex-grow border-t-4 border-gray-300"></div>
                    <div className="relative font-jost flex items-center justify-center w-10 h-10 rounded-full border border-dashed border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)] font-semibold">
                        04
                    </div>
                </div>
            </div>

            <div className="flex justify-between text-xs text-gray-500 mb-4">
                <span className="flex-1 text-center">Delivery <br />Pending</span>
                <span className="flex-1 text-center">Interview <br />Pending</span>
                <span className="flex-1 text-center">Offer <br />Pending</span>
                <span className="flex-1 text-center">Payment <br />Pending</span>
            </div>

            {/* Employer Remarks */}
            <div className="mb-4 flex items-center gap-3">
                <label className="text-[var(--Teal,#378BA6)] font-jost text-base font-bold w-fit">Employer Remarks:</label>
                <input
                    type="text"
                    className="p-2 border border-[#378BA6] rounded-lg mt-1 w-[80%] "
                    placeholder=""
                />
            </div>

        </div>
    )
}

export default Admin_Finance_JD_card
