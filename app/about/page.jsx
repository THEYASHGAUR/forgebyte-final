'use client';

import React from 'react';
import Image from 'next/image';
import HeroSection from '../components/HeroSection';
import TeamSection from '../components/TeamSection';
import Footer from '../components/Footer';
import TopNotch from '../components/TopNotch';
import { motion } from 'framer-motion';

const metrics = [
  { value: 20, text: "Projects Completed" },
  { value: 10, text: "Awards Received" },
  { value: 50, text: "Worldwide Clients" },
  { value: 100, text: "Client Satisfaction" },
];

const page = () => {
  return (
    <>
      {/* hero section */}
      <HeroSection />

      {/* this is forgebyte */}
      <section className="w-full py-12 flex flex-col items-center text-center bg-white text-gray-800">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} // Triggers multiple times
          transition={{ duration: 1.2 }}
          className="text-4xl font-bold"
        >
          This is <span className="text-[#1D4ED8]">Forgebyte</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} // Triggers multiple times
          transition={{ duration: 1.5, delay: 0.3 }}
          className="mt-6 px-4 text-lg max-w-3xl leading-relaxed"
        >
          At Forgebyte, we ensure work quality, build a long-term relationship
          with clients and add more people to our list of happy customers. This
          has always been our main goal.
          <br />
          <br />
          In order to achieve this goal, we have managed to provide high-end
          web, mobile apps, software, and other digital solution development
          services. We build products using the latest technologies that also
          leave an impression on the user and keep up their interests.
          <br />
          <br />
          Being on the market since 2023, we have gained trust and respect from
          our clients by providing them unmatchable support and an incredible
          user experience focused on quality and performance.
        </motion.p>
      </section>

      {/* our values */}
      <section className="w-full py-12 flex flex-col items-center text-center bg-white text-gray-800">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2 }}
          className="text-4xl font-bold mb-8"
        >
          Our Values
        </motion.h1>

        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <Image
              src="/our values.png"
              alt="Team working"
              width={350}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2 }}
            className="w-full md:w-1/2 flex flex-col space-y-6 text-center md:text-left"
          >
            {[
              {
                title: 'Transparency',
                text: 'We believe a client has the right to be informed of project progress, and Forgebyte ensures 100% transparency.',
              },
              {
                title: 'Get Things Done',
                text: 'We empower our clients, putting the right amount of work and effort into the project. We get things done.',
              },
              {
                title: 'Quality',
                text: 'Forgebyte ensures quality project delivery. We use rising technologies to help you stay ahead of the game.',
              },
              {
                title: 'Stay Positive',
                text: 'Obstacles hinder the development journey, but we stay positive and always find a way to resolve issues.',
              },
            ].map(({ title, text }) => (
              <div key={title} className="px-3">
                <h2 className="text-2xl font-semibold text-[#195478]">
                  {title}
                </h2>
                <p className="text-gray-600">{text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* our services are top notch */}
      <TopNotch />

      {/* success stats */}
      <section className="w-full py-12 bg-blue-50 text-gray-900 text-center">
        {/* Title Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-4xl font-bold mb-8"
        >
          The Ultimate of Our Success Over the Years
        </motion.h1>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-3xl font-semibold text-blue-700"
              >
                {metric.value}+
              </motion.h2>
              <p className="text-gray-700">{metric.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* team section */}
      <TeamSection />

      <Footer />
    </>
  );
};

export default page;
