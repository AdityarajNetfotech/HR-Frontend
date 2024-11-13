import React, { useState } from 'react';

const FAQCard = ({ question, answer, isExpanded, onClick }) => (
  <div className='w-full bg-[#EAF1F3] rounded-[9.75px] mb-2'>
    <div
      className={`transition-all duration-300 ${isExpanded ? 'h-[100px] p-[10px]' : 'h-[40.5px] p-[9.75px_14.62px]'} flex flex-col justify-center cursor-pointer`}
      onClick={onClick}
    >
      <div className='flex items-center justify-between w-full'>
        <span className='text-base sm:text-lg font-medium text-[#4F4F4F]'>{question}</span>
        <svg
          className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
        </svg>
      </div>
      {isExpanded && <div className='mt-2 sm:mt-4 text-base sm:text-lg text-[#4F4F4F]'>{answer}</div>}
    </div>
  </div>
);

const FAQ = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);
  const faqData = [
    { question: 'What is your refund policy?', answer: 'Our refund policy is...' },
    { question: 'How can I contact support?', answer: 'You can contact support via...' },
    { question: 'What payment methods do you accept?', answer: 'We accept the following payment methods...' },
    { question: 'How do I reset my password?', answer: 'To reset your password, please...' },
    { question: 'Do you offer discounts for bulk purchases?', answer: 'Yes, we offer discounts for bulk purchases...' },
    { question: 'Is there a free trial available?', answer: 'Yes, we offer a free trial for...' },
    { question: 'How do I update my billing information?', answer: 'You can update your billing information by...' },
  ];

  return (
    <div className="py-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 w-full max-w-[100%] mx-auto bg-white border border-[#378BA6] border-opacity-50 shadow-lg rounded-br-lg rounded-bl-lg">
      <h2 className="text-[#4F4F4F] text-[20px] sm:text-[24px] font-semibold leading-[24px] sm:leading-[28px] font-jost self-stretch mb-6 sm:mb-8 text-Josh">
        FREQUENTLY ASKED QUESTIONS
      </h2>
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
  );
}

export default FAQ;
