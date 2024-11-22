import React, { useEffect, useState } from "react";
import Chaticon from "../../../Images/ChatIcon.png";
import axios from "axios";
import CandidateCard from "../DashBoard/CandidateCard";
import Pagination from "../../global/Pagination";
import Sidebar from "../../global/Sidebar";

const EmpCandidates = ({ limit = Infinity }) => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]); // State for filtered jobs
  const [filters, setFilters] = useState({
    search: "",
    sortBy: "Latest",
    jobTitle: "",
    status: "",
    location: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 1;

  useEffect(() => {
    getBackendData();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, jobs]);

  const getBackendData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/locked-jds");
      const jobsData = response.data.lockedJDs;

      const jobsWithCandidates = await Promise.all(
        jobsData.map(async (job) => {
          const candidateResponses = await Promise.all(
            job.candidates.map(async (candidateId) => {
              const candidateResponse = await axios.get(
                `http://localhost:4000/api/candidate/${candidateId}`
              );
              return candidateResponse.data;
            })
          );
          return { ...job, candidates: candidateResponses };
        })
      );

      setJobs(jobsWithCandidates);
      setFilteredJobs(jobsWithCandidates); // Initialize filtered jobs
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const applyFilters = () => {
    let updatedJobs = [...jobs];

    // Apply search filter
    if (filters.search) {
      updatedJobs = updatedJobs.filter((job) =>
        job.job_title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Apply job title filter
    if (filters.jobTitle) {
      updatedJobs = updatedJobs.filter(
        (job) => job.job_title === filters.jobTitle
      );
    }

    // Apply status filter
    if (filters.status) {
      updatedJobs = updatedJobs.filter(
        (job) =>
          job.candidates.some(
            (candidate) => candidate.status === filters.status
          )
      );
    }

    // Apply location filter
    if (filters.location) {
      updatedJobs = updatedJobs.filter(
        (job) => job.location === filters.location
      );
    }

    // Apply sorting
    if (filters.sortBy === "Latest") {
      updatedJobs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (filters.sortBy === "Oldest") {
      updatedJobs.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    setFilteredJobs(updatedJobs);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const resetFilters = () => {
    setFilters({
      search: "",
      sortBy: "Latest",
      jobTitle: "",
      status: "",
      location: "",
    });
  };

  const currentJobs = filteredJobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  return (
    <div className="h-full flex flex-row">
      <div className="max-[30%]">
        <Sidebar />
      </div>

      <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
        <section id="candidateOne-filter">
          <div className="candidateOne-filter_search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              name="search"
              value={filters.search}
              onChange={handleFilterChange}
              placeholder=" Search"
              className="candidateOne-filter_search-bar"
            />
          </div>

          <div className="filter_option">
            <span>
              <i className="fa-solid fa-sort"></i> Sort By:
            </span>
            <select name="sortBy" value={filters.sortBy} onChange={handleFilterChange}>
              <option value="Latest">Latest</option>
              <option value="Oldest">Oldest</option>
            </select>
          </div>

          <div className="filter_option">
            <select name="jobTitle" value={filters.jobTitle} onChange={handleFilterChange}>
              <option value="">Job Title</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
            </select>
          </div>

          <div className="filter_option">
            <select name="status" value={filters.status} onChange={handleFilterChange}>
              <option value="">Status</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
            </select>
          </div>

          <div className="filter_option">
            <select name="location" value={filters.location} onChange={handleFilterChange}>
              <option value="">Location</option>
              <option value="Pune">Pune</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Mumbai">Mumbai</option>
            </select>
          </div>

          <div className="filter_option">
            <button onClick={resetFilters}>
              <i className="fa-solid fa-arrow-rotate-left"></i> Reset Filter
            </button>
          </div>
        </section>
        <br />
        <br />

        {currentJobs.map((job) => (
          <div key={job._id} className="mb-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="flex max-w-max items-center justify-center px-2 py-1 mb-1 bg-gray-200 text-gray-700 rounded text-center text-sm font-normal leading-[18.2px] tracking-[0.07px]">
                  JD ID: {job._id}
                </p>
                <h1 className="text-2xl font-normal text-[#4F4F4F]">
                  Job Title:{" "}
                  <span className="font-bold text-[#303030]">{job.job_title}</span>
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

            <div className="grid grid-cols-2 gap-4">
              {job.candidates.map((candidate) => (
                <CandidateCard key={candidate._id} candidates={candidate} />
              ))}
            </div>
          </div>
        ))}

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredJobs.length / jobsPerPage)}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default EmpCandidates;