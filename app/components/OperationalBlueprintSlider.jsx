import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const operationalBlueprint = [
  { id: 1, title: "Requirement Analysis", icon: "/services_requirement.png" },
  { id: 2, title: "Create Prototypes", icon: "/create_prototype.png" },
  { id: 3, title: "Design", icon: "/design.png" },
  { id: 4, title: "Coding/Implementation", icon: "/implementation.png" },
  { id: 5, title: "Testing", icon: "/testing.png" },
  { id: 6, title: "Release the final product", icon: "/release.png" },
];

const OperationalBlueprintSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevOperation = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? operationalBlueprint.length - itemsToShow : prevIndex - 1
    );
  };

  const nextOperation = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsToShow >= operationalBlueprint.length ? 0 : prevIndex + 1
    );
  };

  return (
    <section ref={ref} className="bg-white py-12 overflow-hidden">
      <motion.div
        className="flex flex-col items-center justify-center max-w-6xl mx-auto px-6 text-center"
        initial={{ opacity: 0, x: 100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-2xl text-[#1f2937] font-bold mb-6">
          The Operational Blueprint of Forgebyte
        </h2>

        <div className="flex items-center justify-center w-full">
          <div className="flex items-center justify-between relative w-full max-w-[750px] px-4 py-6">
            {/* Left Button */}
            <button
              className="absolute left-0 md:left-1 bg-gray-300 hover:bg-gray-400 p-2 rounded-full z-10"
              onClick={prevOperation}
            >
              <FaChevronLeft className="text-lg text-gray-800" />
            </button>

            {/* Image Slider */}
            <div className="flex overflow-hidden gap-6 px-6 sm:px-10">
              {operationalBlueprint
                .slice(startIndex, startIndex + itemsToShow)
                .map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="flex flex-col items-center px-3"
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                      <Image
                        src={item.icon}
                        width={60}
                        height={60}
                        alt={item.title}
                        className="rounded-full"
                      />
                    </div>
                    <p className="mt-4 font-semibold text-gray-900">
                      {item.title}
                    </p>
                  </motion.div>
                ))}
            </div>

            {/* Right Button */}
            <button
              className="absolute right-0 md:right-1 bg-gray-300 hover:bg-gray-400 p-2 rounded-full z-10"
              onClick={nextOperation}
            >
              <FaChevronRight className="text-lg text-gray-800" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default OperationalBlueprintSlider;
