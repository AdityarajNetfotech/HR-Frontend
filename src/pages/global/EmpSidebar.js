import React, { useState } from 'react';
import { FaHome, FaUser, FaDatabase, FaComments, FaMoneyBill, FaCog, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import R from '../../Images/R.png';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const EmpSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleLogout = async () => {
    console.log("Logout button clicked");
    try {
      // console.log("Before logout:", localStorage.getItem('userId'));

      const response = await axios.get('http://localhost:4000/api/logout'); // API call to backend
      console.log(response.data);

      if (response.data.success) {
        // Clear localStorage items
        localStorage.removeItem('userId'); // Replace 'userId' with your actual key name
        localStorage.removeItem('token');  // If token is stored
        console.log("After removal:", localStorage.getItem('userId')); // Check if cleared

        // Redirect to home page
        navigate('/');
      } else {
        console.error("Logout failed: ", response.data.message);
      }
    } catch (error) {
      console.error("Error during logout: ", error);
    }
  };

  return (
    <div className={`flex flex-col h-[1101px] rounded-r-xl bg-[var(--Teal,#378BA6)] text-white ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link to="/EmployerDashboard" className="flex items-center">
            <div className={`w-12 h-full ${isOpen ? '' : 'hidden'}`}>
              <img src={R} alt="Recrutify Logo" />
            </div>
            {isOpen && (
              <h1 className="text-white font-jost text-4xl font-medium leading-normal w-[182.582px] h-[46.315px] flex-shrink-0">
                Recrutify
              </h1>
            )}
          </Link>
        </div>
      </div>
      <button onClick={toggleSidebar} className="flex justify-center p-2 rounded focus:outline-none bg-none">
        <MdOutlineArrowForwardIos size={30} />
      </button>

      {/* Navigation */}
      <nav className="flex flex-col flex-grow mt-10">
        <NavItem to="/EmployerDashboard" icon={<FaHome />} label="Dashboard" isOpen={isOpen} />
        <DropdownNavItem
          to="/EmpJDdetail"
          icon={<FaDatabase />}
          label="JD Lists"
          isOpen={isOpen}
          openDropdown={openDropdown}
          onDropdownToggle={() => handleDropdownToggle('JD Lists')}
        >
          <DropdownItem to="/JDList" label="Recent JD" />
          <DropdownItem to="/JDList" label="Archive JD" />
        </DropdownNavItem>
        <NavItem to="/EmployerJd" icon={<FaComments />} label="New JD" isOpen={isOpen} />
        <NavItem to="/EmpCandidates" icon={<FaComments />} label="Candidates" isOpen={isOpen} />
        <NavItem to="/chat-support" icon={<FaMoneyBill />} label="Chat Support" isOpen={isOpen} />
        <NavItem to="/FinanceList" icon={<FaCog />} label="Finances" isOpen={isOpen} />
        <NavItem to="/Profile" icon={<FaInfoCircle />} label="Profile" isOpen={isOpen} />
        <NavItem to="/EmpAboutUs" icon={<FaInfoCircle />} label="About" isOpen={isOpen} />
        <NavItem
          icon={<FaSignOutAlt />}
          onClick={handleLogout}
          label="Logout"
          isOpen={isOpen}
        />
      </nav>

      {/* Footer */}
      {isOpen && (
        <div className="mt-auto p-4 text-xs text-center">
          &copy; 2024 by Recrutify. All Rights Reserved.
        </div>
      )}
    </div>
  );
};

const NavItem = ({ to, icon, label, isOpen, onClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault(); // Prevent navigation if onClick is provided
      onClick();
    }
  };

  return (
    <NavLink
      to={to || "#"} // Fallback to "#" if no `to` is provided
      onClick={handleClick}
      className="flex items-center p-4 rounded-r-lg hover:bg-white hover:text-black cursor-pointer"
      activeClassName="bg-[var(--Teal,#378BA6)]"
    >
      {icon}
      {isOpen && <span className="ml-2">{label}</span>}
    </NavLink>
  );
};

const DropdownNavItem = ({ to, icon, label, isOpen, openDropdown, onDropdownToggle, children }) => {
  return (
    <div>
      <div
        onClick={onDropdownToggle}
        className={`flex items-center p-4 rounded-r-lg hover:bg-white hover:text-black cursor-pointer ${openDropdown === label ? 'bg-white text-black' : ''}`}
      >
        {icon}
        {isOpen && <span className="ml-2">{label}</span>}
      </div>
      {isOpen && openDropdown === label && (
        <div className="pl-8 bg-gray-200">
          {children}
        </div>
      )}
    </div>
  );
};

const DropdownItem = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className="block py-2 px-4 text-black hover:bg-gray-300"
    >
      {label}
    </NavLink>
  );
};

export default EmpSidebar;
