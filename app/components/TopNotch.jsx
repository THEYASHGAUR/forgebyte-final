"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  "A certified team of developers to work on your project",
  "Daily reporting or project updates shared with clients",
  "Multiple communication channels for effective communication",
];

const TopNotch = () => {
  return (
    <section className="w-full flex flex-col items-center py-16">
      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10 text-center"
      >
        Our services are Top Notch
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl">
        {/* Image Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src="/missionVision.png"
            height={350}
            width={350}
            alt="Team working"
            className="rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Services List Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2 flex flex-col gap-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-100 p-5 rounded-lg shadow-md text-gray-800"
            >
              {service}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TopNotch;
