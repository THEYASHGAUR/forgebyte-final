import React from 'react';
import Image from 'next/image';

const services = [
  'A certified team of developers to work on your project',
  'Daily reporting or project updates shared with clients',
  'Multiple communication channels for effective communication',
];

const TopNotch = () => {
  return (
    <div>
      <section className="w-full flex flex-col items-center py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10 text-center">
          Our services are Top Notch
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl">
          <div className="w-full md:w-1/2">
            <Image
              src="/missionVision.png"
              height={350}
              width={350}
              alt="Team working"
              className="rounded-xl shadow-lg"
            />
          </div>

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
    </div>
  );
};

export default TopNotch;
