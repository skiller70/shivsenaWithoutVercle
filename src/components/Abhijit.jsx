import Image from 'next/image'
import React from 'react'

function Abhijit() {
    return (
        <div className='flex px-4 md:px-8 lg:px-16 md:flex-row flex-col'>

            {/* IMAGE */}



          <div className=' md:w-[40%] mt-16 md:mt-0'>
          <Image src="/Abhijit.jpeg" width={450} height={600} alt='abhijit'/>
          </div>
            {/* IMAGE */}

            {/* TEXT */}
            <div className=' px-4 md:px-16 pt-16 md:w-[60%] order-first md:order-last'>
                {/* HEADER TEXT */}
                <h1 className=' font-semibold  text-2xl' >Captain Abhijit  Adsul Ji</h1>
                <br />
                {/* HEADER TEXT */}
                {/* PARAGRAPH */}
                <p className='  leading-relaxed'>Ex- MLA National General Secretary Of Party Also He is Director In Mumbai District Co-Operative Bank also in the city Co-Operative Bank. He has been honored with Sansad Ratna Award in 2011, 2012 and 2013. </p>
                {/* PARAGRAPH */}
            </div>

            {/* TEXT */}


        </div>
    )
}

export default Abhijit