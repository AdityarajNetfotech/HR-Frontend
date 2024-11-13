import React from 'react'
import Sidebar from '../../global/Sidebar'
import CandidateIncompleteModal from '../../Recruiter/Candidates/Modals/CandidateIncompleteModal'
function EmployerFile() {
  return (
    <div className='max-h-screen flex flex-row gap-4'>
      <div className='max-[30%]'>
        <Sidebar />
      </div>
      <div className='w-[85%] p-4 bg-[#EAF1F4] h-full'>
        <div className="flex p-2 px-4 justify-between items-center self-stretch rounded-lg bg-[#378BA6]/25">
          <h2 className="text-[#4F4F4F] text-center font-jost text-[20px] font-medium leading-[36px]">CANDIDATE FORM</h2>
          <div className='flex gap-3'>
            <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded hover:bg-gray-300 text-dark-grey text-center font-jost text-[16px] font-bold leading-[24px]">Export</button>
            <button className="text-gray-500">✕</button>
          </div>
        </div>
        <div className='bg-white p-4'>
          <div className='border border-[#378BA6] rounded-xl p-4'>
            <div className="mt-8 border border-[#378BA6] rounded-xl p-4 mb-4 w-[1116px]">
              <p className="flex items-center self-stretch rounded-[4px] bg-[#C3DCE4] px-3 py-2 text-[#115469] -text text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] p-1.5">JOB DETAILS</p>
              <form className="px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className=' mb-8 w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'> Job Title *
                    <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="First Name" />
                  </label>
                </div>
                <div>
                  <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Company Name *
                    <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="Last Name" />
                  </label>
                </div>
                <div>
                  <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Experience *
                    <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder="Current Location">
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px] mb-8'>Industry *
                    <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder="Current Location">
                      <option>Web developer</option>
                      <option>App developer</option>
                      <option>Frontend Developer</option>
                      <option>Backend Developer</option>
                      <option>Python Developer</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Location *
                    <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="Email ID" />
                  </label>
                </div>
                <div>
                  <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Work Experience *
                    <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="Contact Number" />
                  </label>
                </div>
                <div>
                  <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Salary *
                    <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="Select" />
                  </label>
                </div>
                <div className='flex flex-row gap-2'>
                  <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px] mb-8'>Notice Period *
                    <select className="w-[100%] border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder="Current Location">
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </label>

                  <select className="w-[100%] border h-[75%] border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder="Current Location">
                    <option>Months</option>
                    <option>Jan</option>
                    <option>Feb</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>Sep</option>
                    <option>Oct</option>
                    <option>November</option>
                    <option>December</option>

                  </select>
                </div>
                <div>
                  <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Interview Rounds *
                    <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="Select" />
                  </label>
                </div>
              </form>
              {/*  */}
              <p className="flex items-center self-stretch rounded-[4px] bg-[#C3DCE4] px-3 py-2 text-[#115469] -text text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] p-1.5">SUBMISSION DETAILS</p>
              <form className="px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className=' mb-8 w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'> Priority Tag *
                    <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="Select" />
                  </label>
                </div>
                <div>
                  <label className=' mb-8 w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Deadline Delivery  *
                    <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="date" placeholder="Select" />
                  </label>
                </div>
                <div className='flex flex-row gap-2'>
                  <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px] mb-8'>Replacement Period 
                    <select className="w-[100%] border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder="Select">
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </label>

                  <select className="w-[100%] border h-[75%] border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder="Current Location">
                    <option>Months</option>
                    <option>Jan</option>
                    <option>Feb</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>Sep</option>
                    <option>Oct</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                </div>
                <div>
                  <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>No of Submission Required *
                    <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder="Current Location">
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>No of Vacancy *
                    <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder="Current Location">
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>No of Users who can Lock JD *
                    <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder="Current Location">
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </label>
                </div>
                {/*  */}
              </form>
              <p className="flex items-center self-stretch rounded-[4px] bg-[#C3DCE4] px-3 py-2 text-[#115469] -text text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] p-1.5">PAYOUT DETAILS</p>
              <form className="px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                  <label className=' mb-8 w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'> Absolute Payout *
                    <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="Degree" />
                  </label>
                </div>
                <div>
                  <label className=' mb-8 w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'> Delivery Payout *
                    <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="Payout" />
                  </label>
                </div>
              </form>
              <p className="flex items-center self-stretch rounded-[4px] bg-[#C3DCE4] px-3 py-2 text-[#115469] -text text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] p-1.5">ADDITIONAL COMMENTS</p>
              <form className="px-4 py-10 grid grid-cols-1 w-[80%] gap-4">
              <div>
                  <label className=' mb-8 w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'> Remarks *
                    <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]  " type="text" placeholder="Text" />
                  </label>
                </div>
              </form>
              
            </div>
            {/* Footer */}
            <div className="mt-6 px-4 flex justify-between items-center">
            <button className="flex p-2 px-5 h-14 justify-center items-center gap-2 text-center text-[20px] text-[var(--dark-grey,#4F4F4F)] border border-[#A4A4A4] font-bold leading-[36px] rounded-lg  bg-white font-jost">Save for Later</button>
            <a href='./CandidateIncompleteModal'>
            <button className="flex p-2 px-5 justify-center items-center gap-2 self-stretch rounded-lg bg-teal bg-[var(--Teal,#378BA6)] text-white text-center text-[24px] font-semibold leading-[28px] font-jost">Upload</button>
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployerFile
