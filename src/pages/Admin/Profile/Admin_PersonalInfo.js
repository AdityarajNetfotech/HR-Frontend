import React from 'react'

const Admin_PersonalInfo = () => {
    return (
        <>
            <div className="px-10 py-8 bg-white border border-[var(--Teal,#378BA6)] rounded-xl shadow-md">
                <h2 className="text-[#4F4F4F] text-[24px] font-semibold leading-[28px] font-jost self-stretch mb-8">PERSONAL INFORMATION</h2>
                <form >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]">First Name *</label>
                            <input type="text" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder='Jhon' />
                        </div>
                        <div>
                            <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]">Last Name *</label>
                            <input type="text" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder='Doe' />
                        </div>
                        <div>
                            <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]">Personal Email *</label>
                            <input type="email" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder='Email' />
                        </div>
                        <div>
                            <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]">Mobile Number *</label>
                            <input type="text" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder=' Mobile No' />
                        </div>
                        <div>
                            <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]">Join as *</label>
                            <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]">
                                <option>Select</option>
                            </select>
                        </div>
                        <div>
                            <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]">Location *</label>
                            <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]">
                                <option>Select</option>
                            </select>
                        </div>
                        <div>
                            <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]">Date of Birth *</label>
                            <input type="date" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder='Sep 2013' />
                        </div>
                        <div>
                            <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]">Languages Known *</label>
                            <input type="text" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder="Language 1, Language 2..." />
                        </div>
                    </div>
                    <h2 className="text-[#4F4F4F] text-[24px] font-semibold leading-[28px] font-jost self-stretch my-5 text-left">SECONDARY ACCOUNT</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]">First Name *</label>
                            <input type="text" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder='Jhon' />
                        </div>
                        <div>
                            <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]">Last Name *</label>
                            <input type="text" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder='Doe' />
                        </div>
                        <div>
                            <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]">Personal Email *</label>
                            <input type="email" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder='Email' />
                        </div>
                        <div>
                            <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]">Mobile Number *</label>
                            <input type="text" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder=' Mobile No' />
                        </div>
                        <div>
                            <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]">Join as *</label>
                            <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]">
                                <option>Select</option>
                            </select>
                        </div>
                        <div>
                            <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]">Location *</label>
                            <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]">
                                <option>Select</option>
                            </select>
                        </div>
                        <div>
                            <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]">Bank Account *</label>
                            <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]">
                                <option>Select</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                    <button className='flex text-right justify-end p-2.5 px-3 h-14 items-center gap-2 text-[20px] text-[var(--dark-grey,#4F4F4F)] border border-[#A4A4A4] font-bold leading-[36px] rounded-lg bg-white font-jost mt-6'>View Agreement </button>
                    <button className="flex text-right justify-end p-2.5 px-3 h-14 items-center gap-2 text-[20px] text-white border border-[#A4A4A4] font-bold leading-[36px] rounded-lg bg-[var(--Teal,#378BA6)] font-jost mt-6"> Add User +</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Admin_PersonalInfo
