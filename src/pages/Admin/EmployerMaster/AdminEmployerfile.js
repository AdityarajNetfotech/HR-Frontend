import React from 'react'

function AdminEmployerfile() {
  return (
    <div className='max-h-screen flex flex-row gap-0 h-[100%] bg-[#378BA64D]'>
      <div className='w-[894px] h-[1296px] absolute top-[54px] left-[273px] pt-[32px] rounded-tl-[20px] space-y-[24px] flex flex-col '>
        <div className='w-[830px] h-[52px] px-[16px] py-[8px] rounded-[8px] bg-[#378BA64D] flex justify-between mx-8'>
          <h1 className='font-[Jost] text-[20px] font-large leading-[36px] text-center text-[#4f4f4f]'>Recruter Form Detail </h1>
        </div>
        <div className='w-[105px] h-[22px] px-[8px] py-[2px] rounded-[4px] bg-[#E8E8E8] mx-8'>
          <p class="font-[Inter] text-[14px] font-normal leading-[18.2px] tracking-[0.005em] text-center w-[89px] h-[18px]">ID : #123456</p>
        </div>
        <div className='mx-8 w-[830px] h-[324px] pt-[24px] space-y-[32px] rounded-[12px] rounded-bl-[12px] rounded-tr-[12px] border-[0.2px] border-[#378BA6] shadow-[6px_6px_20px_0px_rgba(0,0,0,0.12)]'>
          <div className='w-[782px] h-[28px] ml-4'>
            <h1 className='font-[Jost] text-[24px] font-semibold leading-[28px] text-left mx-4'>PERSONAL INFORMATION</h1>
            <div className="px-4 py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className=' w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'> First Name *</label>
                <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"

                />
              </div>
              <div>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Last Name *</label>
                <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"

                />
              </div>
              <div>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Personal Email *</label>
                <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"

                />
              </div>

              <div>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Mobile Number *</label>
                <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"

                />

              </div>
              <div>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Join As *</label>
                <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"

                >
                  <option />
                  <option value='Kolkata'>Kolkata</option>
                  <option value='Delhi'>Delhi</option>
                  <option value='Mumbai'>Mumbai</option>
                  <option value='Pune'>Pune</option>
                </select>
              </div>
              <div>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'> Location *</label>
                <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"

                >
                  <option />
                  <option value='Kolkata'>Kolkata</option>
                  <option value='Delhi'>Delhi</option>
                  <option value='Mumbai'>Mumbai</option>
                  <option value='Pune'>Pune</option>
                </select>
              </div>
            </div>
          </div>

        </div>
        {/*  */}
        <div className='mx-8 w-[830px] h-[414px] pt-[24px] space-y-[32px] rounded-[12px] rounded-bl-[12px] rounded-tr-[12px] border-[0.2px] border-[#378BA6] shadow-[6px_6px_20px_0px_rgba(0,0,0,0.12)]'>
          <div className='w-[782px] h-[28px] ml-4'>
            <h1 className='font-[Jost] text-[24px] font-semibold leading-[28px] text-left mx-4'>COMPANY INFORMATION</h1>
            <div className="px-4 py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className=' w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'> Company Name *</label>
                <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"

                />
              </div>
              <div>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Type of Company *</label>
                <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"

                />
              </div>

              <div>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Select Catogary *</label>
                <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"

                />

              </div>
              <div>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>No of Employees *</label>
                <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"

                />
              </div>
              <div>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Company website link *</label>
                <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"

                />
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
            </div>
          </div>

        </div>

        {/*  */}
        <div className='mx-8 w-[830px] h-[324px] pt-[24px] space-y-[32px] rounded-[12px] rounded-bl-[12px] rounded-tr-[12px] border-[0.2px] border-[#378BA6] shadow-[6px_6px_20px_0px_rgba(0,0,0,0.12)]'>
          <div className='w-[782px] h-[28px] ml-4'>
            <h1 className='font-[Jost] text-[24px] font-semibold leading-[28px] text-left mx-4'>BANK INFORMATION</h1>
            <div className="px-4 py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className=' w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Name As Per Bank Account *</label>
                <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"

                />
              </div>
              <div>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Bank Name *</label>
                <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"

                >
                  <option />
                  <option value='Kolkata'>Kolkata</option>
                  <option value='Delhi'>Delhi</option>
                  <option value='Mumbai'>Mumbai</option>
                  <option value='Pune'>Pune</option>
                </select>
              </div>
              <div>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Account Type *</label>
                <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"

                >
                  <option />
                  <option value='Kolkata'>Kolkata</option>
                  <option value='Delhi'>Delhi</option>
                  <option value='Mumbai'>Mumbai</option>
                  <option value='Pune'>Pune</option>
                </select>
              </div>
              <div>
                <label className=' w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Account Number*</label>
                <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"

                />
              </div>
              <div>
                <label className=' w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Branch location *</label>
                <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"

                />
              </div>
              <div>
                <label className=' w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>IFSC code</label>
                <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"

                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AdminEmployerfile
