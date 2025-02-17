'use client';

import Image from 'next/image';
import Footer from './components/Footer';
import Header from './components/Header';
import WhatWeAreOffering from './components/WhatWeAreOffering';
import Testimonials from './components/Testimonials';
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Our journey from beginnings to breakthroughs has been fueled by innovation, dedication, and an unyielding commitment to excellence.",
    author: "Trexo",
    image: "/trexo_updated.png",

  },
  {
    quote:
      "Working with Forgebyte was a game-changer. Their expertise and commitment helped us scale rapidly and efficiently.",
    author: "Yoom",
    image:"/yoom_updated.png"
  },
  {
    quote:
      "Working with Forgebyte was a game-changer. Their expertise and commitment helped us scale rapidly and efficiently.",
    author: "Fleetrr",
    image:"/fleetr_enhanced.png"
  },
];

const images = ["/mobile 1.png", "/mobile 2.png"]; 

export default function Home() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      {/*--------------------- hero section -------------------------- */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 bg-[#f8f6f6]">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900">
            We Don’t Just Go Big –{' '}
            <span className="text-black">We Go Beyond.</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Our journey from beginnings to breakthroughs has been fueled by
            innovation, dedication, and an unyielding commitment to excellence.
          </p>
          <button className="mt-6 bg-white shadow-md border px-6 py-2 rounded-lg text-gray-800 hover:bg-gray-100">
            Explore
          </button>
          <div className="mt-6 text-gray-700">
            <span className="font-bold text-2xl">3+</span> Clients
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex  justify-center">
          <Image src="/hero_img.png" width={500} height={500} alt="hero" />
        </div>
      </section>

      {/* ------------------------------images section-------------------------- */}
      <section className="mt-10">
        <div className="w-full h-40 flex-col text-center ">
          <h1 className="text-[33px] font-semibold mb-6 ">
            Turning vision into reality.
          </h1>
          <p className="text-[16px] font-normal">
            Our journey from beginnings to breakthroughs has been fueled by
            innocation, dedication, amd an unyielding commitment to excellence
          </p>
        </div>

        {/* images */}
        <div className="flex justify-center gap-5 mt-8 overflow-x-auto relative">
          <style>
            {`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .scroll-container {
              scroll-snap-type: x mandatory;
              scroll-behavior: smooth;
            }
            .scroll-item {
              scroll-snap-align: start;
            }
          `}
          </style>
          <div className="flex space-x-5 overflow-x-auto no-scrollbar scroll-container">
            <div className="flex-none border border-gray-300 p-5 rounded-lg  transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg scroll-item">
              <Image
                src="/trexo_updated.png"
                alt="Trexo Template"
                width={450}
                height={350}
                className="rounded-lg  h-auto"
              />
            </div>
            <div className="flex-none border border-gray-300 p-5 rounded-lg  transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg scroll-item">
              <Image
                src="/yoom_updated.png"
                alt="YOOM Template"
                width={450}
                height={350}
                className="rounded-lg  h-auto"
              />
            </div>
            <div className="flex-none border border-gray-300 p-5 rounded-lg  transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg scroll-item">
              <Image
                src="/fleetr_enhanced.png"
                alt="Third Template"
                width={450}
                height={350}
                className="rounded-lg h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* included section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 lg:px-20 py-16">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/laptop.png"
            alt="Laptop and Mobile Illustration"
            className="w-20 md:w-full"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Included in <span className="text-blue-600">ForgeByte</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Forgebyte Solutions template includes 10+ pages in total, with more
            than 40+ sections and 1 different home page, and amazing features.
          </p>
          <button className="mt-6 px-6 py-3 bg-gray-900 text-white rounded-lg shadow-md hover:bg-gray-700 transition">
            Purchase Template
          </button>
        </div>

        {/* Bottom Badge */}
        {/* <div className="relative bottom-6 flex justify-center">
          <span className="flex items-center gap-2 px-4 py-2 bg-teal-400 text-white rounded-full shadow-md">
            ➕ 10+ Useful inner pages
          </span>
        </div> */}
      </section>

      

      {/* we have worked on various projects */}
      <section className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-5xl font-bold text-center mb-6">
            We have worked on various Projects
          </h2>
          <div className="flex p-10 w-full h-auto ">
            <div className="bg-[#0a2539] text-white p-14  w-[400px] h-[400px]">
              <h2 className="text-2xl font-bold mb-4">What our clients say about the projects</h2>
              <p className="text-gray-300">{testimonials[index].quote}</p>
              <p className="font-bold mt-2">~ {testimonials[index].author}</p>

              <div className="mt-4 flex justify-center gap-4">
                <button
                  onClick={prevTestimonial}
                  className="p-2 border rounded-full hover:bg-white hover:text-black transition"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 border rounded-full hover:bg-white hover:text-black transition"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>

            <div>
              <Image
                 src={testimonials[index].image}
                 height={650}
                 width={650}
                 alt={testimonials[index].author}
                 className="rounded-lg shadow-lg transition-all duration-500"
              />
            </div>
          </div>
        </section>

      {/* what we are offering */}
      <WhatWeAreOffering />

      {/* testimonial section */}
      <Testimonials />

      {/* mission and vision */}
      <section className="w-full flex flex-col items-center py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
          Mission and Vision
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/missionVision.png"
              alt="Team working"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Right Side - Mission & Vision */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div className="bg-gray-100 p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Our Mission
              </h3>
              <p className="text-gray-700 mt-2">
                Our journey from beginnings to breakthroughs has been fueled by
                innovation, dedication, and an unyielding commitment to
                excellence.
              </p>
            </div>

            <div className="bg-gray-100 p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Our Vision
              </h3>
              <p className="text-gray-700 mt-2">
                Our journey from beginnings to breakthroughs has been fueled by
                innovation, dedication, and an unyielding commitment to
                excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
