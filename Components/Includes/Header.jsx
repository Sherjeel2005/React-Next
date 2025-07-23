import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
// import { Menu } from 'lucide-react';
import { slide as Menu } from 'react-burger-menu'
import { Sling as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { SquareX } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

const Header = () => {

    const [isOpen , setIsOpen] = useState(false)
  return (
    <header className="w-full px-6 py-4 border-b  border-gray-400">
      <div
        className={`${inter.className} flex items-center justify-between md:justify-between`}
      >
        {/* Left: Hamburger (mobile only) */}
         <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>

          {/* Slide-in Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[lab(21%_0.05_-2.26_/_0.61)] shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col  gap-7 p-6 text-sm font-medium">
            <div  onClick={() => setIsOpen(false)}  className='flex cursor-pointer justify-end hover:text-red-500 transition'>
                < SquareX/>
            </div>
          <a href="#" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#" onClick={() => setIsOpen(false)}>Events</a>
          <a href="#" onClick={() => setIsOpen(false)}>About</a>
          <a href="#" onClick={() => setIsOpen(false)}>Blog</a>
          <a href="#" onClick={() => setIsOpen(false)}>Support</a>
          <a href="#" onClick={() => setIsOpen(false)}>Login</a>
          
        </nav>
      </div>

       {isOpen && (
        <div
          className="fixed inset-0  bg-[#000000d9] bg-opacity-30 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

        {/* Center: Logo + welcome (centered on mobile, left on desktop) */}
        <div className=" flex justify-center md:justify-start items-center gap-2">
          <Image src="/logo.png" width={28} height={32} alt="Logo" />
          <span className="text-lg font-semibold">welcome</span>
        </div>

         <nav className="hidden md:block ">
        <ul className="flex items-center gap-8 text-sm font-normal">
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </nav>

        {/* Right: Action buttons (hidden on mobile) */}
        <div className="flex items-center gap-4 text-sm font-normal">
          <a href="#" className='hidden md:block'>Support</a>
          <a href="#" className='hidden md:block'>Login</a>
                 <a
            href="#"
           className="bg-blue-600 text-white border border-transparent hover:bg-transparent hover:border-gray-400 px-4 py-1.5 rounded-full transition-all duration-300 ease-in-out"
          >
            Demo
          </a>
        </div>
      </div>

      {/* Navigation links (only on desktop) */}
     
    </header>
  );
};

export default Header;
