import React from 'react'
import Header from '@/Components/Includes/Header'
import Hero from '@/Components/Includes/Hero'
import Features from '@/Components/Includes/Features'
import CustomerStories from '@/Components/Includes/CustomerStories'
import { DriveRevenue } from '@/Components/Includes/DriveRevenue'
import Loved from '@/Components/Includes/Loved'
import HowitWorks from '@/Components/Includes/HowitWorks'
import Blog from '@/Components/Includes/Blog'
import JoinUs from '@/Components/JoinUs'
import SignUp from '@/Components/SignUp'
import RequestDemo from '@/Components/RequestDemo'
import Footer from '@/Components/Includes/Footer'

import { motion, useScroll } from "framer-motion"


const Home = () => {
   const { scrollYProgress } = useScroll()

  return (
    <>

        <>
      {/* Scroll Indicator */}
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: "rgb(0 140 255)",
          zIndex: 9999,
        }}
      />

      {/* Entire Page */}
      <div className="w-full font-[Inter] bg-black min-w-[300px] min-h-screen">
        <Header />
        <Hero />
        <Features />
        <CustomerStories />
        <DriveRevenue />
        <HowitWorks />
        <Loved />
        <Blog />
        <JoinUs />
        <SignUp />
        <RequestDemo />
        <Footer />
      </div>
    </>

    </>
 
  )
}

export default Home