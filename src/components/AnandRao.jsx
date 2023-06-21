import React from 'react'
import Image from 'next/image'
function AnandRao() {
    return (
        <div className='flex px-4 md:px-8 lg:px-16 md:flex-row flex-col'>
            {/* TEXT    */}
            <div className='md:w-[50%] mx-4 md:mx-0 flex flex-col pt-12 justify-center'>
                {/* HEADING */}
                <div className=' text-2xl font-semibold'>Anandrao Vithoba Adsul
                </div>
                    <br />
                {/* HEADING */}
                {/* PARAGRAPH */}
                <div className=' text-justify'>Anandrao Vithoba Adsul (born 1 June 1947) was a member of the 16th Lok Sabha of India. He represented the Amravati constituency of Maharashtra and is a member of the Shiv Sena (SS) political party. He had represented the Amravati constituency in 15th Lok Sabha and Buldhana constituency of Maharashtra in the 14th Lok Sabha, 13th Lok Sabha and 11th Lok Sabha. He has been honored with Sansad Ratna Award in 2011, 2012 and 2013. In July 2022 .</div>
                {/* PARAGRAPH */}
            </div>
            {/* TEXT    */}
            {/* IMAGE */}
            <div className='md:w-[50%] mt-8 md:mt-0 flex justify-center items-center'>
            <img src="/anandrao.jpg" width={500} height={400} alt='anandrao'  />
            </div>
            {/* IMAGE */}

        </div>
    )
}

export default AnandRao