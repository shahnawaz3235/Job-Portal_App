import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button
      className=" bg-yellow-500 text-white font-medium py-2 px-4 rounded-md shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
