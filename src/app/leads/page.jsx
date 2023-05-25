import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <div className=' w-full h-screen  p-x-16'>
        <Navbar/>

<table className=' table-fixed  w-full ' >
  <thead >
    <tr>
    <th>About</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>

<Footer/>
    </div>

  )
}

export default page