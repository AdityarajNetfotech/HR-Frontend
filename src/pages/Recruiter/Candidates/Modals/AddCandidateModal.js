import React from "react";

function AddCandidateModal() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white bop-8 rounded-lg shadow-lg text-center p-12">
        <p className="flex w-[500px] flex-col justify-center flex-1 text-[#4F4F4F] text-center font-Jost text-4xl font-semibold leading-7 pb-10">
        Add Candidate
        </p>
        <div className="flex flex-col gap-3 mt-7 px-[10%]">
            <button className="flex py-2 px-3 justify-center items-center gap-2 flex-1 rounded-lg border border-[#A4A4A4] bg-white text-[#4F4F4F] text-center text-[28px] font-bold leading-[36px] font-jos">Select from database</button>
            <button className="flex py-2 px-3 justify-center items-center gap-2 self-stretch rounded-lg bg-[#378BA6] text-white text-center text-[28px] font-bold leading-[36px] font-jos">Add New Candidate </button>
        </div>
      </div>
    </div>
  );
}

export default AddCandidateModal;