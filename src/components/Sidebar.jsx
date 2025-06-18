import React from 'react';
import { NavLink } from 'react-router-dom';

// Sidebar navigation data (placeholder until src/data/navData.js is implemented)
const navItems = [
  {
    name: 'Home',
    path: '/',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4Yjk0OWUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJtMyA5IDktNyA5IDcgMCAxMS0xOCB6Ii8+PHBhdGggZD0ibTkgMjIgMCA2Ii8+PC9zdmc+'
  },
  {
    name: 'History',
    path: '/history',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4Yjk0OWUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwb2x5bGluZSBwb2ludHM9IjEyIDYgMTIgMTIgMTYgMTQiLz48L3N2Zz4='
  },
  {
    name: 'Differences',
    path: '/differences',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4Yjk0OWUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48bGluZSB4MT0iMTgiIHkxPSIyMCIgeDI9IjYiIHkyPSI4Ii8+PGxpbmUgeDE9IjYiIHkxPSIyMCIgeDI9IjE4IiB5Mj0iOCIvPjwvc3ZnPg=='
  },
  {
    name: 'Usage',
    path: '/usage',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4Yjk0OWUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI0IDE3IDggMjEgMjAgOSIvPjxwb2x5bGluZSBwb2ludHM9IjQgMTIgOCAxNSAxNSAiLz48L3N2Zz4='
  }
];

// Logo SVG data from HTML preview
const logoSvg = (
  <svg className="w-12 h-12" viewBox="0 0 100 125" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0C22.386 0 0 22.386 0 50s22.386 50 50 50 50-22.386 50-50S77.614 0 50 0zm0 90C27.944 90 10 72.056 10 50S27.944 10 50 10s40 17.944 40 40-17.944 40-40 40z" fill="url(#grad1_sidebar)"/>
    <path d="M35 40h30v5H35zM35 57.5h30v5H35zM47.5 40h5v22.5h-5z" fill="url(#grad2_sidebar)"/>
    <defs>
      <linearGradient id="grad1_sidebar" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#58a6ff"/>
        <stop offset="1" stopColor="#3a8bff"/>
      </linearGradient>
      <linearGradient id="grad2_sidebar" x1="50" y1="40" x2="50" y2="62.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#c9d1d9"/>
        <stop offset="1" stopColor="#8b949e"/>
      </linearGradient>
    </defs>
  </svg>
);

// Sidebar component for navigation
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside 
      id="sidebar"
      className={`fixed top-0 left-0 z-[999] w-[280px] h-screen bg-sidebar-bg border-r border-border-color p-8 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}`}
    >
      {/* Sidebar Header with Logo */}
      <div className="flex items-center gap-4 mb-12">
        {logoSvg}
        <h1 className="font-mono text-2xl font-semibold text-text-primary">
          Linux<span className="text-accent-color">.</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={isOpen ? toggleSidebar : undefined} // Close sidebar on mobile when a link is clicked
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-lg text-text-secondary font-medium hover:bg-white/5 hover:text-text-primary transition-colors duration-300 ` +
                  (isActive ? 'bg-accent-color text-bg-color font-semibold shadow-lg shadow-accent-glow nav-link-active' : '')
                }
              >
                <img src={item.icon} alt={`${item.name} icon`} className={`w-6 h-6 nav-icon ${ ({isActive}) => isActive ? 'filter-active' : '' }`} />
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
