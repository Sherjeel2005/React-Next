import React, { useRef } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const testimonials = [
  {
    quote:
      "We chose Welcome because it’s intuitive, beautifully designed, and made for attendee interaction, making it the perfect way to uplevel our experiences. The Slack-like chat, on-stage Q&A, and polling has increased audience engagement.",
      profile:"./Loved1.jpg",
    name: 'Ally Masi',
    title: 'Director of Industries Events Marketing',
    company: 'Salesforce',
    logo: '/Lovedlogo.png',
  },
  {
    quote:
      "Before Welcome, I had to get a switcher, use Ecamm, OBS and always needed this or that to make it all work. Now, one or two people can run our virtual events easily without any special equipment. With just one platform, we can do everything we want.",
      profile:"./Loved2.jpg",
    name: 'Talisha Brantley',
    title: 'VP of Events ',
    company: 'Bitwise',
    logo: '/Lovedlogo.png',
  },
  {
    quote:
      "We chose Welcome because it’s intuitive, beautifully designed, and made for attendee interaction, making it the perfect way to uplevel our experiences. The Slack-like chat, on-stage Q&A, and polling has increased audience engagement.",
      profile:"./Loved1.jpg",
    name: 'Ally Masi',
    title: 'Director of Industries Events Marketing',
    company: 'Salesforce',
    logo: '/Lovedlogo.png',
  }
 
  
];


const Loved = () => {

    const list = [

    {list1:"Webinars" , list2:"Company Meetings"},
    {list1:"Product Demos" , list2:"Customer Training"},
    {list1:"Community Events" , list2:"Fireside Chat"},
    {list1:"AMAs" , list2:"Kick-offs"},
    {list1:"Multi-track" , list2:"Workshops"},

]


  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
   <>
    <div
      style={{ backgroundImage: `url("/Loved.jpg")` }}
      className=' pt-20 pb-40 bg-cover relative top-[-80] bg-no-repeat flex items-center bg-center  px-3 text-white'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='flex md:flex-row flex-col items-center justify-between mb-10'>

            <span className='text-[44px] sm:text-[50px] md:text-[80px] lg:text-[121px] leading-none text-black font-bold'>
            Loved & trusted
            </span>

          <div className=' hidden xl:flex gap-3'>
            <ArrowLeft
              size={60}
              className='cursor-pointer text-black hover:scale-110 transition'
              onClick={() => scroll('left')}
            />
            <ArrowRight
              size={60}
              className='cursor-pointer text-black hover:scale-110 transition'
              onClick={() => scroll('right')}
            />
          </div>
        </div>

        {/* Scrollable testimonials */}
    <div
  ref={scrollRef}
  className='flex lg:flex-row flex-col overflow-x-auto gap-6 scroll-smooth scrollbar-hide pb-2'
>
  {testimonials.map((item, index) => (
    <div
      key={index}
      className=' md:min-w-[300px] xl:min-w-[500px] h-[370px] text-white backdrop-blur-md bg-[rgba(0,0,0,0.09)] rounded-2xl p-6 border-t border-r rounded-tr-2xl border-white flex flex-col justify-between '
    
    >
      <p className='text-white mb-4 text-lg leading-relaxed line-clamp-6'>"{item.quote}"</p>
      <div className='mt-6 flex flex-col'>
        <div className="flex items-center gap-3">
          <img src={item.profile} className='w-10 h-10 rounded-full object-cover' alt="" />
          <div className='flex flex-col'>
            <p className='font-bold text-white'>{item.name}</p>
            <p className='text-sm text-gray-300'>{item.title}</p>
          </div>
        </div>
        <img
          src={item.logo}
          alt={item.company}
          className='mt-3 w-20 object-cover'
        />
      </div>
    </div>
  ))}
</div>

      </div>
    </div>

   <div className="py-20 relative -top-[190px] px-3 bg-black">
  <div className="max-w-7xl w-full mx-auto flex flex-col gap-[120px] justify-center">

    {/* Headline Section */}
    <div className="flex max-w-5xl w-full mx-auto flex-col px-4">
      <div className="flex flex-col items-center lg:items-stretch   text-white">
        <div className="flex flex-row items-center  gap-2">
          <span className="text-right  leading-none text-[14px] md:text-[44px]">One <br/> platform</span>
          <span className="leading-none text-start text-[40px] md:text-[127px]">Endless</span>
        </div>
        <span className="text-right text-[40px] md:text-[127px] leading-none">Oportunities</span>
      </div>
    </div>

    {/* List Section */}
    <div className="flex flex-col px-4">
      {list.map((item, index) => (
        <div
          key={index}
          className="flex  text-[14px] sm:text-[30px] text-[#FFFFFFA6] w-full border-t border-[#FFFFFF1A] py-5 px-4 sm:px-12"
        >
          <div className="flex w-full justify-between">
            <span>{item.list1}</span>
            <span>{item.list2}</span>
          </div>
        </div>
      ))}
    </div>

  </div>
</div>

   </>
  );
};

export default Loved;
