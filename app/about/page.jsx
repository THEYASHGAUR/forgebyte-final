import React from 'react';

import Image from 'next/image';
import HeroSection from '../components/HeroSection';
import TeamSection from '../components/TeamSection';
import Footer from '../components/Footer';
import TopNotch from '../components/TopNotch';


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
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/our values.png"
              alt="Team working"
              width={350}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {[
              {
                title: 'Transparency',
                text: 'We believe a client has the right to be informed of project progress, and Forgebyte ensures 100% transparency.',
              },
              {
                title: 'Get Things Done',
                text: 'We empower our clients, putting the right amount of work and effort into the project. We get things done.',
              },
              {
                title: 'Quality',
                text: 'Forgebyte ensures quality project delivery. We use rising technologies to help you stay ahead of the game.',
              },
              {
                title: 'Stay Positive',
                text: 'Obstacles hinder the development journey, but we stay positive and always find a way to resolve issues.',
              },
            ].map(({ title, text }) => (
              <div key={title} className="mb-6 px-3">
                <h2 className="text-2xl font-semibold text-[#195478]">
                  {title}
                </h2>
                <p className="text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* our services are top notch */}
      <TopNotch />

      {/* success stats */}
      <section className="w-full py-12 bg-blue-50 text-gray-900 text-center">
        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-bold mb-8">
          The Ultimate Of our Success Over the Years
        </h1>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Metric Box */}
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-semibold text-blue-700">20+</h2>
            <p className="text-gray-700">Project Completed</p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-semibold text-blue-700">10+</h2>
            <p className="text-gray-700">Awards Received</p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-semibold text-blue-700">50+</h2>
            <p className="text-gray-700">World Wide Client</p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-semibold text-blue-700">100%</h2>
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
