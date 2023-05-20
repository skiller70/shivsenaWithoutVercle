import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
    return (
        <div className='px-4 bg-[#FF7F50] h-24  sticky top-0 z-20 md:flex  justify-between items-center w-full lg:px-16 '>

            <div className='flex justify-center items-center '>
                <Image src="/shivShenaLogo.png" alt='logo' width={80} height={80} />
                <div className=' text-white text-2xl mx-2 lg:mx-8  font-semibold' >Shivsena</div>

            </div>

            <div className='flex text-white flex-1  items-center    '>
                <div className='mx-[4%]lg:mx-[8%] flex gap-x-2 lg:gap-x-8 flex-1 w-full justify-center'  >
                    <Link className=' hover:border-b-4  ' href="/">Home</Link>
                    <Link className=' hover:border-b-4  ' href="/">Our Story</Link>
                    <Link className=' hover:border-b-4  ' href="/">Media</Link>

                </div>



                <div className='flex text-white gap-3 lg:gap-x-4  items-center' >

                    <Link className=' bg-[#ffa500] px-4 py-1 hover:scale-110 rounded-md shadow-md' href="/">Join Shivsena</Link>
                    <Link className=' bg-[#daa520] px-4 py-1 hover:scale-110  rounded-md shadow-md' href="/">Make a Donation</Link>
                </div>


            </div>





        </div>
    )
}

export default Navbar