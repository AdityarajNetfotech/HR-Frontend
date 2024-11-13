import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CandidateFilter = ({ onFilterChange }) => {
  const [locations, setLocations] = useState([]);
  const [experience, setExperience] = useState([]);
  const [noticePeriod, setNoticePeriod] = useState([]);
  const [expectedSalaryRange, setExpectedSalaryRange] = useState([0, 100000]); // Set initial salary range

  useEffect(() => {
    // Fetch unique values from the API or process candidates data to get unique values
    const fetchUniqueFilters = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/candidates');
        const candidates = res.data.data || [];

        const uniqueLocations = [...new Set(candidates.map(candidate => candidate.Current_location))];
        const uniqueExperience = [...new Set(candidates.flatMap(candidate => candidate.Experience.map(exp => exp.years)))];
        const uniqueNoticePeriods = [...new Set(candidates.map(candidate => candidate.Notice_period))];

        setLocations(uniqueLocations);
        setExperience(uniqueExperience);
        setNoticePeriod(uniqueNoticePeriods);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchUniqueFilters();
  }, []);

  const handleFilterChange = () => {
    onFilterChange({
      locations,
      experience,
      noticePeriod,
      expectedSalaryRange,
    });
  };

  return (
    <div className="filter-container">
      <h2>Filter Candidates</h2>
      
      {/* Location Filter */}
      <h3>Location</h3>
      {locations.map(location => (
        <label key={location}>
          <input 
            type="checkbox" 
            value={location} 
            onChange={handleFilterChange} 
          />
          {location}
        </label>
      ))}

      {/* Experience Filter */}
      <h3>Experience (Years)</h3>
      {experience.map(exp => (
        <label key={exp}>
          <input 
            type="checkbox" 
            value={exp} 
            onChange={handleFilterChange} 
          />
          {exp} Years
        </label>
      ))}

      {/* Notice Period Filter */}
      <h3>Notice Period (Days)</h3>
      {noticePeriod.map(period => (
        <label key={period}>
          <input 
            type="checkbox" 
            value={period} 
            onChange={handleFilterChange} 
          />
          {period} Days
        </label>
      ))}

      {/* Expected Salary Filter (Slider) */}
      <h3>Expected Salary</h3>
      <input
        type="range"
        min="0"
        max="100000" // Adjust based on your expected salary range
        value={expectedSalaryRange[0]}
        onChange={(e) => setExpectedSalaryRange([Number(e.target.value), expectedSalaryRange[1]])}
      />
      <input
        type="range"
        min="0"
        max="100000" // Adjust based on your expected salary range
        value={expectedSalaryRange[1]}
        onChange={(e) => setExpectedSalaryRange([expectedSalaryRange[0], Number(e.target.value)])}
      />
      <p>Salary Range: {expectedSalaryRange[0]} - {expectedSalaryRange[1]}</p>
    </div>
  );
};

export default CandidateFilter;
