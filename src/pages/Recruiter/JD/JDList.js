import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobCard from './JobCard';
import JobDetails from './JobDetails';
import LockForMeModal from './LockForMeModal';
import Sidebar from '../../global/Sidebar';
import Pagination from '../../global/Pagination';
import JobFilters from './JobFilters';
import AdminID from '../../global/AdminID';

const JDList = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;
  const [filters, setFilters] = useState({
    location: '',
    industry: '',
    title: '',
    status: '',
    uniqueLocations: [],
    uniqueIndustries: [],
    uniqueTitles: [],
    uniqueStatuses: []
  });

  useEffect(() => {
    getBackendData();
  }, []);

  const getBackendData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/showJDs');
      console.log(response.data);
      
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
        lock_status: job.locked,
        uploadedOn: new Date(job.createdAt).toLocaleDateString(),
        comments: job.remarks,
        status: job.jd_status,
        signUpRate: job.sign_up_rate,
        paymentTerms: [job.payment_terms],
        importantNotes: [job.remarks],
      }));

      setJobs(formattedJobs);

      const uniqueLocations = [...new Set(formattedJobs.map(job => job.location))];
      const uniqueIndustries = [...new Set(formattedJobs.map(job => job.industry))];
      const uniqueTitles = [...new Set(formattedJobs.map(job => job.job_title))];
      const uniqueStatuses = [...new Set(formattedJobs.map(job => job.status))];

      setFilters(prev => ({
        ...prev,
        uniqueLocations,
        uniqueIndustries,
        uniqueTitles,
        uniqueStatuses
      }));
    } catch (error) {
      console.error('Error fetching data from backend:', error);
    }
  };

  // Handle job click - toggle JobDetails visibility
  const handleJobClick = (job) => {
    if (selectedJob?.id === job.id) {
      setSelectedJob(null); // Deselect if already selected
    } else {
      setSelectedJob(job); // Select the new job
    }
  };

  // Reset filters and search
  const resetFilters = () => {
    setSearchQuery('');
    setFilters({
      location: '',
      industry: '',
      title: '',
      status: '',
      uniqueLocations: filters.uniqueLocations,
      uniqueIndustries: filters.uniqueIndustries,
      uniqueTitles: filters.uniqueTitles,
      uniqueStatuses: filters.uniqueStatuses,
    });
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = (job.job_title && job.job_title.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (job.company && job.company.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (job.location && job.location.toLowerCase().includes(searchQuery.toLowerCase()));
  
    const matchesFilters = (filters.location === '' || job.location === filters.location) &&
      (filters.industry === '' || job.industry === filters.industry) &&
      (filters.title === '' || job.job_title === filters.title) &&
      (filters.status === '' || job.status === filters.status);
  
    return matchesSearch && matchesFilters;
  });
  

  // Logic for pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='min-h-screen flex flex-row gap-4'>
      <Sidebar className='max-[30%]' />
      <div className='w-[100%]  bg-[#EAF1F3]'>
        <div className='flex justify-between mt-5' style={{ marginBottom: "50px" }}>
          <h1 className='flex justify-center items-center'><i className="fa-solid fa-angle-left"></i> <strong style={{ fontSize: "25px" }}>&nbsp;&nbsp; JD List</strong> </h1>
          <AdminID />
        </div>
        <div className="min-h-screen max-w-8xl p-4 gap-4 flex flex-col items-start">
          <div className="w-full">
            <JobFilters
              filters={filters}
              setFilters={setFilters}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <div className="mb-4">
              <button
                onClick={resetFilters}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Cancel All Filters
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-[70%]">
              {currentJobs.map((job) => (
                <JobCard key={job.id} job={job} onJobClick={handleJobClick} />
              ))}
            </div>

            {selectedJob && (
              <div className="w-[30%]">
                <JobDetails
                  job={selectedJob}
                  onLockClick={() => setShowModal(true)}
                />
              </div>
            )}
          </div>
          <div className="w-full flex justify-end">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </div>

          {showModal && selectedJob?.id && (
            <LockForMeModal
              job={selectedJob}
              onClose={() => setShowModal(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default JDList;
