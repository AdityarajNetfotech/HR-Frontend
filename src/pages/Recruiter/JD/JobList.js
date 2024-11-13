import React from 'react';
import JobCard from './JobCard';

const JobList = ({ jobs, onJobClick }) => {
  return (
    <div className="space-y-4">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} onClick={() => onJobClick(job)} />
      ))}
    </div>
  );
};

export default JobList;
