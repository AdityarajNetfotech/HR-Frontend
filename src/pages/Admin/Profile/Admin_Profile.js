import React, { useState } from 'react'
import Admin_PersonalInfo from './Admin_PersonalInfo';
import Admin_BankInfo from './Admin_BankInfo';
import Sidebar from '../../global/Sidebar';

function Admin_Profile() {
    const [activeTab, setActiveTab] = useState('personal');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'personal':
                return <Admin_PersonalInfo/>;
            case 'bank':
                return <Admin_BankInfo/>;
            default:
                return <Admin_PersonalInfo/>;
        }
    };


  return (
    <div className='max-h-screen flex flex-row gap-4'>
      <div className='max-[30%]'>
        <Sidebar/>
      </div>
      <div className="w-[50%] mt-10 m-[auto]">
        <div className="flex space-x-1 text-[var(--Teal,#378BA6)] text-center text-[18px] font-normal leading-[36px]">
          <button
            className={`px-4 py-2 ${activeTab === 'personal' ? 'bg-white text-[var(--Teal,#378BA6)] border border-[var(--Teal,#378BA6)] rounded-t-xl rounded-bl-xl font-bold' : 'bg-[#EAF1F3] rounded-t-xl'}`}
            onClick={() => setActiveTab('personal')}
          >
            Personal Information
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'bank' ? 'bg-white text-[var(--Teal,#378BA6)] border border-[var(--Teal,#378BA6)] rounded-t-xl font-bold' : 'bg-[#EAF1F3] rounded-t-xl'}`}
            onClick={() => setActiveTab('bank')}
          >
            Bank Information
          </button>
        </div>

        <div className="mt-0 border border-none rounded-lg self-center">
          {renderTabContent()}
        </div>

        {/* <div className='flex flex-row justify-between mt-10'>
          <button className='flex p-2.5 px-3 h-14 justify-center items-center gap-2 text-center text-[20px] text-[var(--dark-grey,#4F4F4F)] border border-[#A4A4A4] font-bold leading-[36px] rounded-lg  bg-white font-jost'> <a href='#'>View Agreement</a> </button>
          <button className="flex p-2.5 px-3 justify-center items-center gap-2 self-stretch rounded-lg bg-teal bg-[var(--Teal,#378BA6)] text-white text-center text-[24px] font-semibold leading-[28px] font-jost"> <a href='#'>Update Changes</a> </button>
        </div> */}
      </div>
    </div>
  );
}

export default Admin_Profile
