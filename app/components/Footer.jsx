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
          className='mb-4'
           src="/logo_bg.png" alt="logo" height={100} width={200} />
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <a href="mailto:info@forgebytes.in" className="hover:underline">
              info@forgebytes.in
            </a>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaPhone />
            <a href="tel:+919313693609" className="hover:underline">
              +91 9319639609
            </a>
          </div>
          <div className="flex items-center gap-2 mt-2">
            {/* <FaMapMarkerAlt />  */}
            {/* <p>123 Main Street, Anytown, USA, 2141</p> */}
          </div>
        </div>

        {/* Menus - Stack on Mobile */}
        <div className="flex flex-wrap sm:flex-nowrap gap-6 w-full sm:w-auto">
          {/* Menu */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Menu</h2>
            <ul className="space-y-2">
              {[
                'Home',
                'About',
                'Services',
                'Testimonial',
                'Contact',
              ].map((item) => (
                <li key={item} className="hover:underline cursor-pointer">
                  {item}
                </li>
              ))}
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

      <div className="flex items-center justify-between border-t-[1px] border-black mt-3">
        <div className="flex justify-center space-x-4 mt-4">
          <FaFacebook className="text-xl cursor-pointer hover:text-blue-400" />
          <FaTwitter className="text-xl cursor-pointer hover:text-blue-300" />
          <FaInstagram className="text-xl cursor-pointer hover:text-pink-400" />
          <FaLinkedin className="text-xl cursor-pointer hover:text-blue-500" />
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-sm">
          <a href="mailto:info@forgebytes.in" className="hover:underline">
            info@forgebytes.in
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
