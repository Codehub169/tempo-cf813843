import React from 'react';
import { NavLink } from 'react-router-dom';
import navData from '../data/navData.js'; // Import navData
import Logo from '../assets/logo.svg?react'; // Import logo as a React component

// Sidebar component for navigation
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside 
      id="sidebar"
      className={`fixed top-0 left-0 z-[999] w-[280px] h-screen bg-sidebar-bg border-r border-border-color p-8 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}`}
    >
      {/* Sidebar Header with Logo */}
      <div className="flex items-center gap-4 mb-12">
        <Logo className="w-12 h-12" /> {/* Use imported Logo component */}
        <h1 className="font-mono text-2xl font-semibold text-text-primary">
          Linux<span className="text-accent-color">.</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow">
        <ul className="space-y-2">
          {navData.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={isOpen ? toggleSidebar : undefined} // Close sidebar on mobile when a link is clicked
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-lg text-text-secondary font-medium hover:bg-white/5 hover:text-text-primary transition-colors duration-300 ` +
                  (isActive ? 'bg-accent-color text-bg-color font-semibold shadow-lg shadow-accent-glow nav-link-active' : '')
                }
              >
                <img src={item.icon} alt={`${item.name} icon`} className="w-6 h-6 nav-icon" />
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sidebar Footer */}
      <div className="mt-auto text-center text-xs text-text-secondary">
        <p>&copy; {new Date().getFullYear()} Linux Portal. Purely for design.</p>
      </div>
      <style jsx global>{`
        .nav-link-active .nav-icon {
          filter: brightness(0) invert(0.1);
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
