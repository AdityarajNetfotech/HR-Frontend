import React from 'react';

const PersonalInformationForm = () => {
  return (
    <>
    <div className="px-10 py-8 bg-white border border-[var(--Teal,#378BA6)] rounded-xl shadow-md">
      <h2 className="text-[#4F4F4F] text-[24px] font-semibold leading-[28px] font-jost self-stretch mb-8">PERSONAL INFORMATION</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">First Name *</label>
          <input type="text" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder='Jhon' />
        </div>
        <div>
          <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Last Name *</label>
          <input type="text" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder='Doe'/>
        </div>
        <div>
          <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Personal Email *</label>
          <input type="email" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder='Email' />
        </div>
        <div>
          <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Mobile Number *</label>
          <input type="text" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder=' Mobile No'/>
        </div>
        <div>
          <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Join as *</label>
          <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]">
            <option>Select</option>
          </select>
        </div>
        <div>
          <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Location *</label>
          <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]">
            <option>Select</option>
          </select>
        </div>
        <div>
          <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Date of Birth *</label>
          <input type="date" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder='Sep 2013' />
        </div>
        <div>
          <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Languages Known *</label>
          <input type="text" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder="Language 1, Language 2..." />
        </div>
      </form>
    </div>
    </>
  );
}

export default PersonalInformationForm;
