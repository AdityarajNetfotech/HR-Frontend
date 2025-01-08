import React, { useState } from 'react';
import WeeklyReport from './WeeklyReport';
import MonthlyReport from './MonthlyReport';
import YearlyReport from './YearlyReport';
import JobsCard from '../../Employer/DashBoard/JobsCard.js';
import AdminSidebar from '../../global/AdminSidebar.js';
import AdminID from '../../global/AdminID.js';
import RJobCard from '../RecruiterJobCard/RJobCard.js';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('WeeklyReport'); // Fix initial state
  const [activeContent, setActiveContent] = useState('NewJd'); // Added state to track active content for JD and Candidates

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

  const renderJobContent = () => {
    if (activeContent === 'NewJd') {
      return <RJobCard />;
    } else if (activeContent === 'NewCandidates') {
      return <JobsCard />;
    }
  };

  return (
    <div className="min-h-screen flex flex-row gap-10 bg-[#EAF1F3]">
      <AdminSidebar className="max-[30%]" />
      <div className="max-w-8xl justify-center mt-10">
        <div className="flex justify-between" style={{ marginBottom: '50px' }}>
          <h1 className="flex justify-center items-center">
            <i className="fa-solid fa-angle-left"></i>{' '}
            <strong style={{ fontSize: '25px' }}>&nbsp;&nbsp; Dashboard</strong>
          </h1>
          <AdminID />
        </div>

        {/* Tab buttons with active tab border style */}
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
          <div className="flex items-center justify-between w-[100%] ">
            <div className="font-jost text-3xl font-bold leading-[46.24px] text-left">
              Latest Activity
            </div>
          </div>
        </div>
        <br />
        <br />

        {/* Content selection buttons */}
        <div className="flex space-x-1 text-[var(--Teal,#378BA6)]  text-center text-[18px] font-normal leading-[36px] mb-4">
          <button
            className={` w-[208px] border border-[var(--Teal,#378BA6)] ${activeTab === 'JobsCard' ? 'bg-white text-[var(--Teal,#378BA6)] border border-[var(--Teal,#378BA6)] rounded-xl font-bold' : 'bg-[#EAF1F3] rounded-xl'}`}
            onClick={() => setActiveContent('NewJd')}
          >
            New Jd's
          </button>
          <button
            className={`px-4 py-2 w-[208px] border border-[var(--Teal,#378BA6)] ${activeTab === 'JobCard' ? 'bg-white text-[var(--Teal,#378BA6)] border border-[var(--Teal,#378BA6)] rounded-xl font-bold' : 'bg-[#EAF1F3] rounded-xl'}`}
            onClick={() => setActiveContent('NewCandidates')}
          >
            New Candidates
          </button>
        </div>

        <div className="mt-0 rounded-lg">{renderJobContent()}</div>
      </div>
    </div>
  );
}

export default AdminDashboard;