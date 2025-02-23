'use client';

import React from 'react';
import { motion } from 'framer-motion';
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

const WhatWeAreOffering = () => {
  return (
    <section className="py-16 px-6 lg:px-20 text-center flex-col justify-center">
      {/* Title Section */}
      <h3 className="text-lg text-gray-600">Services</h3>
      <h2 className="text-3xl font-bold text-gray-900 mt-1">
        What we are offering
      </h2>

      {/* Offerings Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
        {offerings.map((offer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }} // Start hidden and below
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            viewport={{ amount: 0.2 }} // Ensures animation triggers only once
            transition={{ duration: 1.2, delay: index * 0.2 }} // Smooth staggered animation
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4 transition-all hover:shadow-2xl"
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeAreOffering;
