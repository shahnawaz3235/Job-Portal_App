import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 fixed top-0 w-full z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="text-xl font-extrabold text-gray-900 hover:text-yellow-500 transition-colors">
          JobFinder
        </Link>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-800 focus:outline-none"
          aria-controls="navbar-nav"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent px-6 lg:px-0 py-4 lg:py-0 border-b lg:border-none`}
          id="navbar-nav"
        >
          <Link
            to="/"
            className="block text-gray-800 font-medium hover:text-yellow-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/jobs"
            className="block text-gray-800 font-medium hover:text-yellow-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Jobs
          </Link>
          {isAuthenticated ? (
            <Link
              to="/dashboard"
              className="block text-gray-800 font-medium hover:text-yellow-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
          ) : (
            <Link
              to="/login"
              className="block text-gray-800 font-medium hover:text-yellow-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
