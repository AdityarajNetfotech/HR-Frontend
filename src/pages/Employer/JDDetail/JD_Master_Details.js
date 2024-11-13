import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BsDownload } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { FaExternalLinkAlt } from "react-icons/fa";
import { PiChatsBold } from "react-icons/pi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { FaSackDollar } from "react-icons/fa6";


const JD_Master_Details = () => {
    const { id } = useParams();
    const [jdDetails, setJdDetails] = useState(null);
    const [candidateDetails, setCandidateDetails] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchJdDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/jd/${id}`);
                setJdDetails(response.data.jd);
                console.log('Fetched JD Details:', response.data.jd);

                if (response.data.jd.candidates.length > 0) {
                    const candidatesPromises = response.data.jd.candidates.map(candidateId =>
                        axios.get(`http://localhost:4000/api/candidate/${candidateId}`)
                    );

                    const candidatesResponses = await Promise.all(candidatesPromises);
                    const candidatesData = candidatesResponses.map(res => res.data);
                    setCandidateDetails(candidatesData);
                    console.log('Fetched Candidate Details:', candidatesData);
                }
            } catch (error) {
                setErrorMessage('Error fetching JD details. Please try again later.');
                console.error('Error fetching JD details:', error);
            }
        };

        fetchJdDetails();
    }, [id]);

    if (errorMessage) {
        return <p className="text-red-500">{errorMessage}</p>;
    }

    if (!jdDetails) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div>
                {/* <h1>Job Details for JD ID: {jdDetails._id}</h1>
                <h2>Job Title: {jdDetails.job_title}</h2>
                <p>Company: {jdDetails.company_Name}</p>
                <p>Location: {jdDetails.location}</p>
                <p>Salary: {jdDetails.salary}</p>
                <p>Experience Required: {jdDetails.experience}</p>
                <p>Skills Required: {jdDetails.skills_required}</p>
                <p>Job Type: {jdDetails.job_type}</p>
                <p>Created At: {new Date(jdDetails.createdAt).toLocaleDateString()}</p>
                <p>Delivery Deadline: {new Date(jdDetails.delivery_deadline).toLocaleDateString()}</p>
                <p>Status: {jdDetails.jd_status}</p>
                <h3>Additional Comments:</h3>
                <p>{jdDetails.lockedBy}</p>
                <p>{jdDetails.additional_comments}</p> */}

                <h3>Candidates:</h3>
                <ul>
                    {candidateDetails.length > 0 ? (
                        candidateDetails.map((candidatesData, index) => (
                            <li key={index}>
                                <h4>Candidate ID: {candidatesData.candidate._id}</h4>
                                <p>Name: {candidatesData.candidate.First_name} {candidatesData.candidate.Last_name}</p>
                                <p>Email: {candidatesData.candidate.Email}</p>
                                {/* <p>Mobile: {candidate.Mobile || "N/A"}</p>
                                <p>Current Location: {candidate.Current_location}</p>
                                <p>Job Title: {candidate.Job_Title || "N/A"}</p>
                                <p>Total Experience: {candidate.Total_Experiences}</p>
                                <p>Current Salary: {candidate.Current_salary}</p>
                                <p>Expected Salary: {candidate.Expected_salary}</p>
                                <p>Notice Period: {candidate.Notice_period}</p>
                                <p>Availability Date: {candidate.availabilityDate ? new Date(candidate.availabilityDate).toLocaleDateString() : 'N/A'}</p>
                                <p>LinkedIn: <a href={candidate.Linkedin} target="_blank" rel="noopener noreferrer">{candidate.Linkedin}</a></p>
                                <p>Reason for Change: {candidate.Reason_for_change || "N/A"}</p>
                                <p>Remarks: {candidate.Remarks || "N/A"}</p> */}
                            </li>
                        ))
                    ) : (
                        <li>No candidates available.</li>
                    )}
                </ul>
            </div>

            <div className='mx-3'>
                <div className='flex flex-row justify-between bg-[#378BA64D] p-2 my-2 rounded-xl'>
                    <p className='text-center text-dark-grey text-20 font-jost font-medium leading-9'>Job Description Detail</p>
                    <div className='flex flex-row justify-between items-center gap-3'>
                        <BsDownload />
                        <RxCross1 />
                    </div>
                </div>

                <div className='flex flex-row p-2 px-4 justify-center items-center rounded-xl bg-gray-300 max-w-fit mt-3'>
                    <p>JD ID:</p>{jdDetails._id}
                </div>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row items-center gap-2'>
                        <FaExternalLinkAlt className='bg-[#EAF1F3] h-12 w-12 p-3' />
                        <div>
                            <div className='flex flex-row'><p>Job Title:</p> {jdDetails.job_title}</div>
                            <div className='flex flex-row'><p>Company:</p>{jdDetails.company_Name}</div>
                        </div>
                    </div>
                    <div className='flex flex-row'><p>Exp: </p><div className='border rounded-xl w-24 h-7 items-center text-center'>{jdDetails.experience}</div></div>
                    <div>
                        <div className='flex flex-row gap-2'>{new Date(jdDetails.createdAt).toLocaleDateString()}<div className='w-[0.737px] h-[21px] bg-[#848484]'></div><p>Upload date</p></div>
                        <div className='flex flex-row gap-2'>{new Date(jdDetails.delivery_deadline).toLocaleDateString()}<div className='w-[0.737px] h-[21px] bg-[#848484]'></div><p>Deadline date</p></div>
                    </div>
                </div>
                <div className='bg-[#ECB01533] p-3 rounded-xl'>
                    <p>Recruiter Details:</p>
                    <hr />
                    <div className='flex flex-row gap-2 items-center justify-between'>
                        <div className='flex flex-row gap-2 items-center'>
                            <PiChatsBold className='h-10 w-10 p-2 bg-white rounded-full' />
                            <div className='w-[0.737px] h-[42px] bg-[#848484]'></div>
                            <div>
                                <p>Samuel Matthew</p>
                                <div><p>ID: </p>{jdDetails.lockedBy}</div>
                            </div>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <div>10</div>
                            <div className='w-[0.737px] h-[42px] bg-[#848484]'></div>
                            <p>Candidates Submitted</p>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <p>Rate User</p>
                            <div className='w-[0.737px] h-[42px] bg-[#848484]'></div>
                            <p>... star </p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    {candidateDetails.length > 0 ? (
                        candidateDetails.map((candidatesData, index) => (
                            <div className=' bg-[#EAF1F3] p-5 mb-5'>
                                <div className=' flex flex-row justify-between'>
                                    <div>
                                        <div>{candidatesData.candidate.First_name} {candidatesData.candidate.Last_name}</div>
                                        <div>{candidatesData.candidate._id}</div>
                                    </div>
                                    <div className=' flex flex-row gap-10'>
                                        <div className=' flex flex-row items-center'><p>Status:</p><div className='border rounded-xl max-h-fit p-2'>{jdDetails.jd_status}</div></div>
                                        <div className=' flex flex-row items-center'><p>Exp: </p><div className='border rounded-xl max-h-fit p-2'>{candidatesData.candidate.Total_Experiences}</div></div>
                                    </div>
                                </div>
                                <hr />
                                <div className=' flex flex-row items-center justify-between'>
                                    <div className=' flex flex-row items-center justify-between w-[70%]'>
                                        <div className=' flex flex-row items-center'><IoBriefcaseOutline /><p>Job Title:</p></div>
                                        <div className=' flex flex-row items-center'><SlLocationPin /><p>Location:</p>{candidatesData.candidate.Current_location}</div>
                                        <div className=' flex flex-row items-center'><FaSackDollar /><p>Expected Salary:</p>{candidatesData.candidate.Expected_salary}</div>
                                    </div>
                                    <div>
                                        <p>.....</p>
                                    </div>
                                </div>
                                <hr />
                                <div className=' flex flex-row justify-between'>
                                    <div className=' flex flex-row items-center gap-1'><p>Remarks:</p><div className='border rounded-xl max-h-fit p-2'>{candidatesData.candidate.Remarks}</div></div>
                                    <div className=' flex flex-row gap-10 '>
                                        <div className='flex w-40 h-11 p-2 justify-center items-center gap-2 rounded-lg bg-[#A4A4A4] text-white text-center font-jost text-2xl font-semibold leading-7'>Select</div>
                                        <div className='flex w-40 h-11 p-2 justify-center items-center gap-2 rounded-lg bg-[#848484] text-white text-center font-jost text-2xl font-semibold leading-7'>Reject</div>
                                    </div>
                                </div>
                            </div>

                        ))
                    ) : (
                        <li>No candidates available.</li>
                    )}
                </div>
            </div>
        </>
    );
};

export default JD_Master_Details;
