import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Column 1 */}
          <div>
            <h5 className="text-lg font-semibold text-yellow-400 mb-2">About Us</h5>
            <p className="text-gray-400">
              Learn more about our company, values, and mission.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h5 className="text-lg font-semibold text-yellow-400 mb-2">Quick Links</h5>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                About
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Column 3 */}
          <div>
            <h5 className="text-lg font-semibold text-yellow-400 mb-2">Contact</h5>
            <p className="text-gray-400">Email: info@example.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-500">
            © 2024 Your Company Name. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
