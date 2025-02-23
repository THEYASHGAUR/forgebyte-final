'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname for active state
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonial', path: '/testimonial' },
  ];

  return (
    <header className="flex opacity-0 animate-[appearFromAbove_1s_ease-out_forwards] justify-between items-center sticky z-20 top-0 left-0 p-4 lg:px-16 bg-white shadow-md">
      {/* Logo */}
      <div className="text-3xl font-bold flex items-center">
        <a href="/">
          <img src="logo2.svg" alt="Logo" className="h-14 w-auto" />
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-gray-700">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`hover:text-blue-500 transition duration-300 ${
              pathname === link.path ? 'text-blue-600 font-semibold  border-blue-600' : ''
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Contact Button (Always Visible) */}
      <button className="hidden md:block bg-gradient-to-r from-[#387397] to-[#A6EADA] px-4 py-2 rounded-full text-white hover:opacity-90">
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
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-gray-700 hover:text-blue-500 transition duration-300 ${
                pathname === link.path ? 'text-blue-600 font-semibold  border-blue-600' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
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
