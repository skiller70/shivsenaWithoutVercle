"use client"
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
function Page() {
  const router = useRouter()
  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      router.push("/")
    }
  }, [router])


  const [isAdmin, setIsAdmin] = useState(null)




  return (
    <div className=' h-screen'><Navbar isAdmin={true} />
      <div className='p-10 '>
        <div className=' md:w-[15%] h-full flex  flex-col justify-between gap-y-8 md:gap-y-4'>
          <Link href="/createmedia" className='flex justify-center bg-[#ffa500] rounded-md text-white px-4 py-2 '>
            Create Media
          </Link>

          <Link href="/leads" className='flex justify-center bg-[#ffa500] rounded-md text-white px-4 py-2 '>
            Get Leads
          </Link>

          <Link href="/successdonation" className='flex justify-center bg-[#ffa500] rounded-md text-white px-4 py-2 '>
            Success Donation
          </Link>

          <Link href="/faileddonation" className='flex justify-center bg-[#ffa500] rounded-md text-white px-4 py-2 '>
            Failed Donation
          </Link>
          {/* <Link href="/updatemedia/123" className=' flex justify-center bg-blue-500 text-white px-4 py-2 rounded-sm'>
        Update Media
      </Link> */}

          {/* <Link href="/deletemedia" className='flex justify-center bg-red-500 text-white px-4 py-2 rounded-sm'>
        Delete Media
      </Link> */}

        </div>

      </div>


    </div>
  )




}

export default Page