// components/Experience.js
import React from 'react';
import { Transition } from '@headlessui/react';

const Experience = () => {
  const points = [
    'Business management software',
    'IT Consulting',
    'Custom Software Development',
    'Mobile app development',
    'Project management using agile methodologies',
    'Tax management',
    'Individuals, startups, and small to medium business',
    'Criminal investigation and forensic management. Court management',
    'Customs management'
  ];

  return (
    <section id="experience" className="bg-gray-100 text-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Experience</h2>
          <p className="text-xl">We have extensive experience across various domains, delivering successful projects and solutions.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <Transition
            show={true}
            appear={true}
            enter="transition-opacity duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-1000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Areas of Expertise</h3>
              <ul className="list-disc list-inside space-y-2">
                {points.slice(0, 4).map((point, index) => (
                  <li key={index} className="text-lg">{point}</li>
                ))}
              </ul>
            </div>
          </Transition>
          <Transition
            show={true}
            appear={true}
            enter="transition-opacity duration-1000 delay-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-1000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Specialized Services</h3>
              <ul className="list-disc list-inside space-y-2">
                {points.slice(4).map((point, index) => (
                  <li key={index} className="text-lg">{point}</li>
                ))}
              </ul>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  );
};

export default Experience;
