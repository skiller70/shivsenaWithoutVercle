"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Page() {



    // STATE    
    const [leads, setLeads] = useState([])
    // STATE

    // LIFE CYCLE
    useEffect(() => { fetchLeads() }, [])
    // LIFE CYCLE   

    // METHODS 
    const fetchLeads = async () => {

        const result = await axios.get("http://localhost:4000/getfaileddonation")

        if (result.status == 200) {
            setLeads(result.data)

        } else {
            console.log("something went wrong")

        }

    }
    // METHODS 

    return (
        <div className=' w-full h-screen  '>
            <Navbar />


            <div className=' p-10  w-full overflow-x-scroll '>
                <table className='  w-full border-2 border-slate-400 ' >
                    <thead className='mt-8 py-8'>
                        <tr className=' border-b-2 border-slate-400'>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>amount</th>
                            <th>Donation Type</th>
                          

                        </tr>
                    </thead>
                    <tbody className='  '>

                        {leads.map((item) => (


                            <tr key={item._id} className=' border-b-2    border-slate-400 '>
                                <td className='text-center  '>{item.name}</td>
                                <td className='text-center  '>{item.email}</td>
                                <td className='text-center  '>{item.number}</td>
                                <td className='text-center  '>{item.amount}</td>
                                <td className='text-center  '>{item.donationType}</td>


                            </tr>


                        ))}



                    </tbody>
                </table>
            </div>
            <Footer />
        </div>

    )
}

export default Page