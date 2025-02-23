"use client";

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Fleetr",
    text: "Our journey from beginnings to breakthroughs has been fueled by innovation, dedication, and an unyielding commitment to excellence.",
  },
  {
    id: 2,
    name: "John Doe",
    text: "The experience was amazing! Their team delivered beyond expectations, and I highly recommend them for any project.",
  },
  {
    id: 3,
    name: "Jane Smith",
    text: "A truly professional service with exceptional support. Their expertise helped our business grow rapidly.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      className="relative w-full flex items-center justify-center bg-cover bg-center py-10 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/home_testimonial.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Testimonial Card */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        
        {/* Left Panel (Title & Indicator) */}
        <div className="bg-[#1D3E50] text-white w-full sm:w-[40%] p-6 flex flex-col justify-between text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-semibold">What Clients Say About Us</h2>

          {/* Indicator */}
          <div className="flex justify-center sm:justify-start gap-2 mt-4">
            {testimonials.map((_, index) => (
              <motion.div
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-white scale-125" : "bg-gray-700"
                }`}
                animate={{ opacity: index === currentIndex ? 1 : 0.5 }}
              />
            ))}
          </div>
        </div>

        {/* Right Panel (Testimonial) */}
        <div className="w-full sm:w-[60%] p-6 text-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <p className="text-gray-700 mt-4 p-4 text-lg">{testimonials[currentIndex].text}</p>
              <p className="mt-3 font-semibold text-gray-900">~ {testimonials[currentIndex].name}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 p-2 rounded-full"
            onClick={prevTestimonial}
          >
            <FaChevronLeft className="text-lg text-gray-800" />
          </button>
          <button
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 p-2 rounded-full"
            onClick={nextTestimonial}
          >
            <FaChevronRight className="text-lg text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
