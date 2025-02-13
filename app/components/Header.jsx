"use client";

import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 lg:px-16 bg-white shadow-md">
      <div className="text-3xl font-bold flex items-center">
        <img src="logo.png" alt="Logo" className="h-24 w-auto" />
      </div>
      <nav className="hidden md:flex space-x-6 text-gray-700">
        <a href="#" className="hover:text-blue-500">Home</a>
        <a href="#" className="hover:text-blue-500">About</a>
        <a href="#" className="hover:text-blue-500">Services</a>
      </nav>
      <button className="bg-gradient-to-r from-blue-400 to-green-400 px-4 py-2 rounded-full text-white hover:opacity-90">
        Contact
      </button>
    </header>
  );
};

export default Header;
