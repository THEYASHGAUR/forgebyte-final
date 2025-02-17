'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // For professional icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 lg:px-16 bg-white shadow-md">
      {/* Logo */}
      <div className="text-3xl font-bold flex items-center">
        <a href="/">
          <img src="logo2.svg" alt="Logo" className="h-14 w-auto" />
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-gray-700">
        <Link href="/" className="hover:text-blue-500">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-500">
          About
        </Link>
        <Link href="/services" className="hover:text-blue-500">
          Services
        </Link>
        <Link href="/testimonial" className="hover:text-blue-500">
          Testimonial
        </Link>
      </nav>

      {/* Contact Button (Always Visible) */}
      <button className="hidden md:block bg-gradient-to-r from-blue-400 to-green-400 px-4 py-2 rounded-full text-white hover:opacity-90">
        <Link href="/contactUs">Contact Us</Link>
      </button>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center py-6 space-y-4">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-gray-700 hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/testimonial"
            className="text-gray-700 hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Testimonial
          </Link>
          <button className="bg-gradient-to-r from-blue-400 to-green-400 px-4 py-2 rounded-full text-white hover:opacity-90">
            <Link href="/contactUs" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
