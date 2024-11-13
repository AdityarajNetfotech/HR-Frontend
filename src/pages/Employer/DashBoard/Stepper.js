import React, { useState } from 'react';

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { number: 1, label: "Delivery", status: "Completed" },
    { number: 2, label: "Interview", status: "View Feedback" },
    { number: 3, label: "Offer", status: "Pending" },
    { number: 4, label: "Payment", status: "Pending" },
  ];

  const handleStepChange = (event) => {
    setCurrentStep(Number(event.target.value));
  };

  return (
    <div className="flex items-center space-x-8 mt-8">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div
            className={`relative flex items-center justify-center w-12 h-12 rounded-full ${
              currentStep >= step.number
                ? "bg-[#378BA6] text-white"
                : "border-2 border-[#378BA6] text-[#378BA6]"
            }`}
          >
            {step.number}
          </div>

          <div className="ml-2 text-center">
            <div
              className={`font-medium ${
                currentStep >= step.number ? "text-[#378BA6]" : "text-gray-500"
              }`}
            >
              {step.label}
            </div>
            <div className="text-sm text-gray-400">{step.status}</div>
          </div>

          {index < steps.length - 1 && (
            <div
              className={`h-2 w-24 mx-4 ${
                currentStep > step.number ? "bg-[#378BA6]" : "bg-gray-300"
              }`}
            />
          )}
        </div>
      ))}

      <div className="ml-8">
        <select
          onChange={handleStepChange}
          value={currentStep}
          className="px-4 py-2 border border-gray-300 rounded-lg"
        >
          {steps.map((step) => (
            <option key={step.number} value={step.number}>
              Step {step.number}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Stepper;
