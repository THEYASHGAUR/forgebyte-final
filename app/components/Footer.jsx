'use client';
import Image from 'next/image';
import React from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#f3f4f6] text-black py-10 px-6 lg:px-20">
      <div className="flex flex-wrap lg:flex-nowrap justify-between gap-6">
        {/* Contact Info */}
        <div className="w-full sm:w-auto">
          <Image
            className="mb-4"
            src="/logo_bg.png"
            alt="logo"
            height={100}
            width={200}
          />

          <div className="flex items-center gap-2 mt-2"></div>
        </div>

        {/* Menus - Stack on Mobile */}
        <div className="flex flex-wrap sm:flex-nowrap gap-x-40 w-full sm:w-auto">
          {/* Menu */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Menu</h2>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Testimonial', 'Contact'].map(
                (item) => (
                  <li key={item} className="hover:underline cursor-pointer">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Services</h2>
            <ul className="space-y-2">
              {[
                'App Development',
                'Chatbot Development',
                'Website Design',
                'IT Consulting',
              ].map((service) => (
                <li key={service} className="hover:underline cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Other Pages */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Other Pages</h2>
            <ul className="space-y-2">
              {['Licenses', 'Policy'].map((page) => (
                <li key={page} className="hover:underline cursor-pointer">
                  {page}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="lg:flex md:flex sm:flex gap-4 items-center justify-between  border-t-[1px]  p-4 border-black mt-5">
        <div className="flex justify-center space-x-4 ">
          <FaFacebook className="text-xl cursor-pointer hover:text-blue-400" />
          <FaTwitter className="text-xl cursor-pointer hover:text-blue-300" />
          <FaInstagram className="text-xl cursor-pointer hover:text-pink-400" />
          <FaLinkedin className="text-xl cursor-pointer hover:text-blue-500" />
        </div>

        <div className="flex my-4 sm:mt-0 items-center justify-center">
          <p>@ForgeByte. All rights reserved.</p>
        </div>
        <div className=" text-center text-sm">
          <a href="mailto:info@forgebytes.in" className="hover:underline">
          forgebytesolutions@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
