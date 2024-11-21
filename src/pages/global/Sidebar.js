import React, { useState } from 'react';
import { FaHome, FaUser, FaDatabase, FaComments, FaMoneyBill, FaCog, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import R from '../../Images/R.png';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <div className={`flex flex-col h-[1101px] rounded-r-xl bg-[var(--Teal,#378BA6)] text-white ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
  <Link to="/Dashboard" className="flex items-center">
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
        <NavItem to="/Dashboard" icon={<FaHome />} label="Dashboard" isOpen={isOpen} />
        <DropdownNavItem
          to="/JDList"
          icon={<FaDatabase />}
          label="JD Lists"
          isOpen={isOpen}
          openDropdown={openDropdown}
          onDropdownToggle={() => handleDropdownToggle('JD Lists')}
        >
          <DropdownItem to="/JDList" label="Recent JD" />
          <DropdownItem to="/JDList" label="Archive JD" />
        </DropdownNavItem>
        <DropdownNavItem
          to="/workplace"
          icon={<FaUser />}
          label="My Workplace"
          isOpen={isOpen}
          openDropdown={openDropdown}
          onDropdownToggle={() => handleDropdownToggle('My Workplace')}
        >
          <DropdownItem to="/MyWorkspace" label="Team" />
          <DropdownItem to="/workplace/tasks" label="Tasks" />
        </DropdownNavItem>
        <NavItem to="/CandidatesOne" icon={<FaComments />} label="Candidate Database" isOpen={isOpen} />
        <NavItem to="/chat-support" icon={<FaMoneyBill />} label="Chat Support" isOpen={isOpen} />
        <NavItem to="/FinanceList" icon={<FaCog />} label="Finances" isOpen={isOpen} />
        <NavItem to="/Profile" icon={<FaInfoCircle />} label="Profile" isOpen={isOpen} />
        <NavItem to="/login" icon={<FaSignOutAlt />} label="Logout" isOpen={isOpen} />
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

const NavItem = ({ to, icon, label, isOpen }) => {
  return (
    <NavLink
      to={to}
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

export default Sidebar;
