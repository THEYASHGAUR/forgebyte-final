'use client';

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 lg:px-16 bg-white shadow-md">
      <div className="text-3xl font-bold flex items-center">
        <img src="logo.png" alt="Logo" className="h-24 w-auto" />
      </div>
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
        <Link href="/testimonial" className='hover:text-blue-500'>
          Testimonial
        </Link>
      </nav>

      <button className="bg-gradient-to-r from-blue-400 to-green-400 px-4 py-2 rounded-full text-white hover:opacity-90">
      <Link href="/contactUs">Contact Us</Link>
      </button>
    </header>
  );
};

export default Header;
