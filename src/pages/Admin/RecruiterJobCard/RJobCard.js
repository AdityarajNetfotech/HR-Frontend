import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LocationIcon from '../../../Images/LocationIcon.png';
import IndustryIcon from '../../../Images/IndustryIcon.png';
import ExperienceIcon from '../../../Images/ExperienceIcon.png';
import JobTypeIcon from '../../../Images/JobTypeIcon.png';
import SalaryIcon from '../../../Images/SalaryIcon.png'
import { useNavigate } from 'react-router-dom';

function RJobCard() {
  const [jobs, setJobs] = useState([]); // To store job data
  const [showMoreJobs, setShowMoreJobs] = useState(false); // For "See More" toggle

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


  return (
    <>
      <div className='max-w-8xl '>
        {jobs.slice(0, showMoreJobs ? jobs.length : 3).map((job) => (
          <div key={job.id} className="bg-white p-4 mb-4 w-[1092px] h-[182px] shadow-md rounded-lg">
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
    </>
  );
}

export default RJobCard;