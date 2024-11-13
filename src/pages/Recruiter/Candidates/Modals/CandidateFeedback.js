import React from 'react'
import { IoMdClose } from "react-icons/io";

const CandidateFeedback = () => {
    return (
        <div className="flex  justify-center items-center h-screen">
            <div className="bg-white w-[450px] bop-8 rounded-lg shadow-lg text-center px-6 py-8">
                <div className='flex flex-row justify-between bg-[#378BA6]/30 px-4 py-3'>
                    <p className="flex flex-col text-[#4F4F4F] font-Jost text-3xl font-semibold leading-7 ">
                        Feedback
                    </p>
                    <button><IoMdClose className='items-center flex' /></button> 
                </div>

                <div className="flex flex-col items-start py-5">
                    <h1 className='flex flex-col  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap font-jost text-[20px] font-medium leading-[28px] h-[22.595px]'>Samule Mathew</h1>
                    <h1 className='truncate text-[#378BA6] font-jost text-[16px] font-medium leading-[20.8px] tracking-[0.08px]'>Candidate ID: 1254631</h1>
                    <input className='border border-transparent border-b-[#378BA6] w-full pt-3 focus:outline-none focus:border-b-[var(--Teal,#378BA6)]' type='textarea'/>
                </div>
            </div>
        </div>
    )
}

export default CandidateFeedback;
