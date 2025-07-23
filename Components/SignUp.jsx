import React from 'react'

const SignUp = () => {
  return (
    <div

     style={{ backgroundImage: `url("/SignUp.jpg")` }}
     
     className="py-20 bg-no-repeat bg-cover w-full bg-center px-3">
        <div className="max-w-7xl mx-auto">

            <div className="flex justify-between h-[320px] flex-col">
                <div className="flex text-white">
                    <span className='text-[50px] md:text-[59px] leading-none'>Signup for the newsletter</span>
                </div>
                
                <div className="flex flex-col w-full sm:flex-row gap-3 sm:justify-between">
                       <div className="flex  sm:justify-end flex-col">
                         <span className='text-white text-nowrap'>Stay connected</span>
                       </div>

                          <form className="w-full max-w-sm space-y-4">
        {/* First Name Input */}
        <div>
          
          <input
            type="text"
            placeholder="First name"
            className="w-full bg-transparent border-b border-white text-white placeholder-gray-500 focus:outline-none py-1"
          />
        </div>

        {/* Email Input with Arrow */}
        <div className="relative">
         
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border-b border-white text-white placeholder-gray-500 focus:outline-none py-1 pr-6"
          />
          <button
            type="submit"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-lg"
          >
            →
          </button>
        </div>
                          </form>
                </div>


            </div>

        </div>
    </div>
  )
}

export default SignUp