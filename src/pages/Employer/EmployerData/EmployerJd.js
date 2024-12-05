import React from 'react'
import Sidebar from '../../global/Sidebar'
import EmpSidebar from '../../global/EmpSidebar'
// import JobFilters from '../../Recruiter/JD/JobFilters'
import EmployerDetailes from './EmployerDetailes'
function EmployerJd() {

  return (
    <div className='max-h-screen flex flex-row gap-4'>
      <div className='max-[30%]'>
        <EmpSidebar />
      </div>
      <div className=" w-[85%] p-4 bg-[#EAF1F4] h-full">
        {/* <JobFilters /> */}
        <div className='flex justify-end flex-col gap-3 self-stretch'>
          
          <EmployerDetailes />
        </div>
      </div>

    </div>
  )
}

export default EmployerJd
