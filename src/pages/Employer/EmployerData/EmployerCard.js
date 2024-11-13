import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
// import LocationIcon from '../../../Images/LocationIcon.png';
// import IndustryIcon from '../../../Images/IndustryIcon.png';
// import ExperienceIcon from '../../../Images/ExperienceIcon.png';
// import JobTypeIcon from '../../../Images/JobTypeIcon.png';
// import SalaryIcon from '../../../Images/SalaryIcon.png';
import { MdDelete } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";
const EmployerCard = ({ job, onClick }) => {
  return (
    <div
      className=" border border-[var(--Teal,#378BA6)] rounded-md cursor-pointer flex justify-between items-start "
    >
      {/* <div>
        <p className="flex w-32 items-center justify-center px-2 py-1 mb-1 bg-gray-200 text-gray-700 rounded text-center text-sm font-normal leading-[18.2px] tracking-[0.07px]">JD ID: {job.id}</p>
        <h3 className="flex flex-col items-left h-9 overflow-hidden text-gray-800 text-ellipsis whitespace-nowrap font-jost text-2xl font-bold leading-9">{job.title}</h3>
        <p className="flex h-5 mb-1 flex-col justify-center self-stretch overflow-hidden text-[var(--Teal,#378BA6)] truncate font-jost text-lg font-bold leading-5">Company: {job.company}</p>
        <hr className='w-[full] h-[1.5px] bg-black my-1' />
        <div className="grid grid-cols-2 gap-4 font-jost text-base text-[#4F4F4F]">
          <div className="flex items-center">
            <img src={LocationIcon} alt='LocationIcon' />
            <span className='ml-2'>Location: {job.location}</span>
          </div>
          <div className="flex items-center">
            <img src={IndustryIcon} alt='IndustryIcon' />
            <span className='ml-2'>Industry: {job.industry}</span>
          </div>
          <div className="flex items-center col-span-2">
            <div className="flex flex-wrap gap-4 w-full justify-between">
              <div className="flex ">
                <img src={ExperienceIcon} alt='ExperienceIcon' />
                <span className='ml-2'>Experience: {job.experience}</span>
              </div>
              <div className="flex ">
                <img src={JobTypeIcon} alt='JobTypeIcon' />
                <span className='ml-2'>Type: {job.type}</span>
              </div>
              <div className="flex ">
                <img src={SalaryIcon} alt='SalaryIcon' />
                <span className='ml-2'>Salary: {job.salary}</span>
              </div>
            </div>
          </div>
        </div>

      </div> */}
      <div className='w-full flex flex-col gap-4 '>
            <div className='rounded-lg bg-white flex flex-col  gap-3 p-4 self-stretch w-[full] h-auto'>
              <div className='flex justify-between self-stretch'>
                <div className='flex flex-row items-center gap-4 w-[100%]'>
                    <div className='flex w-32 items-center justify-center px-2 py-1 mb-1 bg-gray-200 text-gray-700 rounded text-center text-sm font-normal leading-[18.2px] tracking-[0.07px]'>JD ID: {job.id}</div>
                  <div className='flex flex-col w-[60%]'>
                    <h1 className='flex flex-col items-left h-9 overflow-hidden text-gray-800 text-ellipsis whitespace-nowrap font-jost text-2xl font-bold leading-9'>{job.title}</h1>
                    <h1 className='flex h-5 mb-1 flex-col justify-center self-stretch overflow-hidden text-[var(--Teal,#378BA6)] truncate font-jost text-lg font-bold leading-5'>Company: {job.company}</h1>
                  </div>
                  <div className='text-black text-sm font-semibold font-jost leading-9 flex flex-row gap-2  ml-20 items-center'>Exp:
                    <h1 className='text-[#A38740] text-base font-normal font-jost leading-7 text-center bg-[#FFFB9A]'>{job.experience}</h1>
                  </div>
                  <div className='flex h-[40px] w-[40px] justify-end items-end bg-[#EAF1F3] ml-8'>
                    < MdDelete className='w-16 h-auto' />
                  </div>
                </div>
              </div>
              <div className='w-full h-px bg-black '></div>
              <div className='mt-4 flex flex-row gap-8 items-center justify-between'>
                <div className='flex flex-row text-center'>< FaBriefcase className='w-5 h-5 text-[#378BA6]' />
                  <h1 className='text-gray-600 text-base font-normal ml-2'>JobTitle:</h1>
                  <h1 className='text-gray-600 text-base font-normal'>{job.industry}</h1>
                </div>
                <div className='flex flex-row text-center'>< FaLocationDot className='w-5 h-5 text-[#378BA6]' />
                  <h1 className='text-gray-600 text-base font-normal ml-2'>Location:</h1>
                  <h1 className='text-gray-600 text-base font-normal'>{job.location}</h1>
                </div>
                <div className='flex flex-row mr-[20px] text-center '>< RiMoneyRupeeCircleFill className='w-5 h-5 text-[#378BA6]' />
                  <h1 className='text-gray-600 text-base font-normal ml-2'>Location:</h1>
                  <h1 className='text-gray-600 text-base font-normal'>{job.salary}</h1>
                </div>
                <a href='/SelectFromJD'>
                <button className='flex flex-row items-center justify-center gap-2 py-2 px-3  ml-[270px]  rounded-md border border-gray-400 bg-[#378BA6]'><h1 className='text-white text-center font-bold text-base-lg font-jost'>Upload jd</h1>
                  <FaExternalLinkAlt className='text-white' />
                </button>
                </a>
              </div>

            
          </div>
        </div>

      
    </div>
  );
};

export default EmployerCard;

