import React ,{useState} from 'react'
// import EmployerCard from './EmployerCard'
import EmployerList from './EmployerList'

const EmployerDetailes = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const jobs = [
    {
      id: '12345678',
      name: 'Samuel Matthew',
      title: 'Graphic Designer',
      company: 'Neftotech Solutions',
      location: 'Kharadi, Pune',
      industry: 'Design',
      experience: '02 Years',
      salary: '1,60,000/- p.a.',
      type: 'Full time, Hybrid',
      interviewRounds: '04',
      noticePeriod: '01 month',
      priority: 'On Priority',
      submissionsRequired: '02',
      uploadedOn: '15th July\'24, 10:30am',
      deliveryRequired: '30th July\'24',
      replacementPeriod: '05 days',
      skills: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis.',
      comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis.',
      status: 'Open',
      payout: '1500/-',
      absoluteValue: '1500/-',
      signUpRate: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis.',
      paymentTerms: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis.',
      ],
      importantNotes: [
        'User Rating will drop in case the assured delivery date is missed, also the JD will be given to other users.',
        'Please note: User Rating will drop in case the assured delivery date is missed, also the JD will be given to other users.',
      ],
    },
    {
      id: '34567890',
      name: 'Samuel M',
      title: 'Marketing Manager',
      company: 'BrightFuture Ltd.',
      location: 'Mumbai, Maharashtra',
      industry: 'Marketing',
      experience: '05 Years',
      salary: '3,00,000/- p.a.',
      type: 'Full time, On-site',
      interviewRounds: '02',
      noticePeriod: '01 month',
      priority: 'Medium',
      submissionsRequired: '03',
      uploadedOn: '10th July\'24, 11:00am',
      deliveryRequired: '05th August\'24',
      replacementPeriod: '10 days',
      skills: 'Experience with digital marketing strategies, SEO, and social media management.',
      comments: 'Looking for a candidate with strong leadership skills and a track record of successful campaigns.',
      status: 'Closed',
      payout: '2500/-',
      absoluteValue: '2500/-',
      signUpRate: 'Please include references from previous employers in your application.',
      paymentTerms: [
        'Payment upon successful hiring of candidates.',
        'All invoices to be submitted within 7 days of placement.'
      ],
      importantNotes: [
        'Experience with international markets is a plus.',
        'Candidates should be prepared for a comprehensive interview process.'
      ],
    },
    {
      id: '45678901',
      name: 'S Matthew',
      title: 'Data Analyst',
      company: 'DataSolutions Inc.',
      location: 'Hyderabad, Telangana',
      industry: 'Data Analysis',
      experience: '02 Years',
      salary: '1,80,000/- p.a.',
      type: 'Full time, Hybrid',
      interviewRounds: '04',
      noticePeriod: '01 month',
      priority: 'High',
      submissionsRequired: '02',
      uploadedOn: '25th July\'24, 02:00pm',
      deliveryRequired: '20th August\'24',
      replacementPeriod: '05 days',
      skills: 'Strong knowledge of SQL, Excel, and data visualization tools like Tableau.',
      comments: 'Candidate should have analytical thinking and the ability to work with large datasets.',
      status: 'Rework',
      payout: '1600/-',
      absoluteValue: '1600/-',
      signUpRate: 'Candidates must have experience in a similar role.',
      paymentTerms: [
        'Payments will be made after successful hiring.',
        'Invoices must be submitted with detailed candidate information.'
      ],
      importantNotes: [
        'Candidates should be proficient in statistical analysis.',
        'Experience with Python or R is an advantage.'
      ],
    },
    // Add more job data here
  ];

  return (
    <div className="min-h-screen max-w-8xl bg-white p-4 gap-4 flex items-start ">
      <div className="w-full">
        {/* <JobFilters/> */}
        <EmployerList jobs={jobs} onJobClick={handleJobClick}/>
      </div>
    </div>
  );
};

export default EmployerDetailes;

