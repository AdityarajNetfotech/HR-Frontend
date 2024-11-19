import React from 'react';
import Sidebar from '../../global/Sidebar';
import ExportIcon from '../../../Images/ExportIcon.png';
import Chat from '../../../Images/ChatIcon.png';

function Admin_Finance() {
    return (
        <>
            <div className="max-h-screen flex flex-row gap-0 h-full">
                <div className="max-[30%]">
                    <Sidebar />
                </div>

                <div className="w-full bg-[#EAF1F4] flex flex-col p-5 gap-33 flex-1">
                    {/* Header Section */}
                    <div className="flex flex-col w-auto flex-wrap justify-center items-start gap-1 p-2.5 self-stretch bg-[#FBEFD0] mb-5">
                        {/* User Information */}
                        <div className="h-20 flex justify-between items-center self-stretch md:items-center mb-4 m-8 flex-wrap">
                            <div className="flex flex-col w-[20%]">
                                <h1 className="text-gray-600 truncate text-2xl font-medium">Samuel</h1>
                                <h1 className="text-[#378BA6] truncate text-base font-medium">ID: 67890987</h1>
                            </div>
                            <div className="flex items-center bg-white p-2 rounded">
                                <h1 className="text-teal-600 text-2xl font-medium">50</h1>
                                <div className="w-px h-7 bg-gray-500 mx-2"></div>
                                <h1 className="text-[#4F4F4F]">Employers</h1>
                            </div>
                            <div className="flex items-center bg-white p-2 rounded">
                                <h1 className="text-teal-600 text-2xl font-medium">50</h1>
                                <div className="w-px h-7 bg-gray-500 mx-2"></div>
                                <h1 className="text-[#4F4F4F]">Recruiters</h1>
                            </div>
                            <div className="flex items-center bg-white p-2 rounded">
                                <h1 className="text-teal-600 text-2xl font-medium">50</h1>
                                <div className="w-px h-7 bg-gray-500 mx-2"></div>
                                <h1 className="text-[#4F4F4F]">Successful JD's</h1>
                            </div>
                            <div className="flex items-center bg-white p-2 rounded">
                                <h1 className="text-teal-600 text-2xl font-medium">100,000</h1>
                                <div className="w-px h-7 bg-gray-500 mx-2"></div>
                                <h1 className="text-[#4F4F4F]">Total Incentives</h1>
                            </div>
                        </div>
                    </div>

                    <section id='candidateOne-filter'>
                        <div className="candidateOne-filter_search">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder=" Search" className="candidateOne-filter_search-bar" />
                        </div>

                        <div className='filter_option'>
                            <span><i className="fa-solid fa-sort"></i> Sort By:</span>
                            <select name="Sort By">
                                <option value="Latest">Latest</option>
                                <option value="Oldest">Oldest</option>
                            </select>
                        </div>

                        <div className='filter_option'>
                            <span><i className="fa-solid fa-filter"></i> Filter By:</span>
                            <select name="Filter By">
                                <option value="">All</option>
                                <option value="Latest">Latest</option>
                                <option value="Oldest">Oldest</option>
                            </select>
                        </div>

                        <div className='filter_option'>
                            <select name="Job Title">
                                <option value="">Job Title</option>
                                <option value="Developer">Developer</option>
                                <option value="Designer">Designer</option>
                            </select>
                        </div>

                        <div className='filter_option'>
                            <select name="Status">
                                <option value="">Status</option>
                                <option value="Fresher">Open</option>
                                <option value="Experienced">Closed</option>
                            </select>
                        </div>

                        <div className='filter_option'>
                            <select name="Location">
                                <option value="">Location</option>
                                <option value="Pune">Pune</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Mumbai">Delhi</option>
                                <option value="Mumbai">Banglore</option>
                            </select>
                        </div>

                        <div className='filter_option'>
                            <button>
                                <i className="fa-solid fa-arrow-rotate-left"></i> Reset Filter
                            </button>
                        </div>
                    </section>

                    <div className="h-[52px] self-stretch bg-[rgba(55,139,166,0.30)] flex justify-between items-center mt-5 p-4">
                        <h1 className="text-black font-jost text-xl">JD ID</h1>
                        <h1 className="text-black font-jost text-xl">JD DETAILS</h1>
                        <div className="bg-white flex gap-[60px] px-2">
                            <h1 className="text-black font-jost text-xl">EMPLOYER</h1>
                            <h1 className="text-black font-jost text-xl">PAY</h1>
                            <h1 className="text-black font-jost text-xl">STATUS</h1>
                        </div>
                        <div className="bg-white flex gap-[60px] px-2">
                            <h1 className="text-black font-jost text-xl">RECRUITER</h1>
                            <h1 className="text-black font-jost text-xl">PAY</h1>
                            <h1 className="text-black font-jost text-xl">STATUS</h1>
                        </div>
                        <h1 className="text-black font-jost text-xl">PROFIT</h1>
                    </div>

                    <div className="flex flex-col gap-5 mt-6">
                        <div className="flex justify-between items-center rounded-md border bg-white p-4 shadow-md">
                            <h1 className="text-gray-800">#12345678</h1>
                            <div className="flex items-center">
                                <div className="flex w-[40px] h-[40px] justify-center items-center bg-[#EAF1F3] rounded-full">
                                    <img src={Chat} alt="Chat" className="w-16 h-auto" />
                                </div>
                                <h1 className="text-gray-800 ml-2">jobTitle</h1>
                            </div>
                            <div className="rounded-xl flex gap-10 bg-gray-200 px-2">
                                <div className="flex items-center">
                                    <div className="flex w-[40px] h-[40px] justify-center items-center bg-[#EAF1F3] rounded-full">
                                        <img src={ExportIcon} alt="Export" className="w-16 h-auto" />
                                    </div>
                                    <h1 className="text-gray-800 ml-2 cursor-pointer">Bhagyashree</h1>
                                </div>
                                <h1 className="text-[#4F4F4F] font-jost text-base font-normal tracking-wide">
                                    25,000/- <br /> 30th July '24
                                </h1>
                                <h1 className="text-[#4F4F4F] font-jost text-base font-normal tracking-wide">
                                    <span className="bg-green-300 px-2 py-1 rounded-md">Success</span> <br /> View Invoice
                                </h1>
                            </div>
                            <div className="rounded-xl flex gap-10 bg-blue-300 px-2">
                                <div className="flex items-center">
                                    <div className="flex w-[40px] h-[40px] justify-center items-center bg-[#EAF1F3] rounded-full">
                                        <img src={ExportIcon} alt="Export" className="w-16 h-auto" />
                                    </div>
                                    <h1 className="text-gray-800 ml-2 cursor-pointer">Bhagyashree</h1>
                                </div>
                                <h1 className="text-[#4F4F4F] font-jost text-base font-normal tracking-wide">
                                    25,000/- <br /> 30th July '24
                                </h1>
                                <h1 className="text-[#4F4F4F] font-jost text-base font-normal tracking-wide">
                                    <span className="bg-yellow-300 px-2 py-1 rounded-md">Pending</span> <br /> Pay Now
                                </h1>
                            </div>
                            <h1 className="text-[#4F4F4F] font-jost text-base font-normal tracking-wide">15,000/-</h1>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 mt-6">
                        <div className="flex justify-between items-center rounded-md border bg-white p-4 shadow-md">
                            <h1 className="text-gray-800">#12345678</h1>
                            <div className="flex items-center">
                                <div className="flex w-[40px] h-[40px] justify-center items-center bg-[#EAF1F3] rounded-full">
                                    <img src={Chat} alt="Chat" className="w-16 h-auto" />
                                </div>
                                <h1 className="text-gray-800 ml-2">jobTitle</h1>
                            </div>
                            <div className="rounded-xl flex gap-10 bg-gray-200 px-2">
                                <div className="flex items-center">
                                    <div className="flex w-[40px] h-[40px] justify-center items-center bg-[#EAF1F3] rounded-full">
                                        <img src={ExportIcon} alt="Export" className="w-16 h-auto" />
                                    </div>
                                    <h1 className="text-gray-800 ml-2 cursor-pointer">Bhagyashree</h1>
                                </div>
                                <h1 className="text-[#4F4F4F] font-jost text-base font-normal tracking-wide">
                                    25,000/- <br /> 30th July '24
                                </h1>
                                <h1 className="text-[#4F4F4F] font-jost text-base font-normal tracking-wide">
                                    <span className="bg-green-300 px-2 py-1 rounded-md">Success</span> <br /> View Invoice
                                </h1>
                            </div>
                            <div className="rounded-xl flex gap-10 bg-blue-300 px-2">
                                <div className="flex items-center">
                                    <div className="flex w-[40px] h-[40px] justify-center items-center bg-[#EAF1F3] rounded-full">
                                        <img src={ExportIcon} alt="Export" className="w-16 h-auto" />
                                    </div>
                                    <h1 className="text-gray-800 ml-2 cursor-pointer">Bhagyashree</h1>
                                </div>
                                <h1 className="text-[#4F4F4F] font-jost text-base font-normal tracking-wide">
                                    25,000/- <br /> 30th July '24
                                </h1>
                                <h1 className="text-[#4F4F4F] font-jost text-base font-normal tracking-wide">
                                    <span className="bg-yellow-300 px-2 py-1 rounded-md">Pending</span> <br /> Pay Now
                                </h1>
                            </div>
                            <h1 className="text-[#4F4F4F] font-jost text-base font-normal tracking-wide">15,000/-</h1>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 mt-6">
                        <div className="flex justify-between items-center rounded-md border bg-white p-4 shadow-md">
                            <h1 className="text-gray-800">#12345678</h1>
                            <div className="flex items-center">
                                <div className="flex w-[40px] h-[40px] justify-center items-center bg-[#EAF1F3] rounded-full">
                                    <img src={Chat} alt="Chat" className="w-16 h-auto" />
                                </div>
                                <h1 className="text-gray-800 ml-2">jobTitle</h1>
                            </div>
                            <div className="rounded-xl flex gap-10 bg-gray-200 px-2">
                                <div className="flex items-center">
                                    <div className="flex w-[40px] h-[40px] justify-center items-center bg-[#EAF1F3] rounded-full">
                                        <img src={ExportIcon} alt="Export" className="w-16 h-auto" />
                                    </div>
                                    <h1 className="text-gray-800 ml-2 cursor-pointer">Bhagyashree</h1>
                                </div>
                                <h1 className="text-[#4F4F4F] font-jost text-base font-normal tracking-wide">
                                    25,000/- <br /> 30th July '24
                                </h1>
                                <h1 className="text-[#4F4F4F] font-jost text-base font-normal tracking-wide">
                                    <span className="bg-green-300 px-2 py-1 rounded-md">Success</span> <br /> View Invoice
                                </h1>
                            </div>
                            <div className="rounded-xl flex gap-10 bg-blue-300 px-2">
                                <div className="flex items-center">
                                    <div className="flex w-[40px] h-[40px] justify-center items-center bg-[#EAF1F3] rounded-full">
                                        <img src={ExportIcon} alt="Export" className="w-16 h-auto" />
                                    </div>
                                    <h1 className="text-gray-800 ml-2 cursor-pointer">Bhagyashree</h1>
                                </div>
                                <h1 className="text-[#4F4F4F] font-jost text-base font-normal tracking-wide">
                                    25,000/- <br /> 30th July '24
                                </h1>
                                <h1 className="text-[#4F4F4F] font-jost text-base font-normal tracking-wide">
                                    <span className="bg-yellow-300 px-2 py-1 rounded-md">Pending</span> <br /> Pay Now
                                </h1>
                            </div>
                            <h1 className="text-[#4F4F4F] font-jost text-base font-normal tracking-wide">15,000/-</h1>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Admin_Finance;
