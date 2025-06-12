import React from 'react';

const TopNiches = () => {
  const services = [
    { id: 1, serviceName: "Web Development", description: "Creating and maintaining websites, including design, content creation, and coding to ensure proper functionality." },
    { id: 2, serviceName: "App Development", description: "Designing and developing mobile applications for iOS and Android platforms to improve user experience and engagement." },
    { id: 3, serviceName: "SEO Services", description: "Optimizing website content to rank higher on search engine results pages and drive organic traffic." },
    { id: 4, serviceName: "UI/UX Design", description: "Creating user-friendly interfaces and improving user experiences with intuitive designs." },
    { id: 5, serviceName: "Cloud Solutions", description: "Providing scalable and secure cloud services for hosting, data storage, and application deployment." },
    { id: 6, serviceName: "E-commerce Development", description: "Building online stores and integrating payment solutions, inventory management, and other e-commerce functionalities." },
    { id: 7, serviceName: "Digital Marketing", description: "Creating and executing strategies for online advertising, social media marketing, and content marketing to boost brand awareness." },
    { id: 8, serviceName: "Cybersecurity", description: "Implementing security measures to protect systems, networks, and data from cyber threats and attacks." },
    { id: 9, serviceName: "Software Development", description: "Developing custom software solutions to meet business needs, from desktop applications to enterprise-level systems." },
    { id: 10, serviceName: "Data Analytics", description: "Analyzing large datasets to extract insights and help businesses make informed decisions." },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Top Niches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group border border-gray-200 rounded-xl p-6 bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors">
                {service.serviceName}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopNiches;
