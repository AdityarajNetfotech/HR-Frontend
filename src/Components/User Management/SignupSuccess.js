import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function SignupSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/Multiform');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

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
        <p className="text-[#378BA6] text-[36px] font-extrabold font-jost">
          Signup Successful !!
        </p>
      </div>
    </div>
  );
}

export default SignupSuccess;
