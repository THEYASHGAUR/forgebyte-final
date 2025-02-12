'use client'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import HandGearIcon from '@/app/assets/HandGearIcon.svg'
import FollowUSIcon from '@/app/assets/Follow-Us-Icon.png'
import Facebook from '@/app/assets/facebook.svg'
import Instagram from '@/app/assets/instagram.svg'
import Youtube from '@/app/assets/youtube.svg'
import Twitter from '@/app/assets/twitter.svg'
import Linkedin from '@/app/assets/linkedin.svg'
import Link from 'next/link'
import logo from '@/app/assets/logo.svg'
import { ChevronDown } from 'lucide-react'



const ContactUs = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(""); // Empty by default for placeholder
    const dropdownRef = useRef(null);
  
    const options = ["Service 1", "Service 2", "Service 3", "Service 4", "Service 5"];
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  return (
    <section className='bg-[#f0fcff] h-[726px] flex items-center'>
        <div className='flex flex-col w-1/2 gap-y-10 pl-20 min-h-full xl:pl-40 pt-10'>            
        <Image src={logo} alt='logo' height={38} width={182} />
        <h1 className='text-6xl font-bold'>Contact Us</h1>
        <p className='text-base text-[#000000bf]'>Email, call, or complete the form to learn how Forgebyte<br/>can solve your messaging problem.</p>
        <div className='space-y-2 border-b border-black pb-5 w-fit'>
            <div className='flex gap-x-4 items-end'>
                <Image src={HandGearIcon} alt='Hand-Gear-Icon' />
                <h3 className='text-sm font-bold'>Customer Support</h3>
            </div>
            <div className=' grid grid-cols-2 grid-rows-2'>
                <p className='text-[#5F5F5F] text-sm pl-[58px]'>info@forgebytes.in</p>
                <p className='text-[#5F5F5F] text-sm pl-[29px]'>+91 9319639609</p>
            </div>
        </div>
        <div className='space-y-5 border-b border-black pb-5 w-fit pr-[75px]'>
            <div className='flex gap-x-4 items-end'>
                <Image src={FollowUSIcon} alt='Hand-Gear-Icon' />
                <h3 className='text-sm font-bold'>Follow Us</h3>
            </div>
            <div className='flex px-[56px] gap-x-5'>
                <Link href="https://facebook.com">
                    <Image src={Facebook} alt='Facebook' />
                </Link>
                <Link href="https://instagram.com">
                    <Image src={Instagram} alt='Instagram' />
                </Link>
                <Link href="https://youtube.com">
                    <Image src={Youtube} alt='Youtube' />
                </Link>
                <Link href="https://twitter.com">
                    <Image src={Twitter} alt='Twitter' />
                </Link>
                <Link href="https://linkedin.com">
                    <Image src={Linkedin} alt='Linkedin' />
                </Link>
            </div>
        </div>
        </div>
        <div className='w-1/2 flex justify-center'>
            <form action="" className='flex flex-col w-[378px] h-[553px] rounded-[20px] border bg-white p-5'>
                <h3 className='text-xl font-bold'>Get in Touch</h3>
                <hr className='my-5' />
                <div className='flex flex-col gap-y-3 items-center'>
                    <input type="text" placeholder='Name*' className='border p-2 px-10 rounded-3xl w-full'/>
                    <input type="email" placeholder='Email Address*' className='border p-2 px-10 rounded-3xl w-full' />
                    <input type="number" placeholder='Contact No.*' className='border p-2 px-10 rounded-3xl w-full'/>
                    <div className='relative w-[21em]'>
                        <p className='absolute top-[9px] left-7 text-[#0000004f]'>$</p>
                        <input type="number" placeholder='Please Enter Your Budget*' className='border p-2 w-full px-10 rounded-3xl' />
                    </div>
                    <input type="text" placeholder='Country*' className='border p-2 px-10 rounded-3xl w-full' />
                    <div className="relative w-full" ref={dropdownRef}>
                        <div
                            className={`border p-2 flex justify-between px-10 cursor-pointer transition ${
                            isOpen ? "rounded-t-3xl rounded-b-none" : "rounded-3xl"
                            } ${!selectedOption ? "text-gray-400" : ""}`} // Placeholder style
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {selectedOption || "Select a service"}
                            <ChevronDown className={`${isOpen? 'rotate-180' : ''}`} />
                        </div>
                        {isOpen && (
                            <ul className="absolute w-full mt-[-1px] bg-white rounded-b-3xl overflow-hidden shadow-lg">
                            {options.map((option, index) => (
                                <li
                                key={index}
                                className="p-2 px-10 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                    setSelectedOption(option); // Set selected option
                                    setIsOpen(false); // Close dropdown
                                }}
                                >
                                {option}
                                </li>
                            ))}
                            </ul>
                        )}
                    </div>
                    <textarea name="" id="" className='border p-2 pt-5 px-10 rounded-3xl w-full' placeholder='Message'/>
                    <button type='submit' className='bg-[#031e2e] w-fit p-1 rounded-3xl text-white px-12'>Submit</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default ContactUs