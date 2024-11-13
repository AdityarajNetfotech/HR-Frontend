// src/components/CandidateDetails.js
import React from 'react';

const CandidateDetails = ({ candidate }) => {
  return (
    <div className="mt-4">
      <div className="flex justify-between">
        <div className="text-gray-700">
          <p>{candidate.name}</p>
          <p className="text-sm text-gray-500">Candidate ID: {candidate.id}</p>
        </div>
        <div className="text-green-500">
          {candidate.isSelected && <p>Selected Candidate</p>}
        </div>
      </div>
      <p className="text-gray-500 text-sm mt-1">{candidate.remarks}</p>
    </div>
  );
};

export default CandidateDetails;
