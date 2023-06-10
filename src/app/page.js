"use client"
import Abhijit from '@/components/Abhijit'
import AnandRao from '@/components/AnandRao'
import Card from '@/components/Card'
import CardImg from '@/components/CardImg'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Loading from '@/components/Loading'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'




export default function Home() {



  useEffect(() => {
    const admin = localStorage.getItem("token")
    setIsAdminLogin(admin)
  }, [])


  const [isAdminLogin, setIsAdminLogin] = useState(null)


  return (
    <>


      <Loading />
      <Navbar />
      <div className=''>
        <Hero />
      </div>
      {/* <div className=' mt-16'>
        <Anand />
        </div> */}


      <div className=' relative mt-4 md:mt-12   '>
        <Link href="/ananddighe" className='absolute bg-[#ffa500] text-white px-4 py-2 rounded-md bottom-[7%] right-[10%] '>View Story</Link>
        <Image src="/anadDighe.png" width={1920} height={1080} alt='ananddighe' />
      </div>

      <div className=' relative mt-4 md:mt-12   '>
        <Link href="/eknath" className='absolute bg-[#ffa500] text-white px-4 py-2 rounded-md bottom-[7%] right-[10%] '>View Story</Link>
        <Image src="/eknathji.jpg" width={1920} height={1080} alt='eknath' />
      </div>




      <div className=' relative mt-4 md:mt-12   '>
        <Link href="/anandrao" className='absolute bg-[#ffa500] text-white px-4 py-2 rounded-md bottom-[7%] right-[10%] '>View Story</Link>
        <Image src="/anandraoji.jpg" width={1920} height={800} alt='anandrao' />
      </div>

      <div className=' relative mt-4 md:mt-12   '>
        <Link href="/shrikant" className='absolute bg-[#ffa500] text-white px-4 py-2 rounded-md bottom-[7%] right-[10%] '>View Story</Link>
        <Image src="/shrikantji.jpg" width={1920} height={800} alt='shrikant' />
      </div>

      <div className='mt-4 md:mt-12' >
        <AnandRao />
      </div>
      <div className='mt-10'>
        <Abhijit />
      </div>
      {/* IMAGE CARD */}
      <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 p-10 w-full gap-y-8  mt-16'>
        <CardImg img="img1.jpeg" alt="img1" />
        <CardImg img="img2.jpg" alt="img2" />
        <CardImg img="img3.jpeg" alt="img3" />
      </div>

      {/* IMAGE CARD */}

      {/* CARD */}
      <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 p-10 w-full gap-y-24 mb-20 '>
        <Card img="cardImg1.jpeg" title="SHIV SENA" text="Shiv Sena launches Delhi unit, Eknath Shinde to visit soon" link="https://www.thehindu.com/news/cities/mumbai/shiv-sena-launches-delhi-unit-eknath-shinde-to-visit-soon/article66798329.ece#:~:text=With%20the%20launch%20of%20the,have%20a%20Shiv%20Sena%20unit&text=The%20Shiv%20Sena%2C%20led%20by,development%20in%20the%20national%20capital." alt="cardImg1" isAdmin={isAdminLogin} />
        <Card img="cardImg2.jpeg" title="SHIV SENA" text="Eknath Shinde-led Shiv Sena launches Delhi unit, vows to apply ‘Maharashtra model’" link="https://www.news18.com/politics/shiv-sena-launches-delhi-unit-eknath-shinde-to-visit-soon-7683901.html" alt="cardImg2" isAdmin={isAdminLogin} />
        <Card img="cardImg3.jpeg" title="SHIV SENA" text="With the launch of the Delhi unit, the national capital becomes the 20th State/Union Territory to have a Shiv Sena unit" link="https://www.livemint.com/politics/policy/eknath-shinde-led-shiv-sena-launches-delhi-unit-vows-to-apply-maharashtra-model-11682856855768.html" alt="cardImg3" isAdmin={isAdminLogin} />

      </div>
      {/* CARD */}
      <Footer />
    </>
  )
}
