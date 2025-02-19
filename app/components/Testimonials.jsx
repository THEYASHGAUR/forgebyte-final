import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
      className="relative w-full h-[350px] sm:h-[400px] lg:h-[450px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/home_testimonial.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Testimonial Card */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        
        {/* Left Panel (Title & Indicator) */}
        <div className="bg-[#1D3E50] text-white w-full sm:w-[40%] p-6 flex flex-col justify-between">
          <h2 className="text-xl sm:text-2xl font-semibold">What Client says About us</h2>
          {/* Indicator */}
          <div className="flex gap-2 mt-4">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-6 h-6 transition-all duration-300 ${index === currentIndex ? "bg-white" : "bg-gray-700"}`}
              ></div>
            ))}
          </div>
        </div>

        {/* Right Panel (Testimonial) */}
        <div className="w-full sm:w-[60%] p-6 text-center relative">
          <p className="text-gray-700 mt-4 p-10 text-lg">{testimonials[currentIndex].text}</p>
          <p className="mt-3 font-semibold text-gray-900">~ {testimonials[currentIndex].name}</p>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 p-2 rounded-full"
            onClick={prevTestimonial}
          >
            <FaChevronLeft className="text-lg text-gray-800" />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 p-2 rounded-full"
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
