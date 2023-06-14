import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Story from '@/components/Story'
import React from 'react'
import Image from 'next/image'

function page() {
    return (
        <div>
            <Navbar />



            {/* <Story title="A " text="Profession : Business, Philanthropist, Entrepreneur, Social Worker, RTI Activist, Corporate Head Honcho, Private Equity Investor, Banker, Cooperator, Rights Activist, Litigant to protect the integrity of Democracy in the Cooperative Sector also a Policy Framework Designer for the Growth of the Sector, a Savior for the Cooperative Banking Sector for Urban Cooperative Banks Across the Country, Policymaker, Financial Budget Strategist, Brainstormer for Development of the Country" img={"/anshumman.jpg"} /> */}


            <div className=' flex justify-between gap-y-6 md:gap-y-0 flex-col md:flex-row mx-20 mt-10'>


                <Image src={"/sankatMochan.jpg"} width={500} height={250} alt="hanumanji" />
                <Image src={"/anshumman.jpg"} width={500} height={250} alt="anshumman" />
            </div>

            <p className=' text-center   lg:mx-20 text-3xl mt-8 font-semibold'>Anshumman Joshi Ji</p>
            <br />
            <p className=' mx-10 text-justify md:mx-20 '>Anshumman Joshi Ji is an Trustee, 108 Ft.Sankat Mochan Dham, Jhandewala, Karol Bagh with absolute dedication towards all of religious programs and organizes a number of religious major events at the Hanuman Ji Temple. </p>

            <br />



            <p className=' mx-10 md:mx-20  text-xl font-normal'>Profession : Business</p>
            <br />
            <p className='  mx-10 md:mx-20  text-justify'>
            Philanthropist, Entrepreneur, Social Worker, RTI Activist, Corporate Head Honcho, Private Equity Investor, Banker, Cooperator, Rights Activist, Litigant to protect the integrity of Democracy in the Cooperative Sector also a Policy Framework Designer for the Growth of the Sector, a Savior for the Cooperative Banking Sector for Urban Cooperative Banks Across the Country, Policymaker, Financial Budget Strategist, Brainstormer for Development of the Country

            </p>



            <div className=' md:mt-2 mx-10 mb-10 md:mx-16 md:px-3 '>
                <p className=' text-xl font-normal'>Social and Cultural Activities</p>
                <br />
                <p className='  text-justify'>
                    Literary, Artistic and Scientific Founder, Dhanvarsha Group A Business Group focused on Saving the Cooperative Movement, Urban Cooperative Banks across the country are given free legal support to save the existence of the movement, Infusion of Capital into weak banks as per Section 12 of the Banking Regulations Amendment Act.2020 by way of Private Placement. Fought for the movement in various courts across

                </p>
                <br />
                <p className='text-xl font-normal'>Accomplishments and other Special Interests </p>

                <br />
                <p className='text-justify'>
                    the country to ensure the banks licenses are not cancelled & the same do not come under the directions of Section 35A of the Banking Regulations Act. 1949. Running Corruption Free India (NGO/Trust ) working towards the upliftment of the prisoners languishing prisons making them independent in skilled works like Tailoring signed MOUs with several Prisons to train the convicted prisoners while they are serving their sentence so that they are self rel iant once they are released after service their period in order to ensure they know how can they earn a living because of being trained as a toiler . Offering Food to the needy at Hanuman ji Temple, Jhandewalan, Karol Bagh & Various Gurudwaras across Delhi on a daily basis over a 1000 plus people are fed
                </p>

                <br />



                <div>
                    <div>

                    </div>




                </div>


                <p className='text-xl font-normal'>Other Information </p>

                <br />
                <p className='text-justify'>
                    Has undertaken initiatives in social engineering in order to promote harmony and unity in the country; organizing special meetings and programmes with the objective of providing guidance to several Urban Cooperative Banks & also help them become compliant to the regulatory norms. Working for the skill development in the country and has played an important role in the growth of the Urban Cooperative Banking Industry in India
                </p>

            </div>


























            <Footer />





        </div>
    )
}

export default page