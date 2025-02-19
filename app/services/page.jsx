'use client';

import React, { useState , useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import WhatWeAreOffering from '../components/WhatWeAreOffering';
import { BriefcaseMedical, LineChart, Cpu, GraduationCap } from 'lucide-react';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import TopNotch from '../components/TopNotch';
import OperationalBlueprintSlider from '../components/OperationalBlueprintSlider';

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
          <h1 className="text-8xl font-bold">FORGEBYTE</h1>
        </header>

        {/* turning vision into reality */}
        <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-[#1f2937]">
              Turning Visions into Reality
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-semibold">
              We Create The Next Big Thing For You
            </h3>
            <p className="text-gray-700">
              Forgebyte aims to solve different problems and paint a bright
              future for businesses taking the best route. We shape the best
              system addressing emerging business drivers, using extensive
              experience, local knowledge, and a great approach - the most
              crucial aspects of all projects. Forgebyte works differently, and
              this is what helps us build the best solution for you and for you.
            </p>
          </div>
        </section>

        {/* Operational blueprint Section */}
        
        <OperationalBlueprintSlider />

        {/* mobile demos */}
        <section className="flex flex-col items-center text-center px-6 lg:px-20 py-16">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold">
            We Are a House of Mobile App Development Services
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl">
            After delivering dozens of successful projects under our belt,
            ForgeByte is all set to offer tailor-made solutions to your business
            needs. With us, you can access the best-in-class mobile app
            development services and make your idea market-ready.
          </p>

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
        <section className="w-full flex flex-col items-center py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
            Empowering Several Industries with Our Services
          </h2>

          <div className="max-w-4xl text-center text-gray-600 mb-10">
            <p>
              We never limit ourselves. Our best minds accept new challenges to
              push their limits that make us different from others. We have
              served clients from distinct industries with robust and powerful
              apps that speak for the quality.
            </p>
            <p className="mt-4">
              Now, it's your time to make a smart move and enhance your digital
              product’s performance with our mobile application development
              services.
            </p>
          </div>

          {/* Industries List */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white shadow-lg rounded-lg px-5 py-3 hover:scale-105 transition-transform"
              >
                {industry.icon}
                <span className="text-lg font-medium text-gray-800">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        <Testimonials />

        <Footer />
      </div>
    </div>
  );
};

export default Page;
