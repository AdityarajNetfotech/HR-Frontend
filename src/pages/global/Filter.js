import React, { useEffect } from 'react';
import '../global/Filter.css'

const initialFilters = {
  location: '',
  jobTitle: '',
  status: '',
  search: '',
  sortBy: 'Latest',
  filterBy: '',
};

const Filter = ({ candidates, setFilteredCandidates, filters, setFilters }) => {
  useEffect(() => {
    applyFilters();
  }, [candidates, filters]);

  const applyFilters = () => {
    let filtered = [...candidates];

    // Search filter
    if (filters.search) {
      filtered = filtered.filter(candidate =>
        `${candidate.First_name} ${candidate.Last_name}`
          .toLowerCase()
          .includes(filters.search.toLowerCase())
      );
    }

    // Location filter
    if (filters.location) {
      filtered = filtered.filter(candidate => candidate.Current_location === filters.location);
    }

    // Job Title filter
    if (filters.jobTitle) {
      filtered = filtered.filter(candidate => candidate.Job_Title === filters.jobTitle);
    }

    // Status filter
    if (filters.status) {
      if (filters.status === "Fresher") {
        filtered = filtered.filter(candidate => candidate.Total_Experiences === "fresher" || !candidate.Total_Experiences);
      } else if (filters.status === "Experienced") {
        filtered = filtered.filter(candidate => candidate.Total_Experiences !== "fresher" && candidate.Total_Experiences > 0);
      }
    }

    // Sort by date
    if (filters.sortBy === 'Latest') {
      filtered = filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (filters.sortBy === 'Oldest') {
      filtered = filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    setFilteredCandidates(filtered);
  };

  const handleResetFilters = () => {
    setFilters(initialFilters);
  };

  return (
    <section id='candidateOne-filter'>
      <div className="candidateOne-filter_search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder=" Search"
          className="candidateOne-filter_search-bar"
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />
      </div>

      <div className='filter_option'>
        <span><i className="fa-solid fa-sort"></i> Sort By:</span>
        <select
          name="Sort By"
          value={filters.sortBy}
          onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
        >
          <option value="Latest">Latest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </div>

      <div className='filter_option'>
        <span><i className="fa-solid fa-filter"></i> Filter By:</span>
        <select
          name="Filter By"
          value={filters.filterBy}
          onChange={(e) => setFilters({ ...filters, filterBy: e.target.value })}
        >
          <option value="">All</option>
          <option value="Latest">Latest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </div>

      <div className='filter_option'>
        <select
          name="Job Title"
          value={filters.jobTitle}
          onChange={(e) => setFilters({ ...filters, jobTitle: e.target.value })}
        >
          <option value="">Job Title</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
        </select>
      </div>

      <div className='filter_option'>
        <select
          name="Status"
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        >
          <option value="">Status</option>
          <option value="Fresher">Fresher</option>
          <option value="Experienced">Experienced</option>
        </select>
      </div>

      <div className='filter_option'>
        <select
          name="Location"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        >
          <option value="">Location</option>
          <option value="Pune">Pune</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Mumbai">Mumbai</option>
        </select>
      </div>

      <div className='filter_option'>
        <button onClick={handleResetFilters}>
          <i className="fa-solid fa-arrow-rotate-left"></i> Reset Filter
        </button>
      </div>
    </section>
  );
};

export { initialFilters };
export default Filter;
