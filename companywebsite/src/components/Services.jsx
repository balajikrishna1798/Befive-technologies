// components/Services.js
import React from 'react';

const services = [
  { title: 'Business management software', description: 'Optimizing business processes' },
  { title: 'IT Consulting', description: 'Strategic technology advice' },
  { title: 'Custom Software Development', description: 'Tailored software solutions' },
  { title: 'Mobile app development', description: 'Innovative mobile applications' },
  { title: 'Web app development', description: 'Web applications' },

];

const Services = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {services.map((service, index) => (
        <div key={index} className="p-4 border rounded-lg shadow-sm bg-gray-100 hover:bg-gray-200 transition duration-200">
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
