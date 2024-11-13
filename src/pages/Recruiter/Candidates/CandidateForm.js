import React, { useEffect, useState } from 'react';
import LocationIcon from '../../../Images/LocationIcon.png';
import DeleteIcon from '../../../Images/DeleteIcon.png';
import axios from 'axios';

const CandidateForm = () => {

  const [formData, setFormData] = useState({
    First_name: '',
    Last_name: '',
    Email: '',
    Contact_number: '',
    Current_location: '',
    Current_salary: '',
    Expected_salary: '',
    Job_Title: '',
    experiences: '',
    Reason_for_change: '',
    Notice_period: '',
    availabilityDate: '',
    // availabilityTime: '',
    Linkedin: '',
    Remarks: '',
    locked: false,
    Experience: [
      {
        Job_title: '',
        Company_name: '',
        Start_date: '',
        End_date: '',
        Is_current_employer: false
      }
    ],
    Education: [
      {
        Degree: '',
        Field_of_study: '',
        start_date: '',
        end_date: '',
        Is_current_education: false
      }
    ]
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.Experience = experiences;
    formData.Education = educations;

    try {
      console.log('Candidate Form= ', formData);

      const response = await axios.post('http://localhost:4000/api/candidate/postcandidate', formData);
      console.log(response);

      if (response.status === 201) {
        alert('Candidate Form Submittted Successfully !!!!');
      } else {
        alert("Failed Submitting the form");
      }


    } catch (error) {
      console.error('Error Subbmitting Form: ', error);
      alert('An error occoured while submitting the form.')
    }
  }


  // State for managing experiences and educations
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);

  // Handlers for adding new experience and education
  const addExperience = () => {
    setExperiences([...experiences, { Job_title: '', Company_name: '', Start_date: '', End_date: '', Is_current_employer: '' }]);
  };

  const addEducation = () => {
    setEducations([...educations, { Degree: '', Field_of_study: '', start_date: '', end_date: '', Is_current_education: '' }]);
  };

  // Handlers for updating experience and education fields
  const updateExperience = (index, field, value) => {
    const updatedExperiences = experiences.map((exp, i) =>
      i === index ? { ...exp, [field]: value } : exp
    );
    setExperiences(updatedExperiences);
  };

  const updateEducation = (index, field, value) => {
    const updatedEducations = educations.map((edu, i) =>
      i === index ? { ...edu, [field]: value } : edu
    );
    setEducations(updatedEducations);
  };

  useEffect(()=>{
    console.log(experiences);
    
  },[experiences])

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-4xl mx-auto">

      {/* Header */}
      <div className="flex p-2 px-4 justify-between items-center self-stretch rounded-lg bg-[#378BA6]/25">
        <h2 className="text-[#4F4F4F] text-center font-jost text-[20px] font-medium leading-[36px]">CANDIDATE FORM</h2>
        <div className='flex gap-3'>
          <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded hover:bg-gray-300 text-dark-grey text-center font-jost text-[16px] font-bold leading-[24px]">Export</button>
          <button className="text-gray-500">✕</button>
        </div>
      </div>
      <div className='bg-white p-4'>
        <form onSubmit={handleSubmit}>
          {/* Job Details */}
          <div className="mb-6 my-3">
            <p className="flex w-32 items-center justify-center px-2 py-1 mb-1 bg-gray-200 text-[#4F4F4F] rounded text-center text-sm font-normal leading-[18.2px] tracking-[0.07px]">JD ID: 12345678</p>
            <h3 className="flex flex-row justify-start my-3 self-stretch overflow-hidden text-[#4F4F4F] text-[20px] font-jost font-normal leading-[24px] whitespace-nowrap overflow-ellipsis h-6">Job Title: <span className="font-bold ml-1 text-[#303030]">Software Developer</span></h3>
            <p className="flex flex-row align-self-stretch overflow-hidden text-[#378BA6] text-[20px] font-jost font-normal leading-[28px] text-overflow-ellipsis">Company: <b> Tech Solutions </b> </p>
            <div className="mt-3 flex flex-row text-[#4F4F4F] font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px]" > <img src={LocationIcon} alt='LocationIcon' /> Location: Kharadi, Pune</div>
          </div>
          <div className='border border-[#378BA6] rounded-xl p-4'>
            {/* Personal Details */}
            <div className="mt-8 border border-[#378BA6] rounded-xl p-4 mb-4">
              <p className="flex items-center self-stretch rounded-[4px] bg-[#C3DCE4] px-3 py-2 text-[#115469] -text text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] p-1.5">PERSONAL DETAILS</p>
              <div className="px-4 py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className=' w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'> First Name *</label>
                  <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                    type="text"
                    placeholder="First Name"
                    value={formData.First_name}
                    onChange={(e) => setFormData({ ...formData, First_name: e.target.value })}
                  />
                </div>
                <div>
                  <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Last Name *</label>
                  <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                    type="text"
                    placeholder="Last Name"
                    value={formData.Last_name}
                    onChange={(e) => setFormData({ ...formData, Last_name: e.target.value })}
                  />
                </div>
                <div>
                  <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Current Location *</label>
                  <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                    placeholder="Current Location"
                    value={formData.Current_location}
                    onChange={(e) => setFormData({ ...formData, Current_location: e.target.value })}
                  >
                    <option />
                    <option value='Kolkata'>Kolkata</option>
                    <option value='Delhi'>Delhi</option>
                    <option value='Mumbai'>Mumbai</option>
                    <option value='Pune'>Pune</option>
                  </select>
                </div>
                <div>
                  <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Email ID *</label>
                  <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                    type="text"
                    placeholder="Email ID"
                    value={formData.Email}
                    onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
                  />

                </div>
                <div>
                  <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Contact Number *</label>
                  <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                    type="text"
                    placeholder="Contact Number"
                    value={formData.Contact_number}
                    onChange={(e) => setFormData({ ...formData, Contact_number: e.target.value })}
                  />
                </div>
                <div>
                  <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Job Title *</label>
                  <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                    type="text"
                    placeholder="Job Title"
                    value={formData.Job_Title}
                    onChange={(e) => setFormData({ ...formData, Job_Title: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <hr />

            {/* Experience */}
            <div className="mt-8 border border-[#378BA6] rounded-xl p-4 mb-4">
              <p className="flex items-center self-stretch rounded-[4px] bg-[#C3DCE4] px-3 py-2 text-[#115469] -text text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] p-1.5">EXPERIENCE</p>

              {experiences.map((experience, index) => (
                <div key={index} className="pt-8 pb-4 px-4 mt-4 border border-[#378BA6] rounded-xl grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'> Job Title *</label>
                    <input
                      type="text"
                      value={experience.Job_Title}
                      onChange={(e) => updateExperience(index, 'Job_title', e.target.value)}
                      placeholder="Job Title"
                      className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                    />
                  </div>
                  <div>
                    <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Company Name</label>
                    <input
                      type="text"
                      value={experience.Company_name}
                      onChange={(e) => updateExperience(index, 'Company_name', e.target.value)}
                      placeholder="Company Name"
                      className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                    />
                  </div>
                  <div>
                    <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Start Date</label>
                    <input
                      type="date"
                      value={experience.Start_date}
                      onChange={(e) => updateExperience(index, 'Start_date', e.target.value)}
                      placeholder="Start Date"
                      className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                    />
                  </div>
                  <div>
                    <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>End Date</label>
                    <input
                      type="date"
                      value={experience.End_date}
                      onChange={(e) => updateExperience(index, 'End_date', e.target.value)}
                      placeholder="End Date"
                      className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                    />
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        checked={experience.Is_current_employer}
                        onChange={(e) => updateExperience(index, 'Is_current_employer', e.target.value)}
                      />
                      Is Current Employer
                    </label>
                  </div>
                  <button
                    type="button"
                    className=" mt-4 flex"
                    onClick={() => setExperiences(experiences.filter((_, i) => i !== index))}
                  >
                    <img src={DeleteIcon} alt='Delete Icon' />
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="bg-[#378BA6] text-white px-4 py-2 rounded font-jost text-[16px] font-bold leading-[24px] w-full mt-4"
                onClick={addExperience}
              >
                Add Experience
              </button>
            </div>

            {/* Education */}
            <div className="mt-8 border border-[#378BA6] rounded-xl p-4 mb-4">
              <p className="w-full flex items-center rounded-[4px] bg-[#C3DCE4] px-3 py-2 text-[#115469] text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] p-1.5">EDUCATION</p>

              {educations.map((education, index) => (
                <div key={index} className="pt-8 pb-4 px-4 mt-4 border border-[#378BA6] rounded-xl grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Field of Study *</label>
                    <input
                      type="text"
                      value={education.Field_of_study}
                      onChange={(e) => updateEducation(index, 'Field_of_study', e.target.value)}
                      placeholder="Field of Study"
                      className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                    />
                  </div>
                  <div>
                    <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Degree *</label>
                    <input
                      type="text"
                      value={education.Degree}
                      onChange={(e) => updateEducation(index, 'Degree', e.target.value)}
                      placeholder="Degree"
                      className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                    />
                  </div>
                  <div>
                    <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Start Date *</label>
                    <input
                      type="date"
                      value={education.start_date}
                      onChange={(e) => updateEducation(index, 'start_date', e.target.value)}
                      placeholder="Start Date"
                      className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                    />
                  </div>
                  <div>
                    <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>End Date *</label>
                    <input
                      type="date"
                      value={education.end_date}
                      onChange={(e) => updateEducation(index, 'end_date', e.target.value)}
                      placeholder="End Date"
                      className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                    />
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        checked={education.Is_current_education}
                        onChange={(e) => updateExperience(index, 'Is_current_education', e.target.value)}
                      />
                      Is Current Education
                    </label>
                  </div>
                  <button
                    type="button"
                    className=" mt-4 flex"
                    onClick={() => setEducations(educations.filter((_, i) => i !== index))}
                  >
                    <img src={DeleteIcon} alt='Delete Icon' />
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="bg-[#378BA6] text-white px-4 py-2 rounded font-jost text-[16px] font-bold leading-[24px] w-full mt-4"
                onClick={addEducation}
              >
                Add Education
              </button>
            </div>

            <hr />

            {/* Other Details */}
            <div className="mt-8 border border-[#378BA6] rounded-xl p-4 mb-4">
              <h4 className="flex items-center self-stretch rounded-[4px] bg-[#C3DCE4] px-3 py-2 text-[#115469] -text text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] p-1.5">OTHER DETAILS</h4>
              <div className="px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Current Salary *</label>
                  <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                    type="text"
                    placeholder="Current Salary"
                    value={formData.Current_salary}
                    onChange={(e) => setFormData({ ...formData, Current_salary: e.target.value })}
                  />
                </div>
                <div>
                  <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Expected Salary *</label>
                  <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                    type="text"
                    placeholder="Expected Salary "
                    value={formData.Expected_salary}
                    onChange={(e) => setFormData({ ...formData, Expected_salary: e.target.value })} />
                </div>
                <div>
                  <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Reason for change*</label>
                  <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                    type="text"
                    placeholder="Reason for change"
                    value={formData.Reason_for_change}
                    onChange={(e) => setFormData({ ...formData, Reason_for_change: e.target.value })} />

                </div>
                <div>
                  <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Notice Period*</label>
                  <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                    placeholder="Notice Period"
                    value={formData.Notice_period}
                    onChange={(e) => setFormData({ ...formData, Notice_period: e.target.value })}
                  >
                    <option />
                    <option value='15 days'>15 days</option>
                    <option value='1 Month'>1 Month</option>
                    <option value='2 Month'>2 Month</option>
                    <option value='3 Month'>3 Month</option>
                  </select>
                </div>
                <div>
                  <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Total Experience*</label>
                  <select className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                    placeholder="Experience"
                    value={formData.Total_Experiences}
                    onChange={(e) => setFormData({ ...formData, Total_Experiences: e.target.value })}
                  >
                    <option />
                    <option value='fresher'>Fresher</option>
                    <option value='1-3 Years'>1-3 Years</option>
                    <option value='3-5 Years'>3-5 Years</option>
                    <option value='5-8 Years'>5-8 Years</option>
                    <option value='8-12 Years'>8-12 Years</option>
                    <option value='12+ Years'>12+ Years</option>
                  </select>
                </div>
                <div>
                <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Availability for Interview *</label>
                  <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]"
                    type="date"
                    placeholder="Date"
                    value={formData.availabilityDate}
                    onChange={(e) => setFormData({ ...formData, availabilityDate: e.target.value })} />
                    </div>
              </div>
            </div>

            <hr />

            {/* Documents */}
            <div className="mt-8 border border-[#378BA6] rounded-xl p-4 mb-4">
              <h4 className="flex items-center self-stretch rounded-[4px] bg-[#C3DCE4] px-3 py-2 text-[#115469] -text text-center font-jost text-[16px] font-normal leading-[20.8px] tracking-[0.08px] p-1.5">DOCUMENTS</h4>
              <div className="px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* <div>
                  <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]'>Resume/CV *</label>
                  <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="file" placeholder="Resume/CV" />
                </div> */}
                <div>
                  <label className='w-full flex flex-col justify-center h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-bold leading-[130%] tracking-[0.08px]'>Upload Website Link if Applicable</label>
                  <input className="w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" type="text" placeholder="Website Link"
                    value={formData.Linkedin}
                    onChange={(e) => setFormData({ ...formData, Linkedin: e.target.value })} />
                </div>
                <textarea className=" p-2 mt-4 w-full border border-[var(--Teal,#378BA6)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--Teal,#378BA6)] text-[var(--Teal,#378BA6)]" placeholder="Remarks"
                  value={formData.Remarks}
                  onChange={(e) => setFormData({ ...formData, Remarks: e.target.value })}
                />
              </div>

            </div>

            <hr />

            {/* Footer */}
            <div className="mt-6 px-4 flex justify-between items-center">
              <button className="flex p-2 px-5 h-14 justify-center items-center gap-2 text-center text-[20px] text-[var(--dark-grey,#4F4F4F)] border border-[#A4A4A4] font-bold leading-[36px] rounded-lg  bg-white font-jost">Cancel</button>
              <button type='submit' className="flex p-2 px-5 justify-center items-center gap-2 self-stretch rounded-lg bg-teal bg-[var(--Teal,#378BA6)] text-white text-center text-[24px] font-semibold leading-[28px] font-jost">Save</button>
            </div>
          </div>
        </form>
      </div>

    </div>

  );
};

export default CandidateForm;
