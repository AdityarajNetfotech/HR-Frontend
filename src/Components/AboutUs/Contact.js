import React from 'react';
import Phonecall from '../../Images/PhoneCall.png';
import Email from '../../Images/Email.png';
import MapPin from '../../Images/Map Pin.png';

const Contact = () => {
  return (
    <div className='w-full max-w-[100%] h-auto py-8 px-4 sm:px-6 md:px-8 lg:px-10  rounded-br-lg rounded-bl-lg border border-[#378BA6] border-opacity-50 bg-white shadow-lg flex flex-col mx-auto'>
      <div className='w-full'>
        <h1 className='text-[#4F4F4F] text-[20px] sm:text-[24px] font-semibold leading-[24px] sm:leading-[28px] font-jost self-stretch mb-6 sm:mb-8 text-Josh'>
          CONTACT US
        </h1>
      </div>
      <div className='w-full flex flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2 flex flex-col gap-4'>
          <h1 className='font-jost text-[16px] sm:text-[18px] font-normal leading-[24px] sm:leading-[28px] text-left mb-4 text-[#848484]'>
            We're here to assist and support you. If you have any questions, feedback, or need assistance, please don't hesitate to get in touch. We value your thoughts and inquiries.
          </h1>
          <div className='flex flex-col gap-4 sm:gap-6'>
            <div className='flex flex-row items-start gap-4'>
              <img src={MapPin} alt="Map Pin" className='w-8 h-8 sm:w-10 sm:h-10'/>
              <p className='text-[#848484] text-sm sm:text-base'>
                2715 Ash Dr. San Jose, South<br/>Dakota 83475
              </p>
            </div>
            <div className='w-full border-t border-[#E6E6E6]'></div>
            <div className='flex flex-row items-start gap-4'>
              <img src={Email} alt="Email" className='w-8 h-8 sm:w-10 sm:h-10'/>
              <p className='text-[#848484] text-sm sm:text-base'>
                Proxy@gmail.com<br/>Text@gmail.com
              </p>
            </div>
            <div className='w-full border-t border-[#E6E6E6]'></div>
            <div className='flex flex-row items-start gap-4'>
              <img src={Phonecall} alt="Phone Call" className='w-8 h-8 sm:w-10 sm:h-10'/>
              <p className='text-[#848484] text-sm sm:text-base'>
                +91 9999999999<br/>(162)-787-9090
              </p>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0 '>
          <div className='pt-4 px-4 sm:px-6 lg:px-8 gap-4 rounded-[8px] border border-[#378BA6] bg-white flex flex-col'>
            <p className='font-jost text-[20px] sm:text-[24px] font-semibold leading-[24px] sm:leading-[28px] text-left mb-4'>Contact Us</p>
            <form className='flex flex-col gap-4'>
              {/* Name Field */}
              <label htmlFor='name' className='text-left'>
                <span className='block font-jost text-[14px] sm:text-[16px] font-semibold leading-[20px] sm:leading-[24px] text-[#378BA6]'>Name</span>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full p-2 border border-[#E6E6E6] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#378BA6]'
                  placeholder='Your Name'
                />
              </label>

              {/* Email Field */}
              <label htmlFor='email' className='text-left'>
                <span className='block font-jost text-[14px] sm:text-[16px] font-semibold leading-[20px] sm:leading-[24px] text-[#378BA6]'>Email</span>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full p-2 border border-[#E6E6E6] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#378BA6]'
                  placeholder='Your Email'
                />
              </label>

              {/* Message Field */}
              <label htmlFor='message' className='text-left'>
                <span className='block font-jost text-[14px] sm:text-[16px] font-semibold leading-[20px] sm:leading-[24px] text-[#378BA6]'>Message</span>
                <textarea
                  id='message'
                  name='message'
                  rows='4'
                  className='w-full p-2 border border-[#E6E6E6] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#378BA6]'
                  placeholder='Your Message'
                ></textarea>
              </label>

              {/* Submit Button */}
              <button
                type='submit'
                className='w-full py-2 bg-[#378BA6] text-white hover:bg-[#2c6f8c] transition-colors duration-300 font-semibold mb-8 rounded-lg'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
