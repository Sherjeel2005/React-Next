import React from 'react';
import StatCounter from '../StatCounter'; // adjust the path as needed

export const DriveRevenue = () => {
  return (
    <section className='px-5 md:px-10 lg:px-20 py-[144px] w-full bg-[#F5F5F5] '>
      <div className="max-w-full lg:max-w-7xl mx-auto">
        <div className='flex lg:flex-row gap-20 lg:gap-[6.4px] flex-col '>
          {/* Left side */}
          <div className="flex flex-1 flex-col">
            <h1 className="text-[60px] sm:text-[64px] md:text-[80px] lg:text-[100px] xl:text-[121px] 2xl:text-[126px] text-black">
              Drive
            </h1>

            <div className="flex leading-none justify-center items-center flex-wrap text-center mt-4 gap-4">
              <img
                src="/Drive.jpg"
                alt="Drive"
                className="rounded-full object-cover w-50 lg:w-52 xl:w-64"
              />
              <span className="text-black font-normal text-[68px] sm:text-[64px] md:text-[96px] lg:text-[110px] xl:text-[126px]">
                Revenue
              </span>
            </div>
          </div>

          {/* Right side: Stats */}
          <div className='grid grid-cols-1 gap-8'>
            <StatCounter
              end={87}
              suffix="%"
              labelLines={["increased attendee engagement", "at Bitwise"]}
            />
            <StatCounter
              end={1.7}
              prefix="$"
              suffix="M"
              decimal
              labelLines={["pipeline generated", "at Everbridge"]}
            />
            <StatCounter
              end={58}
              suffix="%"
              labelLines={["attendee conversion rate", "at Interfolio"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
