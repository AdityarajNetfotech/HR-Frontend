import React from 'react'
import Recutify from '../../Images/Recurify.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <div>
      <div className="bg-[#378BA6] w-full h-[368px] flex flex-col  lg:flex-row justify-between px-4 md:px-6 lg:px-8">
        <div className='w-full flex flex-col mt-10'>
          <div className='h-[60%] flex flex-col lg:flex-row'>
            <div className='w-full lg:w-[85%] flex flex-col items-center lg:items-start'>
              <div className='flex flex-col lg:flex-row gap-4'>
                <img src={Recutify} alt="Recrutify" className='w-16 h-auto' />
                <h1 className="font-jost text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-[28.8px] md:leading-[32px] lg:leading-[46.24px] text-left text-white my-auto">
                  Recrutify
                </h1>
              </div>
              <div className='mt-4 font-jost text-[20px] font-semibold leading-[28px] text-left text-white'>
                <p>Great platform for the job seeker that <br /> passionate about startups. Find your dream<br /> job easier.</p>
              </div>
            </div>
            <div className='w-full lg:w-[15%] flex flex-col mt-4 lg:mt-0'>
              <div className="flex flex-col gap-4">
                <h1 className='font-jost text-[14px] font-[400] text-white leading-[28px] text-left'>
                  Help And Support
                </h1>
                <h1 className='font-jost text-[14px] font-400 text-white leading-[28px] text-left'>
                  Terms & Conditions
                </h1>
                <h1 className='font-jost text-[14px] font-400 text-white leading-[28px] text-left'>
                  FAQ's
                </h1>
                <h1 className='font-jost text-[14px] font-400 text-white leading-[28px] text-left'>
                  Contact Us
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full h-0 border-t-[0.5px] border-solid border-custom-white flex flex-row mx-auto"></div>

          <div className='flex flex-col lg:flex-row justify-between items-center p-4'>
            <h1 className='font-poppins text-[18px] font-medium text-left text-white'>
              Copyright ©️ 2023 by Recruitify. All Rights Reserved.
            </h1>
            <div className='flex flex-col lg:flex-row items-center space-y-2 lg:space-x-4 lg:space-y-0 w-full lg:w-auto'>
              <h1 className='text-white text-center lg:text-left'>Follow us -------</h1>
              <div className='flex space-x-2'>
                <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-white text-[24px]'>
                  <i className='fab fa-instagram'></i>
                </a>
                <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-white text-[24px]'>
                  <i className='fab fa-facebook'></i>
                </a>
                <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-white text-[24px]'>
                  <i className='fab fa-twitter'></i>
                </a>
                <a href='https://youtube.com' target='_blank' rel='noopener noreferrer' className='text-white text-[24px]'>
                  <i className='fab fa-youtube'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
