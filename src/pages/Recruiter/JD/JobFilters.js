import React, { useState } from 'react';

const JobFilters = ({ filters, setFilters, searchQuery, setSearchQuery }) => {
  // State to toggle dropdown visibility for each filter
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const [isTitleOpen, setIsTitleOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);

  // Toggle functions for each dropdown
  const toggleLocationDropdown = () => setIsLocationOpen(!isLocationOpen);
  const toggleIndustryDropdown = () => setIsIndustryOpen(!isIndustryOpen);
  const toggleTitleDropdown = () => setIsTitleOpen(!isTitleOpen);
  const toggleStatusDropdown = () => setIsStatusOpen(!isStatusOpen);

  return (
    <div className="p-4 bg-gray-100 rounded-md mb-4 w-[1165px] h-[60px] flex flex-row items-center justify-center bg-white gap-4">
      {/* Search Bar */}
      <div className="w-[264px] h-[60px] p-0 px-3 gap-1 rounded-l-lg border-r border-r-[0.5px] border-gray-400 flex items-center">
        <input 
          type="text"
          placeholder="Search "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-[240px] h-[28px] p-1 px-3 gap-3 rounded-lg border border-[0.5px] border-gray-400"
        />
      </div>

      {/* Sort and Filter Headers */}
      <div className='w-[127.43px] h-[60px] p-0 pr-1.5 gap-1.5 border-r-[0.5px] border-gray-400 flex items-center'>
        <h1 className='w-[120px] h-[21px]'>Sort by: Latest</h1>
      </div>
      <div className='w-[127.43px] h-[60px] pr-1.5 gap-2 border-r-[0.5px] border-gray-400 flex items-center'>
        <h1 className='w-[120px] h-[21px]'>Filter by: Latest</h1>
      </div>

      {/* Location Filter */}
      <div className="relative w-[127.43px] h-[60px] pl-[6px] gap-1 border-r-[0.5px] border-gray-400 cursor-pointer flex items-center justify-center">
        <label
          className=""
          onClick={toggleLocationDropdown}
        >
          Location
        </label>
        {isLocationOpen && (
          <ul className="absolute z-10 bg-white border mt-1 w-[127.43px] max-h-60 overflow-auto">
            <li
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => {
                setFilters({ ...filters, location: '' });
                setIsLocationOpen(false);
              }}
            >
              Select Location
            </li>
            {filters.uniqueLocations.map((location) => (
              <li
                key={location}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => {
                  setFilters({ ...filters, location });
                  setIsLocationOpen(false);
                }}
              >
                {location}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Industry Filter */}
      <div className="relative w-[127.43px] h-[60px] pl-[6px] gap-1 border-r-[0.5px] border-gray-400 cursor-pointer flex items-center justify-center">
        <label
          className=""
          onClick={toggleIndustryDropdown}
        >
          Industry
        </label>
        {isIndustryOpen && (
          <ul className="absolute z-10 bg-white border mt-1 w-[127.43px] max-h-60 overflow-auto">
            <li
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => {
                setFilters({ ...filters, industry: '' });
                setIsIndustryOpen(false);
              }}
            >
              All Industries
            </li>
            {filters.uniqueIndustries.map((industry) => (
              <li
                key={industry}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => {
                  setFilters({ ...filters, industry });
                  setIsIndustryOpen(false);
                }}
              >
                {industry}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Job Title Filter */}
      <div className="relative w-[127.43px] h-[60px] pl-[6px] gap-1 border-r-[0.5px] border-gray-400 cursor-pointer flex items-center justify-center">
        <label
          className=""
          onClick={toggleTitleDropdown}
        >
          Job Title
        </label>
        {isTitleOpen && (
          <ul className="absolute z-10 bg-white border mt-1 w-[127.43px] max-h-60 overflow-auto">
            <li
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => {
                setFilters({ ...filters, title: '' });
                setIsTitleOpen(false);
              }}
            >
              All Titles
            </li>
            {filters.uniqueTitles.map((title) => (
              <li
                key={title}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => {
                  setFilters({ ...filters, title });
                  setIsTitleOpen(false);
                }}
              >
                {title}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Status Filter */}
      <div className="relative w-[127.43px] h-[60px] pl-[6px] gap-1 border-r-[0.5px] border-gray-400 cursor-pointer flex items-center justify-center">
        <label
          className=""
          onClick={toggleStatusDropdown}
        >
          Status
        </label>
        {isStatusOpen && (
          <ul className="absolute z-10 bg-white border mt-1 w-[127.43px] max-h-60 overflow-auto">
            <li
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => {
                setFilters({ ...filters, status: '' });
                setIsStatusOpen(false);
              }}
            >
              All Statuses
            </li>
            {filters.uniqueStatuses.map((status) => (
              <li
                key={status}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => {
                  setFilters({ ...filters, status });
                  setIsStatusOpen(false);
                }}
              >
                {status}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default JobFilters;
