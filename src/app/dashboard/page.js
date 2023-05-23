import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

function pages() {
  return (
    <div className=' h-screen'><Navbar isAdmin={true}/>
      <div className='p-10 '>
     <div  className=' md:w-[50%] h-full flex md:flex-row flex-col justify-between gap-y-8 md:gap-y-0'>
     <Link href="/createmedia" className='flex justify-center bg-blue-500 text-white px-4 py-2 rounded-sm'>
        Create Media
      </Link>
      <Link href="/updatemedia" className=' flex justify-center bg-blue-500 text-white px-4 py-2 rounded-sm'>
        Update Media
      </Link>

      <Link href="/deletemedia" className='flex justify-center bg-red-500 text-white px-4 py-2 rounded-sm'>
        Delete Media
      </Link>

     </div>

      </div>


    </div>
  )
}

export default pages