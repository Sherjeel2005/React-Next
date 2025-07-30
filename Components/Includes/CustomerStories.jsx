import React from "react";
import { ArrowRight } from "lucide-react";
import { useLinkStatus } from "next/link";
import AnimatedContent from "../Animations/AnimatedContent";
import ScrollFloat from "../ScrollFloat";
import FadeContent from "../Animations/FadeContent";
const CustomerStories = () => {
  return (
    <>
        {/*Section 1*/}
     <section className="bg-black  xl:px-20 z-10">
  <div className="max-w-full lg:max-w-7xl mx-auto">
    <div
      className="w-full relative h-[500px] md:h-[902px] px-6 lg:px-20  xl:px-0 bg-top bg-cover bg-no-repeat flex items-center text-white"
      style={{ backgroundImage: 'url("/CSTORIES.jpg")' }}
    >
      <div className="flex flex-col gap-10 z-10 max-w-[582px]">
               <AnimatedContent
  distance={150}
  direction="vertical"
  reverse={true}
  duration={1.2}
  ease="bounce.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
  delay={0.3}
>
  <h1 className="text-[36px] md:text-[56px] leading-tight">
          “Makes other platforms look like the 1990’s”
        </h1>
            </AnimatedContent>
                     <AnimatedContent
  distance={150}
  direction="horizontal"
  reverse={true}
  duration={1.2}
  ease="bounce.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
  delay={0.3}
>
    <span className="text-[#FFFFFFA6] text-[18px] md:text-[22px]">
          - Nate Skinner, CMO at Onfido
        </span>
            </AnimatedContent>
      
                      <AnimatedContent
  distance={70}
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
      <a
          href="#"
          className="hover:bg-blue-700 text-nowrap max-w-[200px] hover:text-white text-white border border-gray-400 transition-all duration-300 px-4 py-1.6 rounded-full"
        >
          Read customer stories
        </a>
            </AnimatedContent>
      
      
     
      </div>
    </div>
  </div>
</section>

     

      {/*Section 2*/}

      <section className="px-6  lg:px-20 w-full bg-black  z-0">

          <div className="max-w-7xl py-[144px] w-full mx-auto ">

          <div className="flex  flex-col gap-[80px]">
            <div className="flex text-white  flex-col">

                             <ScrollFloat
  animationDuration={1}
  ease='back.inOut(2)'
  scrollStart='center bottom+=50%'
  scrollEnd='bottom bottom-=40%'
  stagger={0.05}
  containerClassName="my-10 text-center"
  textClassName="font-semibold text-[44px] leading-none"
>
     Powered by
</ScrollFloat>



                             <ScrollFloat
  animationDuration={1}
  ease='back.inOut(2)'
  scrollStart='center bottom+=50%'
  scrollEnd='bottom bottom-=40%'
  stagger={0.07}
  containerClassName="my-10 text-center"
  textClassName="font-bold text-[64px] md:text-[128px] lg:text-[180px] xl:text-[236px] leading-none"
>
       Welcome
</ScrollFloat>

              
                                  <ScrollFloat
  animationDuration={1}
  ease='back.inOut(2)'
  scrollStart='center bottom+=50%'
  scrollEnd='bottom bottom-=40%'
  stagger={0.03}
  containerClassName="my-10 text-center"
  textClassName="font-bold text-[64px] md:text-[128px] lg:text-[180px] xl:text-[233px] text-right leading-none"
>
      Studio
</ScrollFloat>

             
            </div>

            <div className="flex gap-6 flex-col ">

              <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
     <div
                style={{
                  background:
                    "linear-gradient(41deg, #96B7CD 27%, #E68D83 100%)",
                }}
                className=" flex md:flex-row flex-col pt-15   pl-10 "
              >
                <div className="flex text-white  max-w-md flex-col">
                  <span className="text-lg text-black ">
                    Drag-n-drop Agenda Builder
                  </span>
                  <span className="text-[16px] text-[#000000B2]">
                    Quickly rearrange your webinar’s sequence of actions and
                    instantly generate an agenda that auto-updates as you move
                    actions around.
                  </span>
                </div>

                <div className="relative overflow-hidden  items-start flex flex-col justify-start">
                  <img
                    src="/CustomerStories1.jpg"
                    className="object-cover rounded-tl-2xl"
                    alt=""
                  />
                  <div className="absolute inset-0  top-20 sm:top-28 left-0  ">
                    <img
                      src="/CustomerStories2.png"
                      className="object-cover  w-50 sm:w-80"
                      alt=""
                    />
                  </div>
                  <div className="absolute inset-0 top-25 sm:top-35 left-38 sm:left-59 ">
                    <img
                      src="/CustomerStories3.png"
                      alt=""
                      className="object-cover w-20 sm:w-44"
                    />
                  </div>
                </div>
              </div>
</FadeContent>
           

              <div className="flex flex-col gap-[64px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    {
      title: "Brand customization",
      description:
        "Brand the entire experience including registration pages, emails, backdrops, logo placements, fonts, overlays, and photo booth templates.",
      image: "/CustomerStories4.png",
      alt: "Brand Customization",
    },
    {
      title: "Stage Kit",
      description:
        "Design branded overlays, lower thirds, and right-side gradients directly in the Welcome platform.",
      image: "/CustomerStories5.png",
      alt: "Stage Kit",
    },
    {
      title: "Green Room",
      description:
        "Invite speakers to a private waiting room to meet and prep to go on stage.",
      image: "/CustomerStories6.jpg",
      alt: "Green Room",
    },
  ].map((item, index) => (
    <FadeContent
      key={index}
      blur={true}
      duration={1500}
      easing="ease-out"
      initialOpacity={0}
    >
      <div className="flex flex-col justify-between h-full bg-[#FFFFFF14] rounded-lg p-8 gap-6">
        <div className="flex flex-col space-y-2">
          <span className="text-lg text-white">{item.title}</span>
          <span className="text-[16px] text-white/65">{item.description}</span>
        </div>
        <div className="mt-6">
          <img
            src={item.image}
            alt={item.alt}
            className="w-full rounded-tl-2xl object-cover"
          />
        </div>
      </div>
    </FadeContent>
  ))}
</div>


                      <AnimatedContent
  distance={70}
  direction="vertical"
  reverse={false}
  duration={1.2}
  ease="bounce.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
  delay={0.2}
>
     <div className="flex justify-center mt-4 w-full">
                  <a
                    href="#"
                    className=" hover:bg-blue-700 hover:text-white text-[#FFFFFF] hover:border-transparent flex items-center justify-center gap-3 border-gray-400 border-1 transition-all duration-300  px-4 py-1.6 rounded-full"
                  >
                    See all features <ArrowRight size={15} />
                  </a>
                </div>
            </AnimatedContent>
      
             
              </div>
            </div>
          </div>

        </div>

      </section>

    
    </>
  );
};

export default CustomerStories;
