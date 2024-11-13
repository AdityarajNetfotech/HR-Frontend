import React from 'react'
import { motion } from 'framer-motion';
import IncompleIcon from '../../../../Images/IncompleteIcon.png';

function CandidateIncompleteModal() {

  const bounceAnimation = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { 
        opacity: 1, 
        scale: 1,
        transition: { 
            type: 'spring', 
            stiffness: 300, 
            damping: 10 
        }
    },
    exit: { 
        opacity: 0, 
        scale: 0.5, 
        transition: { 
            ease: 'easeInOut' 
        } 
    }
};

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white bop-8 rounded-lg shadow-lg text-center p-12">

      <motion.div
            className="inline-block p-2 rounded-xl "
            initial="initial"
            animate="animate"
            exit="exit"
            variants={bounceAnimation}
        >
            <img className='h-[52px] w-[52px]' src={IncompleIcon}/>
        </motion.div>

        <p className="flex w-[500px] flex-col justify-center flex-1 text-[#4F4F4F] text-center font-Jost text-4xl font-semibold leading-7 pb-8">
          Incomplete form
        </p>
        <div className="flex space-x-4">
          <button className="flex-1 py-2 rounded-lg border border-[#A4A4A4] bg-white text-[#4F4F4F] text-center text-[24px] font-bold leading-[36px] font-jost"> <a>Cancel</a> </button>
          <button className="flex-1 py-2 rounded-lg bg-[#378BA6] text-white text-center text-[24px] font-bold leading-[36px] font-jost"> <a>Save for Later</a> </button>
        </div>
      </div>
    </div>
  )
}

export default CandidateIncompleteModal
