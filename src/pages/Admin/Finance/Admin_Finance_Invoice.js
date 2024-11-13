import React from 'react'
import { RxCross1 } from "react-icons/rx";


const Admin_Finance_Invoice = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className=' max-w-fit mx-auto p-6 bg-white border rounded-xl shadow-[6px_6px_20px_0px_rgba(0,0,0,0.12)]'>
                <div className='flex flex-row items-center justify-between bg-[#378BA64D] px-4 py-2 rounded-lg mb-4'>
                    <p>PAYROLL INVOICE</p>
                    <RxCross1 />
                </div>
                <div className='bg-[#E8E8E8] max-w-max px-3 flex gap-1 items-center mb-4'><p>JD ID :</p>123456</div>
                <div className=' flex justify-between items-center gap-6'>
                    <div>
                        <div>
                            <p className='text-[var(--Dark-grey,#4F4F4F)] font-semibold'>Samuel Matthew</p>
                            <div className='flex gap-1'>
                                <p className='text-[var(--Dark-grey,#4F4F4F)] font-semibold'>Email : </p>
                                <div className='text-[var(--Teal,#378BA6)] font-normal'>dainne.ressell@gmail.com</div></div>
                        </div>
                        <div className='flex gap-1'>
                            <p className='text-[var(--Dark-grey,#4F4F4F)] font-semibold'>Phone : </p>
                            <div className='text-[var(--Teal,#378BA6)] font-normal'>(671) 555-0110</div>
                        </div>
                    </div>
                    <div className='w-[0.737px] h-[99px] bg-[#848484]' />
                    <div>
                        <div >
                            <div className="grid grid-cols-2 gap-0 border mt-3 border-gray-400 rounded-md text-center">
                                <div className="p-2 border-r border-b border-gray-400 bg-[#EAF1F3] text-[#4F4F4F] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">
                                    Delivery Payout
                                </div>
                                <div className="p-2 border-b border-gray-400 text-[#4F4F4F] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">
                                    1500/-
                                </div>
                                <div className="p-2 border-r border-b border-gray-400 bg-[#EAF1F3] text-[#4F4F4F] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">
                                    Absolute Payout
                                </div>
                                <div className="p-2 border-gray-400 text-[#4F4F4F] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">
                                    1500/-
                                </div>
                                <div className="p-2 border-r border-b border-gray-400 bg-[#EAF1F3] text-[#4F4F4F] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">
                                    Total Value
                                </div>
                                <div className="p-2 border-gray-400 text-[#4F4F4F] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">
                                    3000/-
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="flex py-2 px-3 justify-end items-end gap-2 self-stretch rounded-lg bg-[#378BA6] text-white text-[20px] font-bold leading-[36px] font-jos">Done</button>

            </div>
        </div>
    )
}

export default Admin_Finance_Invoice;
