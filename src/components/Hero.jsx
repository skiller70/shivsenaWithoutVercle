import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div>
       <div  className=' relative w-[100%] h-[250px] md:h-[800px]  '>
        <Link href="/balasaheb" className='absolute bg-[#ffa500] text-white px-4 py-2 rounded-md bottom-[7%] right-[10%]  z-10'>View Story</Link>
       <Image src="/balasahebNew.jpg" fill={true} alt="hero"/>
       </div>


    </div>

  )
}

export default Hero