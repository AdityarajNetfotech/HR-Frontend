import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import Image1 from '../../Images/Frame 1686561439.png';
import Image2 from '../../Images/Frame 1686561440.png';
import Image3 from '../../Images/Frame 1686561442.png';
import Image4 from '../../Images/Frame 1686561443.png';
import Image5 from '../../Images/Frame 1686561444.png';

import Image8 from '../../Images/Group 1000.png'
import Image9 from '../../Images/Group 1000009887.png'
import CountUp from 'react-countup';
import PartThree from './PartThree';
import ScrollTrigger from  'react-scroll-trigger';
// FAQCard Component
const FAQCard = ({ question, answer, isExpanded, onClick }) => (
  <div className='w-full bg-[#EAF1F3] rounded-[9.75px] mb-2'>
    <div
      className={`transition-all duration-300 ${isExpanded ? 'h-[100px] p-[10px]' : 'h-[40.5px] p-[9.75px_14.62px]'} flex flex-col justify-center cursor-pointer`}
      onClick={onClick}
    >
      <div className='flex items-center justify-between w-full'>
        <span className='text-lg font-medium text-[#4F4F4F]'>{question}</span>
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
        </svg>
      </div>
      {isExpanded && <div className='mt-4 text-lg text-[#4F4F4F]'>{answer}</div>}
    </div>
  </div>
);

const PartTwo = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);
  const [currentImage, setCurrentImage] = useState(Image1);
  const [counterOn , setCounterOn]= useState(false);

  // FAQ data
  const faqData = [
    { question: 'What is your refund policy?', answer: 'Our refund policy is...' },
    { question: 'How can I contact support?', answer: 'You can contact support via...' },
    { question: 'What payment methods do you accept?', answer: 'We accept the following payment methods...' },
    { question: 'How do I reset my password?', answer: 'To reset your password, please...' },
    { question: 'Do you offer discounts for bulk purchases?', answer: 'Yes, we offer discounts for bulk purchases...' },
    { question: 'Is there a free trial available?', answer: 'Yes, we offer a free trial for...' },
    { question: 'How do I update my billing information?', answer: 'You can update your billing information by...' },
    { question: 'What is the process for cancelling my subscription?', answer: 'To cancel your subscription, please...' },
    { question: 'Can I change my subscription plan?', answer: 'Yes, you can change your subscription plan by...' },
  ];

  return (
    <div className='min-h-screen bg-[#EAF1F3]'>
      <div className='w-full p-4 flex items-center justify-center flex-col gap-8 mb-20 bg-white'>
        <h1 className='font-jost text-[40px] font-semibold leading-[48px] tracking-[-0.2px] text-center text-[#378BA6]'>
          Employment software with proven results
        </h1>
        <div>
          <div className='flex flex-row gap-40 md:flex flex-wrap'>
            <div className='flex flex-col'>
              <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
              <p className='font-jost text-[50px] font-medium leading-[54px] text-center text-[#378BA6]'>
                {counterOn && <CountUp start={0} end={89} duration={2} delay={0} /> }%
              </p>
              </ScrollTrigger>

              <h1 className='font-jost text-[20px] text-center text-[#378BA6]'>Decreased<br />Paperwork</h1>
            </div>
            <div className='flex flex-col'>
              <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
              <p className='font-jost text-[50px] font-medium leading-[54px] text-center text-[#378BA6]'>
                {counterOn && <CountUp start={0} end={69} duration={2} delay={0} /> }%
              </p>
              </ScrollTrigger>

              <h1 className='font-jost text-[20px] text-center text-[#378BA6]'>Decreased<br />Paperwork</h1>
            </div>
            <div className='flex flex-col'>
              <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
              <p className='font-jost text-[50px] font-medium leading-[54px] text-center text-[#378BA6]'>
                {counterOn && <CountUp start={0} end={39} duration={2} delay={0} /> }%
              </p>
              </ScrollTrigger>

              <h1 className='font-jost text-[20px] text-center text-[#378BA6]'>Decreased<br />Paperwork</h1>
            </div>
            <div className='flex flex-col'>
              <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
              <p className='font-jost text-[50px] font-medium leading-[54px] text-center text-[#378BA6]'>
                {counterOn && <CountUp start={0} end={14} duration={2} delay={0} /> }%
              </p>
              </ScrollTrigger>

              <h1 className='font-jost text-[20px] text-center text-[#378BA6]'>Decreased<br />Paperwork</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#378BA6] w-full p-12 flex flex-row justify-between'>
        <div className='max-w-[1352.16px] h-[auto] gap-0 flex flex-row justify-around ml-8 flex-wrap'>
          <div className='flex justify-center flex-col'>
            <h1 className='font-jost text-[52px] font-medium leading-[72.8px] tracking-[-0.2px] text-center text-white'>
              You can do<br />it all with
            </h1>
            <h1 className='font-jost text-[52px] font-[800] leading-[72.8px] tracking-[-0.2px] text-center text-white'>
              Recuritify
            </h1>;
          </div>
          <div className='flex flex-col ml-10 gap-4'>
            <div className='flex flex-wrap'>
              <button
                className='w-[200px] h-[27px] p-[0px] pb-[3px] gap-0 border-b-[2px] border-transparent text-white hover:underline hover-text-white transition-colors duration-300'
                onClick={() => setCurrentImage(Image4)}
              >
                Upload/LockJD
              </button>
              <button
                className='w-[200px] h-[27px] p-[0px] pb-[3px] gap-0 border-b-[2px] border-transparent text-white hover:underline hover-text-white text-bold transition-colors duration-300'
                onClick={() => setCurrentImage(Image3)}
              >
                Track JD
              </button>
              <button
                className='w-[200px] h-[27px] p-[0px] pb-[3px] gap-0 border-b-[2px] border-transparent text-white hover:underline hover-text-white text-bold transition-colors duration-300'
                onClick={() => setCurrentImage(Image1)}
              >
                Candidate Database
              </button>
              <button
                className='w-[200px] h-[27px] p-[0px] pb-[3px] gap-0 border-b-[2px] border-transparent text-white hover:underline hover-text-white text-bold transition-colors duration-300'
                onClick={() => setCurrentImage(Image2)}
              >
                Chat Support
              </button>
              <button
                className='w-[200px] h-[27px] p-[0px] pb-[3px] gap-0 border-b-[2px] border-transparent text-white hover:underline hover-text-white text-bold transition-colors duration-300'
                onClick={() => setCurrentImage(Image5)}
              >
                Track Finances
              </button>
            </div>
            <div className='flex justify-center mt-8 flex-wrap'>
              <img src={currentImage} alt='Current Display' className='w-auto max-h-[400px] object-cover flex-wrap  lg:h-[80%] ' />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-14 justify-center flex flex-col'>
        <h1 className='text-center font-jost text-5xl font-bold text-[#378BA6] mb-10'>
          Effortless Employment
        </h1>
      </div>

      <div className='w-[90%] bg-white m-auto p-[20px_32px] rounded-[20px_20px_20px_20px] flex flex-row gap-10 flex-wrap '>
        <img src={Image9} alt='For Recruiters' className='w-[290px] h-[290px] sm:mx-[auto]' />
        <div className='flex flex-col'>
          <h1 className='w-[330px] h-[56px] text-[40px] font-[700] leading-[56px] text-left text-[#4F4F4F]'>
            For Recruiters
          </h1>
          <h1 className='text-[32px] font-[400] leading-[44.8px] text-left'>
            Step 1: Create your recruiter profile and set your preferences.
          </h1>
          <h1 className='text-[32px] font-[400] leading-[44.8px] text-left'>
            Step 2: Find and accept job descriptions that match your expertise.
          </h1>
          <h1 className='text-[32px] font-[400] leading-[44.8px] text-left'>
            Step 3: Use our platform to search and submit top talent.
          </h1>
          <h1 className='text-[32px] font-[400] leading-[44.8px] text-left'>
            Step 4: Earn payouts upon successful placements.
          </h1>
        </div>
      </div>

      <div className='w-[90%] bg-white m-auto p-[20px_32px] rounded-[20px_20px_20px_20px] flex flex-row gap-10 mt-10 flex-wrap'>
        <img src={Image8} alt='For Employers' className='w-[290px] h-[290px] sm:mx-[auto]' />
        <div className='flex flex-col'>
          <h1 className='w-[330px] h-[56px] text-[40px] font-[700] leading-[56px] text-left text-[#4F4F4F]'>
            For Employers
          </h1>
          <h1 className='text-[32px] font-[400] leading-[44.8px] text-left'>
            Step 1: Create your profile.
          </h1>
          <h1 className='text-[32px] font-[400] leading-[44.8px] text-left'>
            Step 2: Upload and track your job description.
          </h1>
          <h1 className='text-[32px] font-[400] leading-[44.8px] text-left'>
            Step 3: Select best talent from our recruiter recommendations.
          </h1>
          <h1 className='text-[32px] font-[400] leading-[44.8px] text-left'>
            Step 4: Payout upon successful placements.
          </h1>
        </div>
      </div>

      <div className='w-[90%] h-[720px] bg-white m-auto p-[60px_60px] gap-[10px] rounded-[16px] flex flex-col mt-20 '>
        <h1 className='font-jost text-4xl font-semibold leading-[34.12px] text-left mb-6'>
          FREQUENTLY ASKED QUESTIONS
        </h1>
        {faqData.map((faq, index) => (
          <FAQCard
            key={index}
            question={faq.question}
            answer={faq.answer}
            isExpanded={expandedCardIndex === index}
            onClick={() => setExpandedCardIndex(expandedCardIndex === index ? null : index)}
          />
        ))}
      </div>

      <div className='w-full max-w-[90%] h-auto bg-[#378BA6] mx-auto p-8 md:p-12 lg:p-16 rounded-lg flex flex-col items-center mt-10 gap-6'>
  <h1 className='font-jost text-[24px] md:text-[32px] lg:text-[40px] text-white font-semibold text-center'>
    Ready to Embrace the Future of Hiring?
  </h1>
  <h1 className='font-jost text-[16px] md:text-[20px] lg:text-[28px] text-[#4F4F4F] font-medium text-center'>
    Smart match with Recruitify. Get matched to great talent instantly.
  </h1>
  <button className='w-full max-w-[200px] h-[52px] p-2 rounded-lg bg-[#ECB015] text-white mt-4 flex items-center justify-center'>
    <p className='font-jost text-[18px] md:text-[20px] lg:text-[24px] font-semibold flex items-center'>
      Get Started <IoIosArrowForward className='ml-2' />
    </p>
  </button>
</div>
      <PartThree />
    </div>
  );
};

export default PartTwo;
