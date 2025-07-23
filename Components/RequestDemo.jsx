import React from 'react';
import Marquee from 'react-fast-marquee';

const RequestDemo = () => {
  const images1 = ['/r1.png', '/r2.jpg', '/r3.jpg', '/r4.jpg'];
  const images2 = ['/r5.jpg', '/r6.png', '/r7.jpg', '/r8.png'];

  // Duplicate to fill the space and prevent gaps
  const repeatedImages1 = [...images1, ...images1 , ...images1 ,...images1, ...images1,...images1];
  const repeatedImages2 = [...images2, ...images2 , ...images2, ...images2, ...images2 ,...images2];

  return (
    <div className="py-20 bg-white  px-3">
      <div className="max-w-7xl mx-auto justify-center">
        <div className="flex flex-col gap-10 justify-center items-center text-center">
          <span className="text-[55px] sm:text-[128px] text-black leading-none">Experience Welcome</span>
          <p className="text-xl text-[#000000A6] max-w-2xl">
            A webinar platform designed for marketers to host jaw-dropping experiences that drive revenue.
          </p>
          <div className="flex justify-center">
            <a
              href="#"
              className="hover:bg-blue-700 hover:text-white text-black border border-gray-400 transition-all duration-300 px-4 py-1.5 rounded-full"
            >
              Request a demo
            </a>
          </div>
        </div>
      </div>

      {/* Marquee Rows */}
      <div className="space-y-10   mt-16">
        {/* Top Row - Left to Right */}
        <Marquee speed={50} pauseOnHover={true} gradient={false}>
          {repeatedImages1.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`carousel-${i}`}
              className="rounded-[9999px] mx-4 w-[300px] h-auto object-cover"
            />
          ))}
        </Marquee>

        {/* Bottom Row - Right to Left */}
        <Marquee speed={50} pauseOnHover={true} direction="right" gradient={false}>
          {repeatedImages2.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`carousel-reverse-${i}`}
              className="rounded-[9999px] mx-4 w-[300px] h-auto object-cover"
            />
          ))}
        </Marquee>

      </div>
    </div>
  );
};

export default RequestDemo;
