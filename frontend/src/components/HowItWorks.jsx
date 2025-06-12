import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      icon: '🔍',
      title: 'Create',
      description: 'Start by creating your account and setting up your preferences.',
    },
    {
      icon: '🔄',
      title: 'Browse',
      description: 'Explore various options and discover the best choices for you.',
    },
    {
      icon: '✅',
      title: 'Choose',
      description: 'Make your selection and enjoy the benefits of your decision.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-center text-4xl font-extrabold text-gray-900 mb-16 tracking-tight">
          How It Works
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 hover:border-yellow-400 transition-all duration-300"
            >
              <div className="text-yellow-500 text-6xl mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
