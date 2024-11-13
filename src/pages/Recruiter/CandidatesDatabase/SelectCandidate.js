import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../../global/Sidebar';
import { MdDelete } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";
 
const CandidateFilters = ({ filters, setFilters }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md mb-4">
      <div className="grid grid-cols-4 gap-4">
        <div>
          <label className="block">Location</label>
          <select
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          >
            <option value="">All</option>
            {filters.uniqueLocations.map((location) => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>
 
        {/* Current Salary Slider */}
        <div>
          <label className="block">Current Salary (Minimum)</label>
          <input
            type="range"
            min={filters.salaryRange.min}
            max={filters.salaryRange.max}
            step={50000}
            value={filters.currentSalaryMin}
            onChange={(e) => setFilters({ ...filters, currentSalaryMin: Number(e.target.value) })}
            className="w-full"
          />
          <span>Selected Minimum: {filters.currentSalaryMin}</span>
        </div>
 
        {/* Expected Salary Slider */}
        <div>
          <label className="block">Expected Salary (Minimum)</label>
          <input
            type="range"
            min={filters.salaryRange.min}
            max={filters.salaryRange.max}
            step={50000}
            value={filters.expectedSalaryMin}
            onChange={(e) => setFilters({ ...filters, expectedSalaryMin: Number(e.target.value) })}
            className="w-full"
          />
          <span>Selected Minimum: {filters.expectedSalaryMin}</span>
        </div>
 
        <div>
          <label className="block">Experience</label>
          <select
            value={filters.experience}
            onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
          >
            <option value="">All</option>
            {filters.uniqueExperiences.map((experience) => (
              <option key={experience} value={experience}>{experience}</option>
            ))}
          </select>
        </div>
 
        <div>
          <label className="block">Notice Period</label>
          <select
            value={filters.noticePeriod}
            onChange={(e) => setFilters({ ...filters, noticePeriod: e.target.value })}
          >
            <option value="">All</option>
            {filters.uniqueNoticePeriods.map((period) => (
              <option key={period} value={period}>{period}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
 
const SelectCandidate = ({ limit = Infinity }) => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidates, setSelectedCandidates] = useState([]); // State to track selected candidates
  const [filters, setFilters] = useState({
    location: '',
    currentSalaryMin: 0,
    expectedSalaryMin: 0,
    experience: '',
    noticePeriod: '',
    salaryRange: { min: 0, max: 1000000 },
    uniqueLocations: [],
    uniqueExperiences: [],
    uniqueNoticePeriods: []
  });
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate
 
  useEffect(() => {
    getCandidateData();
  }, []);
 
  const getCandidateData = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/candidates');
      console.log('Backend Data:', res.data);
 
      const candidatesData = res.data.data || [];
 
      setCandidates(candidatesData);
 
      // Extract unique values for the filters
      const uniqueLocations = [...new Set(candidatesData.map(c => c.Current_location))];
      const uniqueExperiences = [...new Set(candidatesData.map(c => c.Experience?.[0]?.years))];
      const uniqueNoticePeriods = [...new Set(candidatesData.map(c => c.Notice_period))];
      const minSalary = Math.min(...candidatesData.map(c => c.Expected_salary || 0, c => c.Current_salary || 0));
      const maxSalary = Math.max(...candidatesData.map(c => c.Expected_salary || 0, c => c.Current_salary || 0));
 
      setFilters(prev => ({
        ...prev,
        uniqueLocations,
        uniqueExperiences,
        uniqueNoticePeriods,
        salaryRange: { min: minSalary, max: maxSalary },
        currentSalaryMin: minSalary,
        expectedSalaryMin: minSalary
      }));
    } catch (error) {
      console.log('Error in fetching data from backend:', error);
    }
  };
 
  useEffect(() => {
    applyFilters();
  }, [candidates, filters]);
 
  const applyFilters = () => {
    const filtered = candidates.filter(candidate => {
      const matchesLocation = filters.location === '' || candidate.Current_location === filters.location;
      const matchesCurrentSalary = candidate.Current_salary >= filters.currentSalaryMin;
      const matchesExpectedSalary = candidate.Expected_salary >= filters.expectedSalaryMin;
      const matchesExperience = filters.experience === '' || candidate.Experience?.[0]?.years === parseInt(filters.experience);
      const matchesNoticePeriod = filters.noticePeriod === '' || candidate.Notice_period === filters.noticePeriod;
 
      return matchesLocation && matchesCurrentSalary && matchesExpectedSalary && matchesExperience && matchesNoticePeriod;
    });
 
    setFilteredCandidates(filtered.slice(0, limit));
  };
 
  const handleMoveToJD = (candidate) => {
    navigate('/SelectFromJD', { state: { candidate } });
  };
 
  const resetFilters = () => {
    setFilters({
      location: '',
      currentSalaryMin: filters.salaryRange.min,
      expectedSalaryMin: filters.salaryRange.min,
      experience: '',
      noticePeriod: '',
      salaryRange: filters.salaryRange,
      uniqueLocations: filters.uniqueLocations,
      uniqueExperiences: filters.uniqueExperiences,
      uniqueNoticePeriods: filters.uniqueNoticePeriods
    });
  };
 
  const toggleCandidateSelection = (candidateId) => {
    setSelectedCandidates(prevSelected =>
      prevSelected.includes(candidateId)
        ? prevSelected.filter(id => id !== candidateId)
        : [...prevSelected, candidateId]
    );
  };
 
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allCandidateIds = filteredCandidates.map(c => c._id);
      setSelectedCandidates(allCandidateIds);
    } else {
      setSelectedCandidates([]);
    }
  };
 
  return (
    <div className='max-h-screen flex flex-row gap-6'>
      <div className='max-[30%]'>
        <Sidebar />
      </div>
      <div className='w-[100%] bg-[#EAF1F4] flex flex-col py-5 gap-33 flex-1 p-6'>
        <h1>Candidates List</h1>
 
        {/* Filters */}
        <CandidateFilters filters={filters} setFilters={setFilters} />
 
        {/* Reset Filters Button */}
        <div className='mb-4'>
          <button onClick={resetFilters} className='px-4 py-2 bg-red-500 text-white rounded-md'>
            Reset Filters
          </button>
        </div>
 
        {/* Select All Checkbox */}
        <button className='px-4 py-2 bg-green-500 text-white rounded-md'>Done</button>
 
        <div className='w-full flex flex-col gap-4 mt-4'>
          {filteredCandidates.length > 0 ? (
            filteredCandidates.map((candidate, index) => (
              <div
                key={index}
                className='rounded-lg border border-teal-500 bg-white flex flex-col gap-3 p-4 self-stretch w-[full] h-auto'
              >
                <div className='flex justify-between self-stretch'>
                  <div className='flex flex-row items-center gap-4 w-[100%]'>
                    <div className='flex flex-col w-[75%]'>
                      {/* Checkbox for candidate selection */}
                      <input
                        type="checkbox"
                        checked={selectedCandidates.includes(candidate._id)}
                        onChange={() => toggleCandidateSelection(candidate._id)}
                      />
                      <h1 className='overflow-hidden text-gray-600 truncate whitespace-nowrap text-2xl font-medium leading-7'>
                        {candidate.First_name} {candidate.Last_name}
                      </h1>
                      <h1 className='overflow-hidden text-[#378BA6] truncate whitespace-nowrap text-base font-medium leading-5'>
                        Candidate ID: {candidate._id}
                      </h1>
                    </div>
                    <div className='text-black text-sm font-semibold font-jost leading-9 flex flex-row gap-2 ml-20 items-center'>
                      Exp:
                      <h1 className='text-[#A38740] text-base font-normal font-jost leading-7 text-center bg-[#FFFB9A]'>
                        {candidate.Total_Experiences || 'N/A'}
                      </h1>
                    </div>
                    <div className='flex h-[40px] w-[40px] justify-end items-end bg-[#EAF1F3] ml-8'>
                      <MdDelete className='w-16 h-auto' />
                    </div>
                  </div>
                </div>
                <div className='w-full h-px bg-black'></div>
                <div className='mt-4 flex flex-row gap-8 items-center'>
                  <div className='flex flex-row text-center'>
                    <FaBriefcase className='w-5 h-5 text-[#378BA6]' />
                    <h1 className='text-gray-600 text-base font-normal ml-2'>Job Title:</h1>
                    <h1 className='text-gray-600 text-base font-normal'>{candidate.Job_Title || 'Not specified'}</h1>
                  </div>
                  <div className='flex flex-row text-center'>
                    <FaLocationDot className='w-5 h-5 text-[#378BA6]' />
                    <h1 className='text-gray-600 text-base font-normal ml-2'>Location:</h1>
                    <h1 className='text-gray-600 text-base font-normal'>{candidate.Current_location}</h1>
                  </div>
                  <div className='flex flex-row mr-[20px] text-center'>
                    <RiMoneyRupeeCircleFill className='w-5 h-5 text-[#378BA6]' />
                    <h1 className='text-gray-600 text-base font-normal ml-2'>Expected Salary:</h1>
                    <h1 className='text-gray-600 text-base font-normal'>{candidate.Expected_salary}</h1>
                  </div>
                  <button
                    onClick={() => handleMoveToJD(candidate)}
                    className='flex flex-row items-center justify-center gap-2 py-2 px-3 ml-[220px] rounded-md border border-gray-400 bg-white'
                  >
                    <h1 className='text-dark-grey text-center font-bold text-base-lg font-jost'>Move to JD</h1>
                    <FaExternalLinkAlt />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>No candidates found.</div>
          )}
        </div>
      </div>
    </div>
  );
};
 
export default SelectCandidate;
 
 