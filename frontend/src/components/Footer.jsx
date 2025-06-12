import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t-2 border-yellow-400 animate-fadeIn">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Column 1 */}
          <div>
            <h5 className="text-lg font-semibold text-yellow-400 mb-3">About Us</h5>
            <p className="leading-relaxed text-sm">
              Learn more about our company, values, and mission. We connect talent with opportunity.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h5 className="text-lg font-semibold text-yellow-400 mb-3">Quick Links</h5>
            <nav className="flex flex-col space-y-2 text-sm">
              <a href="#" className="hover:text-yellow-400 transition-colors">Home</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">About</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Contact</a>
            </nav>
          </div>

          {/* Column 3 */}
          <div>
            <h5 className="text-lg font-semibold text-yellow-400 mb-3">Contact</h5>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© 2025 Your Company Name. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
