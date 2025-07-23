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
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const Home = () => {
  return (
    <>

        <div className={`w-full ${inter.className} bg-black min-w-[300px] min-h-screen`}>

            <Header/>
            <Hero/>
            <Features/>
            <CustomerStories/>
            <DriveRevenue/>
            <HowitWorks/>
            <Loved/>
            <Blog/>
            <JoinUs/>
            <SignUp/>
            <RequestDemo/>
            <Footer/>

        </div>
      

    </>
 
  )
}

export default Home