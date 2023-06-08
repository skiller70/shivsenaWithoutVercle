"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import VideoCard from '@/components/VideoCard'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

function Page() {

  // STATE
  const [allVideo, setAllVideo] = useState([])

  // STATE

  // LIFE CYCLE
  useEffect(() => {
    fetchVideo()
  }, [])

  // LIFE CYCLE


  // METHODS 
  const fetchVideo = async () => {

    const result = await axios.get("http://localhost:4000/getvideos")

    setAllVideo(result.data)

  }

  // METHODS 

  console.log(allVideo)

  return (
    <div className=' '>

      <Navbar />

      <div className='text-2xl text-center my-16 grid grid-cols-3 gap-y-6'>


        {allVideo.map((item) => (
          <>

            <VideoCard title={item.title} text={item.text} filename={item.filename} id={item._id} />
          </>
        ))}



      </div>








      <Footer />

    </div>
  )
}

export default Page