"use client"
import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare,faTrash} from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link'
import axios from 'axios'
function Card(props) {
    const {img,title,text,link,id} = props;
  



    // METHODS
    const deleteCard = async()=>{
     const result = await axios.post("http://localhost:4000/deletemedia",{id})
    }
    // METHODS
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg h-[110%] pb-4">
                <Image className="w-full" src={`/${props.img}`}  width={400} height={600} alt={props.alt}/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{props.title}</div>
                    <p className="text-gray-700 text-base">
                  {props.text}
                    </p>
                </div>



                {props.isAdmin !== null? <div className=' mt-4 flex justify-between px-10 '>

<div className=''>
<Link href={`updatemedia/${id}`}> <FontAwesomeIcon className='px-2 cursor-pointer' color='gray ' icon={faPenToSquare}/></Link>

<button onClick={deleteCard}><FontAwesomeIcon className='px-2 cursor-pointer' color='red' icon={faTrash}/></button>
  </div>


  <a  href={props.link} className=' cursor-pointer bg-blue-700 text-white px-4 py-2 rounded-md' >Read More</a>
</div>: <div className=' mt-4 flex justify-end px-10 '>




  <a  href={props.link} className=' cursor-pointer bg-blue-700 text-white px-4 py-2 rounded-md' >Read More</a>
</div>}






                   


                {/* <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div> */}
            </div>


        </div>
    )
}

export default Card