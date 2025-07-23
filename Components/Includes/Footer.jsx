import React from 'react'
import { Youtube, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <div className="pt-20 pb-5 w-full bg-black px-3">
      <div className="max-w-7xl flex flex-col justify-between gap-20 mx-auto">
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-8">
          <div className="flex items-center">
            <img src="./footerLogo.png" alt="Footer Logo" />
          </div>

          <div className="flex gap-5 flex-col">
            <span className='text-sm text-[#FFFFFFA6]'>Product</span>
            <ul className='flex flex-col gap-2 list-none text-[#FFFFFF]'>
              <li className='text-lg'>Features</li>
              <li className='text-lg'>Pricing</li>
              <li className='text-lg'>Book a demo</li>
            </ul>
          </div>

          <div className="flex gap-5 flex-col">
            <span className='text-sm text-[#FFFFFFA6]'>Explore</span>
            <ul className='flex flex-col gap-2 list-none text-[#FFFFFF]'>
              <li className='text-lg'>Events</li>
              <li className='text-lg'>Blog</li>
            </ul>
          </div>

          <div className="flex gap-5 flex-col">
            <span className='text-sm text-[#FFFFFFA6]'>Company</span>
            <ul className='flex flex-col gap-2 list-none text-[#FFFFFF]'>
              <li className='text-lg'>About us</li>
              <li className='text-lg'>Contact us</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='flex flex-col sm:flex-row border-t border-[#FFFFFF1A] pt-5 justify-between gap-4 sm:gap-0'>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 text-sm text-[#FFFFFFA6]">
            <span>© 2025 Welcome. All right reserved.</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Youtube />
            <Linkedin />
            <Twitter />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
