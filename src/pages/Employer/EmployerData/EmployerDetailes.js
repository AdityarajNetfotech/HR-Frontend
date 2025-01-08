import React, { useState, useEffect } from 'react';
import EmployerList from './EmployerList';
import Pagination from '../../global/Pagination'; // Import the Pagination component
import axios from "axios";
import { Link } from 'react-router-dom';

const EmployerDetailes = () => {
  const [jobs, setJobs] = useState([]); // All jobs data
  const [filteredJobs, setFilteredJobs] = useState([]); // Filtered jobs data
  const [searchTerm, setSearchTerm] = useState(''); // Search term state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [selectedJob, setSelectedJob] = useState(null); // Selected job state
  const [sortOption, setSortOption] = useState('Latest'); // Sorting state
  const [locationFilter, setLocationFilter] = useState(''); // Location filter state
  const [locations, setLocations] = useState([]); // Dynamically fetched locations
  const [jobTitleFilter, setJobTitleFilter] = useState('');
  const [jobTitles, setJobTitles] = useState([]); // State for dynamic job titles
  const jobsPerPage = 4; // Number of jobs per page

  // Fetch jobs from backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Use the correct API endpoint for `getJDsByUser`
        const response = await axios.get('http://localhost:4000/api/ShowUserJD', {
          withCredentials: true // This ensures cookies are sent with the request
        });


        console.log("res", response.data);

        const fetchedJobs = response.data.jds;
        setJobs(fetchedJobs); // Assuming `jds` is the array in response
        setFilteredJobs(fetchedJobs); // Initialize filtered jobs

        // Extract unique locations and job titles
        const uniqueLocations = [
          ...new Set(fetchedJobs.map((job) => job.location).filter(Boolean))
        ];
        setLocations(uniqueLocations);

        const uniqueJobTitles = [
          ...new Set(fetchedJobs.map((job) => job.job_title).filter(Boolean))
        ];
        setJobTitles(uniqueJobTitles);

      } catch (err) {
        console.log("No JD's found for this candidate");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);


  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter jobs by job title, company name, or JD ID
    const filtered = jobs.filter((job) =>
      job.industry.toLowerCase().includes(value) ||
      job.company_Name.toLowerCase().includes(value) ||
      job._id.toLowerCase().includes(value)
    );
    setFilteredJobs(filtered);
    setCurrentPage(1); // Reset to the first page
  };

  // Handle sorting
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);

    // Sorting logic
    const sortedJobs = [...filteredJobs].sort((a, b) => {
      if (value === 'Latest') {
        return new Date(b.createdAt) - new Date(a.createdAt); // Assuming `createdAt` contains job creation date
      } else if (value === 'Oldest') {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }
      return 0;
    });

    setFilteredJobs(sortedJobs);
  };

  // Handle job title filter change
  const handleJobTitleChange = (e) => {
    const selectedTitle = e.target.value;
    setJobTitleFilter(selectedTitle);

    // Filter jobs by job title
    const filtered = jobs.filter((job) =>
      selectedTitle === '' || job.job_title === selectedTitle
    );
    setFilteredJobs(filtered);
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocationFilter(value);

    // Filter jobs by location
    const filtered = jobs.filter((job) =>
      value === '' || (job.location && job.location.toLowerCase() === value.toLowerCase())
    );

    setFilteredJobs(filtered);
    setCurrentPage(1); // Reset to the first page
  };

  // Reset filters
  const handleResetFilters = () => {
    setSearchTerm('');
    setFilteredJobs(jobs);
    setLocationFilter('');
    setJobTitleFilter('');
    setCurrentPage(1);
  };

  // Calculate paginated jobs
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section>
      {/* Filter */}
      <div id='candidateOne-filter'>
        <div className="candidateOne-filter_search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search Here..."
            className="candidateOne-filter_search-bar"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <div className='filter_option'>
          <span><i className="fa-solid fa-sort"></i> Sort By:</span>
          <select name="Sort By" value={sortOption} onChange={handleSortChange}>
            <option value="Latest">Latest</option>
            <option value="Oldest">Oldest</option>
          </select>
        </div>

        <div className="filter_option">
          <select
            name="Job Title"
            value={jobTitleFilter}
            onChange={handleJobTitleChange}
          >
            <option value="">All Job Titles</option>
            {jobTitles.map((title, index) => (
              <option key={index} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>

        <div className='filter_option'>
          <select name="Location" value={locationFilter} onChange={handleLocationChange}>
            <option value="">All Locations</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div className='filter_option'>
          <button onClick={handleResetFilters}>
            <i className="fa-solid fa-arrow-rotate-left"></i> Reset Filter
          </button>
        </div>
      </div>
      <br />
      <div className="w-full flex justify-end mb-4">
        <button className="w-[20%] flex p-2 px-3 justify-center items-center gap-2 self-stretch rounded-lg bg-gray-400">
          <Link to="/AddJDForm" className="text-white text-center font-semibold text-xl leading-7 font-jost">Add New JD</Link>
        </button>
      </div>

      <div className="max-w-8xl bg-white p-4 gap-4 flex items-start ">
        <div className="w-full">
          {/* Render paginated jobs */}
          {currentJobs.length === 0 ? (
            <div className="text-center text-gray-500 text-lg">
              No JD's found for this candidate
            </div>
          ) : (
            <>
              {/* Render paginated jobs */}
              <EmployerList jobs={currentJobs} onJobClick={handleJobClick} />
              {/* Render pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmployerDetailes;
