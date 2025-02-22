'use client';

import React from 'react';
import {
  FaLaptopCode,
  FaLightbulb,
  FaGlobe,
  FaPaintBrush,
  FaMobile,
  FaCubes,
} from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';

const offerings = [
  {
    title: 'Software Development',
    description:
      'Our developers are always ready to build exceptional software across multiple devices, including desktop, mobile, and tablet.',
    icon: <FaLaptopCode className="text-4xl text-[#2D3E50]" />,
  },
  {
    title: 'IT Consulting',
    description:
      'Rely on our IT consulting services. We detect IT issues, solve them and ensure nothing can hinder your growth.',
    icon: <FaLightbulb className="text-4xl text-[#4A90E2]" />,
  },
  {
    title: 'Website Development',
    description:
      'We are your ideal partner to develop websites with a mix of creativity and empower your web presence.',
    icon: <FaGlobe className="text-4xl text-[#0056D2]" />,
  },
  {
    title: 'UX/UI Design',
    description:
      'We can enhance your website appearance and improve its user interface with our UX/UI design services.',
    icon: <FaPaintBrush className="text-4xl text-[#6B7B8B]" />,
  },
  {
    title: 'Mobile Development',
    description:
      'Create a lasting impact on your audience with a mobile app that fits your brand and makes it successful tomorrow.',
    icon: <FaMobile className="text-4xl text-[#0099FF]" />,
  },
  {
    title: 'SaaS App Development',
    description:
      'Get a scalable web application that can adapt to new market demands in the future, developed by our experts.',
    icon: <FaCubes className="text-4xl text-[#1D3E8A]" />,
  },
];

const WhatWeAreOffering = ({ref, visible}) => {
  return (
    <section ref={ref} id="fourth-section" className={`py-16 px-6 lg:px-20 text-center flex-col justify-center ${visible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Title Section */}
      <h3 className={`text-lg text-gray-600 ${visible ? 'opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.2s]' : ''}`}>Services</h3>
      <h2 className={`text-3xl font-bold text-gray-900 mt-1 ${visible ? 'opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.3s]' : ''}`}>
        What we are offering
      </h2>

      {/* Offerings Grid */}
      <div className=' flex items-center justify-center'>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[1400px]">
          {offerings.map((offer, index) => (
            <div
              key={index}
              className={`bg-white lg:w-[400px] shadow-lg rounded-xl p-6 flex flex-col gap-4 transition-all hover:shadow-2xl ${visible ? `opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.${index + 1}s]` : 'opacity-0'}`}
            >
              <div className="flex items-center gap-3">
                {offer.icon}
                <h3 className="text-lg font-semibold text-gray-800">
                  {offer.title}
                </h3>
              </div>
              <p className="text-gray-600">{offer.description}</p>
              <div className="flex justify-end">
                <ArrowRight className="text-gray-500 hover:text-gray-700 transition" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeAreOffering;
