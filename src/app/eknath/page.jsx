import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Story from '@/components/Story'
import React from 'react'

function Page() {
  return (
    <div>
<Navbar/>

<Story title="Eknath Shinde Ji" text="Eknath Shinde is the man credited with altering the political landscape in Maharashtra. Shinde ji has been a meteoric rise - from humble beginnings to being in charge of one of the most significant states of India.

Eknath Shinde Ji is an Indian politician and the current Minister of State for Home Affairs in the Government of India. Shinde Ji is a member of the Shiv Sena, a right-wing Hindu nationalist party based in the state of Maharashtra.

The 58-year-old was elected to the Maharashtra Assembly for four consecutive terms in 2004, 2009, 2014, and 2019, and has been in charge of planning major Shiv Sena gatherings.

Following his victory in 2014, Shinde, the most popular leader was chosen to represent the Shiv Sena legislative party. He later served as the Leader of Opposition in the Maharashtra Assembly for a short time. In the Sena-BJP government, he was appointed PWD minister. On 30th June 2022, Eknath Shinde was sworn in as the 20th Chief Minister of Maharashtra.

Shinde ji was introduced to politics by then Thane Shiv Sena President Anand Dighe in early 1980 and became successor to the latter's legacy after his death in 2001. He rose through the ranks after launching a labour union for the party. His position in the Shiv Sena became stronger after Bal Thackeray's nephew Raj left the party and launched Maharashtra Navnirman Sena." img={"/eknathStory.jpg"}/>

<div className=' mx-10 mb-10 md:mx-16 md:px-3 '>
<h1 className=' text-2xl font-medium'>Humble Beginnings
</h1>
<br/>
<p  className='  text-justify'>
Eknath Shinde is a Maratha who was born in the Jawali taluka of Satara, Maharashtra in 9 February 1964. His family relocated to Thane, on Mumbai's outskirts, in order to make a living. Eknath attended Mangala High School & Junior College in Thane until the 11th grade.    

After completing his education, Shinde Ji began working in the accounts department of the Municipal Corporation of Greater Mumbai. He later joined the Shiv Sena, a party founded by his uncle Bal Thackeray, and quickly rose through the ranks to become one of its senior leaders.</p>
</div>

<Footer/>


    </div>
  )
}

export default Page