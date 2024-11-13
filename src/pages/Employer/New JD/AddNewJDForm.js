import React, { useState } from 'react';
import axios from 'axios';
import { RxCross1 } from "react-icons/rx";

const AddNewJDForm = () => {

    const [job_title, setjob_title] = useState('');
    const [company_Name, setcompany_Name] = useState('');
    const [experience, setexperience] = useState('');
    const [industry, setindustry] = useState('IT'); // Default value
    const [location, setlocation] = useState('');
    const [work_experience, setwork_experience] = useState('');
    const [salary, setsalary] = useState('');
    const [notice_period, setnotice_period] = useState('');
    const [interview_rounds, setinterview_rounds] = useState('');
    const [job_type, setjob_type] = useState('');
    const [priority_tag, setpriority_tag] = useState('Normal'); // Default value
    const [delivery_deadline, setdelivery_deadline] = useState('');
    const [replacement_period, setreplacement_period] = useState('');
    const [no_of_vacancy, setno_of_vacancy] = useState('');
    const [absolute_payout, setabsolute_payout] = useState('');
    const [delivery_payout, setdelivery_payout] = useState('');
    const [sign_up_rate, setsign_up_rate] = useState('');
    const [skills_required, setskills_required] = useState('');
    const [additional_comments, setadditional_comments] = useState('');

    const getAddNewJDForm = () => {
        return {
            job_title, company_Name, experience, industry, location, work_experience, salary, notice_period,
            interview_rounds, job_type, priority_tag, delivery_deadline, replacement_period,
            no_of_vacancy, absolute_payout, delivery_payout,sign_up_rate, additional_comments
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const AddNewJDForm = getAddNewJDForm();


        try {
            console.log('JD Data', AddNewJDForm);

            const response = await axios.post('http://localhost:4000/api/jd/create', AddNewJDForm);
            console.log(response);
            
            if (response.status === 201) {
                alert('JD Form Submitted Successfully  !!!');
            } else {
                alert('Failed to submit form: ');
            }

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form.');
        }
    }
    return (
        <div className="p-6 bg-gray-100 min-h-screen rounded-lg shadow-lg mx-auto">
            <div className='flex flex-row justify-between bg-[#378BA64D] py-2 px-4 rounded-xl mb-8'>
                <h1 className="text-center text-[20px] font-medium leading-[36px] text-[#4F4F4F] font-jost">Job Description Form</h1>
                <RxCross1 className='mt-2' />
            </div>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">


                {/* Job Details */}
                <div className='border p-6 mb-4 rounded-xl'>
                    <p className=' text-[20px] font-medium leading-[36px] text-[#4F4F4F] font-jost bg-[#378BA64D] py-1 px-4 rounded-xl mb-4'>JOB DETAILS</p>
                    <div className="grid grid-cols-3 gap-4 mb-4">

                        <div>
                            <label className="block mb-1">Job Title *</label>
                            <input
                                type="text"
                                name="jobTitle"
                                value={job_title}
                                onChange={(e) => setjob_title(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                                placeholder="Enter Job Title"
                            />
                        </div>

                        <div>
                            <label className="block mb-1">Company Name *</label>
                            <input
                                type="text"
                                name="companyName"
                                value={company_Name}
                                onChange={(e) => setcompany_Name(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                                placeholder="Enter Company Name"
                            />
                        </div>

                        <div>
                            <label className="block mb-1">Experience *</label>
                            <select
                                name="experience"
                                value={experience}
                                onChange={(e) => setexperience(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                            >
                                <option value="fresher">Fresher</option>
                                <option value="1-3 Years">1-3 Years</option>
                                <option value="3-5 Years">3-5 Years</option>
                                <option value="5-8 Years">5-8 Years</option>
                                <option value="8-12 Years">8-12 Years</option>
                                <option value="12+ Years">12+ Years</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-1">Industry *</label>
                            <select
                                name="industry"
                                value={industry}
                                onChange={(e) => setindustry(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                            >
                                <option value="IT">IT</option>
                                <option value="Software">Software</option>
                                <option value="Testing">Testing</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-1">Location *</label>
                            <input
                                type="text"
                                name="location"
                                value={location}
                                onChange={(e) => setlocation(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                                placeholder="Enter Location"
                            />
                        </div>

                        <div>
                            <label className="block mb-1">Work Experience *</label>
                            <input
                                type="text"
                                name="workExperience"
                                value={work_experience}
                                onChange={(e) => setwork_experience(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                                placeholder="Enter Work Experience"
                            />
                        </div>

                        <div>
                            <label className="block mb-1">Salary *</label>
                            <input
                                type='text'
                                name="salary"
                                value={salary}
                                onChange={(e) => setsalary(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                                placeholder='Enter Salary'
                            />
                        </div>

                        <div>
                            <label className="block mb-1">Notice Period *</label>
                            <select
                                name="noticePeriod"
                                value={notice_period}
                                onChange={(e) => setnotice_period(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                            >
                                <option value="15days">15 days</option>
                                <option value="1">1 Month</option>
                                <option value="2">2 Months</option>
                                <option value="3">3 Months</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-1">Interview Rounds *</label>
                            <select
                                name="interviewRounds"
                                value={interview_rounds}
                                onChange={(e) => setinterview_rounds(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                            >
                                <option value="1">1 Round</option>
                                <option value="2">2 Rounds</option>
                                <option value="3">3 Rounds</option>
                                <option value="4">4 Rounds</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-1">Job Type*</label>
                            <select
                                name="Job Types"
                                value={job_type}
                                onChange={(e) => setjob_type(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                            >
                                <option />
                                <option value="Full Time">Full Time</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="On Site">On Site</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Submission Details */}
                <div className='border p-6 mb-4 rounded-xl'>
                    <p className=' text-[20px] font-medium leading-[36px] text-[#4F4F4F] font-jost bg-[#378BA64D] py-1 px-4 rounded-xl mb-4'>SUBMISSION DETAILS</p>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                            <label className="block mb-1">Priority Tag *</label>
                            <select
                                name="priorityTag"
                                value={priority_tag}
                                onChange={(e) => setpriority_tag(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                            >
                                <option value="Normal">Normal</option>
                                <option value="Hot">Hot</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-1">Delivery Deadline *</label>
                            <input
                                type="date"
                                name="deliveryDeadline"
                                value={delivery_deadline}
                                onChange={(e) => setdelivery_deadline(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                            />
                        </div>

                        <div>
                            <label className="block mb-1">Replacement Period *</label>
                            <input
                                type="text"
                                name="replacementPeriod"
                                value={replacement_period}
                                onChange={(e) => setreplacement_period(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block mb-1">No. of Vacancy *</label>
                            <input
                            type='text'
                                name="vacancy"
                                value={no_of_vacancy}
                                onChange={(e) => setno_of_vacancy(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                                placeholder='No of Vacancy'
                            />
                        </div>
                        <div>
                            <label className="block mb-1">Sign Up Rate*</label>
                            <input
                            type='text'
                                name="SignUp rate"
                                value={sign_up_rate}
                                onChange={(e) => setsign_up_rate(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                                placeholder='Sign Up Rate'
                            />
                        </div>
                        <div>
                            <label className="block mb-1">Skills Required*</label>
                            <input
                            type='text'
                                name="Skills Required"
                                value={skills_required}
                                onChange={(e) => setskills_required(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                                placeholder='Skills Required'
                            />
                        </div>
                    </div>
                </div>
                <div className='border p-6 mb-4 rounded-xl'>
                    <p className=' text-[20px] font-medium leading-[36px] text-[#4F4F4F] font-jost bg-[#378BA64D] py-1 px-4 rounded-xl mb-4'>PAYOUT DETAILS</p>
                    {/* Payout Details */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block mb-1">Absolute Payout *</label>
                            <input
                                type="text"
                                name="absolutePayout"
                                value={absolute_payout}
                                onChange={(e) => setabsolute_payout(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                                placeholder="Enter Absolute Payout"
                            />
                        </div>

                        <div>
                            <label className="block mb-1">Delivery Payout *</label>
                            <input
                                type="text"
                                name="deliveryPayout"
                                value={delivery_payout}
                                onChange={(e) => setdelivery_payout(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                                placeholder="Engineering - Software"
                            />
                        </div>
                    </div>
                </div>

                <div className='border p-6 rounded-xl'>
                    <p className=' text-[20px] font-medium leading-[36px] text-[#4F4F4F] font-jost bg-[#378BA64D] py-1 px-4 rounded-xl mb-4'>ADDITIONAL COMMENTS</p>
                    {/* Remarks */}
                    <div className="mb-4">
                        <label className="block mb-1">Remarks</label>
                        <textarea
                            name="remarks"
                            value={additional_comments}
                            onChange={(e) => setadditional_comments(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            placeholder="Enter Remarks"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-4">
                    <button type="button" className="px-4 py-2 bg-gray-200 rounded">
                        Save for Later
                    </button>
                    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                        Upload
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddNewJDForm
