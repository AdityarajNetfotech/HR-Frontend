import React, { useEffect, useState } from "react";
import Chaticon from '../../../Images/ChatIcon.png';
import axios from "axios";
import CandidateCard from "../DashBoard/CandidateCard";
import Pagination from "../../global/Pagination";

const EmpCandidates = ({ limit = Infinity }) => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [totalPages, setTotalPages] = useState(1); // Total number of pages
  const jobsPerPage = 1; // Number of jobs per page

  useEffect(() => {
    getBackendData();
  }, []);

  const getBackendData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/locked-jds');
      const jobsData = response.data.lockedJDs;

      // Fetch detailed candidate data for each job
      const jobsWithCandidates = await Promise.all(
        jobsData.map(async (job) => {
          const candidateResponses = await Promise.all(
            job.candidates.map(async (candidateId) => {
              const candidateResponse = await axios.get(`http://localhost:4000/api/candidate/${candidateId}`);
              return candidateResponse.data; // Assuming the API returns candidate details
            })
          );
          return { ...job, candidates: candidateResponses }; // Attach candidate details to the job
        })
      );

      // Set jobs and calculate total pages
      setJobs(jobsWithCandidates);
      setTotalPages(Math.ceil(jobsWithCandidates.length / jobsPerPage));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Get the jobs to display on the current page
  const currentJobs = jobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage);

  return (
    <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
      {currentJobs.map((job) => (
        <div key={job._id} className="mb-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="flex max-w-max items-center justify-center px-2 py-1 mb-1 bg-gray-200 text-gray-700 rounded text-center text-sm font-normal leading-[18.2px] tracking-[0.07px]">
                JD ID: {job._id}
              </p>
              <h1 className="text-2xl font-normal text-[#4F4F4F]">
                Job Title: <span className="font-bold text-[#303030]">{job.job_title}</span>
              </h1>
              <p className="overflow-hidden text-[#378BA6] text-ellipsis font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]">
                Company: <b>{job.company_Name}</b>
              </p>
            </div>

            <div>
              <p className="flex flex-row text-[#000] gap-1 font-jost text-[14px] font-semibold leading-[36px]"> 
                Exp:
                <span className="text-[#4F4F4F] text-center font-jost text-[16px] font-normal leading-[36px] border border-[#4F4F4F] rounded-lg p-[1px_12px]">
                  {job.experience}
                </span>
              </p>
            </div>

            <div className="flex flex-row gap-3 bg-[#ECB015]/30 p-[12px_16px] border rounded-lg">
              <img src={Chaticon} className="bg-white rounded-full p-2" alt="Chat Icon" />
              <div className="w-[0.737px] h-[42px] bg-[#848484]"></div>
              <div>
                <h2 className="flex h-[22.595px] flex-col justify-center self-stretch overflow-hidden text-[#4F4F4F] text-ellipsis whitespace-nowrap font-jost text-[20px] font-medium leading-[28px]">
                  Candidate Name
                </h2>
              </div>
            </div>
          </div>

          {/* Display all candidate cards */}
          <div className="grid grid-cols-2 gap-4">
            {job.candidates.map((candidate) => (
              <CandidateCard key={candidate._id} candidates={candidate} />
            ))}
          </div>
        </div>
      ))}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default EmpCandidates;