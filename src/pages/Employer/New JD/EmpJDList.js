import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import JobList from './JobList';
// import JobDetails from './JobDetails';
// import LockForMeModal from './LockForMeModal';
import Sidebar from '../../global/Sidebar';
import JobFilters from '../../Recruiter/JD/JobFilters';
import JobList from '../../Recruiter/JD/JobList';
import JobDetails from '../../Recruiter/JD/JobDetails';
import LockForMeModal from '../../Recruiter/JD/LockForMeModal';
import EmpJobList from './EmpJobList';
// import JobFilters from './JobFilters';

const EmpJDList = ({ limit = Infinity }) => {
  const [selectedJob, setSelectedJob] = useState(null); 
  const [jobs, setJobs] = useState([]); 
  const [showModal, setShowModal] = useState(false); 
  const [searchQuery, setSearchQuery] = useState('');  // New search state
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
      console.log('Backend data:', response.data);

      const formattedJobs = response.data.jds.map((job) => ({
        id: job._id, // Ensure this is the correct field name
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
        paymentTerms: [job.payment_terms],
        importantNotes: [job.remarks],
      }));

      setJobs(formattedJobs.slice(0, limit));

      // Extract unique values for filters
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

  const handleJobClick = (job) => {
    console.log('Job clicked:', job); 
    setSelectedJob(job);
    setShowModal(true); // Show the modal when a job is clicked
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedJob(null); // Reset selected job when modal is closed
  };

  // Reset all filters and search query
  const resetFilters = () => {
    setSearchQuery(''); // Reset search query
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

  // Combine search query filtering with the existing filters
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.job_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilters = (filters.location === '' || job.location === filters.location) &&
                           (filters.industry === '' || job.industry === filters.industry) &&
                           (filters.title === '' || job.job_title === filters.title) &&
                           (filters.status === '' || job.status === filters.status);
    
    return matchesSearch && matchesFilters;
  });

  return (
    <div className='min-h-screen flex flex-row gap-4'>
      <Sidebar className='max-[30%]'/>
      <div className="min-h-screen max-w-8xl bg-white p-4 gap-4 flex items-start">
        <div className="w-full">
          {/* Search Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search by title, company, or location"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <JobFilters filters={filters} setFilters={setFilters} />

          {/* Cancel All Filters Button */}
          <div className="mb-4">
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-red-500 text-white rounded-md"
            >
              Cancel All Filters
            </button>
          </div>

          <EmpJobList jobs={filteredJobs} onJobClick={handleJobClick} />
        </div>
        <div className="w-2/5">
          <JobDetails job={selectedJob} />
        </div>
        {showModal && selectedJob && (
          <LockForMeModal
            id={selectedJob.id}
            onClose={handleModalClose}
          />
        )}
      </div>
    </div>
  );
};

export default EmpJDList;
