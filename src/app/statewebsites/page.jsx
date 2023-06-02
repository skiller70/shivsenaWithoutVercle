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

            {/* className='flex flex-col justify-around m-4 md:m-16 md:flex-row gap-y-6 md:gap-y-0 ' */}
            <div className=' grid grid-cols-1 md:grid-cols-4  gap-4  m-10'>
                <Link href="/maharashtra" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>

                    Maharashtra
                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>


                <Link href="/delhi" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>
                    Delhi
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

                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>

                    Punjab
                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>

                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>

                Andra Pradesh
                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>





                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>

                    Uttar Pradesh
                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>



                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>

                
                    Chhattisgarh
                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>

                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>

                    Tamil Nadu
                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>





                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>

                    Karnataka
                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>



                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>

                    Madhya Pradesh
                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>

                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>

                    Bihar
                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>


                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>

                    Mizoram
                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>

                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>

                    Gujarat
                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>




                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>

                    Tripura

                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>

                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>


                    Haryana
                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>



                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>


                    Assam
                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>



                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>


                    Meghalaya
                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>


                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>


                    Manipur
                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>

                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>


                    Sikkim
                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>

                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>


                    Jharkhand

                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>


                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>


                    Kerala

                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>



                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>


                    Odisha


                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>


                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>


                    Nagaland


                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>

                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>


                    Uttarakhand

                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>



                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>


                    Arunachal Pradesh

                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>




                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>


                    Himachal Pradesh

                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>



                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>


                    West Bengal

                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>




                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>


                    Telangana

                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>


                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>


                    Delhi

                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>

                <Link href="/rajasthan" className='text-lg items-center bg-[#ffa500] text-white px-4 py-2  gap-2 rounded-sm'>


                    Jammu & Kashmir

                    <FontAwesomeIcon className='mx-2' icon={faMapLocationDot} />

                </Link>









            </div>












            <Footer />



        </div>
    )
}

export default page