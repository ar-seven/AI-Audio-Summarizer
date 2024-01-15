import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../pages/AuthContext';
import { IoLogOutOutline } from 'react-icons/io5';

const Navbar = () => {
  const { authenticated, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleLogout = () => {
    // Call the logout function to update authentication status
    logout();
  };

  if (!authenticated) {
    return null; // Don't render Navbar if not authenticated
  }

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 mt-6 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-2xl font-bold">SummarEase</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <a
              className={`mr-5 text-lg font-bold font-sans hover:text-indigo-900 relative transition duration-500 ${activeTab === 'home' ? 'border-b-4 border-indigo-600 ease-in-out' : ''}`}
              onClick={() => handleTabClick('home')}
            >
              Home
            </a>
          </Link>
          <Link href="/how">
            <a
              className={`mr-5 text-lg font-bold font-sans hover:text-indigo-900 relative transition duration-500 ${activeTab === 'how' ? 'border-b-4 border-indigo-600 ease-in-out' : ''}`}
              onClick={() => handleTabClick('how')}
            >
              How it works
            </a>
          </Link>
          <Link href="/testimonials">
            <a
              className={`mr-5 text-lg font-bold font-sans hover:text-indigo-900 relative transition duration-500 ${activeTab === 'testimonials' ? 'border-b-4 border-indigo-600 ease-in-out' : ''}`}
              onClick={() => handleTabClick('testimonials')}
            >
              Testimonials
            </a>
          </Link>
          <Link href="/dashboard">
            <a
              className={`mr-5 text-lg font-bold font-sans hover:text-indigo-900 relative transition duration-500 ${activeTab === 'dashboard' ? 'border-b-4 border-indigo-600 ease-in-out' : ''}`}
              onClick={() => handleTabClick('dashboard')}
            >
              Dashboard
            </a>
          </Link>
        </nav>
        <Link href="/dashboard">
          <button className="inline-flex items-center text-white font-bold bg-indigo-600 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-900 rounded text-base mt-4 md:mt-0">
            Try it now
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
        <button
          onClick={handleLogout} // Call the handleLogout function on button click
          className="inline-flex items-center text-white font-bold bg-indigo-800 border-0 py-2 px-4 ml-4 focus:outline-none hover:bg-indigo-900 rounded text-base mt-4 md:mt-0"
        >
          Logout <IoLogOutOutline className="ml-1 text-2xl font-extrabold" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
