import React, { useState } from 'react';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="h-screen bg-white flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Find Your Dream Job Today
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Connecting talent with opportunities across the nation for every skill level.
        </p>

        {/* Card Component */}
        <div
          className={`mx-auto transform transition-all duration-300 ${
            isHovered ? 'scale-105 shadow-2xl' : 'shadow-lg'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ maxWidth: '500px' }}
        >
          <div className="bg-yellow-400 text-gray-800 p-6 rounded-lg">
            <p className="text-base md:text-lg">
              This is a beautiful yellowish card. Inside this card, you can find engaging content to keep your audience entertained and informed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
