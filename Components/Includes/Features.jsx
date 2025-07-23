import React from "react";
import { Inter } from "next/font/google";
import { Lora } from "next/font/google";
import { ArrowRight } from "lucide-react";
const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
const Features = () => {
  return (
    <div className={`bg-white py-16 px-3  w-full ${inter.className}`}>
      <div className="max-w-7xl w-full mx-auto justify-center">
        <div className="flex gap-10 flex-col">
          {/*Section 1 */}
          <div className=" flex flex-col gap-20">
            <div className="flex text-black flex-col">
              <div className="text-[20px] sm:text-[35px] md:text-[45px] xl:text-[64px] leading-none">
                An unmatched attendee
              </div>
              <div className="text-[40px] sm:text-[60px] md:text-[120px] xl:text-[200px] leading-none break-words">
                Experience
              </div>
            </div>

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
          </div>
          {/*Section 2 */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div
              className="h-[612px]   bg-cover bg-center lg:flex-1 bg-no-repeat"
              style={{ backgroundImage: `url("/features2.jpg")` }}
            >
              <div className="flex text-black p-10 max-w-md flex-col">
                <span className="text-lg">Interactive Polls</span>
                <span className="text-[16px] text-[#000000B2]">
                  Embed polls directly on stage and watch the results populate
                  in real-time. Moderate audience questions, allow upvoting, and
                  bring attendees on-stage.
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
                <h1 className={`text-[64px] leading-none ${lora.className} `}>
                  Starting <br /> Soon
                </h1>
              </div>

              <div className="flex justify-center ">
                <img src="/features3.jpg" className="w-[320px]" alt="" />
              </div>
            </div>
          </div>

          {/*Section 3 */}

          <div className="flex md:flex-row flex-col gap-8">
            <div
              style={{ backgroundImage: `url("/features4.jpg")` }}
              className="flex-1  bg-no-repeat bg-cover"
            >
              <div className="flex text-white p-10 max-w-md flex-col">
                <span className="text-lg">Q&A</span>
                <span className="text-[16px] text-[#FFFFFF]">
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
              className="flex-1 flex   bg-no-repeat bg-cover"
            >
              <div className="flex text-black p-10  flex-col">
                <span className="text-lg">Chat</span>
                <span className="text-[16px]">
                  Chat is where engagement happens. With a slack-like
                  experience, attendees can use emojis, reactions, and gifs to
                  express themselves.
                </span>
              </div>
              <div className="w-full flex  justify-center">
                <img src="/features52.png" className="object-cover" alt="" />
              </div>
            </div>
          </div>

          {/*Section 4 */}

          <div className="flex justify-center mt-4 w-full">
            <a
              href="#"
              className=" hover:bg-blue-700 hover:text-white text-black hover:border-transparent flex items-center justify-center gap-3 border-gray-400 border-1 transition-all duration-300  px-4 py-1.5 rounded-full"
            >
              See all features <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
