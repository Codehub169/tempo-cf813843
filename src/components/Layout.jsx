import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import ParticleBackground from './ParticleBackground';

// Main layout component for the application
const Layout = () => {
  // State to manage sidebar visibility on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when navigating to a new page on mobile
  useEffect(() => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  }, [location.pathname]);

  // Close sidebar when clicking outside of it on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSidebarOpen && 
          document.getElementById('sidebar') && 
          !document.getElementById('sidebar').contains(event.target) &&
          document.getElementById('menu-toggle') &&
          !document.getElementById('menu-toggle').contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="flex min-h-screen bg-bg-color text-text-primary font-primary">
      {/* Particle background effect */}
      <ParticleBackground />
      
      {/* Sidebar component */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Mobile menu toggle button */}
      <button 
        id="menu-toggle"
        className="fixed top-4 right-4 z-[1001] bg-sidebar-bg border border-border-color rounded-lg w-11 h-11 cursor-pointer lg:hidden flex items-center justify-center"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        <span className="hamburger-icon block relative w-6 h-0.5 bg-text-primary">
          <span className={`block absolute w-6 h-0.5 bg-text-primary transition-transform duration-300 ${isSidebarOpen ? 'transform rotate-45 top-0' : '-top-2'}`}></span>
          <span className={`block absolute w-6 h-0.5 bg-text-primary transition-opacity duration-300 ${isSidebarOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block absolute w-6 h-0.5 bg-text-primary transition-transform duration-300 ${isSidebarOpen ? 'transform -rotate-45 bottom-0' : 'top-2'}`}></span>
        </span>
      </button>

      {/* Main content area where routed pages will be rendered */}
      <main className="main-content flex-grow lg:ml-[280px] p-6 md:p-12 w-full lg:w-[calc(100%-280px)] transition-all duration-300 ease-in-out">
        {/* Outlet renders the matched child route component */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
