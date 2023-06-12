"use client";

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

function Navbar(props) {
    const router = useRouter()

    // METHODS 

    const userLogout = () => {
        localStorage.removeItem("token")
        router.push("/login")
    }    


    // METHODS 
    // STATE
    const [toggle, setToggle] = useState(false)
    // STATE
    return (
        <>
            <div className='px-4 bg-[#FF7F50] h-24  sticky top-0 z-30 md:flex  justify-between items-center w-full lg:px-16 '>

                {/* NAVBAR TOGGLE */}

                {/* NAVBAR TOGGLE */}

                {/* NAV LOGO */}

                <div className='flex justify-evenly md:justify-center items-center   h-full'>
                    <div className='items-center  py-8 px-4 md:hidden flex '>
                        {toggle ? <FontAwesomeIcon onClick={() => { setToggle(!toggle) }} icon={faXmark} color='white' /> :
                            <FontAwesomeIcon onClick={() => { setToggle(!toggle) }} icon={faBars} color='white' />}
                    </div>
                    <Link href="/" className='flex  flex-1 justify-center md:justify-start items-center cursor-pointer'>
                        <Image src="/shivShenaLogo.png" alt='logo' width={80} height={80} />
                        <div className=' text-white text-2xl mx-2 lg:mx-8  font-semibold' >Shivsena</div>
                    </Link>

                </div>
                {/* NAV LOGO */}
                {/* NAV LINK */}
                <div className=' hidden  md:flex text-white flex-1  items-center    '>
                    {props.isAdmin ? <div className='mx-[4%]lg:mx-[8%] flex gap-x-2 lg:gap-x-8 flex-1 w-full justify-center'  >
                        <Link className=' hover:border-b-4  ' href="/dashboard">Dashboard</Link>
                        {/* <Link className=' hover:border-b-4  ' href="/">Our Story</Link>*/}
                        <Link className=' hover:border-b-4  ' href="/medialist">Media</Link>

                    </div> : <div className='mx-[4%]lg:mx-[8%] flex gap-x-2 lg:gap-x-8 flex-1 w-full justify-center'  >
                        <Link className=' hover:border-b-4  ' href="/">Home</Link>
                        <Link className=' hover:border-b-4  ' href="/ourmembers">Our Members</Link>
                        <Link className=' hover:border-b-4  ' href="/medialist">Media</Link>
                        <Link className=' hover:border-b-4  ' href="/statewebsites">State Websites</Link>
                        <Link className=' hover:border-b-4  ' href="/contactus">Contact us</Link>

                    </div>}


                    {props.isAdmin ? <div className='flex text-white gap-3 lg:gap-x-4  items-center' >

                        <button onClick={userLogout} className=' bg-[#ffa500] px-4 py-1 hover:scale-110 rounded-md shadow-md' >Logout</button>
                        {/* <Link className=' bg-[#daa520] px-4 py-1 hover:scale-110  rounded-md shadow-md' href="/">Make a Donation</Link> */}
                    </div> : <div className='flex text-white gap-3 lg:gap-x-4  items-center' >

                        <Link className=' bg-[#ffa500] px-4 py-1 hover:scale-110 rounded-md shadow-md' href="/joinshivsena">Join Shivsena</Link>
                        <Link className=' bg-[#daa520] px-4 py-1 hover:scale-110  rounded-md shadow-md' href="/donation">Make a Donation</Link>
                    </div>}



                </div>


                {/* NAV LINK */}

                {/* MOBILE NAV LINKS */}

                {/* MOBILE NAV LINKS */}



            </div>


            <div className={`bg-[#FF7F50] w-[100%] h-56 sticky top-20  shadow-lg  z-50 text-white ${toggle ? "visible" : "hidden"}`}
            >
                <div className=' pt-6'>

                    {props.isAdmin ? <div className=' flex  justify-center flex-col  mx-32 gap-y-4'  >
                        <Link className='  ' href="/">Dashboard</Link>
                        {/* <Link className='   ' href="/">Our Story</Link>
                        <Link className='  ' href="/">Media</Link> */}

                    </div>
                        : <div className=' flex  justify-center flex-col  mx-32 gap-y-4'  >
                            <Link className='  ' href="/">Home</Link>
                            <Link className='  ' href="/ourstory">Our Story</Link>
                            <Link className='  ' href="/medialist">Media</Link>
                            <Link className='  ' href="/contactus">Contact us</Link>
                            <Link className='  ' href="/statewebsites">State Websites</Link>
                        </div>
                    }

                    {props.isAdmin ? <div className='flex items-center flex-row gap-x-4 mt-8  justify-center' >

                        <button className=' bg-[#ffa500] px-4 py-1 hover:scale-110 rounded-md shadow-md' onClick={userLogout}>Logout</button>
                        {/* <Link className=' bg-[#daa520] px-4 py-1 hover:scale-110  rounded-md shadow-md' href="/">Make a Donation</Link> */}
                    </div> : <div className='flex items-center flex-row gap-x-4 mt-8  justify-center' >

                        <Link className=' bg-[#ffa500] px-4 py-1 hover:scale-110 rounded-md shadow-md' href="/contact">Join Shivsena</Link>
                        <Link className=' bg-[#daa520] px-4 py-1 hover:scale-110  rounded-md shadow-md' href="/donation">Make a Donation</Link>
                    </div>}
                </div>


            </div>
        </>
    )
}

export default Navbar