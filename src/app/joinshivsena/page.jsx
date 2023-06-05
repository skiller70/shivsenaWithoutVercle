import Footer from '@/components/Footer'
import Form from '@/components/Form'
import Navbar from '@/components/Navbar'

import React from 'react'

function Page() {
  return (
    <div>
      <Navbar />






      <Form title="Get IN Touch With US !" fullName="NAME" email="EMAIL" phone="PHONE" message="ABOUT YOU" api="mail"/>
      <Footer />

    </div>
  )
}

export default Page