import Footer from '@/components/Footer'
import Form from '@/components/Form'
import Navbar from '@/components/Navbar'
import React from 'react'

function Page() {
  return (
<>

<Navbar/>

<Form title="CONTACT US" fullName="FULL NAME" email="EMAIL" phone="PHONE" message="MESSAGE" api="contactus" successMessage="Thank you for Contacting us" errorMessage="Failed to Contact"/>
    

<Footer/>
</>

  )
}

export default Page