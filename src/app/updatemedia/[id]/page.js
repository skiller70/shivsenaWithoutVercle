"use client"

import Navbar from '@/components/Navbar'
import { useRouter, useParams } from 'next/navigation'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Page({ paramas }) {
  const params = useParams();
  const id = params.id;
  // HOOK
  const router = useRouter()

  // HOOK 
  console.log(id)
  // STATE
  const [allMedia, setAllMedia] = useState([])
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");




  // STATE
  useEffect(() => {
    fetchMedia()
  })




  // METHODS

  const notifySuccess = () => toast.success("media update successfully");
  const notifyError = () => toast.error("failed to update media");


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };




  const fetchMedia = async () => {

    try {
      const result = await axios.get(`http://localhost:4000/getsinglemedia/${id}`)
      console.log(result.data)
      if (result.status == 200) {
        setTitle([...title, result.data.title])
        setText([...text, result.data.text])


      } else {
        console.log("something went wrong")
      }
    } catch (error) {
      if (error) {
        console.log("failed to fetch media")
      }
    }


  }

  //UPDATE DATA

  const handleUpload = async (e) => {
    e.preventDefault()
    const data = new FormData();
    data.append("media", selectedFile);
    data.append("title", title);
    data.append("text", text);
    data.append("id", id);


    try {
      const result = await axios.post("http://localhost:4000/updatemedia", data)
      if (result.status == 200) {
        notifySuccess()

        setSelectedFile(null)
      }

    } catch (error) {
       notifyError()
    }
  };

  //UPDATE DATA
  // METHODS



  return (
    <div>
      <Navbar isAdmin={true} />
      <ToastContainer />
      {/* <div className=' p-10 grid grid-cols-1 gap-6  md:grid-cols-3  lg:grid-cols-4'>

        {allMedia.map((item) => (
          <div id={item.title}>
            <Card img={item.filename} title={item.title} text={item.text} />

          </div>
        ))}




      </div> */}

      <h1 className=' text-2xl mt-8  text-center'>EDIT MEDIA !</h1>

      <form className="w-full px-4 md:px-20 py-16 flex   flex-col justify-center">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Title
            </label>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className=" border-gray-500 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"

            />
          </div>


          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Text
            </label>
            <input
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              className="border-gray-500  appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"

            />
          </div>


          <div className="flex  md:flex-row flex-col  justify-between items-center w-full">
            <div className="my-3 ml-3">
              <label
                htmlFor="formFile"
                className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
              >
                Default file input example
              </label>
              <input
                onChange={handleFileChange}
                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                type="file"
                id="formFile"
              />
            </div>

            <div>
              {" "}
              <button onClick={handleUpload} className="bg-blue-500  px-2 py-1 mr-3  text-white shadow-md rounded-sm ">
                Update Media
              </button>
            </div>
          </div>
        </div>
      </form>










    </div>
  )
}

export default Page