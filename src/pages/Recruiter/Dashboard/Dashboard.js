import React, { useState, useEffect } from 'react';
import WeeklyDashboard from './WeeklyDashboard.js';
import MonthlyDashboard from './MonthlyDashboard.js';
import Yearly from './Yearly.js';
import Sidebar from '../../global/Sidebar.js';
import axios from 'axios';
import lockIcon from '../../../Images/LockIcon.png'
import LocationIcon from '../../../Images/LocationIcon.png';
import IndustryIcon from '../../../Images/IndustryIcon.png';
import ExperienceIcon from '../../../Images/ExperienceIcon.png';
import JobTypeIcon from '../../../Images/JobTypeIcon.png';
import SalaryIcon from '../../../Images/SalaryIcon.png'
import TimeIcon from '../../../Images/TimeIcon.png';
import SubmissionIcon from '../../../Images/SubmissionIcon.png';
import NoticePeriodIcon from '../../../Images/NoticePeriodIcon.png';
import InterviewIcon from '../../../Images/InterviewIcon.png';
import PriorityIcon from '../../../Images/PriorityIcon.png'
import { useNavigate } from 'react-router-dom';
import AdminID from '../../global/AdminID.js';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('WeeklyDashboard'); // For managing active tab
  const [jobs, setJobs] = useState([]); // To store job data
  const [showMoreJobs, setShowMoreJobs] = useState(false); // For "See More" toggle
  const navigate = useNavigate();

  // Function to fetch job data from the backend
  const fetchJobs = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/showJDs');
      const formattedJobs = response.data.jds.map((job) => ({
        id: job._id,
        job_title: job.job_title,
        company: job.company_Name,
        experience: job.experience,
        industry: job.industry,
        location: job.location,
        work_exp: job.work_experience,
        salary: job.salary,
        type: 'Full time',
        noticePeriod: job.notice_period,
        interviewRounds: job.interview_rounds,
        job_type: job.job_type,
        priority: job.priority_tag,
        delivery_deadline: new Date(job.delivery_deadline).toLocaleDateString(),
        replacementPeriod: job.replacement_period,
        no_of_vacancy: job.no_of_vacancy,
        absoluteValue: job.absolute_payout,
        delivery_payout: job.delivery_payout,
        additional_comments: job.additional_comments,
        skills_required: job.skills_required,
        jd_status: job.jd_status,
        uploadedOn: new Date(job.createdAt).toLocaleDateString(),
        comments: job.remarks,
        status: job.jd_status,
        signUpRate: job.sign_up_rate,
        paymentTerms: job.payment_terms,
        importantNotes: job.remarks,
      }));
      setJobs(formattedJobs); // Save the job data
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  useEffect(() => {
    fetchJobs(); // Fetch job data on component mount
  }, []);

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
    <>
      <div className='min-h-screen flex flex-row gap-10 bg-[#EAF1F3]'>
        <Sidebar className='max-[30%] ' />
        <div className="max-w-8xl justify-center mt-10">
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

          <div className="mt-0 rounded-lg">
            {renderTabContent()}
          </div>

          <div className="flex flex-col items-start gap-[20px] self-stretch mt-6">
            <div className="flex items-center justify-between w-[100%] ">
              <div className="text-[#4F4F4F] font-jost text-[24px] font-semibold leading-[28px]">
                New JD's
              </div>
              <button
                className='flex h-[52px] p-[8px_12px] justify-center items-center gap-[8px] rounded-lg bg-[#A4A4A4]'
                onClick={() => navigate('/jdlist/recent')} // Navigate to JDList page
              >
                <h1 className='text-white-custom text-center font-jost text-18px font-semibold leading-28px text-white'>
                  See More
                </h1>
              </button>
            </div>

            {/* Job List Section */}
            <div className='max-w-8xl '>
              {jobs.slice(0, showMoreJobs ? jobs.length : 3).map((job, index) => (
                <div key={index} className="bg-white p-4 mb-4 w-[1092px] h-[210px] shadow-md rounded-lg">
                  <h1 className='px-1 mb-1'>Sr No. {index + 1}</h1>
                  <div>
                    <p className="flex max-w-max items-center justify-center px-2 py-1 mb-1 bg-gray-200 text-gray-700 rounded text-center text-sm font-normal leading-[18.2px] tracking-[0.07px]">JD ID: {job.id}</p>
                    <h3 className="flex flex-col items-left h-9 overflow-hidden text-gray-800 text-ellipsis whitespace-nowrap font-jost text-2xl font-bold leading-9">{job.job_title}</h3>
                    <p className="flex h-5 mb-1 justify-start self-stretch overflow-hidden text-[var(--Teal,#378BA6)] truncate font-jost text-lg leading-5">Company: <b>{job.company}</b> </p>
                    <hr className='w-[1050px] h-[1.5px] bg-black my-1' />
                    <div className="grid grid-cols-2 gap-1 font-jost text-base text-[#4F4F4F]">
                      <div className="flex items-center">
                        <img src={LocationIcon} alt='LocationIcon' />
                        <span className='ml-2 font-jost'>Location: {job.location}</span>
                      </div>
                      <div className="flex items-center">
                        <img src={IndustryIcon} alt='IndustryIcon' />
                        <span className='ml-2 font-jost'>Industry: {job.industry}</span>
                      </div>
                      <div className="flex items-center col-span-2">
                        <div className="flex flex-wrap gap-4 w-full justify-between">
                          <div className="flex ">
                            <img src={ExperienceIcon} alt='ExperienceIcon' />
                            <span className='ml-2font-jost'>Experience: {job.experience}</span>
                          </div>
                          <div className="flex ">
                            <img src={JobTypeIcon} alt='JobTypeIcon' />
                            <span className='ml-2 font-jost'>Type: {job.job_type}</span>
                          </div>
                          <div className="flex ">
                            <img src={SalaryIcon} alt='SalaryIcon' />
                            <span className='ml-2 font-jost'>Salary: <b>{job.salary}/-</b> p.a. </span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
