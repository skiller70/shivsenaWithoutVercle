import Footer from '@/components/Footer'
import Form from '@/components/Form'
import Navbar from '@/components/Navbar'
import React from 'react'

function Page() {
  return (
<>

<Navbar/>

<Form title="CONTACT US" fullName="FULL NAME" email="EMAIL" phone="PHONE" message="MESSAGE" api="contactus"/>
    

<Footer/>
</>

  )
}

export default Page