import React from 'react'
import Header from '@/Components/Includes/Header'
import Hero from '@/Components/Includes/Hero'
import Features from '@/Components/Includes/Features'
import CustomerStories from '@/Components/Includes/CustomerStories'
import { DriveRevenue } from '@/Components/Includes/DriveRevenue'
import { Inter } from 'next/font/google';
import HowitWorks from '@/Components/Includes/HowitWorks'
const inter = Inter({ subsets: ['latin'] });
const Home = () => {
  return (
    <>

        <div className={`w-full ${inter.className}  min-w-[300px] min-h-screen`}>

            <Header/>
            <Hero/>
            <Features/>
            <CustomerStories/>
            <DriveRevenue/>
            <HowitWorks/>

        </div>
      

    </>
 
  )
}

export default Home