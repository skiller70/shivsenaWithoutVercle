"use client"
import Card from '@/components/Card'
import Footer from '@/components/Footer'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import axios from 'axios'


function Page() {
  // STATE
  const [allData, setAllData] = useState([])
  const [isAdmin, setIsAdmin] = useState(null)
  // STATE


  // LIFE CYCLE
  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsAdmin(token)
    fetchMedias()
  }, [])

  // LIFE CYCLE

  // METHODS 


  const fetchMedias = async () => {
    try {
      const result = await axios.get("http://localhost:4000/getmedia")
      if (result.status == 200) {
        setAllData(result.data)
      } else {
        console.log("failed to fetch data")
      }
    } catch (error) {
      console.log("something went wrong")
    }

  }


  // METHODS 




  return (
    <>
      <Navbar />
      <div className=' p-10 grid grid-cols-1 md:grid-cols-4 gap-y-24 gap-x-8 my-8'>



        {allData.map((item) => (<div key={item._id}>
          {console.log(item)}
          <Card title={item.title} link={item.link} text={item.text} alt={item.filename} img={item.filename} id={item._id} isAdmin={isAdmin} />

        </div>))}


        {/* <Card img="cardImg1.jpeg" title="TITLE" text="Shiv Sena launches Delhi unit, Eknath Shinde to visit soon" link="https://www.thehindu.com/news/cities/mumbai/shiv-sena-launches-delhi-unit-eknath-shinde-to-visit-soon/article66798329.ece#:~:text=With%20the%20launch%20of%20the,have%20a%20Shiv%20Sena%20unit&text=The%20Shiv%20Sena%2C%20led%20by,development%20in%20the%20national%20capital." alt="cardImg1"/>      */}

      </div>
      <Footer />
    </>
  )
}

export default Page