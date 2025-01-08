import React, { useState } from 'react'; // Import useState from React
import EmpTermsandcondition from './EmpTermsandcondition';
import EmpFAQ from './EmpFAQ';
import EmpSidebar from '../../pages/global/EmpSidebar';
import { MdArrowBackIos } from "react-icons/md";
import Contact from '../AboutUs/Contact';
import AdminID from '../../pages/global/AdminID';

function EmpAboutUs() {
  const [activeTab, setActiveTab] = useState('Terms'); // Fix useState usage

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Terms':
        return <EmpTermsandcondition />;
      case 'FAQ':
        return <EmpFAQ />;
      case 'Contact':
        return <Contact />;
      default:
        return <EmpTermsandcondition />;
    }
  };

  return (
    <div className='min-h-screen flex flex-row gap-4 bg-[#EAF1F3]'>
      <div className='max-[30%]'>
        <EmpSidebar />
      </div>
      <div>
        <div className='flex justify-between mt-5' style={{ marginBottom: "50px" }}>
          <h1 className='flex justify-center items-center'><i class="fa-solid fa-angle-left"></i> <strong style={{ fontSize: "25px" }}>&nbsp;&nbsp; About</strong> </h1>
          <AdminID />
        </div>

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
