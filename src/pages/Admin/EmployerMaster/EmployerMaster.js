import React from 'react'
import Sidebar from '../../global/Sidebar'
import ExportIcon from '../../../Images/ExportIcon.png';
function EmployerMaster() {
    return (
        <div className='max-h-screen flex flex-row gap-0 h-[100%]'>
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
                <div className='flex flex-col gap-5 mt-6'>

                    <div className='flex items-center rounded-md border bg-white p-4 shadow-md'>
                        <h1 className='text-gray-800 mr-32'>#12345678</h1>
                        <div className='flex items-center mr-16'>
                            <div className='flex w-[40px] h-[40px] justify-center items-center bg-[#EAF1F3] rounded-full'>
                                <img src={ExportIcon} alt='Export' className='w-16 h-auto' />

                            </div>
                            {/* When clicking company name, navigate to FinanceSummery with the selected JD */}
                            <div className="flex flex-col">
                                <h1
                                    className="text-gray-800 ml-2 cursor-pointer font-semibold"

                                >
                                    Aditya raj
                                </h1>
                                {/* <h2 className="text-gray-600 ml-2 text-sm">jd.industry</h2> */}
                            </div>
                        </div>
                        <div className='flex items-center '>

                        </div>
                        <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px] mr-32'>
                            Netfotech
                        </h1>
                        <div>
                            <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px]'>
                                {/* IT Company Product */}
                            </h1>
                        </div>
                        <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px] mr-64' >04</h1>
                        <div className='flex flex-row mr-[220px] gap-4'>
                            <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px] '>
                                Active
                            </h1>
                            <button class="w-[78px] h-[26px] px-[12px] py-[4px] gap-[10px] rounded-[12px] border border-black">
                                <p class="font-[Jost] text-[14px] font-normal leading-[18.2px] tracking-[0.005em] text-center text-[#4E4949]">
                                    Stats
                                </p>
                            </button>
                        </div>

                        {/* Status */}
                        <h1 className='text-[#4F4F4F] font-jost text-base font-normal leading-custom tracking-[0.08px] '>
                            00
                        </h1>
                    </div>




                </div>
            </div>
        </div>
    )
}

export default EmployerMaster
