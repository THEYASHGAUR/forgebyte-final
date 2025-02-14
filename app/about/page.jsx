import React from 'react';

import Image from 'next/image';
import HeroSection from '../components/HeroSection';
import TeamSection from '../components/TeamSection';
import Footer from '../components/Footer';

const services = [
  'A certified team of developers to work on your project',
  'Daily reporting or project updates shared with clients',
  'Multiple communication channels for effective communication',
];

const page = () => {
  return (
    <>
      {/* hero section */}
      <HeroSection />

      {/* this is forgebyte */}
      <section className="w-full py-12 flex flex-col items-center text-center bg-white text-gray-800">
        {/* Title */}
        <h1 className="text-4xl font-bold">
          This is <span className="text-[#1D4ED8]">Forgebyte</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg max-w-3xl leading-relaxed">
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
        </p>
      </section>

      {/* our values */}
      <section className="w-full py-12 flex flex-col items-center text-center bg-white text-gray-800">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-8">Our Values</h1>

        <div className="max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <Image
              src="/our values.png"
              alt="Team working"
              width={350}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-left">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-blue-700">
                Transparency
              </h2>
              <p className="text-gray-600">
                We believe a client has the right to be informed of project
                progress, and Forgebyte ensures 100% transparency.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-blue-700">
                Get Things Done
              </h2>
              <p className="text-gray-600">
                We empower our clients, putting the right amount of work and
                effort into the project. We get things done.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-blue-700">Quality</h2>
              <p className="text-gray-600">
                Forgebyte ensures quality project delivery. We use rising
                technologies to help you stay ahead of the game.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-700">
                Stay Positive
              </h2>
              <p className="text-gray-600">
                Obstacles hinder the development journey, but we stay positive
                and always find a way to resolve issues.
              </p>
            </div>
          </div>
        </div>
      </section>

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

      {/* success stats */}
      <section className="w-full py-12 bg-blue-50 text-gray-900 text-center">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-8">
          The Ultimate Of our Success Over the Years
        </h1>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Metric Box */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-blue-700">150+</h2>
            <p className="text-gray-700">Project Completed</p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-blue-700">150+</h2>
            <p className="text-gray-700">Awards Received</p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-blue-700">150+</h2>
            <p className="text-gray-700">World Wide Client</p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-blue-700">150+</h2>
            <p className="text-gray-700">Clients Satisfaction</p>
          </div>
        </div>
      </section>

      {/* team section */}
      <TeamSection />

      <Footer />
    </>
  );
};

export default page;
