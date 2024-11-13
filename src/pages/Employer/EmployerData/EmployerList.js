import React from 'react'
import EmployerCard from './EmployerCard';
const EmployerList = ({ jobs, onJobClick }) => {
    return (
      <div className="space-y-4">
        {jobs.map(job => (
          <EmployerCard  key={job.id} job={job} onClick={() => onJobClick(job)} />
        ))}
      </div>
    );
  };
  
  export default EmployerList;