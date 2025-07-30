import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import ScrollFloat from '../ScrollFloat';

const HowitWorks = () => {
  // Marquee images data
  const leftMarqueeImages = [
    { image: "/Howdata2.png" },
    { image: "/Howdata3.png" },
    { image: "/Howdata4.png" },
    { image: "/Howdata5.png" }
  ];

  const rightMarqueeImages = [
    { image: "/Howdata5.png" },
    { image: "/Howdata4.png" },
    { image: "/Howdata3.png" },
    { image: "/Howdata2.png" }
  ];

  const MarqueeColumn = ({ images, reverse }) => (
    <div className="overflow-hidden relative w-[160px]">
      <motion.div
        animate={{
          y: reverse ? ["-50%", "0%"] : ["0%", "-50%"]
        }}
        transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
        className="flex flex-col gap-6"
      >
        {[...images, ...images].map((item, index) => (
          <div key={index} className=" w-[160px] h-[224px] text-[#00000099] rounded-full bg-white flex flex-col justify-center items-center">
            {item.image.endsWith('.png') ? (
              <img src={item.image} alt="" className="w-full h-full object-contain p-4" />
            ) : (
              <p>{item.text}</p>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );

  const { ref, inView } = useInView({ triggerOnce: true });
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: 'easeOut' },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: 'easeOut' },
    },
  };

  const section = [
    { step: "step1", heading: "Create", paragraph: "Welcome Studio gives you all the tools you need to create and host virtual experiences that look awesome and put your brand centerstage.", image: "./How1.jpg" },
    { step: "step2", heading: "Engage", paragraph: "Cut through the yawns, grab your audience's attention, and turn passive attendees into active participants.", image: "./How2.png" },
    { step: "step3", heading: "Analyze", paragraph: "Track the success of your events with deep insights and analytics measured across the entire attendee experience.", image: "./How3.png" }
  ];

  return (
    <>
      <section className='px-5 md:px-10 lg:px-20 py-[72px] lg:py-[144px] w-full bg-white'>
        <div className="max-w-full lg:max-w-7xl mx-auto">
          <div className='flex text-black flex-col'>
            <div className='flex xl:items-center xl:flex-row flex-col gap-5 py-10 justify-between'>
                             <ScrollFloat
  animationDuration={1}
  ease='back.inOut(2)'
  scrollStart='center bottom+=50%'
  scrollEnd='bottom bottom-=40%'
  stagger={0.06}
  containerClassName="my-10 text-center"
  textClassName="text-[48px] sm:text-[72px] md:text-[96px] lg:text-[110px] xl:text-[128px] xl:max-w-md leading-none"
>
    How it works
</ScrollFloat>
             

              <div className="flex flex-col gap-4 xl:max-w-md">
                <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-[#000000]">
                  Manage your experience from start to finish, from integrations to registration and from interactive stage elements to post-event data, it's all here.
                </p>
                <div>
                  <a href="#" className="bg-[#5B6CFF] text-white justify-center border border-transparent hover:bg-transparent hover:border-gray-400 px-5 py-2 rounded-full transition-all duration-300 ease-in-out">
                    Learn more
                  </a>
                </div>
              </div>
            </div>

            {section.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={item.heading === "Engage" ? fadeInLeft : fadeInRight}
                className="flex sm:flex-row flex-col gap-4 border-t py-10 border-gray-300"
              >
                <div className="flex justify-center flex-col">
                  <p>{item.step}</p>
                  <span className="flex items-center text-[59px]">
                    {item.heading}
                    <ArrowUpRight className="font-bold" size={59} />
                  </span>
                  <p>{item.paragraph}</p>
                </div>
                <div className="w-full">
                  <img src={item.image} className="rounded-full object-cover" alt="" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     

    <section className='px-5 md:px-10 lg:px-20 h-[700px] overflow-hidden  md:h-[900px] lg:h-[750px] w-full bg-[#F5F5F5]'>
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col flex-col-reverse  lg:flex-row gap-10 md:gap-20">
      {/* Left Column with Marquee - remains unaffected */}
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-14  items-center lg:items-start justify-center">
        <MarqueeColumn images={leftMarqueeImages} reverse={false} />
        <MarqueeColumn images={rightMarqueeImages} reverse={true} />
      </div>

      {/* Right Content Column with isolated padding */}
      <div className="flex-1 flex flex-col py-[40px] lg:py-[112px]"> {/* Padding only on desktop and larger */}
        <h1 className="text-[50px] sm:text-[64px] md:text-[80px] lg:text-[100px] xl:text-[121px] 2xl:text-[126px] text-black">
          Integrate
        </h1>

        <div className="flex flex-col items-center mt-4">
          <div className="flex items-center flex-wrap lg:flex-nowrap justify-center gap-4 leading-none">
            <img
              src="/Howdata.jpg"
              alt="Drive"
              className="rounded-full object-cover w-16 sm:w-28 md:w-40 lg:w-52 xl:w-64"
            />
            <span className="text-black font-normal  xl:text-nowrap text-[58px] sm:text-[64px] md:text-[96px] lg:text-[110px] xl:text-[126px]">
              your data
            </span>
          </div>
          <p className="text-[#000000] text-base sm:text-lg mt-4  text-start">
            Leverage your existing marketing platforms and sync the data seamlessly
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default HowitWorks;
 