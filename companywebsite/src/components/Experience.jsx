"use client";
import React, { useEffect, useRef, useState } from 'react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative bg-gray-100 text-gray-900 py-16"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-blue-300 opacity-20 transform -skew-y-6"></div>
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Experience</h2>
          <p className="text-xl">We have extensive experience across various domains, delivering successful projects and solutions.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`space-y-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold">Areas of Expertise</h3>
            <ul className="custom-list space-y-2">
              {points.slice(0, 4).map((point, index) => (
                <li key={index} className="text-lg">{point}</li>
              ))}
            </ul>
          </div>
          <div className={`space-y-8 transition-opacity duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold">Specialized Services</h3>
            <ul className="custom-list space-y-2">
              {points.slice(4).map((point, index) => (
                <li key={index} className="text-lg">{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
