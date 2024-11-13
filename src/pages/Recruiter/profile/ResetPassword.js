import React from 'react'

const ResetPassword = () => {
  return (
    <div className=' max-w-sm mx-auto p-8 bg-white border rounded-xl  shadow-[6px_6px_20px_0px_rgba(0,0,0,0.12)]'>
      <p className='text-[#4F4F4F] text-[24px] font-semibold leading-[28px] font-jost self-stretch mb-8'>Reset Password</p>
      <form className='mt-8'>
      <div className='mb-3'>
          <label className="w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Create Password *</label>
          <input type="text" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder='********' />
        </div>
        <label className='text-[var(--Teal,#848484)] text-xs font-normal flex-1 font-poppins'>(Hint: The password should be at least twelve characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & ).</label>
        <div className='mt-3'>
          <label className="w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Confirm Password *</label>
          <input type="text" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder='********' />
        </div>
      </form>
      <button className='flex w-full mt-6 p-2.5 px-3 justify-center items-center gap-2 self-stretch rounded-lg bg-teal bg-[var(--Teal,#378BA6)] text-white text-center text-[24px] font-semibold leading-[28px] font-jost'>Submit</button>
    </div>
  )
}

export default ResetPassword
