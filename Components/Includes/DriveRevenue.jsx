import React from 'react'

export const DriveRevenue = () => {
  return (
     <div className='py-20 px-3 bg-[#F5F5F5]  '>

        <div className='max-w-7xl mx-auto justify-center items-center '>

            <div className='flex lg:flex-row gap-20 xl:gap-0 flex-col '>

             <div className="flex flex-1 flex-col">
  {/* Drive */}
  <h1 className="text-[50px] sm:text-[64px] md:text-[80px] lg:text-[100px] xl:text-[121px] 2xl:text-[126px] text-black">
    Drive
  </h1>

  {/* Image + Revenue */}
  <div className="flex leading-none justify-center items-center flex-wrap text-center mt-4 gap-4">
    <img
      src="/Drive.jpg"
      alt="Drive"
      className="rounded-full object-cover w-50 sm:w-28 md:w-40 lg:w-52 xl:w-64"
    />
    <span className="text-black font-normal text-[58px] sm:text-[64px] md:text-[96px] lg:text-[110px] xl:text-[126px]">

      Revenue
    </span>
  </div>
</div>


                 <div className='grid grid-cols-1  gap-8'>
            {/* Stat 1 */}
            <div className='text-black pb-4 border-b border-black/20'>
              <span className='text-4xl sm:text-5xl xl:text-[59px] font-normal block'>+87%</span>
              <p className='text-lg sm:text-xl mt-2'>increased attendee engagement</p>
              <p className='text-lg sm:text-xl'>at Bitwise</p>
            </div>

            {/* Stat 2 */}
            <div className='text-black pb-4 border-b border-black/20'>
              <span className='text-4xl sm:text-5xl xl:text-[59px] font-normal block'>$1.7M</span>
              <p className='text-lg sm:text-xl mt-2'>pipeline generated</p>
              <p className='text-lg sm:text-xl'>at Everbridge</p>
            </div>

            {/* Stat 3 */}
            <div className='text-black pb-4'>
              <span className='text-4xl sm:text-5xl xl:text-[59px] font-normal block'>58%</span>
              <p className='text-lg sm:text-xl mt-2'>attendee conversion rate</p>
              <p className='text-lg sm:text-xl'>at Interfolio</p>
            </div>
          </div>
            </div>

        </div>

     </div>
  )
}
