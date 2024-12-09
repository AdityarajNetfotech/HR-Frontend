import React, { useState } from 'react';
import WeeklyReport from './WeeklyReport';
import MonthlyReport from './MonthlyReport';
import YearlyReport from './YearlyReport';
import JobsCard from '../../Employer/DashBoard/JobsCard.js'
import JobCard from '../../Recruiter/Candidates/JobCard.js'
import AdminSidebar from '../../global/AdminSidebar.js';
import AdminID from '../../global/AdminID.js';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('Terms'); // Fix useState usage
  const [ActiveTabs, setActiveTabs] = useState('Users');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'WeeklyReport':
        return <WeeklyReport />;
      case 'MonthlyReport':
        return <MonthlyReport />;
      case 'YearlyReport':
        return <YearlyReport />;
      default:
        return <WeeklyReport />;
    }
  };

  const renderTabContents = () => {
    switch (ActiveTabs) {
      case 'JobsCard':
        return <JobsCard />;
      case 'JobCard':
        return <JobCard />;
      default:
        return <JobsCard />;
    }
  };

  return (
    <div className='max-h-screen flex flex-row gap-0'>
      <AdminSidebar className='max-[30%] ' />
      <div className="w-full px-5  mt-5">
        <div className='flex justify-between' style={{marginBottom:"50px"}}>
          <h1 className='flex justify-center items-center'><i class="fa-solid fa-angle-left"></i> <strong style={{fontSize:"25px"}}>&nbsp;&nbsp; Dashboard</strong> </h1>
          <AdminID />
        </div>
        <div className="flex space-x-1 text-[var(--Teal,#378BA6)] text-center text-[18px] font-normal leading-[36px] ">
          <button
            className={` w-[208px] ${activeTab === 'WeeklyDashboard' ? 'bg-white text-[var(--Teal,#378BA6)] border border-[var(--Teal,#378BA6)] rounded-t-xl font-semibold' : 'bg-[#EAF1F3] rounded-t-xl'}`}
            onClick={() => setActiveTab('WeeklyReport')}
          >
            Weekly
          </button>
          <button
            className={`px-4 py-2 w-[208px] ${activeTab === 'MonthlyDashboard' ? 'bg-white text-[var(--Teal,#378BA6)] border border-[var(--Teal,#378BA6)] rounded-t-xl font-bold' : 'bg-[#EAF1F3] rounded-t-xl'}`}
            onClick={() => setActiveTab('MonthlyReport')}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 w-[208px] ${activeTab === 'Yearly' ? 'bg-white text-[var(--Teal,#378BA6)] border border-[var(--Teal,#378BA6)] rounded-t-xl font-bold' : 'bg-[#EAF1F3] rounded-t-xl'}`}
            onClick={() => setActiveTab('YearlyReport')}
          >
            Yearly
          </button>
        </div>

        <div className="mt-0  rounded-lg">
          {renderTabContent()}
        </div>
        <div class="flex flex-col items-start gap-[20px] self-stretch  ">
          <div className="flex items-center justify-between w-[100%] p- bg-white">

            <div className="font-jost text-3xl font-bold leading-[46.24px] text-left">
              Latest Activity
            </div>
          </div>

        </div>
        {/* <JobCard className='w-[100%]'/> */}
        <div className="flex space-x-1 text-[var(--Teal,#378BA6)] text-center text-[18px] font-normal leading-[36px] ">
          <button
            className={` w-[208px] ${activeTab === 'JobsCard' ? 'bg-white text-[var(--Teal,#378BA6)] border border-[var(--Teal,#378BA6)] rounded-t-xl font-semibold' : 'bg-[#EAF1F3] rounded-t-xl'}`}
            onClick={() => setActiveTabs('JobsCard')}
          >
            New Jd's
          </button>
          <button
            className={`px-4 py-2 w-[208px] ${activeTab === 'JobCard' ? 'bg-white text-[var(--Teal,#378BA6)] border border-[var(--Teal,#378BA6)] rounded-t-xl font-bold' : 'bg-[#EAF1F3] rounded-t-xl'}`}
            onClick={() => setActiveTabs('JobCard')}
          >
            New Candidates
          </button>
        </div>
        <div className="mt-0  rounded-lg">
          {renderTabContents()}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
