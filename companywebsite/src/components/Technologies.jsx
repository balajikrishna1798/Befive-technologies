// components/Technologies.js
import React from 'react';
import { Transition } from '@headlessui/react';

const Technologies = () => {
  const frontEnd = [
    'React',
    'Angular',
    'Vue.js',
    'Svelte',
  ];
  
  const backEnd = [
    'Node.js',
    'Python',
    'Ruby',
    'PHP',
    '.NET',
  ];

  return (
    <section id="technologies" className="bg-white text-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Technologies We Use</h2>
          <p className="text-xl">We leverage a wide range of modern technologies to deliver robust and scalable solutions.</p>
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
              <h3 className="text-2xl font-semibold">Front-End Technologies</h3>
              <ul className="list-disc list-inside space-y-2">
                {frontEnd.map((tech, index) => (
                  <li key={index} className="text-lg">{tech}</li>
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
              <h3 className="text-2xl font-semibold">Back-End Technologies</h3>
              <ul className="list-disc list-inside space-y-2">
                {backEnd.map((tech, index) => (
                  <li key={index} className="text-lg">{tech}</li>
                ))}
              </ul>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
