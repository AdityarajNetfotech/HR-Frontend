import React from 'react'
import { IoMdClose } from "react-icons/io";
function FinancePayroll() {
    return (
        <div className='min-h-screen flex items-center bg-[#FBEFD0] justify-center'>
            <div className='flex flex-col items-start gap-4 p-6 rounded-lg bg-white w-[524px] h-[313px]'>
                <div className='flex items-center justify-between self-stretch py-2 px-4 rounded-md bg-[#378BA6]/30'>
                    <p className='text-[#4F4F4F] text-center font-jost text-[20px] font-medium leading-custom'>CANDIDATES</p>
                    <button className='w-[24px] h-[24px]'><IoMdClose /></button>

                </div>
                <h1 className='flex p-[2px_8px] justify-center items-center rounded-[4px] bg-[#E8E8E8]'>JD:ID 64378738</h1>
                <div className='flex flex-row gap-4 items-between'>
                    <div className='flex flex-col justify-end w-[217px]'>
                        <h1 className='text-dark-grey text-lg font-[700] font-jost leading-36'>Samule Malune</h1>
                        <h1 className='text-gray-400 text-xs font-medium uppercase font-poppins leading-12 tracking-0.36'>Email <span className='text-teal-600 text-base font-normal font-jost leading-20.8 tracking-0.08'>Adi@gmail.com</span></h1>
                        <h1 className='text-gray-400 text-xs font-medium uppercase font-poppins leading-12 tracking-0.36'>Phone <span className='text-teal-600 text-base font-normal font-jost leading-20.8 tracking-0.08'>+91 7834554298</span></h1>
                    </div>
                    <div className="w-[1px] h-[99px] bg-[#848484]"></div>
                    <div className="flex flex-col items-stretch">
                        {/* Row 1 */}
                        <div className="flex items-center justify-center w-[80%] h-[80%]">
                            <div className="flex w-[123.462px] p-[4px_16px] justify-center items-center self-stretch border border-gray-700 bg-teal-200">Cell 1</div>
                            <div className="flex w-[123.462px] p-[4px_16px] justify-center items-center self-stretch border  text-center">Cell 2</div>
                        </div>
                        {/* Row 2 */}
                        <div className="flex items-center justify-center w-[80%] h-[80%]">
                            <div className="flex w-[123.462px] p-[4px_16px] justify-center items-center self-stretch border border-gray-700 bg-teal-200">Cell 3</div>
                            <div className="flex w-[123.462px] p-[4px_16px] justify-center items-center self-stretch border ">Cell 4</div>
                        </div>
                        {/* Row 3 */}
                        <div className="flex items-center justify-center w-[80%] h-[80%]">
                            <div className="flex w-[123.462px] p-[4px_16px] justify-center items-center self-stretch border border-gray-700 bg-teal-200">Cell 5</div>
                            <div className="flex w-[123.462px] p-[4px_16px] justify-center items-center self-stretch border ">Cell 6</div>
                        </div>
                    </div>
                </div>
                <div className='flex w-[100%] items-end justify-end'>
                    <button className='flex p-[8px_12px] justify-center items-center gap-[8px] rounded-[8px] bg-[#378BA6]'>
                        <h1 className='text-white text-center text-[24px] font-semibold leading-[28px] font-jost'>Done</h1>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FinancePayroll
