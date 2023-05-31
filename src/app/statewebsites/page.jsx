import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link'

function page() {
    return (
        <div className='h-[100%] '>
            <Navbar />

            <div className='text-2xl font-medium my-8 text-center'>
                States Website


            </div>
            <div className='flex flex-col justify-around m-4 md:m-16 md:flex-row gap-y-6 md:gap-y-0 '>
                <Link href="/delhi" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>
                    Delhi
                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>


                <Link href="/maharashtra" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>
                    Maharashtra
                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>



                <Link href="/goa" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>
                    Goa
                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>

                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>
                    Rajasthan
                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>

 
 
            </div>


            <Footer />



        </div>
    )
}

export default page