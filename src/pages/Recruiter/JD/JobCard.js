import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import LocationIcon from '../../../Images/LocationIcon.png';
import IndustryIcon from '../../../Images/IndustryIcon.png';
import ExperienceIcon from '../../../Images/ExperienceIcon.png';
import JobTypeIcon from '../../../Images/JobTypeIcon.png';
import SalaryIcon from '../../../Images/SalaryIcon.png';

const JobCard = ({ job, onClick }) => {
  return (
    <div
      className="p-4 border border-[var(--Teal,#378BA6)] rounded-md cursor-pointer flex justify-between items-start mb-4"
    >
      <div>
        <p className="flex max-w-max items-center justify-center px-2 py-1 mb-1 bg-gray-200 text-gray-700 rounded text-center text-sm font-normal leading-[18.2px] tracking-[0.07px]">JD ID: {job.id}</p>
        <h3 className="flex flex-col items-left h-9 overflow-hidden text-gray-800 text-ellipsis whitespace-nowrap font-jost text-2xl font-bold leading-9">{job.job_title}</h3>
        <p className="flex h-5 mb-1 justify-start self-stretch overflow-hidden text-[var(--Teal,#378BA6)] truncate font-jost text-lg leading-5">Company: <b>{job.company}</b> </p>
        <hr className='w-[695px] h-[1.5px] bg-black my-1' />
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

      <div className="text-right">

        <p className="text-black font-jost text-sm font-semibold leading-9" >
          Status: <span className={` w-[75px] h-[14px] px-3 py-2 flex-col justify-center rounded-md text-center font-jost text-base font-normal leading-[28px] 
          ${
            job.status === 'Open' ? 'bg-[#DBF0CA] text-[#477C1D]'
            : job.status === 'Closed' ? 'bg-[var(--Primary-Orange,#ECB015)] text-white' 
            : job.status === 'Rework' ? 'bg-[#D2EAF2] text-[#115469]' 
            : 'bg-[#FFFB9A] text-[#A38740]'}`}>{job.status}</span>
        </p>
        <IoIosArrowForward onClick={onClick} className='bg-[var(--Teal,#378BA6)] w-10 h-10 text-white rounded-lg ml-20 mt-20 ' />
      </div>
    </div>
  );
};

export default JobCard;
