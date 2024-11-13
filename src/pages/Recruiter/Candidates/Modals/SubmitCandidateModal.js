import React from 'react'

function SubmitCandidateModal() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white bop-8 rounded-lg shadow-lg text-center p-12">
                <p className="flex w-[500px] flex-col justify-center flex-1 text-[#4F4F4F] text-center font-Jost text-4xl font-semibold leading-7 ">
                    Are you sure to want to Submit
                </p>
                <div className="flex space-x-4">
                    <button className="flex-1 py-2 rounded-lg border border-[#A4A4A4] bg-white text-[#4F4F4F] text-center text-[24px] font-bold leading-[36px] font-jost"> <a>Cancel</a> </button>
                    <button className="flex-1 py-2 rounded-lg bg-[#378BA6] text-white text-center text-[24px] font-bold leading-[36px] font-jost"> <a>Submit</a> </button>
                </div>
            </div>
        </div>
    )
}

export default SubmitCandidateModal
