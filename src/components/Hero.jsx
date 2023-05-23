import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div>
       <div  className=' relative   '>
        <Link href="/balasaheb" className='absolute bg-[#ffa500] text-white px-4 py-2 rounded-md bottom-[7%] right-[10%] '>View Story</Link>
       <Image src="/hero.png" width={1920} height={1080} alt="hero"/>
       </div>


    </div>

  )
}

export default Hero