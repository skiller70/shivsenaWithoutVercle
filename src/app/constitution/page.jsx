"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react'
import 'swiper/css';
import Image from 'next/image';
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";





function page() {






  return (
    <div className=' h-full'>

      <Navbar />




      <Swiper
        className=' my-6'

        modules={[Pagination, Navigation]}
        navigation={true}
        breakpoints={
          {
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }

        }
        // spaceBetween={50}
        // slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className='text-2xl text-center my-32'>Constitution</div>

        <SwiperSlide><Image src="/constitution.jpg" height={500
        } width={800} quality={100} alt='constitution' /></SwiperSlide>
        <SwiperSlide><Image src="/constitution1.jpg" height={500
        } width={800} quality={100} alt='constitution1' /></SwiperSlide>
        <SwiperSlide><Image src="/constitution2.jpg" height={500
        } width={800} quality={100} alt='constitution2' /></SwiperSlide>
        <SwiperSlide><Image src="/constitution3.jpg" height={500
        } width={800} quality={100} alt='constitution3' /></SwiperSlide>
        <SwiperSlide><Image src="/constitution4.jpg" height={500
        } width={800} alt='constitution4' /></SwiperSlide>
        <SwiperSlide><Image src="/constitution5.jpg" height={500
        } width={800} alt='constitution5' /></SwiperSlide>
        <SwiperSlide><Image src="/constitution6.jpg" height={500
        } width={800} alt='constitution6' /></SwiperSlide>
        <SwiperSlide><Image src="/constitution7.jpg" height={500
        } width={800} alt='constitution7' /></SwiperSlide>
        <SwiperSlide><Image src="/constitution8.jpg" height={500
        } width={800} alt='constitution8' /></SwiperSlide>
        <SwiperSlide><Image src="/constitution9.jpg" height={500
        } width={800} alt='constitution9' /></SwiperSlide>
        <SwiperSlide><Image src="/constitution10.jpg" height={500
        } width={800} alt='constitution10' /></SwiperSlide>
        <SwiperSlide><Image src="/constitution11.jpg" height={500
        } width={800} alt='constitution11' /></SwiperSlide>
        <SwiperSlide><Image src="/constitution12.jpg" height={500
        } width={800} alt='constitution12' /></SwiperSlide>
        <SwiperSlide><Image src="/constitution13.jpg" height={500
        } width={800} alt='constitution13' /></SwiperSlide>
        <SwiperSlide><Image src="/constitution14.jpg" height={500
        } width={800} alt='constitution14' /></SwiperSlide>
        <SwiperSlide><Image src="/constitution15.jpg" height={500
        } width={800} alt='constitution15' /></SwiperSlide>
        <SwiperSlide><Image src="/constitution16.jpg" height={500
        } width={800} alt='constitution16' /></SwiperSlide>



      </Swiper>








      <Footer />

    </div>
  )
}

export default page 