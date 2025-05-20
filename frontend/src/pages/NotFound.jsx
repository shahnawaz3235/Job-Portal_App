import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for does not exist.</p>
      <button className="not-found-button" onClick={goHome}>
        Go Home
      </button>
    </div>
  );
}

export default NotFound;
