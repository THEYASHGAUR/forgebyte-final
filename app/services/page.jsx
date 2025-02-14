'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import WhatWeAreOffering from '../components/WhatWeAreOffering';
import { BriefcaseMedical, LineChart, Cpu, GraduationCap } from 'lucide-react';
import Footer from '../components/Footer';

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

const operationalBlueprint = [
  {
    id: 1,
    icon: '/services_requirement.png',
    title: 'Requirement Analysis',
  },
  {
    id: 2,
    icon: 'icon1',
    title: 'Requirements',
  },
  {
    id: 3,
    icon: '',
    title: 'Create ProtoTypes',
  },
  {
    id: 4,
    icon: '',
    title: 'Design',
  },
  {
    id: 5,
    icon: '',
    title: 'Coding/Implementation',
  },
  {
    id: 6,
    icon: '',
    title: 'Testing',
  },
  {
    id: 7,
    icon: '',
    title: 'Release the final product',
  },
];

const services = [
  'A certified team of developers to work on your project',
  'Daily reporting or project updates shared with clients',
  'Multiple communication channels for effective communication',
];

const page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % operationalBlueprint.length
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + operationalBlueprint.length) % testimonials.length
    );
  };

  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen font-sans">
        {/* Hero Section */}
        <header className="bg-black text-white text-center py-36">
          <h1 className="text-5xl font-bold">FORGEBYTE</h1>
        </header>

        {/* About Section */}
        <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-[#1f2937]">
              Turning Visions into Reality
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-semibold ">
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

        {/* Process Section */}
        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-2xl text-[#1f2937] font-bold mb-6">
              The Operational Blueprint of Forgebyte : <br />
              An Detailed Overview
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <button
                className="absolute left-4  transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 p-2 rounded-full"
                //  onClick={prevTestimonial}
              >
                <FaChevronLeft className="text-lg text-gray-800" />
              </button>
              {operationalBlueprint.map((item) => (
                <div key={item.id} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <Image
                      src={`/icons/${item.icon}.svg`}
                      width={50}
                      height={50}
                      alt={item.title}
                    />
                  </div>
                  <p className="mt-4 font-semibold text-gray-900">
                    {item.title}
                  </p>
                </div>
              ))}
              <button
                className="absolute right-4  transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 p-2 rounded-full"
                //  onClick={nextTestimonial}
              >
                <FaChevronRight className="text-lg text-gray-800" />
              </button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-center mb-6">
            We have worked on various Projects
          </h2>
          <div className="relative">
            <Image
              src="/home_testimonial.png"
              width={800}
              height={400}
              alt="Projects"
              className="rounded-lg shadow"
            />
            <div className="absolute top-6 left-6 bg-black text-white p-4 rounded-lg shadow-md">
              <p className="text-sm font-light">
                What our clients say about the projects
              </p>
              <p className="text-sm italic">
                "Our journey from beginning to completion was smooth and
                efficient."
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <WhatWeAreOffering />

        {/* our developement service lifecycle */}
        <div className='flex items-center pl-32 p-3'>
          <Image
            src="/dev_lifecycle.png"
            height={1000}
            width={1000}
            alt="development services lifecycle"
            // className="flex items-center my-20 ml-32"
          />
        </div>

        {/* our services are top notch */}
        <section className="w-full flex flex-col items-center py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10 text-center">
            Our services are Top Notch
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl">
            {/* Left Side - Image */}
            <div className="w-full md:w-1/2">
              <Image
                src="/missionVision.png"
                height={350}
                width={350}
                alt="Team working"
                className="rounded-xl shadow-lg"
              />
            </div>

            {/* Right Side - Services List */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-5 rounded-lg shadow-md text-gray-800"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* empowering several industries with our services */}
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

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};

export default page;
