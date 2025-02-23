'use client';

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[450px] flex flex-col items-center justify-center bg-[#0B1B2A] text-white overflow-hidden">
      {/* Background Gradient Circles */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute top-[-50px] left-[-100px] w-[300px] h-[300px] bg-gradient-to-br from-[#1D4ED8] to-[#0B1B2A] rounded-full opacity-40"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.8 }}
          className="absolute bottom-[-100px] right-[-150px] w-[400px] h-[400px] bg-gradient-to-br from-[#1D4ED8] to-[#0B1B2A] rounded-full opacity-40"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.3 }}
          className="absolute top-[100px] right-[150px] w-[150px] h-[150px] bg-gradient-to-br from-[#1D4ED8] to-[#0B1B2A] rounded-full opacity-30"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.6 }}
          className="absolute bottom-[50px] left-[100px] w-[200px] h-[200px] border border-white/20 rounded-full opacity-50"
        />
      </div>

      {/* Text Content */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-4xl sm:text-5xl font-bold text-center z-10"
      >
        Journey of Innovation <br /> and Excellence
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="text-lg text-gray-300 mt-4 text-center max-w-2xl z-10"
      >
        Our journey from beginnings to breakthroughs has been fueled by innovation, dedication,
        and an unyielding commitment to excellence.
      </motion.p>
    </section>
  );
};

export default HeroSection;
