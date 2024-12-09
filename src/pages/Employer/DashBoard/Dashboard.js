import React, { useState } from 'react'
import WeeklyDashboard from '../../Recruiter/Dashboard/WeeklyDashboard';
import MonthlyDashboard from '../../Recruiter/Dashboard/MonthlyDashboard';
// import JobFilters from '../../Recruiter/JD/JobFilters.js';
import Yearly from '../../Recruiter/Dashboard/Yearly';
import Sidebar from '../../global/Sidebar.js'
import EmpSidebar from '../../global/EmpSidebar.js';
import JobCard from './JobsCard.js';
import AdminID from '../../global/AdminID.js';

function EmpDashboard() {
  const [activeTab, setActiveTab] = useState('Terms'); // Fix useState usage

  const renderTabContent = () => {
    switch (activeTab) {
      case 'WeeklyDashboard':
        return <WeeklyDashboard />;
      case 'MonthlyDashboard':
        return <MonthlyDashboard />;
      case 'Yearly':
        return <Yearly />;
      default:
        return <WeeklyDashboard />;
    }
  };
  return (
    <div className='max-h-screen flex flex-row gap-0'>
      <EmpSidebar className='max-[30%] ' />
      <div className="w-full px-5  mt-10">
        {/* Tabs Section */}
        <div className='flex justify-between' style={{ marginBottom: "50px" }}>
          <h1 className='flex justify-center items-center'><i class="fa-solid fa-angle-left"></i> <strong style={{ fontSize: "25px" }}>&nbsp;&nbsp; Dashboard</strong> </h1>
          <AdminID />
        </div>
        <div className="flex space-x-1 text-[var(--Teal,#378BA6)] text-center text-[18px] font-normal leading-[36px] ">
          <button
            className={` w-[208px] ${activeTab === 'WeeklyDashboard' ? 'bg-white text-[var(--Teal,#378BA6)] border border-[var(--Teal,#378BA6)] rounded-t-xl font-semibold' : 'bg-[#EAF1F3] rounded-t-xl'}`}
            onClick={() => setActiveTab('WeeklyDashboard')}
          >
            Weekly
          </button>
          <button
            className={`px-4 py-2 w-[208px] ${activeTab === 'MonthlyDashboard' ? 'bg-white text-[var(--Teal,#378BA6)] border border-[var(--Teal,#378BA6)] rounded-t-xl font-bold' : 'bg-[#EAF1F3] rounded-t-xl'}`}
            onClick={() => setActiveTab('MonthlyDashboard')}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 w-[208px] ${activeTab === 'Yearly' ? 'bg-white text-[var(--Teal,#378BA6)] border border-[var(--Teal,#378BA6)] rounded-t-xl font-bold' : 'bg-[#EAF1F3] rounded-t-xl'}`}
            onClick={() => setActiveTab('Yearly')}
          >
            Yearly
          </button>
        </div>

        <div className="mt-0  rounded-lg">
          {renderTabContent()}
        </div>
        <div class="flex flex-col items-start gap-[20px] self-stretch  ">
          <div className="flex items-center justify-between w-[100%] p- bg-white">

            <div className="text-[#4F4F4F] font-jost text-[24px] font-semibold leading-[28px]">
              New JD's
            </div>
            <button className='flex h-[52px] p-[8px_12px] justify-center items-center gap-[8px] rounded-lg bg-[#A4A4A4]'><h1 className='text-white-custom text-center font-jost text-18px font-semibold leading-28px text-white'>See More</h1></button>
          </div>

        </div>
        <JobCard className='w-[100%]' />
      </div>
    </div>
  )
}


export default EmpDashboard;
