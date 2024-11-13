import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";
const WeeklyReport=()=> {
  return (
    <div className='flex flex-col'>
    <div className='flex flex-col items-start gap-3 py-2 px-4 rounded-br rounded-bl shadow-lg mb-6 bg-white'>
      <div className="flex items-center justify-between w-[100%] p-1 bg-white">

        <div className="text-[#4F4F4F] font-jost text-[24px] font-semibold leading-[28px]">
          PERFORMANCE STATISTICS
        </div>


        <select className="w-[120px] h-[40px] px-3 py-2 flex items-center gap-2 border border-[#378BA6] rounded-lg bg-white">
          <option>Monthly</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
      <div className='flex flex-col justify-center items-center gap-4 self-stretch'>
        <div className="flex flex-row w-[100%] items-center gap-3">
          <div className='flex p-[11.796px] items-center gap-[17.693px] flex-1 rounded-[5.898px] bg-[#FBEFD0] w-[325px] h-[55px]'>
            <h1 className='text-[#378BA6] text-center font-jost text-[36px] font-medium leading-[41.285px]'>1</h1>
            <div className='w-[0.737px] h-[42px] bg-[#848484]'></div>
            <h1 className='text-[#4F4F4F] font-jost text-[23.591px] font-normal leading-[30.669px] tracking-[0.118px]'>Locked JD’s </h1>
          </div>
          <div className='flex p-[11.796px] items-center gap-[17.693px] flex-1 rounded-[5.898px] bg-[#FBEFD0] w-[325px] h-[55px]'>
            <h1 className='text-[#378BA6] text-center font-jost text-[36px] font-medium leading-[41.285px]'>10</h1>
            <div className='w-[0.737px] h-[42px] bg-[#848484]'></div>
            <h1 className='text-[#4F4F4F] font-jost text-[23.591px] font-normal leading-[30.669px] tracking-[0.118px]'>Locked JD’s </h1>
          </div>
          <div className='flex p-[11.796px] items-center gap-[17.693px] flex-1 rounded-[5.898px] bg-[#FBEFD0] w-[325px] h-[55px]'>
            <h1 className='text-[#378BA6] text-center font-jost text-[36px] font-medium leading-[41.285px]'>10</h1>
            <div className='w-[0.737px] h-[42px] bg-[#848484]'></div>
            <h1 className='text-[#4F4F4F] font-jost text-[23.591px] font-normal leading-[30.669px] tracking-[0.118px]'>Locked JD’s </h1>
          </div>
        </div>
        <div className="flex flex-row w-[100%] items-center gap-3">
          <div className='flex p-[11.796px] items-center gap-[17.693px] flex-1 rounded-[5.898px] bg-[#FBEFD0] w-[325px] h-[55px]'>
            <h1 className='text-[#378BA6] text-center font-jost text-[36px] font-medium leading-[41.285px]'>10</h1>
            <div className='w-[0.737px] h-[42px] bg-[#848484]'></div>
            <h1 className='text-[#4F4F4F] font-jost text-[23.591px] font-normal leading-[30.669px] tracking-[0.118px]'>Locked JD’s </h1>
          </div>
          <div className='flex p-[11.796px] items-center gap-[17.693px] flex-1 rounded-[5.898px] bg-[#FBEFD0] w-[325px] h-[55px]'>
            <h1 className='text-[#378BA6] text-center font-jost text-[36px] font-medium leading-[41.285px]'>10</h1>
            <div className='w-[0.737px] h-[42px] bg-[#848484]'></div>
            <h1 className='text-[#4F4F4F] font-jost text-[23.591px] font-normal leading-[30.669px] tracking-[0.118px]'>Locked JD’s </h1>
          </div>
          <div className='flex p-[11.796px] items-center gap-[17.693px] flex-1 rounded-[5.898px] bg-[#FBEFD0] w-[325px] h-[55px]'>
            <h1 className='text-[#378BA6] text-center font-jost text-[36px] font-medium leading-[41.285px]'>10</h1>
            <div className='w-[0.737px] h-[42px] bg-[#848484]'></div>
            <h1 className='text-[#4F4F4F] font-jost text-[23.591px] font-normal leading-[30.669px] tracking-[0.118px]'>Locked JD’s </h1>
          </div>
        </div>
      </div>
      <div className='w-[100%] h-[0.5px] bg-[#848484]'></div>
      <div className='w-[100%] flex flex-row items-center justify-between gap-10'>
        <h1 className='text-[#4F4F4F] font-jost text-[18px] font-semibold '>USER RATING</h1>
        <div className='flex w-[775px] h-[50px] p-[12px_16px] justify-center items-center gap-[40px] flex-shrink-0 rounded-xl bg-[#EAF1F3]'>
          <div className='flex w-[144px] h-[40px] justify-center items-start gap-[12px] flex-shrink-0 text-[#FAD97F]'>

            <MdOutlineStarPurple500 className="text-[32px]" />
            <MdOutlineStarPurple500 className="text-[32px]" />
            <MdOutlineStarPurple500 className="text-[32px]" />
          </div>
          <p className='text-[#378BA6] text-center font-jost text-[32px] font-medium leading-[28px]'>3/5</p>
        </div>
      </div>
    </div>
    {/*  */}

  </div>
  )
}

export default WeeklyReport
