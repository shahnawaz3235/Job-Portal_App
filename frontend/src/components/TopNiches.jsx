import React from 'react';

const TopNiches = () => {
  const services = [
    {
      id: 1,
      serviceName: "Web Development",
      description:
        "Creating and maintaining websites, including design, content creation, and coding to ensure proper functionality.",
    },
    {
      id: 2,
      serviceName: "App Development",
      description:
        "Designing and developing mobile applications for iOS and Android platforms to improve user experience and engagement.",
    },
    {
      id: 3,
      serviceName: "SEO Services",
      description:
        "Optimizing website content to rank higher on search engine results pages and drive organic traffic.",
    },
    {
      id: 4,
      serviceName: "UI/UX Design",
      description:
        "Creating user-friendly interfaces and improving user experiences with intuitive designs.",
    },
    {
      id: 5,
      serviceName: "Cloud Solutions",
      description:
        "Providing scalable and secure cloud services for hosting, data storage, and application deployment.",
    },
    {
      id: 6,
      serviceName: "E-commerce Development",
      description:
        "Building online stores and integrating payment solutions, inventory management, and other e-commerce functionalities.",
    },
    {
      id: 7,
      serviceName: "Digital Marketing",
      description:
        "Creating and executing strategies for online advertising, social media marketing, and content marketing to boost brand awareness.",
    },
    {
      id: 8,
      serviceName: "Cybersecurity",
      description:
        "Implementing security measures to protect systems, networks, and data from cyber threats and attacks.",
    },
    {
      id: 9,
      serviceName: "Software Development",
      description:
        "Developing custom software solutions to meet business needs, from desktop applications to enterprise-level systems.",
    },
    {
      id: 10,
      serviceName: "Data Analytics",
      description:
        "Analyzing large datasets to extract insights and help businesses make informed decisions.",
    },
  ];

  return (
    <div className="container mx-auto my-10 p-6 bg-yellow-100 rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Top Niches
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <h5 className="text-xl font-semibold text-yellow-600 mb-3">
              {service.serviceName}
            </h5>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopNiches;
