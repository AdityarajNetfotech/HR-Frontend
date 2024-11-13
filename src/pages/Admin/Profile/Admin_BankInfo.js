import React from 'react'

const Admin_BankInfo = () => {
    return (
        <div>
            <div className="px-10 py-8 bg-white border border-[var(--Teal,#378BA6)] rounded-xl shadow-md">
                <h2 className="text-[#4F4F4F] text-[24px] font-semibold leading-[28px] font-jost self-stretch mb-8">BANK INFORMATION</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Name as per Bank account</label>
                        <input type="text" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder='Jhon Doe' />
                    </div>
                    <div>
                        <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Bank Name *</label>
                        <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]">
                            <option>Select</option>
                        </select>
                    </div>
                    <div>
                        <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Account Type*</label>
                        <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]d">
                            <option>Select</option>
                        </select>
                    </div>
                    <div>
                        <label className="w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Account Number *</label>
                        <input type="text" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder='xxxxxxxxxxx' />
                    </div>
                    <div>
                        <label className="w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Branch Location*</label>
                        <input type="text" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder='eg: kolkata' />
                    </div>
                    <div>
                        <label className="w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">IFSC code*</label>
                        <input type="text" className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder='0000000000000000' />
                    </div>


                </form>
                <div className='flex flex-row justify-between mt-10'>
                    <button className='flex p-2.5 px-3 h-14 justify-center items-center gap-2 text-center text-[20px] text-[var(--dark-grey,#4F4F4F)] border border-[#A4A4A4] font-bold leading-[36px] rounded-lg  bg-white font-jost'> <a href='#'>View Agreement</a> </button>
                    <button className="flex p-2.5 px-3 justify-center items-center gap-2 self-stretch rounded-lg bg-teal bg-[var(--Teal,#378BA6)] text-white text-center text-[24px] font-semibold leading-[28px] font-jost"> <a href='#'>Update Changes</a> </button>
                </div>
            </div>
        </div>
    )
}

export default Admin_BankInfo
