'use client';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import HandGearIcon from '@/app/assets/HandGearIcon.svg';
import FollowUSIcon from '@/app/assets/Follow-Us-Icon.png';
import Facebook from '@/app/assets/facebook.svg';
import Instagram from '@/app/assets/instagram.svg';
import Youtube from '@/app/assets/youtube.svg';
import Twitter from '@/app/assets/twitter.svg';
import Linkedin from '@/app/assets/linkedin.svg';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { sendEmail } from '@/lib/resend';

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const dropdownRef = useRef(null);

  const options = [
    'Software Development',
    'IT Consulting',
    'Website Development',
    'UX/UI Design',
    'Mobile Development',
    'SaaS App Development',
  ];

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    budget: '',
    country: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  // function send(event) {
  //     event.preventDefault(); // Prevent default form submission
  //     const updatedFormData = { ...formData, service: selectedOption };
  //     sendEmail(updatedFormData);
  //     console.log("Sent email with data:", updatedFormData);
  // }

  const send = async (e) => {
    e.preventDefault(); // Prevent form reload
    await sendEmail({ updatedFormData: formData });
    console.log('Email Sent with data:', formData);
  };

  return (
    <section className="bg-[#AFDCD5] min-h-screen flex flex-col lg:flex-row items-center p-5 lg:p-0">
      <div className="flex flex-col lg:w-1/2 gap-y-6 lg:pl-20 xl:pl-40 pt-10 text-center lg:text-left w-full">
        <h1 className="text-4xl lg:text-6xl font-bold">Contact Us</h1>
        <p className="text-sm lg:text-base text-[#000000bf]">
          Email, call, or complete the form to learn how Forgebyte
          <br className="hidden lg:block" /> can solve your messaging problem.
        </p>
        <div className="space-y-2 border-b border-black pb-5 mx-auto lg:mx-0 w-fit">
          <div className="flex gap-x-4 items-end justify-center lg:justify-start">
            <Image src={HandGearIcon} alt="Hand-Gear-Icon" />
            <h3 className="text-sm font-bold">Customer Support</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 text-center lg:text-left">
            <p className="text-[#5F5F5F] text-sm">
              forgebytesolutions@gmail.com
            </p>
            <p className="text-[#5F5F5F] text-sm">+91 9319639609</p>
          </div>
        </div>
        <div className="space-y-5 border-b border-black pb-5 w-fit mx-auto lg:mx-0">
          <div className="flex gap-x-4 items-end justify-center lg:justify-start">
            <Image src={FollowUSIcon} alt="Follow-Us-Icon" />
            <h3 className="text-sm font-bold">Follow Us</h3>
          </div>
          <div className="flex justify-center lg:justify-start gap-x-5">
            {[Facebook, Instagram, Youtube, Twitter, Linkedin].map(
              (icon, idx) => (
                <Link key={idx} href="#">
                  <Image src={icon} alt="Social Icon" />
                </Link>
              )
            )}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center pt-10 lg:pt-0">
        <form
          onSubmit={send}
          className="flex flex-col w-full max-w-[378px] rounded-[20px] border bg-white p-5"
        >
          <h3 className="text-xl font-bold">Get in Touch</h3>
          <hr className="my-5" />
          <div className="flex flex-col gap-y-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name*"
              className="border p-2 px-5 rounded-3xl w-full"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address*"
              className="border p-2 px-5 rounded-3xl w-full"
            />
            <input
              type="number"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Contact No.*"
              className="border p-2 px-5 rounded-3xl w-full"
            />
            <div className="relative">
              <p className="absolute top-[9px] left-5 text-[#0000004f]">$</p>
              <input
                type="number"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="Please Enter Your Budget*"
                className="border p-2 w-full px-10 rounded-3xl"
              />
            </div>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country*"
              className="border p-2 px-5 rounded-3xl w-full"
            />
            <div className="relative w-full" ref={dropdownRef}>
              <div
                className={`border p-2 flex justify-between px-5 cursor-pointer transition ${
                  isOpen ? 'rounded-t-3xl rounded-b-none' : 'rounded-3xl'
                } ${!selectedOption ? 'text-gray-400' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                {selectedOption || 'Select a service'}
                <ChevronDown className={`${isOpen ? 'rotate-180' : ''}`} />
              </div>
              {isOpen && (
                <ul className="absolute w-full mt-[-1px] bg-white rounded-b-3xl overflow-hidden shadow-lg">
                  {options.map((option, index) => (
                    <li
                      key={index}
                      value={formData.option}
                      className="p-2 px-5 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedOption(option);
                        setIsOpen(false);
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border p-2 pt-5 px-5 rounded-3xl w-full"
              placeholder="Message"
            />
            <button
              type="submit"
              className="bg-[#031e2e] w-fit p-1 rounded-3xl text-white px-12 mx-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
