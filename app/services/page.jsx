'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import WhatWeAreOffering from '../components/WhatWeAreOffering';
import { BriefcaseMedical, LineChart, Cpu, GraduationCap } from 'lucide-react';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import TopNotch from '../components/TopNotch';
import OperationalBlueprintSlider from '../components/OperationalBlueprintSlider';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const images = ['/mobile 1.png', '/mobile 2.png'];

const industries = [
  {
    name: 'Healthcare',
    icon: <BriefcaseMedical className="w-6 h-6 text-blue-500" />,
  },
  { name: 'Finance', icon: <LineChart className="w-6 h-6 text-green-500" /> },

  { name: 'IT', icon: <Cpu className="w-6 h-6 text-indigo-500" /> },
  {
    name: 'Education',
    icon: <GraduationCap className="w-6 h-6 text-orange-500" />,
  },
];

const Page = () => {
  const [index, setIndex] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  // image slider
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <div>
      <div className="bg-gray-100 min-h-screen font-sans">
        <header className="bg-black text-white text-center py-36">
          <h1 className="text-3xl font-bold">FORGEBYTE</h1>
        </header>

        {/* turning vision into reality */}
        <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
          {/* Left Content - Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#1f2937]">
              Turning Visions into Reality
            </h2>
          </motion.div>

          {/* Right Content - Subheading & Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="font-semibold"
            >
              We Create The Next Big Thing For You
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-700"
            >
              Forgebyte aims to solve different problems and paint a bright
              future for businesses taking the best route. We shape the best
              system addressing emerging business drivers, using extensive
              experience, local knowledge, and a great approach - the most
              crucial aspects of all projects. Forgebyte works differently, and
              this is what helps us build the best solution for you and for you.
            </motion.p>
          </motion.div>
        </section>

        {/* Operational blueprint Section */}

        <OperationalBlueprintSlider />

        {/* mobile demos */}
        <section
          ref={ref}
          className="flex flex-col items-center text-center px-6 lg:px-20 py-16"
        >
          {/* Heading */}
          <motion.h2
            className="text-2xl md:text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We Are a House of Mobile App Development Services
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-gray-600 mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            After delivering dozens of successful projects under our belt,
            ForgeByte is all set to offer tailor-made solutions to your business
            needs. With us, you can access the best-in-class mobile app
            development services and make your idea market-ready.
          </motion.p>

          {/* Mobile App Image */}
          <div className="mt-8 flex justify-center">
            <img
              src={images[currentImageIndex]}
              alt="Mobile App UI"
              className="w-60 md:w-72 lg:w-80 shadow-xl rounded-lg transition-opacity duration-500"
            />
          </div>
        </section>

        <WhatWeAreOffering />

        {/* development lifecycle */}
        <div className="flex items-center justify-center p-3">
          <Image
            src="/dev_lifecycle.png"
            height={1000}
            width={1000}
            alt="development services lifecycle"
          />
        </div>

        {/* our services are top notch */}
        <TopNotch />

        {/* empowering serveral industries with our services  */}
        <section className="w-full lg:flex md:flex sm:flex items-center justify-center py-16 px-4 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="w-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
              Empowering Several Industries with Our Services
            </h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="max-w-4xl text-center text-gray-600 mb-10"
            >
              <p>
                We never limit ourselves. Our best minds accept new challenges
                to push their limits that make us different from others. We have
                served clients from distinct industries with robust and powerful
                apps that speak for the quality.
              </p>
              <p className="mt-4">
                Now, it's your time to make a smart move and enhance your
                digital product’s performance with our mobile application
                development services.
              </p>
            </motion.div>
          </motion.div>

          {/* Industries List */}
          <div className="relative  flex justify-center items-center py-10">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="relative w-[370px] h-[250px] flex flex-wrap justify-center items-center"
            >
              {industries.map((industry, index) => {
                const positions = [
                  'top-0 left-1/2 transform -translate-x-1/2', // Top (Healthcare)
                  'bottom-1/2 right-0 transform translate-y-1/2', // Right (IT)
                  'top-1/2 left-0 transform -translate-y-1/2', // Left (Finance)
                  'bottom-0 left-1/2 transform -translate-x-1/2', // Bottom (Education)
                ];

                return (
                  <div
                    key={index}
                    className={`absolute ${positions[index]} flex items-center gap-3 w-[170px] bg-white shadow-lg rounded-lg px-6 py-3 hover:scale-105 transition-transform`}
                  >
                    {industry.icon}
                    <span className="text-lg font-medium text-gray-800">
                      {industry.name}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <Testimonials />

        <Footer />
      </div>
    </div>
  );
};

export default Page;
