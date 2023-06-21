import Image from 'next/image'
import React from 'react'

function Anand() {
  return (
    <div className=' px-16 flex justify-between'>

<div className='  '>
<h1 className=' text-2xl font-medium'>Anand Dighe Ji</h1>
<br />
<p className='w-[70%] text-justify'>Bal Keshav Thackeray also known as Balasaheb Thackeray 23 January 1926  17 November 2012 was an Indian politician who founded the Shiv Sena, a right-wing pro-Marathi and Hindu nationalist party active mainly in the state of Maharashtra. Thackeray began his professional career as a cartoonist with the English-language daily, The Free Press Journal in Bombay, but he left the paper in 1960 to form his own political weekly, Marmik. His political philosophy was largely shaped by his father Keshav Sitaram Thackeray, a leading figure in the Samyukta Maharashtra movement, which advocated the creation of a separate linguistic state for Marathi speakers. Through Marmik, Bal Thackeray campaigned against the growing influence of non-Marathis in Mumbai. In 1966, Thackeray formed the Shiv Sena party to advocate for the interests of Maharashtra in Indian political and professional landscape, and against certain segments of Mumbais Muslim population.</p>
</div>

<img className=' shadow-lg' src="/anand.jpg" width={400} height={400} alt='anand'/>

    </div>
  )
} 

export default Anand