import React, { useState } from 'react'; // Import useState from React
import EmpTermsandcondition from './EmpTermsandcondition';
import EmpFAQ from './EmpFAQ';
import EmpContact from './EmpContact';
import EmpSidebar from '../../pages/global/EmpSidebar';
import { MdArrowBackIos } from "react-icons/md";

function EmpAboutUs() {
  const [activeTab, setActiveTab] = useState('Terms'); // Fix useState usage

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Terms':
        return <EmpTermsandcondition />;
      case 'FAQ':
        return <EmpFAQ />;
      case 'Contact':
        return <EmpContact />;
      default:
        return <EmpTermsandcondition />;
    }
  };

  return (
    <div className='max-h-screen flex flex-row gap-4'>
      <div className='max-[30%]'>
        <EmpSidebar />
      </div>
      <div>
        <div className='flex flex-row items-center mt-5 ml-6'><MdArrowBackIos /><p className='text-black font-jost text-2xl font-extrabold leading-normal'>About Us</p></div>
        <div className=" w-[70%] mt-10 m-[auto]">



          {/* Tabs Section */}
          <div className="flex space-x-1 text-[var(--Teal,#378BA6)] text-center text-[18px] font-normal leading-[36px] ">
            <button
              className={`px-4 py-2 w-[208px] ${activeTab === 'Terms' ? 'bg-white text-[var(--Teal,#378BA6)] border border-[var(--Teal,#378BA6)] rounded-t-xl font-bold' : 'bg-[#EAF1F3] rounded-t-xl'}`}
              onClick={() => setActiveTab('Terms')}
            >
              Terms & Conditions
            </button>
            <button
              className={`px-4 py-2 w-[208px] ${activeTab === 'FAQ' ? 'bg-white text-[var(--Teal,#378BA6)] border border-[var(--Teal,#378BA6)] rounded-t-xl font-bold' : 'bg-[#EAF1F3] rounded-t-xl'}`}
              onClick={() => setActiveTab('FAQ')}
            >
              FAQ
            </button>
            <button
              className={`px-4 py-2 w-[208px] ${activeTab === 'Contact' ? 'bg-white text-[var(--Teal,#378BA6)] border border-[var(--Teal,#378BA6)] rounded-t-xl font-bold' : 'bg-[#EAF1F3] rounded-t-xl'}`}
              onClick={() => setActiveTab('Contact')}
            >
              Bank Information
            </button>
          </div>

          <div className="mt-0 border border-[var(--Teal,#378BA6)] rounded-lg">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmpAboutUs;
