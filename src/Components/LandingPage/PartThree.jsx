import React from 'react'

import Phonecall from '../../Images/PhoneCall.png'
import Email from '../../Images/Email.png'
import MapPin from '../../Images/Map Pin.png'
import Footer from '../Footer/Footer'
function PartThree() {
    return (
       <div className='min-h-screen bg-[#EAF1F3]'>
  <div className='w-[90%]  h-auto bg-white m-auto p-8 sm:p-10 md:p-12 lg:p-[60px] gap-6 rounded-[16px] flex flex-col mt-20 mb-10'>
    <div className='w-full'>
      <h1 className='font-jost text-3xl sm:text-4xl font-semibold leading-[34.12px] text-left mb-6'>
        CONTACT US
      </h1>
    </div>
    <div className='w-full flex flex-col lg:flex-row gap-6 lg:gap-10'>
      <div className='w-full lg:w-1/2 flex flex-col gap-6'>
        <h1 className='font-jost text-base sm:text-lg md:text-xl lg:text-[18px] font-normal leading-[28px] text-left mb-4 text-[#848484]'>
          We're here to assist and support you. If you have any questions, feedback, or need assistance, please don't hesitate to get in touch. We value your thoughts and inquiries.
        </h1>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-row gap-4 items-start'>
            <img src={MapPin} alt="Location" className='w-6 h-6 sm:w-8 sm:h-8' />
            <p className='text-[#848484]'>
              2715 Ash Dr. San Jose, South <br /> Dakota 83475
            </p>
          </div>
          <div className='border-t border-[#E6E6E6] my-4'></div>
          <div className='flex flex-row gap-4 items-start'>
            <img src={Email} alt="Email" className='w-6 h-6 sm:w-8 sm:h-8' />
            <p className='text-[#848484]'>
              Proxy@gmail.com <br /> Text@gmail.com
            </p>
          </div>
          <div className='border-t border-[#E6E6E6] my-4'></div>
          <div className='flex flex-row gap-4 items-start'>
            <img src={Phonecall} alt="Phone" className='w-6 h-6 sm:w-8 sm:h-8' />
            <p className='text-[#848484]'>
              +91 9999999999 <br /> (162)-787-9090
            </p>
          </div>
        </div>
      </div>
      <div className='w-full lg:w-1/2 bg-white border border-[#378BA6] rounded-[8px] flex flex-col p-6 sm:p-8 lg:p-8 gap-6'>
        <p className='font-jost text-lg sm:text-xl md:text-2xl font-semibold leading-[28px] text-left mb-4'>
          Contact US
        </p>
        <form className='flex flex-col gap-4'>
          {/* Name Field */}
          <label htmlFor='name' className='text-left'>
            <span className='block font-jost text-base sm:text-lg font-semibold leading-[24px] text-[#378BA6]'>
              Name
            </span>
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
            <span className='block font-jost text-base sm:text-lg font-semibold leading-[24px] text-[#378BA6]'>
              Email
            </span>
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
            <span className='block font-jost text-base sm:text-lg font-semibold leading-[24px] text-[#378BA6]'>
              Message
            </span>
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
            className='w-full py-2 bg-[#378BA6] text-white rounded-[4px] hover:bg-[#2c6f8c] transition-colors duration-300 font-semibold'>
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  <Footer />
</div>

    )
}

export default PartThree
