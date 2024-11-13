import React from 'react';
// import JobCard from './JobCard';
import EmpJobCard from './EmpJobCard';

const EmpJobList = ({ jobs, onJobClick }) => {
  return (
    <div className="space-y-4">
      {jobs.map(job => (
        <EmpJobCard key={job.id} job={job} onClick={() => onJobClick(job)} />
      ))}
    </div>
  );
};

export default EmpJobList;
