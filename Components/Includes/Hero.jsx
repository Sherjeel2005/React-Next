'use client';

import React from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef , useEffect } from "react";
import BlurText from "../BlurText";
import TextType from "../SplitText";
import AnimatedContent from "../Animations/AnimatedContent";
import FadeContent from "../Animations/FadeContent";

const Hero = () => {

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};


  const MarqueeColumn = ({ images, reverse }) => (
    
  <div className=" overflow-hidden h-[400px] relative w-[160px]">
    <motion.div
      
        animate={{
        y: reverse ? ["-50%", "0%"] : ["0%", "-50%"]
      }}
      transition={{ repeat: Infinity, duration: 7 , ease: "linear" }}
      className="flex flex-col gap-6"
    >
      {[...images , ...images].map((item, index) => (
        <img
          key={index}
          src={item.image}
          alt=""
          className="w-full pb-10  object-contain opacity-80"
        />
      ))}
    </motion.div>
  </div>
);

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

  const text = "Captivate & Convert";

  return (
    <>
     <div className="">
      <section className="px-5 md:px-10 pt-5 lg:px-20 w-full ">
         <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col gap-[31px] justify-center items-center">
          <div className="flex gap-6 flex-col">
             
            <motion.span 
        className="text-4xl sm:text-7xl lg:text-8xl font-normal text-center text-nowrap text-white"
        style={{ display: 'inline-block', overflow: 'hidden' }}
      >
     <TextType 
  text={["Captivate & Convert" , "Captivate & Convert" , "Captivate & Convert"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>
      </motion.span>

          <div className="flex justify-center">
               <BlurText
  text=" A webinar platform designed for marketers to host  jaw-dropping experiences that drive revenue."
  delay={50}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
   className="text-xl sm:text-2xl flex justify-center  max-w-[590px] text-[#FFFFFFB2] text-center"
/>
          </div>

         
          </div>

          <AnimatedContent
  distance={150}
  direction="vertical"
  reverse={false}
  duration={1.2}
  ease="bounce.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
  delay={0.3}
>
  <div className="flex pb-11  gap-4">
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

          </AnimatedContent>
        
        </div>
      </div>
      </section>
     

      <div className="relative w-full flex justify-center items-center  pb-[20px] md:pb-[82px]    overflow-hidden">
        {/* 🔴 Top Right Gradient */}
        <div className="absolute right-0 top-2/3 w-[25vw] h-[20vh]  bg-gradient-to-b from-[#ff5500] to-transparent blur-3xl opacity-60 z-0 pointer-events-none" />

        {/* 🔵 Bottom Right Gradient */}
        <div className="absolute right-0 bottom-0 w-[25vw] h-[20vh] bg-gradient-to-t from-[#8cb3ff] to-transparent blur-3xl opacity-60 z-0 pointer-events-none" />

        {/* 🟢 Left Glow */}
        <div className="absolute left-[-5vw] top-[75%] w-[60vw] h-[30vh] bg-gradient-to-br from-[#84ffc9] via-transparent to-transparent blur-3xl opacity-50 z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90vw] h-[100px] bg-black blur-3xl opacity-80 z-100 pointer-events-none" />

        {/* Image */}
        <div className="relative w-full max-w-[1356px] mx-auto px-4 py-10 flex justify-center items-center">
  {/* Background image */}
  <img
    src="/Heroimg.png"
    alt="Hero"
    className="w-full h-auto object-cover"
  />

  {/* Floating content */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl z-20 w-full  md:max-w-[1285px] px-2 ">
    <div className="relative  overflow-hidden ">
      
      {/* Video or image */}
      <img
        src="/captivate.png"
        alt="Captivate"
        className="w-full h-auto object-cover"
      />

    
    </div>
  </div>
</div>


      </div>

      <div className="bg-black px-5 relative  overflow-hidden min-h-full">
      {/* Blur overlays */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100vw] h-[140px] bg-[#00000041] blur-4xl opacity-90 z-100 pointer-events-none" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100vw] h-[50px] bg-[#000000] blur-4xl opacity-90 z-100 pointer-events-none" />

      {/* Content container */}
      <section className="relative  px-5 md:px-20  py-20 w-full">
          <div className="max-w-7xl mx-auto">
              <div className="w-full flex flex-col lg:flex-row items-center text-center lg:text-left justify-between gap-12 ">
          {/* Text Section */}
    <AnimatedContent
  distance={150}
  direction="vertical"
  reverse={false}
  duration={1.2}
  ease="bounce.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
  delay={0.3}
>

   <div className="flex-1 max-w-lg w-full  ">
            <h1 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
              World-class teams  are upgrading to Welcome
            </h1>
            <p className="text-[#FFFFFFB2] text-sm mt-4">
              Companies are ditching legacy platforms for the ability to
              deliver an engaging experience at every level.
            </p>

            <div className="flex flex-col mt-6 ">
              <div className="flex justify-center lg:justify-start  w-full  space-x-2">
                <ArrowUpRight size={35} color="green" className="font-bold" />
                <h2 className="text-white text-[29px] font-medium">
                  66% <span className="text-[#FFFFFFB2] font-normal">attendance rate</span>
                </h2>
              </div>
              <p className="text-[#FFFFFFB2] text-xs mt-1">
                avg attendance for Welcome customers
              </p>
            </div>
          </div>
 
  

</AnimatedContent>

         

          {/* Logo Section */}
          {/* <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 gap-y-10 gap-x-6 justify-items-center max-w-md w-full">
            {HeroImages1.concat(HeroImages2).map((item, index) => (
              <img
                key={index}
                src={item.image}
                alt=""
                className="w-[120px] object-contain opacity-80"
              />
            ))}
          </div> */}

           
   <div className="flex-1 flex gap-10 justify-center">
  <MarqueeColumn images={HeroImages1} reverse={false} />
  <MarqueeColumn images={HeroImages2} reverse={true} />
</div>

  


  </div>

          </div>
      </section>
      </div>

     </div>
    </>
  );
};

export default Hero;
