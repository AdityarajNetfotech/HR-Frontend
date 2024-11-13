import React from "react";
import { motion } from "framer-motion";

function ProfileSuccess() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white bop-8 rounded-lg shadow-lg text-center p-12">
        <motion.div
          className="inline-block p-4 rounded-xl border-2 border-[#62A82B]"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5 }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-[#62A82B]"
            initial={{ pathLength: 5 }}
            animate={{ pathLength: 10 }}
            transition={{ duration: 5, delay: 5 }}
          >
            <path d="M20 6L9 17l-5-5" />
          </motion.svg>
        </motion.div>
        <p className="text-[#378BA6] text-center text-[36px] font-medium leading-normal font-jost">
           Successful !!
        </p>
        <div className="flex gap-3 mt-7">
            <button className="flex py-2 px-3 justify-center items-center gap-2 flex-1 rounded-lg border border-[#A4A4A4] bg-white text-[#4F4F4F] text-center text-[20px] font-bold leading-[36px] font-jos">Go to Dashboard</button>
            <button className="flex py-2 px-3 justify-center items-center gap-2 self-stretch rounded-lg bg-[#378BA6] text-white text-center text-[20px] font-bold leading-[36px] font-jos">Download Agreement</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileSuccess;