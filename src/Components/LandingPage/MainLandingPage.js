import React from 'react';
import Recutify from '../../Images/Recurify.png';
import Button from '../../Images/Button-icon.png';
import FirstImages from '../../Images/div.hero-media-wrapper.png';
import PartTwo from './PartTwo';


const MainLandingPage = () => {
  return (
    <div className='min-h-screen '>
      <div className="bg-[#378BA6] w-full h-[96px] flex items-center justify-between px-4 md:px-6 lg:px-8">
        <div className='flex flex-row items-center gap-2'>
          <img src={Recutify} alt="Recutify" className='w-16 h-auto' />
          <h1 className="font-jost text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-[28.8px] md:leading-[32px] lg:leading-[46.24px] text-left text-white">
            Recrutify
          </h1>
        </div>
        <button className="w-[150px] md:w-[160px] lg:w-[180px] h-[48px] md:h-[50px] lg:h-[56px] p-2 gap-2 md:gap-3 lg:gap-4 rounded-lg bg-[#EAF1F3] mr-4 md:mr-6 lg:mr-8 flex items-center">
          <img src={Button} alt="Button" className='w-8 h-auto' />
          <a href='/Signup' className='font-jost text-[18px] md:text-[20px] lg:text-[24px] font-semibold leading-[22px] md:leading-[24px] lg:leading-[28px] text-[#378BA6] ml-2'>
            Sign Up
          </a>
        </button>
      </div>

      <div className='bg-[#EAF1F3] w-full flex items-center justify-center'>
        <div className='flex flex-col md:flex-row lg:flex-row w-full md:w-[90%] lg:w-[90%] mt-8 md:mt-12 lg:mt-16 h-auto md:h-[455px] mb-8 md:mb-12 lg:mb-16 gap-6 md:gap-8 lg:gap-[105px]'>
          <div className='flex flex-col w-full md:w-[50%] lg:w-[45%] my-auto'>
          <h1 className='font-jost text-[32px] md:text-[40px] lg:text-[54px] font-semibold leading-[40px] md:leading-[48px] lg:leading-[64.8px] text-left mb-6 md:mb-8 lg:mb-12'>
          Unlock ths X-Factor in Talent with <span style={{ color: '#378BA6' }}>Recruit</span><span className="text-[#DD6B20] font-elephant">X</span>
</h1>
            <h1 className='font-jost text-[16px] md:text-[18px] lg:text-[22px] font-normal leading-[22px] md:leading-[24px] lg:leading-[28.8px] text-left mb-4 md:mb-6 lg:mb-8'>
              Efficient recruitment platform for freelance recruiters and hiring teams. <br />
              Whether you’re expanding into new markets or struggling to fill open roles, we connect the best talent with the best employers.
            </h1>
            <button className="w-[150px] md:w-[160px] lg:w-[180px] h-[48px] md:h-[50px] lg:h-[56px] p-2 gap-2 md:gap-3 lg:gap-4 rounded-lg bg-[#378BA6] flex items-center justify-center">
              <h1 className='font-jost text-[16px] md:text-[18px] lg:text-[20px] text-white'>
                Get Started
              </h1>
            </button>
          </div>
          <div className='flex flex-col w-full md:w-[50%] lg:w-[40%] my-auto'>
            <img src={FirstImages} alt="Hero" className='w-full h-auto' />
          </div>
        </div>
      </div>

      {/* Additional Component */}
      <div className='bg-[#EAF1F3'>
        <PartTwo />
        
      </div>
    </div>
  );
}

export default MainLandingPage;
