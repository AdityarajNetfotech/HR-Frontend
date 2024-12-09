import React from 'react'
import Sidebar from '../../global/Sidebar'
import EmpSidebar from '../../global/EmpSidebar'
import JobFilters from '../../Recruiter/JD/JobFilters'
import EmployerDetailes from './EmployerDetailes'
import AdminID from '../../global/AdminID'
// import { Link } from 'react-router-dom'
function EmployerJd() {

  return (
    <div className='max-h-screen flex flex-row gap-4'>
      <div className='max-[30%]'>
        <EmpSidebar />
      </div>
      <div className=" w-[85%] p-4 bg-[#EAF1F4] h-full">
      <div className='flex justify-between' style={{ marginBottom: "50px" }}>
            <h1 className='flex justify-center items-center'><i class="fa-solid fa-angle-left"></i> <strong style={{ fontSize: "25px" }}>&nbsp;&nbsp; Employer JD</strong> </h1>
            <AdminID />
          </div>
        {/* <JobFilters /> */}
        <div className='flex justify-end flex-col gap-3 self-stretch'>
          {/* <button className='flex p-2 px-3 justify-center items-center gap-2 self-stretch rounded-lg bg-gray-400'>
            <Link to="/AddJDForm" className='text-white text-center font-semibold text-2xl leading-7 font-jost'>Add New Candidates</Link>
          </button> */}
          <EmployerDetailes />
        </div>
      </div>

    </div>
  )
}

export default EmployerJd
