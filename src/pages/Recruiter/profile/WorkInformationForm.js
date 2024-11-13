import React from 'react';

const WorkInformationForm = () => {
  return (
    <>
    <div className="px-10 py-8 bg-white shadow-md border border-[var(--Teal,#378BA6)] rounded-xl">
      <h2 className="text-[#4F4F4F] text-[24px] font-semibold leading-[28px] font-jost self-stretch mb-8">WORK INFORMATION</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Highest Qualification *</label>
          <input type="text" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" />
        </div>
        <div>
          <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Graduation *</label>
          <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]d">
            <option>Select</option>
          </select>
        </div>
        <div>
          <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Select Category*</label>
          <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]d">
            <option>Select</option>
          </select>
        </div>
        <div>
          <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Recruitment Experience *</label>
          <input type="text" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" />
        </div>
        <div>
          <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Own Portal Available?*</label>
          <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]d">
            <option>Select</option>
          </select>
        </div>
        <div>
          <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Preferred Industries *</label>
          <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]d">
            <option>Select</option>
          </select>
        </div>
        <div>
          <label className="w-full mb-3 flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Currently employed in any organization as a full time employee?  *</label>
          <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]d">
            <option>Select</option>
          </select>
        </div>
        <div>
          <label className="h-auto flex flex-row justify-start text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.1px]">Adhaar Card *  <span className="text-[#848484] text-[14px] font-normal leading-[18.2px] tracking-[0.07px] font-jost"> (Note: File should be in Pdf format only)</span></label>
          <input type="file" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" />
        </div>
        <div>
          <label className="h-auto flex flex-row justify-start text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.1px]">GST Certificate *  <span className="text-[#848484] text-[14px] font-normal leading-[18.2px] tracking-[0.07px] font-jost"> (Note: if Consultancy)</span></label>
          <input type="file" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" />
        </div>
        <div>
          <label className="h-auto flex flex-row justify-start text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.1px]">Certificate of Incorporation *  <span className="text-[#848484] text-[14px] font-normal leading-[18.2px] tracking-[0.07px] font-jost"> (Note: if Consultancy)</span></label>
          <input type="file" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" />
        </div>
        {/* Add additional fields as needed */}
      </form>
      
    </div>
    </>
  );
}

export default WorkInformationForm;
