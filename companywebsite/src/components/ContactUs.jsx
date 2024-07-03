"use client"
import React, { useEffect, useRef, useState } from 'react';

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the first intersection
        }
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the section is visible
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
      id="contact"
      ref={sectionRef}
      className="bg-gray-100 text-gray-900 py-12 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-blue-300 opacity-50"></div>
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl">
            Get in touch with us for more information about our services.
          </p>
        </div>
        <div
          className={`transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-lg shadow-lg">
            <div className="md:col-span-2">
              <label
                htmlFor="name"
                className="block text-lg font-medium mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-lg font-medium mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="block text-lg font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
