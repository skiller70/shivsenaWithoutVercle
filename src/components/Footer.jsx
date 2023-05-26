import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (



        <div className='bg-[#FF7F50] '>
            {/* FOOTER LOGO     */}
            <div className='flex items-center md:flex-row flex-col'>
                <div className='flex items-center pt-16 md:py-16 md:px-4 lg:p-8'>
                    <Image src="/shivShenaLogo.png" alt='logo' width={150} height={150} />
                    <h1 className='text-3xl  font-semibold md:mx-2 lg:mx-8 text-white'> Shivsena</h1>
                </div>

                {/* NAV LINKS */}

                <div className='my-16 lg:mt-16 md:pb-10 flex flex-col gap-y-12 md:gap-y-0 md:flex-row  justify-around flex-1 text-white'>


                    {/* ************************************************************************* */}
                    <div>
                        {/* TITLE */}
                        <h1 className=' font-semibold'>The Party </h1>
                        {/* TITLE */}
                        {/* LINKS */}
                       <div className='flex-col flex gap-y-4 md:gap-y-2  mt-4 md:mt-2'>
                       <Link className='' href="/">History and development <br /> of shivshena</Link>
                        <Link href="/">Our philosophy</Link>
                        <Link href="/">Constitution </Link>
                        <Link href="/">History of the party</Link>
                       </div>
                        {/* LINKS */}
                    </div>


                    {/* ************************************************************************* */}


                    {/* ************************************************************************* */}
                    <div>
                        {/* TITLE */}
                        <h1 className=' font-semibold'>Leadership</h1>
                        {/* TITLE */}
                        {/* LINKS */}
                       <div className='flex-col flex gap-y-4 md:gap-y-2  mt-4 md:mt-2'>
                       <Link href="/">Balashaheb Thackeray  ji</Link>
                        <Link href="/">Anand Dighe ji</Link>
                        <p className=' font-semibold'>Life and history of our leaders</p>
                        <Link href="/">Sri Eknath Shinde ji </Link>
                        <Link href="/">Sri Anandrao Adsul ji </Link>
                        <Link href="/">Sri Shrikant Shinde  ji </Link>
                        <Link href="/">Sri CAPT. Abhijeet Adsul ji </Link>
                        

                       
                       </div>
                        {/* LINKS */}
                    </div>

                    {/* ************************************************************************* */}



                    {/* ************************************************************************* */}
                    <div>
                        {/* TITLE */}
                        <h1 className=' font-semibold'>Media Resource</h1>
                        {/* TITLE */}
                        {/* LINKS */}
                       <div className='flex-col flex gap-y-4 md:gap-y-2  mt-4 md:mt-2'>
                       <Link href="/">Press Releases</Link>
                        <Link href="/">Speeches </Link>
                        <Link href="/">Interviews and Articles </Link>
                        <Link href="/">Photo Gallery</Link>
                        <Link href="/">Video Gallery</Link>
                      
                       </div>
                        {/* LINKS */}
                    </div>

                    {/* ************************************************************************* */}



                    {/* ************************************************************************* */}
                    <div>
                        {/* TITLE */}
                        <h1 className=' font-semibold'>Documents</h1>
                        {/* TITLE */}
                        {/* LINKS */}
                       <div className='flex-col flex gap-y-4 md:gap-y-2  mt-4 md:mt-2'>
                       {/* <Link href="/">First Link</Link>
                        <Link href="/">Second Link</Link>
                        <Link href="/">Third Link</Link>
                        <Link href="/">Forth Link</Link> */}
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
