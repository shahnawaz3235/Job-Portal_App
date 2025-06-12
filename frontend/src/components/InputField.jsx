import React from 'react';

const InputField = ({ label, type = "text", value, onChange, placeholder }) => {
  return (
    <div className="mb-5">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder || ''}
        className="w-full px-4 py-2 border border-gray-200 rounded-lg shadow-sm text-gray-900 placeholder-gray-400 
                   focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 
                   transition-all duration-200 hover:border-gray-300"
      />
    </div>
  );
};

export default InputField;
