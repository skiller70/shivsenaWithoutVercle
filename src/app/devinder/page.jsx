import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Story from '@/components/Story'
import React from 'react'

function page() {
    return (
        <div>
            <Navbar />



            <Story title="Colonel Devinder Sehrawat Ji" text="Colonel Devinder Sehrawat Ji is an Indian politician and former member of the Sixth Legislative Assembly of Delhi of India He has represented the Bijwasan constituency of New Delhi (being a member of The AAM AADMI PARTY before defecting to BJP political party.
Early life and education
Colonel Devinder Sehrawat Ji was born in Delhi. His father's name is Ram Prakash Sehrawat. He attended the University of Madras and Jawaharlal Nehru University and attained Master of Science and Bachelor of Science degrees. Sehrawat served in the Indian Army and retired from the rank of colonel." img={"/devinder.jpeg"} />



            <div className=' md:mt-2 lg:-mt-16 mx-10 mb-10 md:mx-16 md:px-3 '>
                <br />
                <p className=' text-xl font-normal'>Political career</p>
                <br />
                <p className='  text-justify'>
                Colonel Devinder Sehrawat Ji has been a MLA for one term. He represented the Bijwasan constituency and was a member of the Aam Aadmi Party political party.

                </p>
                <br />
                {/* <p className='text-xl font-normal'>Career</p>

                <br />
                <p className='text-justify'>
                    Rahul Shewale is a two time MP. He holds the record for being elected the Chairman of the standing committee of the BMC most times. Mr. Shewale joined Shiv Sena officially in 2014 when he decided to contest the elections. Rahul Shewale has raised issues in Parliament concerning the renaming of Kings Circle Station in Mumbai and Construction of a B.R Ambedkar Statue at Indu Mill in Mumbai.

                    Rahul Shewale is the first Shiv Sena MP in India and first MP in Maharashtra to get an ISO certification (ISO 9001) for efficient and digital handling of grievance redressal was recently awarded with the ‘Best Parliamentarian’ title. He presented several issues in the Parliament related to infrastructure and environmental concerns.
                </p> */}

            </div>


























            <Footer />





        </div>
    )
}

export default page