import React, { useState } from 'react';
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
import { Link } from 'react-router-dom';

const JobDetails = ({ job }) => {
  const [activeTab, setActiveTab] = useState('description');

  if (!job) return <div>Select a job to view details</div>;

  return (
    <div className="p-4 border border-[var(--Teal,#378BA6)] rounded-md w-[370px] mx-auto h-[1022px] items-center justify-center">
      <p className="flex max-w-max items-center justify-center px-2 py-1 mb-1 bg-gray-200 text-gray-700 rounded text-center text-sm font-normal leading-[18.2px] tracking-[0.07px] ">JD ID: {job.id}</p>

      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="flex flex-col justify-center h-[24px] overflow-hidden text-[#303030] truncate whitespace-nowrap font-jost text-[24px] font-bold leading-[24px]">{job.job_title}</h2>
          <p className="flex flex-col justify-center h-[20.809px] overflow-hidden text-[#378BA6] truncate whitespace-nowrap font-jost text-[20px] my-2 font- leading-[28px]">Company: {job.company}</p>
        </div>

      </div>
      <div className="flex flex-row justify-between">
        <Link to='/LockModal' >
          <button className="flex justify-center items-center gap-[8px] h-[35.347px] p-[8px_12px] rounded-[8px] bg-[#378BA6] text-white text-center font-jost text-[24px] font-semibold leading-[28px] focus:bg-[#A4A4A4]">  Lock for me <img src={lockIcon} alt='lockIcon' />
          </button>
        </Link>
        <p className="text-black font-jost text-sm font-semibold leading-9" >
          Status: <span className={` w-[75px] h-[14px] px-3 py-2 flex-col justify-center rounded-md text-center font-jost text-base font-normal leading-[28px] 
          ${job.status === 'Open' ? 'bg-[#DBF0CA] text-[#477C1D]'
              : job.status === 'Closed' ? 'bg-[var(--Primary-Orange,#ECB015)] text-white'
                : job.status === 'Rework' ? 'bg-[#D2EAF2] text-[#115469]'
                  : 'bg-[#FFFB9A] text-[#A38740]'}`}>{job.status}</span>
        </p>
      </div>

      <hr className='bg-black h-[1.5px] my-5' />

      <div className="flex border-b">
        <button
          className={`flex-1 py-2 text-center ${activeTab === 'description' ? 'bg-white text-[var(--Teal,#378BA6)] border border-[var(--Teal,#378BA6)] rounded-t-xl font-bold border-b-8' : 'bg-[#EAF1F3] border border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)] rounded-t-xl'}`}
          onClick={() => setActiveTab('description')}
        >
          Job Description
        </button>
        <button
          className={`flex-1 py-2 text-center ${activeTab === 'terms' ? 'bg-white text-[var(--Teal,#378BA6)] border border-[var(--Teal,#378BA6)] rounded-t-xl font-bold border-b-8' : 'bg-[#EAF1F3] border border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)] rounded-t-xl '}`}
          onClick={() => setActiveTab('terms')}
        >
          Client Terms
        </button>
      </div>

      {activeTab === 'description' && (
        <div className=" border border-[#378BA6] rounded-b-lg">
          <div className="bg-gray-100 p-3 rounded-md">
            <h3 className="flex items-center self-stretch p-[6px_12px] rounded-[4px] bg-[#C3DCE4] text-[#115469] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">Job Description</h3>
            <ol className="list-inside list-none text-sm text-gray-700">
              <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={LocationIcon} alt='Location' />Location: {job.location}</li>
              <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={IndustryIcon} alt='industry' /><>Industry:</> {job.industry}</li>
              <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={ExperienceIcon} alt='Experience' /><>Experience:</> {job.experience}</li>
              <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={SalaryIcon} alt='Salary' /><>Salary:</> {job.salary}</li>
              <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={JobTypeIcon} alt='JobType' /><>Type:</> {job.type}</li>
              <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={InterviewIcon} alt='Interview' /><>Interview Rounds:</> {job.interviewRounds}</li>
              <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={NoticePeriodIcon} alt='Notice' /><>Notice Period:</> {job.noticePeriod}</li>
            </ol>
          </div>

          <div className="bg-gray-100 p-3 rounded-md">
            <h3 className="flex items-center self-stretch p-[6px_12px] rounded-[4px] bg-[#C3DCE4] text-[#115469] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">Submission Details</h3>
            <ul className="list-none list-inside text-sm text-gray-700">
              <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={PriorityIcon} alt='Priority' /><>Priority:</> {job.priority}</li>
              <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={SubmissionIcon} alt='Submission' /><>No. of Submissions Required:</> {job.submissionsRequired}</li>
              <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={TimeIcon} alt='Time' /><>Uploaded on:</> {job.uploadedOn}</li>
              <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={TimeIcon} alt='Time' /><>Delivery Required:</> {job.delivery_deadline}</li>
              <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={TimeIcon} alt='Time' /><>Replacement Period:</> {job.replacementPeriod}</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-3 rounded-md">
            <h3 className="flex items-center self-stretch p-[6px_12px] rounded-[4px] bg-[#C3DCE4] text-[#115469] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">Skills Required</h3>
            <p className="flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">{job.skills_required}</p>
          </div>

          <div className="bg-gray-100 p-3 rounded-md">
            <h3 className="flex items-center self-stretch p-[6px_12px] rounded-[4px] bg-[#C3DCE4] text-[#115469] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">Additional Comments</h3>
            <p className="flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">{job.additional_comments}</p>
          </div>
        </div>
      )}

      {activeTab === 'terms' && (
        <div className="space-y-4 border border-[#378BA6] rounded-b-lg">
          <div className="bg-gray-100 p-3 rounded-md">
            <h3 className="flex items-center self-stretch p-[6px_12px] rounded-[4px] bg-[#C3DCE4] text-[#115469] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">Payout Details</h3>
            <div className="grid grid-cols-2 gap-0 border mt-3 border-gray-400 rounded-md text-center">
              <div className=" p-2 border-r  border-b border-gray-400 bg-[#EAF1F3] text-[#4F4F4F] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">
                Your Payout
              </div>
              <div className="p-2 border-b border-gray-400 text-[#4F4F4F] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">
                {job.delivery_payout}
              </div>
              <div className="bg-[#EAF1F3] p-2 border-r border-gray-400 text-gray-700 text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">
                Absolute value
              </div>
              <div className="p-2 border-gray-400 text-[#4F4F4F] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">
                {job.absolute_payout}
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-3 rounded-md">
            <h3 className="flex items-center self-stretch p-[6px_12px] rounded-[4px] bg-[#C3DCE4] text-[#115469] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">Sign Up Rate with Client</h3>
            <p className="flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">{job.signUpRate}</p>
          </div>

          <div className="bg-gray-100 p-3 rounded-md">
            <h3 className="flex items-center self-stretch p-[6px_12px] rounded-[4px] bg-[#C3DCE4] text-[#115469] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">Payment Terms</h3>
            <ol className=" gap-2 my-1 pl-5 list-decimal text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">
              {job.paymentTerms.map((term, index) => (
                <li key={index}>{term}</li>
              ))}
            </ol>
          </div>

          <div className="bg-gray-100 p-3 rounded-md">
            <h3 className="flex items-center self-stretch p-[6px_12px] rounded-[4px] bg-[#C3DCE4] text-[#115469] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">Important Notes</h3>
            <ol className=" gap-2 my-1 pl-5 list-decimal text-[#FC5C5C] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">
              {job.importantNotes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
