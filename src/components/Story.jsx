import Image from 'next/image'
import React from 'react'

function Story(props) {
  return (
    <div>

      <div className='flex p-10 lg:flex-row flex-col  h-full'>
        {/* TEXT */}
        <div className='lg:w-[60%] w-[100%]'>
          <h1 className='  lg:mx-10 text-3xl  font-semibold'>{props.title}</h1>

          <p className=' mt-2 lg:mx-10  text-justify'>  {props.text}  </p>

        </div>
        {/* TEXT */}
        {/* IMAGE */}
        <div className='lg:w-[40%] w-[100%] mt-8 lg:mt-0 self-center    '>
          <Image src={props.img || "/balasahebNew.jpg"} width={500} height={600} alt='hero1' />

        </div>
        {/* IMAGE */}

      </div>



    </div>
  )
}

export default Story