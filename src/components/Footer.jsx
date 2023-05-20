import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (



        <div className='bg-[#FF7F50] '>
            {/* FOOTER LOGO     */}
            <div className='flex items-center md:flex-row flex-col'>
                <div className='flex items-center pt-16 md:py-16 md:px-4 lg:p-16'>
                    <Image src="/shivShenaLogo.png" alt='logo' width={150} height={150} />
                    <h1 className='text-3xl  font-semibold md:mx-2 lg:mx-8 text-white'> Shivsena</h1>
                </div>

                {/* NAV LINKS */}

                <div className='my-16 lg:mt-16 md:pb-10 flex flex-col gap-y-12 md:gap-y-0 md:flex-row  justify-around flex-1 text-white'>


                    {/* ************************************************************************* */}
                    <div>
                        {/* TITLE */}
                        <h1 className=' font-semibold'>Category</h1>
                        {/* TITLE */}
                        {/* LINKS */}
                       <div className='flex-col flex gap-y-4 md:gap-y-2  mt-4 md:mt-2'>
                       <Link href="/">First Link</Link>
                        <Link href="/">Second Link</Link>
                        <Link href="/">Third Link</Link>
                        <Link href="/">Forth Link</Link>
                       </div>
                        {/* LINKS */}
                    </div>


                    {/* ************************************************************************* */}


                    {/* ************************************************************************* */}
                    <div>
                        {/* TITLE */}
                        <h1 className=' font-semibold'>Category</h1>
                        {/* TITLE */}
                        {/* LINKS */}
                       <div className='flex-col flex gap-y-4 md:gap-y-2  mt-4 md:mt-2'>
                       <Link href="/">First Link</Link>
                        <Link href="/">Second Link</Link>
                        <Link href="/">Third Link</Link>
                        <Link href="/">Forth Link</Link>
                       </div>
                        {/* LINKS */}
                    </div>

                    {/* ************************************************************************* */}



                    {/* ************************************************************************* */}
                    <div>
                        {/* TITLE */}
                        <h1 className=' font-semibold'>Category</h1>
                        {/* TITLE */}
                        {/* LINKS */}
                       <div className='flex-col flex gap-y-4 md:gap-y-2  mt-4 md:mt-2'>
                       <Link href="/">First Link</Link>
                        <Link href="/">Second Link</Link>
                        <Link href="/">Third Link</Link>
                        <Link href="/">Forth Link</Link>
                       </div>
                        {/* LINKS */}
                    </div>

                    {/* ************************************************************************* */}



                    {/* ************************************************************************* */}
                    <div>
                        {/* TITLE */}
                        <h1 className=' font-semibold'>Category</h1>
                        {/* TITLE */}
                        {/* LINKS */}
                       <div className='flex-col flex gap-y-4 md:gap-y-2  mt-4 md:mt-2'>
                       <Link href="/">First Link</Link>
                        <Link href="/">Second Link</Link>
                        <Link href="/">Third Link</Link>
                        <Link href="/">Forth Link</Link>
                       </div>
                        {/* LINKS */}
                    </div>

                    {/* ************************************************************************* */}



                </div>



                {/* NAV LINKS */}

            </div>
            {/* FOOTER LOGO     */}

        </div>




    )
}

export default Footer
