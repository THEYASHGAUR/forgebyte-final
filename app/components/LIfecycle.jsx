'use client';
import { motion } from 'framer-motion';

const steps = [
  { id: 1, title: 'Project Research', color: 'bg-blue-500' },
  { id: 2, title: 'Wireframing', color: 'bg-yellow-500' },
  { id: 3, title: 'Design & Development', color: 'bg-green-500' },
  { id: 4, title: 'Testing', color: 'bg-red-500' },
  { id: 5, title: 'Launch', color: 'bg-purple-500' },
  { id: 6, title: 'Maintenance', color: 'bg-blue-500' },
];

export default function WebDevLifecycle() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-gray-100">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center"
      >
        OUR DEVELOPMENT SERVICE LIFECYCLE
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-600 text-center max-w-2xl mt-2"
      >
        Forgebyte follows a simple website development process that helps us
        create a website that delivers high performance, enriches the user
        experience, and results in high retention.
      </motion.p>

      {/* Timeline Section */}
      <div className="relative mt-10 w-full max-w-5xl flex flex-col md:flex-row items-center justify-center">
        {/* Timeline Line for Desktop */}

        {/* Steps - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-4 relative z-10 w-full">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center md:relative"
            >
              {/* Step Number */}
              <div
                className={`w-10 h-10 bg-[#647cc8] text-white font-semibold flex items-center justify-center rounded-full text-lg`}
              >
                {step.id}
              </div>

              {/* Card */}
              <div className="bg-white border-2 border-slate-700 shadow-lg  px-6 py-4 mt-4 h-auto sm:h-[200px] w-[150px] sm:w-[150px] md:w-[150px] flex items-center justify-center text-center">
                <span className="text-gray-800 font-medium">{step.title}</span>
              </div>

              {/* Connector Dot for Mobile */}
              <div className={`w-5 h-5 ${step.color} rounded-full mt-4`} />
            </motion.div>
          ))}
        </div>
        <div className="hidden md:block absolute w-full h-[1px] mt-[135px] bg-gray-800 top-1/2 -translate-y-1/2" />

        {/* Mobile Timeline Line */}
        <div className="block md:hidden absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300" />
      </div>
    </section>
  );
}
