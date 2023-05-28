"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function Page() {

    const [initialLoading, setInitialLoading] = useState(false)

    useEffect(() => {
        setInitialLoading(true)


    }, [])
    return (



        <div>



            <div className={`w-full h-[100%] fixed inset-0 bg-[#FC6A03]   ${initialLoading ? "translate-x-full duration-500" : " translate-x-0 duration-500"}  transition  flex items-center `}>


                <Image src="/initialLoading.png" width={200} height={200} className={`${initialLoading ? " duration-100  opacity-0" : " opacity-100"} `} />
                <Image src="/loadingArrow.png" width={300} height={400} className={`  -ml-8 ${initialLoading ? " duration-100  opacity-100" : " opacity-0"} `} />
            </div>






        </div>
    )
}

export default Page