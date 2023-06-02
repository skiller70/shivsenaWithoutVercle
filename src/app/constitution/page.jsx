"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react'
import 'swiper/css';
import Image from 'next/image';
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
function Page() {





  return (
    <div className=' h-full'>

      <Navbar />

      <Swiper
      className=' my-6'
   
        modules={[Pagination, Navigation]}
        navigation

        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >

        <SwiperSlide><Image src="/constitution1.png" height={500
        } width={500} /></SwiperSlide>
   <SwiperSlide><Image src="/constitution1.png" height={500
        } width={500} /></SwiperSlide>
        <SwiperSlide><Image src="/constitution1.png" height={500
        } width={500} /></SwiperSlide>
        <SwiperSlide><Image src="/constitution1.png" height={500
        } width={500} /></SwiperSlide>
        
      </Swiper>


      <div className='text-2xl text-center my-32'>Constitution








      </div>


      <Footer />

    </div>
  )
}

export default Page 