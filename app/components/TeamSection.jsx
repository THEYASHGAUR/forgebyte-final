"use client";

import React from "react";

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
      {/* Title */}
      <h1 className="text-2xl md:text-5xl font-bold mb-8">
        Together  we  combine  outstanding team
      </h1>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg rounded-2xl overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-60 object-cover rounded-xl"
            />
            <div className="bg-white p-3 w-full shadow-md rounded-b-2xl">
              <h2 className="text-lg font-semibold">{member.name}</h2>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
