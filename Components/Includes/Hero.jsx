import React from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  const HeroImages1 = [
    { image: "/Adobe.png" },
    { image: "/Square.png" },
    { image: "/NBA.png" },
    { image: "/Motive.png" },
    { image: "/PASSWOR.png" },
    { image: "/Adobe.png" },
  ];

  const HeroImages2 = [
    { image: "/PASSWOR.png" },
    { image: "/twillo.png" },
    { image: "/sendesko.png" },
    { image: "/CHECKER.png" },
    { image: "/brex.png" },
    { image: "/unvision.png" },
    { image: "/BROADCOM.png" },
  ];

  return (
    <>
      <div className="max-w-7xl w-full px-3 mx-auto py-5 justify-center">
        <div className="flex flex-col gap-5 justify-center items-center">
          <span className=" text-4xl  sm:text-7xl lg:text-8xl font-normal text-nowrap text-center  text-white">
            Captivate & Convert
          </span>
          <span className="text-xl sm:text-2xl text-[#FFFFFFB2] text-center">
            A webinar platform designed for marketers to host jaw-dropping
            experiences that drive revenue.
          </span>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-blue-600 text-white border border-transparent hover:bg-transparent hover:border-gray-400 px-4 py-1.5 rounded-full transition-all duration-300 ease-in-out"
            >
              Demo
            </a>

            <a
              href="#"
              className=" hover:bg-blue-700 hover:border-transparent flex items-center justify-center gap-3 border-gray-400 border-1 transition-all duration-300 text-white px-4 py-1.5 rounded-full"
            >
              <Play size={15} /> How it works
            </a>
          </div>
        </div>
      </div>

      <div className="relative w-full flex justify-center items-center py-16 overflow-hidden">
        {/* 🔴 Top Right Gradient */}
        <div className="absolute right-0 top-2/3 w-[25vw] h-[20vh]  bg-gradient-to-b from-[#ff5500] to-transparent blur-3xl opacity-60 z-0 pointer-events-none" />

        {/* 🔵 Bottom Right Gradient */}
        <div className="absolute right-0 bottom-0 w-[25vw] h-[20vh] bg-gradient-to-t from-[#8cb3ff] to-transparent blur-3xl opacity-60 z-0 pointer-events-none" />

        {/* 🟢 Left Glow */}
        <div className="absolute left-[-5vw] top-[75%] w-[60vw] h-[30vh] bg-gradient-to-br from-[#84ffc9] via-transparent to-transparent blur-3xl opacity-50 z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90vw] h-[100px] bg-black blur-3xl opacity-80 z-100 pointer-events-none" />

        {/* Image */}
        <div className="relative max-w-8xl mx-auto z-10 px-10 w-full flex justify-center">
          <img
            src="/Heroimg.png"
            className="w-full h-auto object-cover"
            alt="Hero"
          />
        </div>
      </div>

      <div className="bg-black px-5  relative overflow-hidden min-h-full ">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100vw] h-[140px] bg-[#00000041] blur-4xl opacity-90 z-100 pointer-events-none" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100vw] h-[50px] bg-[#000000] blur-4xl opacity-90 z-100 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto justify-center py-20  ">
          <div className="relative w-full flex flex-col md:flex-row justify-center gap-10 md:justify-between items-start ">
            {/* Text Section */}
            <div className="flex-1 flex flex-col w-full text-center md:text-start gap-6 min-w-[280px] max-w-full">
              <h1 className="text-4xl lg:text-5xl  font-semibold text-white leading-tight">
                World-class teams <br /> are upgrading to Welcome
              </h1>
              <p className="text-[#FFFFFFB2] text-sm md:max-w-md  ">
                Companies are ditching legacy platforms for the ability to
                deliver an engaging experience at every level.
              </p>

              <div className="flex flex-col mt-4">
                <div className="flex justify-center md:justify-start items-center space-x-2">
                  <ArrowUpRight size={35} color="green" className="font-bold" />
                  <h2 className="text-white text-[29px] font-medium">
                    66%{" "}
                    <span className="text-[#FFFFFFB2] font-normal">
                      attendance rate
                    </span>
                  </h2>
                </div>
                <p className="text-[#FFFFFFB2] text-xs mt-1">
                  avg attendance for Welcome customers
                </p>
              </div>
            </div>

            {/* Logo Section */}
            <div className="flex flex-row w-full flex-1  min-w-[280px] max-w-full  gap-10 justify-between md:justify-center   ">
              {/* First column */}
              <div className="flex flex-col gap-10">
                {HeroImages1.map((item, index) => (
                  <img
                    key={index}
                    src={item.image}
                    className="w-[120px] object-contain opacity-80"
                    alt=""
                  />
                ))}
              </div>

              {/* Second column */}
              <div className="flex flex-col gap-10">
                {HeroImages2.map((item, index) => (
                  <img
                    key={index}
                    src={item.image}
                    className="w-[120px] object-contain opacity-80"
                    alt=""
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
