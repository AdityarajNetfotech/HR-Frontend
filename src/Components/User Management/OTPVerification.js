import React, { useState, useEffect } from "react";

function OTPVerification() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleResend = () => {
    setOtp(["", "", "", ""]);
    setTimer(10);
  };

  const handleSubmit = () => {
    alert(`OTP Entered: ${otp.join("")}`);
  };

  return (
    <div className="max-w-sm mx-auto p-10 bg-white rounded-lg text-left shadow-[6px_6px_20px_0px_rgba(0,0,0,0.12)] ">
      <h2 className="flex-grow text-gray-700 text-center font-jost text-2xl font-semibold leading-7">Account Verification</h2>
      <p className="text-[var(--Teal,#378BA6)] mt-8 text-center font-jost text-base font-medium leading-5 tracking-wide flex-1">Enter your 4-digit OTP sent to abc@xyz.com</p>
      <div className="flex justify-center gap-7 mt-7 mb-7 ">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            className="w-12 h-12 text-2xl text-center border border-[var(--Teal,#378BA6)] rounded-md focus:outline-none focus:border-[var(--Teal,#378BA6)]"
          />
        ))}
      </div>
      <div className="flex justify-between items-center mb-5">
      <p className="mt-2">
        Resend OTP in : {timer > 0 ? `00:0${timer}` : "00:00"}
      </p>
      {timer === 0 && (
        <button
          onClick={handleResend}
          className="mt-2 text-[var(--Teal,#378BA6)] underline"
        >
          Resend OTP
        </button>
      )}
      </div>
      <div className="mt-4">
        <button
          onClick={handleSubmit}
          className="w-full flex h-[52px] py-2 px-3 justify-center items-center gap-2 rounded-md bg-[var(--Teal,#378BA6)] flex-grow"
        >
            <a href="/Signup-Success" className="text-white text-center font-jost text-2xl font-semibold leading-7">Confirm</a>
          
        </button>
      </div>
      
      
    </div>
  );
}

export default OTPVerification;
