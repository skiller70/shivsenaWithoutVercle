import Footer from '@/components/Footer'
import MembersCard from '@/components/MembersCard'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
    return (

        <div>
            <Navbar />

            <div className=' mx-6 md:mx-16 grid grid-cols-1 md:grid-cols-3 gap-6 my-16 '>




                <MembersCard title="Balaji Devidasrao Kalyankar " text="Balaji Devidasrao Kalyankar is a Shiv Sena politician from Nanded district, Maharashtra, India. He is current Member of Legislative Assembly from Nanded North Vidhan Sabha constituency as a member of Shiv Sena." img={"/balaji.jpg"} />


                <MembersCard title="Suhas Dwarkanath Kande " text="Suhas Dwarkanath Kande is a politician. He is a member of Maharashtra Legislative Assembly from Nandgaon Vidhan Sabha constituency as a member of the Shiv Sena. About his family, he has a single child named Devika Suhas Kande." img={"/suhash.jpg"} />



                <MembersCard title="Balaji Kinikar " text="Balaji Kinikar is a Shiv Sena politician from Ambernath, Maharashtra. He is a member of Legislative Assembly from Ambernath Vidhan Sabha constituency, Maharashtra, India. He has been elected for 3 consecutive terms in the Maharashtra Legislative Assembly in 2009,2014 & 2019." img={"/kidikar.jpg"} />



                <MembersCard title="Mangesh Kudalkar " text="Mangesh Kudalkar is a Shiv Sena politician from Mumbai, Maharashtra. He is a member of the 13th Maharashtra Legislative Assembly. He represents Kurla Vidhan Sabha constituency of Mumbai, Maharashtra, India as a member of Shiv Sena.
" img={"/mangesh.jpg"} />


                <MembersCard title="Deepak Vasant Kesarkar" text="Deepak Vasant Kesarkar is a member of the 14th Maharashtra Legislative Assembly. He is the Cabinet Minister for Ministry of Education and Ministry of Marathi Language. He represents the Sawantwadi Assembly Constituency." img={"/deepak.jpg"} />

                <MembersCard title="Sanjay Gaikwad " text="Sanjay Gaikwad is an Indian politician serving as a MLA in Maharashtra Legislative Assembly from Buldhana Vidhan Sabha constituency as a member of Shiv Sena." img={"/sanjayG.jpg"} />


                <MembersCard title="Bharatshet Gogawale " text="Bharatshet Gogawale is a Shiv Sena politician from Raigad district, Maharashtra. He is current Member of Legislative Assembly from Mahad Vidhan Sabha constituency of Konkan, Maharashtra, India as a member of Shiv Sena" img={"/bharatset.jpg"} />

                <MembersCard title="Yogesh Ramdas Kadam " text="Yogesh Ramdas Kadam son of Ramdas Kadam is an Indian politician serving as Member of the Maharashtra Legislative Assembly from Dapoli Vidhan Sabha constituency as a member of Shiv Sena." img={"/yogesh.jpg"} />

            </div>
            <Footer />
        </div>
    )
}

export default page