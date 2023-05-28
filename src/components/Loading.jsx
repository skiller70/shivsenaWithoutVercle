"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function Loading() {

    const [initialLoading, setInitialLoading] = useState(false)

    useEffect(() => {
        setInitialLoading(true)


    }, [])
    return (



        <div>



            <div className={`w-full h-[100%] fixed inset-0 bg-[#FF6634] ease-in-out z-50  ${initialLoading ? "translate-x-full  duration-1000" : " translate-x-0  duration-1000"}  transition  flex items-center `}>


                <Image src="/initialLoading.png" width={200} height={200} className={`${initialLoading ? " duration-200  opacity-0" : " opacity-100"} `}  alt="initial "/>
                <Image src="/finalArrow.png" width={200} height={400} className={`-ml-[15%] ${initialLoading ? "   duration-200  opacity-100" : " opacity-0"} `} alt="arrow" />
            </div>






        </div>
    )
}

export default Loading