import React from "react";
import { ArrowRight } from "lucide-react";
const CustomerStories = () => {
  return (
    <>
      <div className="bg-black z-10">
        {/*Section 1*/}
        <div
          style={{ backgroundImage: `url("/CSTORIES.jpg")` }}
          className="w-full relative min-h-screen  bg-top bg-cover  bg-no-repeat px-3  py-16 flex items-center  text-white"
        >
          <div className="max-w-7xl w-full mx-auto  justify-center">
            <div className=" flex flex-col gap-5 z-10 max-w-md">
              <h1 className="text-[36px] md:text-[56px] leading-tight">
                “Makes other platforms look like the 1990’s”
              </h1>
              <span className="text-[#FFFFFFA6] text-[18px] md:text-[22px]">
                - Nate Skinner, CMO at Onfido
              </span>
              <a
                href="#"
                className="hover:bg-blue-700 max-w-[200px] hover:text-white text-white border border-gray-400 transition-all duration-300 px-4 py-1.5 rounded-full"
              >
                Read customer stories
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*Section 2*/}

      <div className="py-16 px-3 bg-black w-full z-0">
        <div className="max-w-7xl w-full mx-auto flex flex-col gap-5  justify-center">
          <div className="flex text-white  flex-col">
            <h2 className="font-semibold text-[44px] leading-none">
              Powered by
            </h2>
            <h1 className="font-bold text-[64px] md:text-[128px] lg:text-[180px] xl:text-[236px] leading-none">
              Welcome
            </h1>
            <h1 className="font-bold text-[64px] md:text-[128px] lg:text-[180px] xl:text-[233px] text-right leading-none">
              Studio
            </h1>
          </div>

          <div className="flex gap-5 flex-col ">
            <div
              style={{
                background: "linear-gradient(41deg, #96B7CD 27%, #E68D83 100%)",
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
              {/* 1️⃣ Brand Customization */}
              <div className="flex flex-col pt-10 pl-10  gap-10 bg-[#FFFFFF14]  overflow-hidden">
                <div className="flex max-w-md pr-5 flex-col">
                  <span className="text-lg text-[#FFFFFF]">
                    Brand customization
                  </span>
                  <span className="text-[16px] text-[#FFFFFFA6]">
                    Brand the entire experience including registration pages,
                    emails, backdrops, logo placements, fonts, overlays, and
                    photo booth templates.
                  </span>
                </div>

                <div className="flex flex-1 items-end justify-end">
                  <img
                    src="/CustomerStories4.png"
                    className="rounded-tl-2xl w-full"
                    alt="Brand Customization"
                  />
                </div>
              </div>

              {/* 2️⃣ Stage Kit */}
              <div className="flex flex-col pt-10 pl-10 gap-10 bg-[#FFFFFF14]  overflow-hidden">
                <div className="flex max-w-md flex-col pr-5 ">
                  <span className="text-lg text-[#FFFFFF]">Stage Kit</span>
                  <span className="text-[16px] text-[#FFFFFFA6]">
                    Design branded overlays, lower thirds, and right-side
                    gradients directly in the Welcome platform.
                  </span>
                </div>

                <div className="flex flex-1 items-end justify-end">
                  <img
                    src="/CustomerStories5.png"
                    className="rounded-tl-2xl w-full"
                    alt="Stage Kit"
                  />
                </div>
              </div>

              {/* 3️⃣ Green Room — Already Correct */}
              <div className="flex flex-col pt-10 pl-10 gap-10 bg-[#FFFFFF14]  overflow-hidden">
                <div className="flex max-w-md flex-col pr-5">
                  <span className="text-lg text-[#FFFFFF]">Green Room</span>
                  <span className="text-[16px] text-[#FFFFFFA6]">
                    Invite speakers to a private waiting room to meet and prep
                    to go on stage.
                  </span>
                </div>

                <div className="flex flex-1 items-end justify-end">
                  <img
                    src="/CustomerStories6.jpg"
                    className="rounded-tl-2xl w-full"
                    alt="Green Room"
                  />
                </div>
              </div>
            </div>

             <div className="flex justify-center mt-4 w-full">
            <a
              href="#"
              className=" hover:bg-blue-700 hover:text-white text-[#FFFFFF] hover:border-transparent flex items-center justify-center gap-3 border-gray-400 border-1 transition-all duration-300  px-4 py-1.5 rounded-full"
            >
              See all features <ArrowRight size={15} />
            </a>
             </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerStories;