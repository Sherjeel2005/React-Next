import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const HowitWorks = () => {

    const section = [{step:"step1" , heading:"Create" , paragraph:"Welcome Studio gives you all the tools you need to create and host virtual experiences that look awesome and put your brand centerstage." , image:"./How1.jpg" },
        {step:"step2" , heading:"Engage" , paragraph:"Cut through the yawns, grab your audience’s attention, and turn passive attendees into active participants." , image:"./How2.png" },
        {step:"step3" , heading:"Analyze" , paragraph:"Track the success of your events with deep insights and analytics measured across the entire attendee experience." , image:"./How3.png" }
    ]
  return (
        <>
         <div className='py-30 px-3 bg-white  '>

                <div className='max-w-7xl mx-auto justify-center items-center '>

                    <div className='flex text-black flex-col'>

                        <div className='flex xl:items-center xl:flex-row flex-col gap-5 py-10 justify-between'>
                            <h1 className="text-[48px] sm:text-[72px] md:text-[96px] lg:text-[110px] xl:text-[128px] xl:max-w-md leading-none">
  How it works
</h1>

                          <div className="flex flex-col gap-4 xl:max-w-md ">
  <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-[#000000]">
    Manage your experience from start to finish, from integrations to registration and from interactive stage elements to post-event data, it’s all here.
  </p>

  <div>
    <a
      href="#"
      className="bg-[#5B6CFF] text-white justify-center border border-transparent hover:bg-transparent hover:border-gray-400 px-5 py-2 rounded-full transition-all duration-300 ease-in-out"
    >
      Learn more
    </a>
  </div>
</div>


                        </div>

                      {section.map((item , index)=>(

                          <div key={index} className='flex sm:flex-row flex-col gap-4 border-t py-10 border-gray-300'>

                            <div className='flex justify-center  flex-col'>

                                <p>{item.step}</p>
                                <span className='flex items-center  text-[59px]'>{item.heading}   <ArrowUpRight className='font-bold' size={59} /> </span>
                                <p cl>{item.paragraph}</p>
                                
                            </div>

                          <div className='w-full '>
                              <img src={item.image} className='rounded-full object-cover' alt="" />
                          </div>

                        </div>




                      ))}


                    </div>

                </div>
               </div>

         <div className=' px-3 py-4 bg-[#F5F5F5]'>
            
            <div  className='max-w-7xl mx-auto justify-center items-center '>

                       <div className="flex flex-col md:flex-row gap-10 md:gap-20 flex-wrap">

  {/* Left Column (Two Vertical Columns) */}
  <div className="flex flex-col sm:flex-row gap-10 sm:gap-14 items-center justify-center">

    {/* Left Sub-column */}
    <div className="flex gap-3 relative sm:top-[-60px] flex-col">
      <div className="w-[160px] h-[224px] text-[#00000099] rounded-full bg-white flex flex-col justify-center items-center">
        <p>Custom</p>
        <p>Integration</p>
      </div>
      <div className="w-[160px] h-[224px] text-[#00000099] rounded-full bg-white flex flex-col justify-center items-center">
        <img src="/Howdata2.png" alt="" />
      </div>
      <div className="w-[160px] h-[224px] text-[#00000099] rounded-full bg-white flex flex-col justify-center items-center">
        <img src="/Howdata3.png" alt="" />
      </div>
    </div>

    {/* Right Sub-column */}
    <div className="flex gap-3 flex-col">
      <div className="w-[160px] h-[224px] text-[#00000099] rounded-full bg-white flex flex-col justify-center items-center">
        <p>pardot</p>
      </div>
      <div className="w-[160px] h-[224px] text-[#00000099] rounded-full bg-white flex flex-col justify-center items-center">
        <img src="/Howdata4.png" alt="" />
      </div>
      <div className="w-[160px] h-[224px] text-[#00000099] rounded-full bg-white flex flex-col justify-center items-center">
        <p>Custom</p>
        <p>Integration</p>
      </div>
    </div>
  </div>

  {/* Right Column (Text + Image Section) */}
  {/* <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left flex-1 px-4">
    <h1 className="text-[64px] sm:text-[90px] md:text-[121px] text-black leading-tight">Integrate</h1>
    <h1 className="flex justify-center items-center flex-wrap gap-4 mt-4">
      <img src="/Howdata.jpg" className="rounded-full object-cover w-40 sm:w-52 md:w-64" alt="" />
      <span className="text-[64px] sm:text-[90px] md:text-[126px] text-black font-normal leading-tight">
        your data
      </span>
    </h1>
    <p className="text-[#000000] text-base sm:text-lg mt-4 max-w-md">
      Leverage your existing marketing platforms and sync the data seamlessly
    </p>
  </div> */}
  
             <div className="flex flex-1 flex-col">
  {/* Drive */}
  <h1 className="text-[50px] sm:text-[64px] md:text-[80px] lg:text-[100px] xl:text-[121px] 2xl:text-[126px] text-black">
    Integrate
  </h1>

  {/* Image + Revenue */}
  <div className="flex leading-none justify-center items-center flex-wrap text-center mt-4 gap-4">
    <img
      src="/Howdata.jpg"
      alt="Drive"
      className="rounded-full object-cover w-50 sm:w-28 md:w-40 lg:w-52 xl:w-64"
    />
    <span className="text-black font-normal text-[58px] sm:text-[64px] md:text-[96px] lg:text-[110px] xl:text-[126px]">

      your data
    </span>
    <p className="text-[#000000] text-base sm:text-lg mt-4 max-w-md">
      Leverage your existing marketing platforms and sync the data seamlessly
    </p>
  </div>
</div>

</div>

            </div>

         </div>
        </>
  )
}

export default HowitWorks