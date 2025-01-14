import React from 'react'
import LocationIcon from '../../../Images/LocationIcon.png';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function CandidateFormEmp() {

  const location = useLocation();
  const { candidate, jd_id, companyName, jobTitle, jobLocation } = location.state;

  return (
    <div className="min-h-screen bg-gray-100 p-8 rounded-lg">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-8">

        <div className="flex p-2 px-4 justify-between items-center self-stretch rounded-lg bg-[#378BA6]/25">
          <h2 className="text-[#4F4F4F] text-center font-jost text-[20px] font-medium leading-[36px]">CANDIDATE FORM</h2>
          <div className='flex gap-3'>
            <button className="text-gray-600 pt-1 rounded text-dark-grey text-center font-jost text-[18px] font-bold">
              <i className="fa-solid fa-download"></i>
            </button>
            <button className="text-gray-500">
              <Link to="/EmployerDashboard">X</Link>
            </button>
          </div>
        </div>

        <div className="mb-6 my-3">
          <p className="flex w-72 items-center justify-center px-2 py-1 mb-1 bg-gray-200 text-[#4F4F4F] rounded text-center text-sm font-normal leading-[18.2px] tracking-[0.07px]">JD ID: {jd_id}</p>
          <h3 className="flex flex-row justify-start my-3 self-stretch overflow-hidden text-[#4F4F4F] text-[20px] font-jost font-normal leading-[24px] whitespace-nowrap overflow-ellipsis h-6">Job Title: <span className="font-bold ml-1 text-[#303030]">
            {jobTitle}
          </span></h3>
          <p className="flex flex-row align-self-stretch overflow-hidden text-[#378BA6] text-[20px] font-jost font-normal leading-[28px] text-overflow-ellipsis">Company: <b> {companyName} </b> </p>
          <div className="mt-3 flex flex-row text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]" > <img src={LocationIcon} alt='LocationIcon' /> Location: {jobLocation}</div>
        </div>

        {candidate ? (
          <form className="border border-[#378BA6] rounded-xl p-4">

            <section className="mb-8">

              <p className="flex items-center self-stretch rounded-[4px] bg-[#C3DCE4] px-3 py-2 text-[#115469] -text text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] p-1.5 mb-3">PERSONAL DETAILS</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <p className="block text-sm font-medium text-[var(--Teal,#378BA6)]">First Name</p>
                  <p className="text-[var(--Teal,#378BA6)] w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    {candidate.First_name || 'NA'}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="block text-sm font-medium text-[var(--Teal,#378BA6)]">Last Name</p>
                  <p className="text-[var(--Teal,#378BA6)] w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    {candidate.Last_name || 'NA'}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="block text-sm font-medium text-[var(--Teal,#378BA6)]">Current Location</p>
                  <p className="text-[var(--Teal,#378BA6)] w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    {candidate.Current_location || 'NA'}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="block text-sm font-medium text-[var(--Teal,#378BA6)]">Email ID</p>
                  <p className="text-[var(--Teal,#378BA6)] w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    {candidate.Email || 'NA'}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="block text-sm font-medium text-[var(--Teal,#378BA6)]">Contact Number</p>
                  <p className="text-[var(--Teal,#378BA6)] w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    {candidate.Mobile || 'NA'}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="block text-sm font-medium text-[var(--Teal,#378BA6)]">Job Title</p>
                  <p className="text-[var(--Teal,#378BA6)] w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    {jobTitle || 'NA'}
                  </p>
                </div>
              </div>

            </section>

            <section className="mb-8">

              <p className="flex items-center self-stretch rounded-[4px] bg-[#C3DCE4] px-3 py-2 text-[#115469] -text text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] p-1.5 mb-3">OTHER DETAILS</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="block text-sm font-medium text-[var(--Teal,#378BA6)]">Current Salary *</p>
                  <p className="text-[var(--Teal,#378BA6)] w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    {candidate.Current_salary || 'NA'}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="block text-sm font-medium text-[var(--Teal,#378BA6)]">Expected Salary *</p>
                  <p className="text-[var(--Teal,#378BA6)] w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    {candidate.Expected_salary || 'NA'}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <p className="block text-sm font-medium text-[var(--Teal,#378BA6)]">Reason For Change *</p>
                  <p className="text-[var(--Teal,#378BA6)] w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    {candidate.Reason_for_change || 'NA'}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="block text-sm font-medium text-[var(--Teal,#378BA6)]">Notice Period *</p>
                  <p className="text-[var(--Teal,#378BA6)] w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    {candidate.Notice_period || 'NA'}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="block text-sm font-medium text-[var(--Teal,#378BA6)]">Availability For Interview *</p>
                  <p className="text-[var(--Teal,#378BA6)] w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    {candidate.availabilityDate
                      ? candidate.availabilityDate.substring(0, 10)
                      : 'NA'}
                  </p>
                </div>
              </div>

            </section>

            <section className="mb-8">

              <p className="flex items-center self-stretch rounded-[4px] bg-[#C3DCE4] px-3 py-2 text-[#115469] -text text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] p-1.5 mb-3">DOCUMENTS DETAILS</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="block text-sm font-medium text-[var(--Teal,#378BA6)]">Resume/CV *</p>
                  <p className="text-[var(--Teal,#378BA6)] w-full py-5 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="block text-sm font-medium text-[var(--Teal,#378BA6)]">Website Link (if applicable)</p>
                  <p onDoubleClick={() => {
                    navigator.clipboard.writeText(candidate.Linkedin)
                    alert(`Copied! ${candidate.Linkedin}`)
                  }
                  } style={{ overflow: "hidden" }} className="text-[var(--Teal,#378BA6)] w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    {candidate.Linkedin || 'NA'}
                  </p>
                </div>
              </div>

            </section>

            <section className="mb-8">

              <p className="flex items-center self-stretch rounded-[4px] bg-[#C3DCE4] px-3 py-2 text-[#115469] -text text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] p-1.5 mb-3">REMARK</p>
              <div className="space-y-1">
                <p className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-[var(--Teal,#378BA6)]">
                  {candidate.Remarks || 'NA'}
                </p>
              </div>

            </section>

            <div className="flex justify-end gap-4">
              <button type="button" className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
                <Link to="/EmployerDashboard">Close</Link>
              </button>
            </div>

          </form>
        ) : (
          <p>No candidate data available.</p>
        )}
      </div>

    </div>
  )
}

export default CandidateFormEmp
