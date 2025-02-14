import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[450px] flex flex-col items-center justify-center bg-[#0B1B2A] text-white overflow-hidden">
      {/* Background Gradient Circles */}
      <div className="absolute inset-0">
        <div className="absolute top-[-50px] left-[-100px] w-[300px] h-[300px] bg-gradient-to-br from-[#1D4ED8] to-[#0B1B2A] rounded-full opacity-40"></div>
        <div className="absolute bottom-[-100px] right-[-150px] w-[400px] h-[400px] bg-gradient-to-br from-[#1D4ED8] to-[#0B1B2A] rounded-full opacity-40"></div>
        <div className="absolute top-[100px] right-[150px] w-[150px] h-[150px] bg-gradient-to-br from-[#1D4ED8] to-[#0B1B2A] rounded-full opacity-30"></div>
        <div className="absolute bottom-[50px] left-[100px] w-[200px] h-[200px] border border-white/20 rounded-full opacity-50"></div>
      </div>

      {/* Text Content */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center z-10">
        Journey of Innovation <br /> and Excellence
      </h1>
      <p className="text-lg text-gray-300 mt-4 text-center max-w-2xl z-10">
        Our journey from beginnings to breakthroughs has been fueled by innovation, dedication,
        and an unyielding commitment to excellence.
      </p>
    </section>
  );
};

export default HeroSection;
