import React from 'react';

const HowItWorks = () => {
  return (
    <section className="how-it-works py-16 bg-yellow-50">
      <div className="container mx-auto px-6">
        <h1 className="text-center text-4xl font-bold text-yellow-900 mb-12">
          How it Works
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <div className="text-yellow-600 text-5xl mb-4">
              🔍
            </div>
            <h3 className="text-xl font-semibold text-yellow-900 mb-2">Create</h3>
            <p className="text-gray-600">
              Start by creating your account and setting up your preferences.
            </p>
          </div>

          {/* Second Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <div className="text-yellow-600 text-5xl mb-4">
              🔄
            </div>
            <h3 className="text-xl font-semibold text-yellow-900 mb-2">Browse</h3>
            <p className="text-gray-600">
              Explore various options and discover the best choices for you.
            </p>
          </div>

          {/* Third Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <div className="text-yellow-600 text-5xl mb-4">
              ✅
            </div>
            <h3 className="text-xl font-semibold text-yellow-900 mb-2">Choose</h3>
            <p className="text-gray-600">
              Make your selection and enjoy the benefits of your decision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
