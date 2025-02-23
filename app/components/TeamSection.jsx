"use client";

import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Lakshya Lohani",
    role: "Founder",
    image: "/lohani.png",
  },
  {
    name: "Yash Gaur",
    role: "CTO",
    image: "/yash.png",
  },
  {
    name: "Sonam Kumari",
    role: "Designer",
    image: "/sonam.png",
  },
];

const TeamSection = () => {
  return (
    <section className="w-full py-12 text-center bg-gray-50 text-gray-900">
      {/* Title Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="text-2xl md:text-5xl font-bold mb-8"
      >
        Together, We Combine an Outstanding Team
      </motion.h1>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
            className="flex flex-col items-center bg-white shadow-lg rounded-2xl overflow-hidden transition-all"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-60 object-cover rounded-xl"
            />
            <div className="bg-white p-4 w-full shadow-md rounded-b-2xl">
              <h2 className="text-lg font-semibold">{member.name}</h2>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
