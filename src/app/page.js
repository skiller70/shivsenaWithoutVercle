import Abhijit from '@/components/Abhijit'
import Anand from '@/components/Anand'
import AnandRao from '@/components/AnandRao'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Image from 'next/image'


export default function Home() {
  return (
    <>

      <Navbar />
      <div className=''>
        <Hero />
      </div>
      {/* <div className=' mt-16'>
        <Anand />
        </div> */}
        <div className='  mt-4 md:mt-12 '>
          <Image src="/eknath.jpg" width={1920} height={1080} />
        </div>
    


      <div className='  mt-4 md:mt-12 '>
        <Image src="/anandrao.jpg" width={1920} height={1080} />
      </div>

      <div className='mt-4 md:mt-12' >
      <AnandRao/>
      </div>
      <div>
        <Abhijit/>
      </div>
<div className='grid grid-cols-3  p-10 w-full gap-y-5'>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>

</div>

<Footer/>
    </>
  )
}
