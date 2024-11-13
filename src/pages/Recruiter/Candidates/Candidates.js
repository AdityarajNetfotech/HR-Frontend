// src/pages/Candidates/Candidates.js
import React from 'react';
import JobCard from './JobCard';

const Candidates = () => {
  const jobs = [
    {
      id: '#12345678',
      title: 'Software Developer',
      clientName: 'Bhagyashree Radhakrishnan',
      candidate:{
        name: 'Samuel Matthew',
        id: '1254631',
        isSelected: true,
        remarks: 'Candidate Selected for further screening',
      },
      progress: [
        { name: 'Delivery', isCompleted: true },
        { name: 'Interview', isCompleted: false },
        { name: 'Offer', isCompleted: false },
        { name: 'Payment', isCompleted: false },
      ],
      status: 'Delivery Pending',
      deadline: '30th July \'24',
    },
    {
        "id": "#23456789",
        "title": "Data Scientist",
        "clientName": "Ananya Sharma",
        "candidate": {
          "name": "Priya Singh",
          "id": "2365890",
          "isSelected": false,
          "remarks": "Awaiting further assessment"
        },
        "progress": [
          { "name": "Delivery", "isCompleted": true },
          { "name": "Interview", "isCompleted": true },
          { "name": "Offer", "isCompleted": false },
          { "name": "Payment", "isCompleted": false }
        ],
        "status": "Offer Pending",
        "deadline": "15th August '24"
      },
      {
        "id": "#34567890",
        "title": "UX Designer",
        "clientName": "Rajiv Mehta",
        "candidate": {
          "name": "Aisha Khan",
          "id": "9876543",
          "isSelected": true,
          "remarks": "Candidate is under review"
        },
        "progress": [
          { "name": "Delivery", "isCompleted": true },
          { "name": "Interview", "isCompleted": true },
          { "name": "Offer", "isCompleted": true },
          { "name": "Payment", "isCompleted": false }
        ],
        "status": "Offer Accepted",
        "deadline": "10th September '24"
      }
    // Add more job entries here
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

export default Candidates;
