import React from "react";
import { Inter } from "next/font/google";
// import { Lora } from "next/font/google";
import { ArrowRight } from "lucide-react";
import ScrollFloat from "../ScrollFloat";
// const lora = Lora({ subsets: ["latin"] });
import AnimatedContent from "../Animations/AnimatedContent";
const Features = () => {
  return (
    <div className={`bg-white w-full `}>
      <section className="px-5 md:px-10 lg:px-20 w-full  py-[144px] "
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex  gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col">
            {/*Section 1 */}

            <div className="text-black flex flex-col   w-full ">
              <div className="flex flex-col">
                <div className="leading-none" >
                  <ScrollFloat
  animationDuration={1}
  ease='back.inOut(2)'
  scrollStart='center bottom+=50%'
  scrollEnd='bottom bottom-=40%'
  stagger={0.03}
  containerClassName="my-10 text-center"
  textClassName="text-[30px] sm:text-[35px] md:text-[45px] xl:text-[64px] leading-none"
>
    An unmatched attendee
</ScrollFloat>
                
                </div>
                <div className="leading-none" >
                 <ScrollFloat
  animationDuration={1}
  ease='back.inOut(2)'
  scrollStart='center bottom+=50%'
  scrollEnd='bottom bottom-=40%'
  stagger={0.03}
  containerClassName="my-10 text-center"
  textClassName="text-[50px] sm:text-[60px] md:text-[120px] xl:text-[200px] text-nowrap leading-none break-words"
>
  Experience
</ScrollFloat>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[64px]">
           
            <div className="flex flex-col gap-6">

                   <AnimatedContent
  distance={150}
  direction="horizontal"
  reverse={false}
  duration={1.2}
  ease="bounce.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
  delay={0.6}
>
  
  <div
                style={{ backgroundImage: `url("/features.jpg")` }}
                className="w-full bg-cover min-h-[300px] md:h-[448px] bg-center bg-no-repeat "
              >
                <div className="flex text-black p-4 md:p-10 max-w-md flex-col">
                  <span className="text-sm md:text-lg ">
                    Interactive overlays
                  </span>
                  <span className="text-[10px] md:text-[16px] max-w-3xs  text-[#000000B2]">
                    Add custom branded graphics that lay over your live video to
                    intro speakers, emphasize key points, and display clickable
                    CTAs.
                  </span>
                </div>
              </div>
                  </AnimatedContent>
              
              {/*Section 2 */}

              
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
  delay={0.6}
>
   <div className="flex flex-col lg:flex-row gap-6">
                <div
                  className="h-[612px]   bg-cover bg-center lg:flex-1 bg-no-repeat"
                  style={{ backgroundImage: `url("/features2.jpg")` }}
                >
                  <div className="flex text-black p-10 max-w-md flex-col">
                    <span className="text-lg">Interactive Polls</span>
                    <span className="text-[16px] text-[#000000B2]">
                      Embed polls directly on stage and watch the results
                      populate in real-time. Moderate audience questions, allow
                      upvoting, and bring attendees on-stage.
                    </span>
                  </div>
                </div>
                <div className="h-[590px] md:h-[612px]  bg-gradient-to-b from-black to-transparent flex flex-col justify-between">
                  <div className="flex text-white p-10 max-w-md flex-col">
                    <span className="text-lg">HD Video Quality</span>
                    <span className="text-[14px] text-[#FFFFFFA6]">
                      Provide a better experience for your viewers with crystal
                      clear HD video streaming.
                    </span>
                  </div>
                  <div className="flex justify-center text-white items-center">
                    <h1
                      className={`text-[64px] leading-none font-[Lora]  `}
                    >
                      Starting <br /> Soon
                    </h1>
                  </div>

                  <div className="flex justify-center ">
                    <img src="/features3.jpg" className="w-[320px]" alt="" />
                  </div>
                </div>
              </div>

                   </AnimatedContent>
              
             

              {/*Section 3 */}
                   <AnimatedContent
  distance={150}
  direction="horizontal"
  reverse={false}
  duration={1.2}
  ease="bounce.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
  delay={0.6}
>
             <div className="flex md:flex-row flex-col  gap-6">
                <div
                  style={{ backgroundImage: `url("/features4.jpg")` }}
                  className="flex-1  bg-no-repeat bg-cover"
                >
                  <div className="flex text-white p-10 max-w-md flex-col">
                    <span className="text-lg">Q&A</span>
                    <span className="text-[14px] sm:text-[16px] text-[#FFFFFF]">
                      Moderate audience questions, allow upvoting, and bring
                      attendees on-stage.
                    </span>
                  </div>

                  <div>
                    <img
                      src="/features42.png"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>

                <div
                  style={{ backgroundImage: `url("/features5.jpg")` }}
                  className=" flex flex-1 md:flex-nowrap flex-wrap bg-no-repeat bg-cover"
                >
                  <div className="flex text-black p-10  flex-col">
                    <span className="text-lg">Chat</span>
                    <span className="text-[14px] sm:text-[16px]">
                      Chat is where engagement happens. With a slack-like
                      experience, attendees can use emojis, reactions, and gifs
                      to express themselves.
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="/features52.png"
                      className="object-cover  "
                      alt=""
                    />
                  </div>
                </div>
              </div>


                   </AnimatedContent>
              
         
              {/*Section 4 */}

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
           <div className="flex justify-center  w-full">
                <a
                  href="#"
                  className=" hover:bg-blue-700 hover:text-white text-black hover:border-transparent flex items-center justify-center gap-3 border-gray-400 border-1 transition-all duration-300  px-4 py-1.5 rounded-full"
                >
                  See all features <ArrowRight size={15} />
                </a>
              </div>


            </AnimatedContent>
              
          
            </div>


          </div>
        </div>

      </section>
    </div>
  );
};

export default Features;
