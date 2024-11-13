import React from 'react'
import Sidebar from '../../global/Sidebar'
import JobFilters from '../../Recruiter/JD/JobFilters'
import EmployerDetailes from './EmployerDetailes'
function EmployerJd() {
  
  return (
    <div className='max-h-screen flex flex-row gap-4'>
      <div className='max-[30%]'>
        <Sidebar />
      </div>
      <div className=" w-[85%] p-4 bg-[#EAF1F4] h-full">
        <h1>Hello </h1>
        <JobFilters/>
        <div className='flex justify-end flex flex-col gap-3 self-stretch'>
          <button className='flex p-2 px-3 justify-center items-center gap-2 self-stretch rounded-lg bg-gray-400'>
            <h1 className='text-white text-center font-semibold text-2xl leading-7 font-jost'>Add New Candidates</h1>
          </button>
          <EmployerDetailes/>
        </div>
      </div>
      
    </div>
  )
}

export default EmployerJd
