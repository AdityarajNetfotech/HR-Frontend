import React, { useState } from "react";
import JDIcon from '../../Images/JDicon.png';
import PayRollIcon from '../../Images/Payrollicon.png';
import CandidateIcon from '../../Images/Candidateicon.png';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";

const steps = [
  "Personal Info",
  "Work Info",
  "Bank Info",
  "Success",
];

const MultiStepForm = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setmobileNumber] = useState('');
  const [location, setLocation] = useState('');
  const [dob, setDob] = useState('');
  const [language, setLanguage] = useState('');
  const [highestQualification, setHighestQualification] = useState('');
  const [graduation, setGraduation] = useState('');
  const [category, setCategory] = useState('');
  const [recruitmentExp, setRecruitmentExp] = useState('');
  const [preferredIndustry, setPreferredIndustry] = useState('');
  const [aadharCard, setAadharCard] = useState('');
  const [gstCertificate, setGstCertificate] = useState('');
  const [incorporationCertificate, setIncorporationCertificate] = useState('');
  const [nameInBank, setNameInBank] = useState('');
  const [bankName, setBankName] = useState('');
  const [bankAccountNumber, setBankAccountNumber] = useState('');
  const [bankIFSC, setBankIFSC] = useState('');
  const [bankBranch, setBankBranch] = useState('');
  const [accountType, setAccountType] = useState('');
  const [termsAndConditions, setTermsAndConditions] = useState(false);

  const getMultiForm = () => {
    return{
      firstName, lastName, mobileNumber, location, dob, language, highestQualification, graduation, category, recruitmentExp, preferredIndustry,
      aadharCard, gstCertificate, incorporationCertificate, nameInBank, bankName,
      bankAccountNumber, bankIFSC, bankBranch, accountType, termsAndConditions 
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const MultiForm = getMultiForm();


  try {
      console.log('MultiForm= ', MultiForm);

    const response = await axios.post('http://localhost:4000/api/InformationForm', MultiForm);
    console.log(response);
    
    // const result = await response.json()

    if (response.status === 201) {
      alert ('Multiform Submitted Successfully!');
    }

    else{
      // alert ('Failed in submitting form: ' + result.message);
      alert("Failed Submitting the form");
    }

    

  } catch (error) {
    console.error('Error Subbmitting Form: ', error);
    alert('An error occoured while submitting the form.')
  }
  };


  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <form>
        <div className="flex justify-between items-center rounded-md p-2 mb-6 bg-[rgba(55,139,166,0.30)] ">
          <h2 className="text-[#4F4F4F] text-center font-jost text-[20px] font-medium leading-[36px]">COMPLETE YOUR PROFILE</h2>
          <button className="text-gray-500 hover:text-gray-700">&times;</button>
        </div>

        <div className="flex justify-between mb-6">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  index <= currentStep
                    ? "bg-[var(--Teal,#378BA6)] text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {index + 1}
              </div>
              <span className="text-sm mt-2">{step}</span>
            </div>
          ))}
        </div>

        

        {currentStep === 0 && (
          <div className="border border-[var(--Teal,#378BA6)] rounded-lg shadow-[6px_6px_20px_0px_rgba(0,0,0,0.12)] p-10">
            <h3 className="text-[#4F4F4F] font-jost text-[24px] font-semibold leading-[28px] self-stretch mb-8">PERSONAL INFORMATION</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">First Name *</label>
              <input
                type="text"
                placeholder="First Name *"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)]"
              />
              </div>
              <div>
                <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Last Name *</label>
              <input
                type="text"
                placeholder="Last Name *"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className=" w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)]"
              />
              </div>
              {/* <div>
                <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Personal Email *</label>
              <input
                type="email"
                placeholder="Personal Email *"
                className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)]"
              />
              </div> */}
              <div>
                <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Mobile Number *</label>
              <input
                type="text"
                placeholder="Mobile Number *"
                value={mobileNumber}
                onChange={(e) => setmobileNumber(e.target.value)}
                className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)]"
              />
               </div> 
            <div>
            <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Location *</label>
              <select
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 border border-[var(--Teal,#378BA6)] rounded-lg text-[#A4A4A4] text-base font-normal leading-[20.8px] tracking-[0.08px] font-jost"
                // required
              >
                <option/>
                <option value="newYork">New York</option>
                <option value="losAngeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
              </select>
            </div>
            <div>
            <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Date of Birth *</label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                placeholder="Date of Birth *"
                className=" w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)]"
                // required
              />
            </div>
              <div>
              <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Languages Known *</label>
              <input
                type="text"
                placeholder="Languages Known *"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)]"
              />
            </div>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="border border-[var(--Teal,#378BA6)] rounded-lg shadow-[6px_6px_20px_0px_rgba(0,0,0,0.12)] p-10">
            <h3 className="text-[#4F4F4F] font-jost text-[24px] font-semibold leading-[28px] self-stretch mb-8">WORK INFORMATION</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Highest Qualification *</label>
              <input
                type="text"
                placeholder="Your Occupation *"
                value={highestQualification}
                onChange={(e) => setHighestQualification(e.target.value)}
                className=" w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)]"
              />
              </div>
              <div>
            <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Graduation *</label>
              <input
                type="text"
                placeholder="Graduation"
                value={graduation}
                onChange={(e) => setGraduation(e.target.value)}
                className="w-full p-2 border border-[var(--Teal,#378BA6)] rounded-lg text-[#A4A4A4] text-base font-normal leading-[20.8px] tracking-[0.08px] font-jost focus:outline-none focus:border-[var(--Teal,#378BA6)]"
                // required
              />
            </div>
            <div>
            <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Select Category *</label>
              <input
              type="text"
                placeholder="location"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border border-[var(--Teal,#378BA6)] rounded-lg text-[#A4A4A4] text-base font-normal leading-[20.8px] tracking-[0.08px] font-jost focus:outline-none focus:border-[var(--Teal,#378BA6)]"
                // required
              />
            </div>
              <div>
              <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Recruitment Experience *</label>
              <input
                type="text"
                placeholder="Experience *"
                value={recruitmentExp}
                onChange={(e) => setRecruitmentExp(e.target.value)}
                className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)]"
              />
                </div>
                
            <div>
            <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Preferred Industries *</label>
              <input
              type="text"
                placeholder="Preffered Industry"
                value={preferredIndustry}
                onChange={(e) => setPreferredIndustry(e.target.value)}
                className="w-full p-2 border border-[var(--Teal,#378BA6)] rounded-lg text-[#A4A4A4] text-base font-normal leading-[20.8px] tracking-[0.08px] font-jost focus:outline-none focus:border-[var(--Teal,#378BA6)]"
                // required
              />
            </div>
                <div>
                <label className="h-auto flex flex-row justify-start text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.1px]">Adhaar Card *  <span className="text-[#848484] text-[14px] font-normal leading-[18.2px] tracking-[0.07px] font-jost"> (Note: File should be in Pdf format only)</span></label>             
              <input
                type="text"
                placeholder="Work Experience *"
                value={aadharCard}
                onChange={(e) => setAadharCard(e.target.value)}
                className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)]"
              />
              </div>
              <div>
                <label className="h-auto flex flex-row justify-start text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">GST Certificate *  <span className="text-[#848484] text-[14px] font-normal leading-[18.2px] tracking-[0.07px] font-jost"> (Note: if Consultancy)</span></label>
              <input
                type="text"
                placeholder="Work Experience *"
                value={gstCertificate}
                onChange={(e) => setGstCertificate(e.target.value)}
                className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)]"
              />
              </div>
              <div>
                <label className="h-auto flex flex-row justify-start text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Certificate of Incorporation *  <span className="text-[#848484] text-[14px] font-normal leading-[18.2px] tracking-[0.07px] font-jost"> (Note: if Consultancy)</span></label>
              <input
                type="text"
                placeholder="Work Experience *"
                value={incorporationCertificate}
                onChange={(e) => setIncorporationCertificate(e.target.value)}
                className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)]"
              />
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="border border-[var(--Teal,#378BA6)] rounded-lg shadow-[6px_6px_20px_0px_rgba(0,0,0,0.12)] p-10">
            <h3 className="text-lg font-semibold mb-4">BANK INFORMATION</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Name as per Bank account</label>
              <input
                type="text"
                placeholder="Name"
                value={nameInBank}
                onChange={(e) => setNameInBank(e.target.value)}
                className=" w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)]"
              />
              </div>
              <div>
            <label className="w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Bank Name *</label>
              <input
                type="text"
                placeholder="Bank Name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                className="w-full p-2 border border-[var(--Teal,#378BA6)] rounded-lg text-[#A4A4A4] text-base font-normal leading-[20.8px] tracking-[0.08px] font-jost focus:outline-none focus:border-[var(--Teal,#378BA6)]"
                // required
              />
            </div>
            <div>
            <label className="w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Account Type *</label>
              <input
                type="text"
                placeholder="Account Type"
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
                className="w-full p-2 border border-[var(--Teal,#378BA6)] rounded-lg text-[#A4A4A4] text-base font-normal leading-[20.8px] tracking-[0.08px] font-jost focus:outline-none focus:border-[var(--Teal,#378BA6)]"
                // required
              />
            </div>
            <div>
                <label className="w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Account Number *</label>
              <input
                type="text"
                placeholder="Account Number"
                value={bankAccountNumber}
                onChange={(e) => setBankAccountNumber(e.target.value)}
                className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)]"
              />
              </div>
              <div>
                <label className="w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Branch Location*</label>
              <input
                type="text"
                placeholder="eg: Kolkata"
                value={bankBranch}
                onChange={(e) => setBankBranch(e.target.value)}
                className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)]"
              />
              </div>
              <div>
                <label className="w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">IFSC code*</label>
              <input
                type="text"
                placeholder="IFSC Code"
                value={bankIFSC}
                onChange={(e) => setBankIFSC(e.target.value)}
                className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)]"
              />
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="border border-[var(--Teal,#378BA6)] rounded-lg shadow-[6px_6px_20px_0px_rgba(0,0,0,0.12)] p-10">
            <h3 className="text-[#4F4F4F] text-[24px] font-semibold leading-[28px] w-full font-jost mb-6">AGREEMENT TERMS</h3>
            <ol className="list-item mb-6">
              <li className="text-gray-700 mb-5">
              <div className="flex gap-5">
                <img className="flex h-8 w-8" src={JDIcon} alt='JDIcon'/>
                <div className="text-[#4F4F4F] text-[18px] font-normal leading-[130%] tracking-[0.09px] font-jost">
                <span className=" flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[18px] font-medium leading-[130%] tracking-[0.08px]">Job Descriptions</span>
                JD will get white listed exactly in 24 hours if delivery is not made for the selected JD on the specified time.
                </div>
              </div>
                
              </li>
              <li className="text-gray-700 mb-5">
                <div className="flex gap-5">
                <img className=" flex h-8 w-8" src={CandidateIcon} alt="CandidateIcon" />
                <div className="text-[#4F4F4F] text-[18px] font-normal leading-[130%] tracking-[0.09px] font-jost">
                <span className=" flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[18px] font-medium leading-[130%] tracking-[0.08px]">Candidates</span>
                I agree to the terms and conditions set forth by the company.                  
                </div>
                </div>

              </li>
              <li className="text-gray-700 mb-5">
                <div className="flex gap-5">
                <img className="flex w-8 h-8" src={PayRollIcon} alt="PayRollIcon"/>
                <div className="text-[#4F4F4F] text-[18px] font-normal leading-[130%] tracking-[0.09px] font-jost">
                <span className="w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[18px] font-medium leading-[130%] tracking-[0.08px]">Payroll System</span>
                I understand that any false information may lead to the rejection of my application.
                </div>
                </div>
                
              </li>
            </ol>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="termsAndConditions"
                value={termsAndConditions}
                onChange={(e) => setTermsAndConditions(e.target.checked)}
                className=" h-5 8-5 form-checkbox text-[var(--Teal,#378BA6)] border-gray-300 rounded focus:ring-[var(--Teal,#378BA6)]"
              />
              <span className="text-[#4F4F4F] text-[18px] font-normal leading-[28px] font-jost">I have read and accept the<a href="#" className="text-[#378BA6] ml-2 text-[18px] font-normal leading-[28px] underline font-jost">Terms and Conditions</a>.</span>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-6">
          {currentStep > 0 && (
            <button
              onClick={handlePrevious}
              className="flex h-[52px] py-2 px-0 justify-center items-center gap-2 text-[#848484] text-center text-[24px] font-semibold leading-[28px] font-jost"
            >
              <IoIosArrowBack className="mt-1 mr-2"/>Back
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button
              onClick={handleNext}
              className="flex w-[150px] h-[52px] py-2 px-3 justify-center items-center gap-2 rounded-lg bg-[#378BA6] text-white text-center text-[24px] font-semibold leading-[28px] font-jost"
            >
              Next <IoIosArrowForward/>
            </button>
          ) : (
            <button onClick={handleSubmit}
            //  href="/Profile-Success"  
             className="flex w-[150px] h-[52px] py-2 px-3 justify-center items-center gap-2 rounded-lg bg-[#378BA6] text-white text-center text-[24px] font-semibold leading-[28px] font-jost">
              Submit <IoIosArrowForward/>
            </button>
          )}
        </div>
        </form>
      </div>
    </div>
  );
}

export default MultiStepForm;
