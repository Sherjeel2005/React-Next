import React from 'react'

const JoinUs = () => {
  return (
    <div className="py-20 bg-black px-3">
        <div className="max-w-7xl w-full mx-auto">

            <div className="flex text-white gap-5  flex-col">
                <div className="flex items-center justify-between">
                    <span className=' text-[50px] sm:text-[114px] leading-none '>Join us</span>
                    <div className=''>
                        <a
              href="#"
              className=" hover:bg-blue-700 hover:text-white text-white  hover:border-transparent  gap-3 border-gray-400 border-1 transition-all duration-300  px-4 py-1.5 rounded-full"
            >
              All events
            </a>
                    </div>
                </div>

                <div className="flex flex-wrap md:flex-nowrap rounded-tr-4xl border-t-2 pt-7 pr-4 border-r-2 border-white justify-between">
                    <div className="flex flex-col gap-4">
                          <div className=''>
                        <a
              href="#"
              className=" hover:bg-blue-700 hover:text-white text-[#FFFFFF]  hover:border-transparent  gap-3 border-[#FFFFFF] border-1 transition-all duration-300  px-4 py-1.5 rounded-full"
            >
              December 21, 2022
            </a>
                          </div>
                          <span className='text-[30px]  md:text-[45px] text-white'>Attention-Grabbing Marketing in a Noisy Market</span>
                            <div className='flex '>
                               <a
            href="#"
           className="bg-[#5B6CFF] text-white hover:text-black border border-transparent hover:bg-transparent hover:border-gray-400 px-4 py-1.5 rounded-full transition-all duration-300 ease-in-out"
          >
           Register
          </a>
                            </div>
                    </div>

                   <div className='pr-5 flex justify-end w-full'>
                     <img src="/JoinUs.jpg" className='object-cover' alt="" />
                   </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default JoinUs