import React from 'react'

const Blog = () => {
    const blogs = [

        {image:"./blog1.png" , title:"Inspiration" , caption:"8 Creative Ways to Repurpose Your Webinar Content"},
        {image:"./blog2.jpg" , title:"Inspiration" , caption:"Why Webinars Are the #1 Lead Generation Marketing Strategy, You May Not Be Thinking About"},
        {image:"./blog3.jpg" , title:"Inspiration" , caption:"How to Drive Qualified Pipeline and Enable Sales After Your Webinar Wraps"}

]
  return (
  

    <section className='bg-white px-5 md:px-10 lg:px-20 py-[72px] md:py-[144px] w-full  '>
        <div className="max-w-7xl mx-auto">
                 <div className="flex flex-col gap-12">
                    <div className="flex justify-center">
                        <span className='text-black text-[45px]'>Recent articles</span>
                    </div>
                <div className="flex flex-col gap-16">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">

                        {blogs.map((item , index)=>(

                            <div key={index} className="flex gap-4 flex-col">

                                <img src={item.image} className='rounded-tr-2xl  h-[268px] object-cover' alt="" />
                                <div className=''>
                                <span className='text-[13px] font-semibold border border-[#0000001A] text-[#000000A6] rounded-2xl px-2 py-1'>{item.title}</span>
                                </div>
                               <span className='text-[20px] text-black'>{item.caption}</span>
                               <a href="#" className='text-[#5B6CFF]'>Read</a>

                            </div>

                        ))}


                    </div>

                    <div className='flex justify-center items-center'>
                               <a
            href="#"
           className="bg-[#5B6CFF] text-white hover:text-black border border-transparent hover:bg-transparent hover:border-gray-400 px-4 py-1.5 rounded-full transition-all duration-300 ease-in-out"
          >
           Read the blog
          </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog