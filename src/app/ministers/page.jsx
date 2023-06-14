import Footer from '@/components/Footer'
import MinistersCard from '@/components/MinistersCard'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
    return (
        <div>
            <Navbar />

            <div className='my-16'>

                <h1 className=' text-center my-16 text-2xl '>Chief Minister</h1>
                <div className=' flex justify-center mx-[35%]'>

                    <MinistersCard title="Eknath Sambhaji Shinde" text="Eknath Sambhaji Shinde is an Indian politician who is serving as the 20th and Current Chief Minister of Maharashtra since 30 June 2022. He is also serving as the Leader of Shiv Sena since February 2023 and the Leader of the House, Maharashtra Legislative Assembly since July 2022." img={"/eknathM.jpg"} />
                </div>






            </div>


            <div>
                <h1 className=' text-center my-16 text-2xl '>Ministers</h1>


                <div className=' mx-6 md:mx-16 grid grid-cols-1 md:grid-cols-3 gap-6 my-16 '>


                    <MinistersCard title="Gulab Raghunath Patil" text="Gulab Raghunath Patil is a politician and incumbent Water supply and Sanitation minister of the Maharashtra state. He is a Member of Legislative Assembly, the states lower house representing rural Jalgaon constituency. He is a member of Shiv Sena party. In 2019 he got elected in 14th legislative assembly." img={"/gubalM.jpg"} />



                    <MinistersCard title="Dadaji Dagadu Bhuse" text="Dadaji Dagadu Bhuse is a member of the 13th Maharashtra Legislative Assembly. He represents the Malegaon Outer Assembly Constituency. He belongs to the Shiv Sena. It is Bhuses fourth term as Member of Legislative Assembly. In December 2014, he was appointed Minister of State for Co-operation." img={"/bhuseM.jpg"} />


                    <MinistersCard title="Sanjay Dulichand Rathod " text="Sanjay Dulichand Rathod is a Shiv Sena politician from Yavatmal district, Maharashtra. He is a member of the Maharashtra Legislative Assembly from Digras-Darwha Assembly Constituency. Rathod belongs to the Banjara community. He won 2014 assembly election with record margin of 79,864, second highest in Maharashtra." img={"/dulichandM.jpg"} />


                    <MinistersCard title="Sandipanrao Bhumre  " text="
                    Sandipanrao Bhumre is an Indian politician and he is Shiv Sena leader from Aurangabad District, Marathwada. He had been elected to Vidhan Sabha for 5 terms in 1995, 1999, 2004, 2014 and 2019. He is Chairman of Renuka Devi-Sharad Sahakari Sugar Factory, At.Vihamandwa, Tq. Paithan, Dist.Aurangabad." img={"/sandeepM.jpg"} />


                    <MinistersCard title="Uday Samant" text="Uday Samant is an Indian politician and leader of Shiv Sena from Maharashtra. He is Cabinet Minister of Ministry of Industries. He is current Member of Legislative Assembly from Ratnagiri. He has been elected to Vidhan Sabha for four consecutive terms in 2004, 2009, 2014 and 2019." img={"/udayM.jpg"} />



                    <MinistersCard title="Tanaji Sawant" text="Tanaji Sawant is a businessman, Balasahebanchi Shiv Sena politician and deputy leader from Solapur district, Maharashtra. He is current Member of Legislative Assembly from Bhoom / Paranda / Washi Vidhan Sabha constituency as a member of Shiv Sena." img={"/shawantM.jpg"} />

                    <MinistersCard title="Abdul Sattar Abdul Nabi" text="Abdul Sattar Abdul Nabi is an Indian politician from Maharashtra. He was briefly a minister in 2014 in the Congress government in Maharashtra. In 2019 he left Congress and joined Shiv Sena. He is a three term Member of the Maharashtra Legislative Assembly from the Sillod constituency." img={"/abdulM.jpg"} />

                    <MinistersCard title="Deepak Vasant Kesarkar" text="Deepak Vasant Kesarkar is a member of the 14th Maharashtra Legislative Assembly. He is the Cabinet Minister for Ministry of Education and Ministry of Marathi Language. He represents the Sawantwadi Assembly Constituency. He belongs to Shivsena." img={"/deepakM.jpg"} />


                    <MinistersCard title="Shambhuraj Shivajirao Desai" text="Shambhuraj Shivajirao Desai is an Indian politician and Shiv Sena leader from Satara district, Maharashtra. He is a member of the 14th Maharashtra Legislative Assembly. He represents the Patan Assembly Constituency. He had been elected to Vidhan Sabha for three terms in 2004, 2014 and 2019." img={"/sambhuM.jpg"} />





                </div>

            </div>



            <Footer />
        </div>
    )
}

export default page