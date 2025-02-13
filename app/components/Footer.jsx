"use client";

import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="flex items-center gap-2">
            <FaEnvelope /> <a href="mailto:info@forgebytes.in" className="hover:underline">info@forgebytes.in</a>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaPhone /> <a href="tel:+919313693609" className="hover:underline">+91 9313693609</a>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaMapMarkerAlt /> <p>123 Main Street, Anytown, USA, 2141</p>
          </div>
        </div>

        {/* Menu */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <ul className="space-y-2">
            {["Home", "About", "Services", "Projects", "Testimonial", "Contact"].map((item) => (
              <li key={item} className="hover:underline cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Services</h2>
          <ul className="space-y-2">
            {["SEO", "Content Marketing", "Website Design", "Social Media Marketing"].map((service) => (
              <li key={service} className="hover:underline cursor-pointer">{service}</li>
            ))}
          </ul>
        </div>

        {/* Other Pages */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Other Pages</h2>
          <ul className="space-y-2">
            {["Licenses", "404"].map((page) => (
              <li key={page} className="hover:underline cursor-pointer">{page}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4 mt-8">
        <FaFacebook className="text-xl cursor-pointer hover:text-blue-400" />
        <FaTwitter className="text-xl cursor-pointer hover:text-blue-300" />
        <FaInstagram className="text-xl cursor-pointer hover:text-pink-400" />
        <FaLinkedin className="text-xl cursor-pointer hover:text-blue-500" />
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 text-center text-sm">
        <a href="mailto:info@forgebytes.in" className="hover:underline">info@forgebytes.in</a>
      </div>
    </footer>
  );
};

export default Footer;
