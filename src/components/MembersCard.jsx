"use client"
import Image from 'next/image'
import React, { useState } from 'react'

function MembersCard(props) {
    const [isOpen, setIsOpen] = useState(false)

    const { title, text, img } = props
    return (
        <div>
            <div
                className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <a href="#!">
                    <Image
                        width={500}
                        height={600}
                        className="rounded-t-lg"
                        src={img}
                        alt={img} />
                </a>
                <div className="p-6">
                    <h5
                        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {title}
                    </h5>
                   <div className={` ${isOpen?null:"h-24 overflow-hidden"} `}>
                   <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200  ">
                        {text}
                    </p>

                   </div>


                   <div className='flex justify-end'>
                   <button onClick={()=>{setIsOpen(!isOpen)}} className='  text-sm bg-[#FF7F50] text-white  px-2 py-1 rounded-sm mt-6'>{isOpen?"Show Less":"Read More"}</button>
                   </div>
                </div>
            </div>



        </div>
    )
}

export default MembersCard