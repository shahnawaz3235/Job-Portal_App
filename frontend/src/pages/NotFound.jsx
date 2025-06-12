import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-yellow-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The page you&apos;re looking for does not exist or has been moved.
        </p>
        <button
          onClick={goHome}
          className="px-6 py-3 bg-yellow-500 text-white rounded-lg text-lg font-medium hover:bg-yellow-600 transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
