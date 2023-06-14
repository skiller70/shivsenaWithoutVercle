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
                            <Link className='' href="/historyofshivsena">History of shivsena</Link>
                            <Link href="/ourideology">Our Ideology</Link>
                           
                            {/* <Link href="/historyofparty">History of the party</Link> */}
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
                            <Link href="/balasaheb">Balashaheb Thackeray  ji</Link>
                            <Link href="/ananddighe">Anand Dighe ji</Link>
                            {/* <p className=' font-semibold'>Life and history of our leaders</p> */}
                            <Link href="/eknath">Sri Eknath Shinde ji </Link>
                            <Link href="/anandrao">Sri Anandrao Adsul ji </Link>
                            <Link href="/shrikant">Sri Shrikant Shinde  ji </Link>
                            <Link href="/abhijeetji">Sri CAPT. Abhijit Adsul ji </Link>
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
                            <Link href="/pressrelease">Press Releases</Link>
                            {/* <Link href="/speeches">Speeches </Link>
                            <Link href="/intervewarticles">Interviews and Articles </Link> */}
                            <Link href="/media">Photo Gallery</Link>
                            <Link href="/videogallery">Video Gallery</Link>

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
                        <Link href="/constitution">Constitution </Link>
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
