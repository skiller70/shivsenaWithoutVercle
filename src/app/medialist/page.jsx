import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Link from 'next/link'
function Page() {
    return (
        <div>
            <Navbar />

            <div className='text-2xl font-medium my-8 text-center '>
                Media Resource
                <div className=' mx-16 my-16 grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-8'>
                    <Link href="/pressrealese" className='text-lg items-center bg-[#ffa500] text-white px-2 py-2  gap-2 rounded-sm'>
                        Press Releases

                    </Link>
                    <Link href="/speeches" className='text-lg items-center bg-[#ffa500] text-white px-2 py-2  gap-2 rounded-sm'>
                        Speeches

                    </Link>
                    <Link href="/intervewarticles" className='text-lg items-center bg-[#ffa500] text-white px-2 py-2  gap-2 rounded-sm'>
                        Interviews and Articles

                    </Link>

                    <Link href="/photogallery" className='text-lg items-center bg-[#ffa500] text-white px-2 py-2  gap-2 rounded-sm'>
                        Photo Gallery

                    </Link>
                    <Link href="/videogallery" className='text-lg items-center bg-[#ffa500] text-white px-2 py-2  gap-2 rounded-sm'>
                        Video Gallery


                    </Link>
                </div>

            </div>


            <Footer />






        </div>
    )
}

export default Page