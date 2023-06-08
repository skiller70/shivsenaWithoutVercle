import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function VideoCard(props) {


    const { title, text, filename, id } = props

    // METHODS 

    const notifySuccess = () => toast.success("media deleted successfully");
    const notifyError = () => toast.error("failed to delete media");
    const deletePost = async () => {
        try {
            const result = await axios.post("http://localhost:4000/deletevideo", { id })
            if (result.status == 200) {
                notifySuccess()
            }
        } catch (error) {
            notifyError()
        }
    }



    //  const deletePost = async () =>{
    //     const result = axios.post("http://localhost:4000/getvideos")      

    //  }   
    // METHODS 
    return (
        <>
            <ToastContainer />
            <div className="flex justify-center">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!">
                        {/* <video width="320" height="240" controls className="w-full rounded-t-lg">
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4">
                <source src="movie.ogg" type="video/ogg">
                Your browser does not support the video tag.
            </video> */}
                        <video width="320" height="240" controls className="w-full rounded-t-lg">
                            <source src="1686248934613.mp4" type="video/mp4" />
                            <source src="movie.ogg" type="video/ogg" />
                        </video>
                    </a>
                    <div className="p-6 ">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                        <p className="text-gray-700 text-base mb-4">
                            {text}
                        </p>
                        <div className='flex justify-between items-center'>

                            <button onClick={deletePost}><FontAwesomeIcon icon={faTrash} size={15} /></button>
                        </div>
                    </div>
                </div>
            </div>







        </>
    )
}

export default VideoCard