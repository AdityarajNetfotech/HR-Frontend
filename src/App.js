import './App.css';
import MainLandingPage from './Components/LandingPage/MainLandingPage';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import AboutUs from './Components/AboutUs/AboutUs';
import LoginForm from './Components/User Management/LoginForm';
import SignupForm from './Components/User Management/SignupForm';
import OTPVerification from './Components/User Management/OTPVerification';
import SignupSuccess from './Components/User Management/SignupSuccess';
import MultiStepForm from './Components/User Management/MultiStepForm';
import ProfileSuccess from './Components/User Management/ProfileSuccess';
import PersonalInfo from './pages/Recruiter/profile/PersonalInfo';
import ResetPassword from './pages/Recruiter/profile/ResetPassword';
import JDList from './pages/Recruiter/JD/JDList';
import Dashboard from './pages/Recruiter/Dashboard/Dashboard'
import LockForMeModal from './pages/Recruiter/JD/LockForMeModal';
import SignupSuccessJD from './pages/Recruiter/JD/SignupSuccessJD';
import JDSummary from './pages/Recruiter/JD/JDSummary';
import FinanceList from './pages/Recruiter/Finance/FinanceList';
import CandidateForm from './pages/Recruiter/Candidates/CandidateForm';
import FinanceCandidate from './pages/Recruiter/Finance/FinanceCandidate';
import FinancePayroll from './pages/Recruiter/Finance/FinancePayroll';
import Candidates from './pages/Recruiter/Candidates/Candidates';
import AddCandidates from './pages/Recruiter/Candidates/AddCandidates';
import CandidatesOne from './pages/Recruiter/CandidatesDatabase/CandidatesOne';
import SelectFromJD from './pages/Recruiter/CandidatesDatabase/SelectFromJD';
import AddCandidateModal from './pages/Recruiter/Candidates/Modals/AddCandidateModal';
import SubmitCandidateModal from './pages/Recruiter/Candidates/Modals/SubmitCandidateModal';
import CandidateIncompleteModal from './pages/Recruiter/Candidates/Modals/CandidateIncompleteModal';
import CandidateAddedModal from './pages/Recruiter/Candidates/Modals/CandidateAddedModal';
import CandidateFeedback from './pages/Recruiter/Candidates/Modals/CandidateFeedback';
import FinanceSummery from './pages/Recruiter/Finance/FinanceSummery';
// 
import EmployerJd from './pages/Employer/EmployerData/EmployerJd'
import EmployerFile from './pages/Employer/EmployerData/EmployerFile';
// import CandidateCard from './pages/Employer/DashBoard/CandidateCard';
import JobCard from './pages/Employer/DashBoard/JobsCard';
import EmpDashboard from './pages/Employer/DashBoard/Dashboard';
import EmpJDdetail from './pages/Employer/JDDetail/JDdetail';
import AddNewJDForm from './pages/Employer/New JD/AddNewJDForm';
import SelectCandidate from './pages/Recruiter/CandidatesDatabase/SelectCandidate';
import EmpCandidates from './pages/Employer/Candidates/EmpCandidates';
import EmpJDList from './pages/Employer/New JD/EmpJDList';
import EmpJDMaster from './pages/Employer/JDDetail/EmpJDMaster';
import JD_Master_Details from './pages/Employer/JDDetail/JD_Master_Details';
import Admin_About_Us from './pages/Admin/About Us/Admin_About_Us';
import Admin_BankInfo from './pages/Admin/Profile/Admin_BankInfo';
import Admin_PersonalInfo from './pages/Admin/Profile/Admin_PersonalInfo';
import Admin_Profile from './pages/Admin/Profile/Admin_Profile';
import Admin_Reset_Password from './pages/Admin/Profile/Admin_Reset_Password';
import Admin_Finance_Invoice from './pages/Admin/Finance/Admin_Finance_Invoice';
import Admin_Finance_JD_Details from './pages/Admin/Finance/Admin_Finance_JD_Details';
import Adminjds from './pages/Admin/AllJds/Adminjds';
import AdminSummery from './pages/Admin/AllJds/AdminSummery';
import AdminDashboard from './pages/Admin/Dashboard/AdminDashboard';
import AdminEmployerfile from './pages/Admin/EmployerMaster/AdminEmployerfile';
import EmployerMaster from './pages/Admin/EmployerMaster/EmployerMaster';
import Admin_Finance from './pages/Admin/Finance/Admin_Finance';
import AdminEmployerMaster from './pages/Admin/EmployerMaster/EmployerMaster'
import AdminRecruterMaster from './pages/Admin/RecruterMaster/AdminRecruterMaster'
import ChatSupport from './pages/Recruiter/ChatSupport/ChatSupport';
import EmpAbout from './Components/EmpAboutUs/EmpAbout'
import AdminSidebar from './pages/global/AdminSidebar';
import AdminID from './pages/global/AdminID';
import ProtectedRoute from './Components/User Management/ProtectedRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/protectedroute' element={<ProtectedRoute />} />


          <Route path='/' element={<MainLandingPage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/Signup' element={<SignupForm />} />
          <Route path='/Signup-Success' element={<SignupSuccess />} />
          <Route path='/otp' element={<OTPVerification />} />
          <Route path='/Profile-Success' element={<ProfileSuccess />} />
          <Route path='/Multiform' element={<MultiStepForm />} />
          <Route path='/ResetPassword' element={<ResetPassword />} />
          <Route path='/Profile-Recruiter' element={<PersonalInfo />} />





          <Route path='/JDSignUpSuccess' element={<SignupSuccessJD />} />
          <Route path='/FinanceList' element={<FinanceList />} />
          <Route path='/FinanceCandidate' element={<FinanceCandidate />} />
          <Route path='/FinancePayroll' element={<FinancePayroll />} />
          <Route path='/Candidates' element={<Candidates />} />
          <Route path='/AddCandidateModal' element={<AddCandidateModal />} />
          <Route path='/SubmitCandidateModal' element={<SubmitCandidateModal />} />
          <Route path='/CandidateIncompleteModal' element={<CandidateIncompleteModal />} />
          <Route path='/CandidateAddedModal' element={<CandidateAddedModal />} />
          <Route path='/CandidateFeedback' element={<CandidateFeedback />} />
          {/* <Route path='/CandidateCard' element={<CandidateCard />} /> */}
          <Route path='/CandidateJobCard' element={<JobCard />} />
          <Route path='/SelectCandidate' element={<SelectCandidate />} />
          <Route path='/FinanceSummery' element={<FinanceSummery />} />
          <Route path='/JD_Master_Details/:id' element={<JD_Master_Details />} />


          {/* //EMPLOYER// */}
          <Route path='/EmployerDashboard' element={<EmpDashboard />} />
          <Route path='/Employee-DashBoard' element={<EmpDashboard />} />
          <Route path='/EmpJDList' element={<EmpJDList />} />
          <Route path='/EmpJDMaster' element={<EmpJDMaster />} />
          <Route path='/EmpAbout' element={<EmpAbout />} />
          <Route path='/EmpCandidates' element={<EmpCandidates />} />
          <Route path='/EmployerJd' element={<EmployerJd />} />
          <Route path='/EmployerFile' element={<EmployerFile />} />
          <Route path='/EmpJDdetail' element={<EmpJDdetail />} />
          <Route path='/AddJDForm' element={<AddNewJDForm />} />
          <Route path='/SelectFromJD' element={<SelectFromJD />} />



          <Route path='/chat-support' element={<ChatSupport />} />

          {/* //RECRUITER// */}
          <Route path='/JDList/recent' element={<JDList />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/LockModal' element={<LockForMeModal />} />
          <Route path='/CandidatesOne' element={<CandidatesOne />} />
          <Route path='/MyWorkspace' element={<AddCandidates />} />
          <Route path='/Candidate-Form' element={<CandidateForm />} />
          <Route path='/JDSummary' element={<JDSummary />} />



          <Route path='/chat-support' element={<ChatSupport />} />

          {/* //ADMIN// */}

          <Route path='/AdminID' element={<AdminID />} />
          <Route path='/Admin/About-Us' element={<Admin_About_Us />} />
          <Route path='/Admin/BankInfo' element={<Admin_BankInfo />} />
          <Route path='/Admin/PersonalInfo' element={<Admin_PersonalInfo />} />
          <Route path='/Admin/Profile' element={<Admin_Profile />} />
          <Route path='/Admin/Reset-Password' element={<Admin_Reset_Password />} />
          <Route path='/Admin/Finance' element={<Admin_Finance />} />
          <Route path='/Admin/Finance/invoice' element={<Admin_Finance_Invoice />} />
          <Route path='/Admin/Finance/JD-Details' element={<Admin_Finance_JD_Details />} />
          {/* <Route path='/Adminjds' element={<Adminjds/>} /> */}
          <Route path='/AdminSummery' element={<AdminSummery />} />
          <Route path='/AdminDashboard' element={<AdminDashboard />} />
          <Route path='/AEmployerMaster' element={<EmployerMaster />} />
          <Route path='/Adminjds' element={<Adminjds />} />
          <Route path='/AdminEmployerfile' element={<AdminEmployerfile />} />
          <Route path='/AdminEmployerMaster' element={<AdminEmployerMaster />} />
          <Route path='/AdminRecruterMaster' element={<AdminRecruterMaster />} />



          <Route path='/chat-support' element={<ChatSupport />} />

        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
