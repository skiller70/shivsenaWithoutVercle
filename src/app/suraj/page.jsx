import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Story from '@/components/Story'
import React from 'react'

function page() {
    return (
        <div>   
            <Navbar />



            <Story title="Mahant Suraj Giri Ji" text="Rahul Shewale is an active Indian politician from the Shiv Sena and the Lok Sabha member from the Mumbai South Central constituency. He defeated sitting MP Eknath Gaikwad in the Indian general election, 2014. Shewale is a four-time chairman of the standing committee of the Brihanmumbai Municipal Corporation (BMC), the municipal corporation of the city of Mumbai. He held the position from 2010 to 2014." img={"/suraj.jpeg"} />



            <div className=' md:mt-2 lg:-mt-16 mx-10 mb-10 md:mx-16 md:px-3 '>
                <p className=' text-xl font-normal'>Early & Personal Life</p>
                <br />
                <p className='  text-justify'>
                    Rahul Shewale was born on 14 April 1973 to Ramesh Sambhaji Shewale, an Indian Navy officer and Jayashri Shewale, an employee of MTNL. His elder brother Avinash is a software engineer, who has settled in the United States, while his brother Navin is a doctor. He married fellow Shiv Sena politician and BMC corporator Kamini Mayekar (Kamini Shewale) on 14 February 2005. Kamini Shewale is a housewife. The couple have two sons: Swayam and Vedant.
                    Shewale is a Diploma holder in Civil Engineering from Government Polytechnic, Bandra

                </p>
                <br />
                <p className='text-xl font-normal'>Career</p>

                <br />
                <p className='text-justify'>
                    Rahul Shewale is a two time MP. He holds the record for being elected the Chairman of the standing committee of the BMC most times. Mr. Shewale joined Shiv Sena officially in 2014 when he decided to contest the elections. Rahul Shewale has raised issues in Parliament concerning the renaming of Kings Circle Station in Mumbai and Construction of a B.R Ambedkar Statue at Indu Mill in Mumbai.

                    Rahul Shewale is the first Shiv Sena MP in India and first MP in Maharashtra to get an ISO certification (ISO 9001) for efficient and digital handling of grievance redressal was recently awarded with the ‘Best Parliamentarian’ title. He presented several issues in the Parliament related to infrastructure and environmental concerns.
                </p>

            </div>


























            <Footer />





        </div>
    )
}

export default page