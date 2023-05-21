import Image from 'next/image'
import React from 'react'

function CardImg(props) {
    return (
        <div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg ">
                <Image class="w-full " src={`/${props.img}`} alt={props.alt} width={400} height={600}/>
                {/* <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{props.title}</div>
                    <p class="text-gray-700 text-base">
                  {props.text}
                    </p>
                </div> */}

                    {/* <div className=' mt-4 flex justify-end px-10 '>
                        <a  href={props.link} className=' cursor-pointer bg-blue-700 text-white px-4 py-2 rounded-md' >Read More</a>
                    </div> */}


                {/* <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div> */}
            </div>


        </div>
    )
}

export default CardImg