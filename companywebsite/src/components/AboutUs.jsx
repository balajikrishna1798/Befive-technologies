"use client"
import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    <section id="about" ref={sectionRef} className="bg-white text-gray-900 py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-blue-300 opacity-20"></div>
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-xl">Empowering digital transformation of your business with our software development services.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`space-y-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold">Our Vision</h3>
            <p className="text-lg">To be the best strategic partner for our clients, leading with innovative technological solutions of excellence and providing the best business experience.</p>
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="text-lg">We provide flexible, customized, value-added and short-term solutions for clients seeking to optimize their business by being a strategic ally in their digital transformation through the latest technologies.</p>
          </div>
          <div className={`space-y-8 transition-opacity duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold">Our Values</h3>
            <p className="text-lg">We believe in innovation, excellence, and providing value to our clients. Our team is committed to driving digital transformation and ensuring our clients achieve their technological goals.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
