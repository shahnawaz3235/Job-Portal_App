import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const NavbarComponent = () => {
  const {isAuthenticated} = useSelector((state) => state.user)
  return (
    <nav className="bg-gray-900 text-white fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <a href="#home" className="text-lg font-bold hover:text-yellow-400">
          MyWebsite
        </a>
        <button
          className="lg:hidden text-white focus:outline-none"
          aria-controls="navbar-nav"
          aria-expanded="false"
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
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <div
          className="hidden lg:flex space-x-6"
          id="navbar-nav"
        >
          <Link
            to={"/"}
            className="hover:text-yellow-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to={"/jobs"}
            className="hover:text-yellow-400 transition-colors"
          >
            Jobs
          </Link>
          { isAuthenticated ?  <Link
            to={"/dashboard"}
            className="hover:text-yellow-400 transition-colors"
          >
            Dashboard
          </Link> : <Link
            to={"/login"}
            className="hover:text-yellow-400 transition-colors"
          >
            Login
          </Link>}
          
        
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
