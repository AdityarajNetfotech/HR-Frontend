import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import LocationIcon from '../../../Images/LocationIcon.png';
import IndustryIcon from '../../../Images/IndustryIcon.png';
import ExperienceIcon from '../../../Images/ExperienceIcon.png';
import JobTypeIcon from '../../../Images/JobTypeIcon.png';
import SalaryIcon from '../../../Images/SalaryIcon.png';
import TimeIcon from '../../../Images/TimeIcon.png';
import SubmissionIcon from '../../../Images/SubmissionIcon.png';
import NoticePeriodIcon from '../../../Images/NoticePeriodIcon.png';
import InterviewIcon from '../../../Images/InterviewIcon.png';
import html2pdf from 'html2pdf.js';
import PriorityIcon from '../../../Images/PriorityIcon.png';

function AdminSummery() {
    const location = useLocation();
    const navigate = useNavigate(); 
    const { job } = location.state || {}; 
    console.log(job);

    if (!job) {
        return <p>No job data available.</p>;
    }

    
    const handleDownload = () => {
        const element = document.getElementById('pdf-content'); 
        html2pdf()
            .from(element)
            .set({
                margin: 1,
                filename: 'Admin_summary-sheet.pdf',
                html2canvas: { scale: 2 },
                jsPDF: { format: 'a4', orientation: 'portrait' }
            })
            .save();
    };

    
    const handleDoneClick = () => {
        navigate('/AdminJd'); 
    };

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-4xl mx-auto">
          
            <div id="pdf-content">
                <div className="flex p-2 px-4 justify-between items-center self-stretch rounded-lg bg-[#378BA6]/30">
                    <div>
                        <h2 className="text-center text-dark-gray text-2xl font-medium leading-9">SUMMARY SHEET</h2>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="text-gray-500" onClick={handleDownload}> {/* Attach click handler */}
                            <i className="fas fa-download"></i>
                        </button>
                        <button className="text-gray-500">✕</button>
                    </div>
                </div>

                <p className="flex w-32 my-3 items-center justify-center px-2 py-1 mb-2 bg-gray-200 text-gray-700 rounded text-center text-sm font-normal leading-[18.2px] tracking-[0.07px]">JD ID: {job.id}</p>

                <div className="bg-yellow-100 p-4 rounded-lg mb-6">
                    <p className="text-black text-ellipsis overflow-hidden font-medium text-2xl leading-7 truncate">Recruiter Details:</p>
                    <hr className='my-1' />
                    <div className="flex items-center">
                        <div className="custom-clamp text-dark-grey text-ellipsis overflow-hidden font-medium text-2xl leading-7">R01 : {job._id}</div>
                        <div className='w-[0.737px] h-[42px] bg-[#848484] mx-3'></div>
                        <div>
                            <p className="font-bold text-gray-800">{job.job_title}</p>
                            <p className="text-sm text-gray-600">ID: {job._id}</p>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="flex flex-col justify-center text-dark-grey text-ellipsis overflow-hidden whitespace-nowrap font-normal text-2xl leading-9">Job Title: <span className="text-custom-gray font-jost text-2xl font-semibold leading-9">{job.job_title}</span></h3>
                    <p className="flex flex-col justify-center w-auto h-[20.809px] overflow-hidden text-[#378BA6] whitespace-nowrap text-[20px] font-normal leading-28px font-jost">Company: {job.company_Name} </p>
                </div>

               
                <div className="grid grid-cols-2 gap-4">
                    <div className="border border-[#378BA6] rounded-lg">
                        <div className="bg-gray-100 p-3 rounded-md">
                            <h3 className="flex items-center self-stretch p-[6px_12px] rounded-[4px] bg-[#C3DCE4] text-[#115469] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">Job Description</h3>
                            <ol className="list-inside list-none text-sm text-gray-700">
                                <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={LocationIcon} alt='Location' />Location: {job.location}</li>
                                <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={IndustryIcon} alt='Industry' />Industry: {job.industry}</li>
                                <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={ExperienceIcon} alt='Experience' />Experience: {job.experience}</li>
                                <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={SalaryIcon} alt='Salary' />Salary: {job.salary}</li>
                                <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={JobTypeIcon} alt='Job Type' />Type: {job.job_type}</li>
                                <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={InterviewIcon} alt='Interview Rounds' />Interview Rounds: {job.interview_rounds}</li>
                                <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={NoticePeriodIcon} alt='Notice Period' />Notice Period: {job.notice_period}</li>
                            </ol>
                        </div>

                        <div className="bg-gray-100 p-3 rounded-md">
                            <h3 className="flex items-center self-stretch p-[6px_12px] rounded-[4px] bg-[#C3DCE4] text-[#115469] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">Submission Details</h3>
                            <ul className="list-none list-inside text-sm text-gray-700">
                                <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={PriorityIcon} alt='Priority' />Priority: {job.priority_tag}</li>
                                <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={SubmissionIcon} alt='Submissions Required' />No. of Submissions Required: {job.no_of_vacancy}</li>
                                <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={TimeIcon} alt='Delivery Required' />Delivery Required: {job.delivery_deadline}</li>
                                <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'><img src={TimeIcon} alt='Replacement Period' />Replacement Period: {job.replacement_period}</li>
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

                    <div className="space-y-4 border border-[#378BA6] rounded-lg p-4">
                        <h3 className="flex items-center self-stretch p-[6px_12px] rounded-[4px] bg-[#C3DCE4] text-[#115469] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">Payout Details</h3>
                        <ul className="list-inside list-none text-sm text-gray-700">
                            <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'>Delivery Payout: {job.delivery_payout}</li>
                            <li className='flex gap-2 my-1 text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]'>Absolute Payout: {job.absolute_payout}</li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-3 mt-7 justify-end">
                    <button 
                        className="flex py-2 px-3 justify-center items-center gap-2 self-stretch rounded-lg bg-[#378BA6] text-white text-center text-[20px] font-bold leading-[36px] font-jos"
                        onClick={handleDoneClick} // Attach click handler
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AdminSummery;
