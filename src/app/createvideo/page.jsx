"use client"
import Navbar from "@/components/Navbar";
import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Page() {
    //STATE

    const [selectedFile, setSelectedFile] = useState(null);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");


    //STATE

    //METHODS


    // RESPONSE MESSAGE
    const notifySuccess = () => toast.success("video upload successfully");
    const notifyError = () => toast.error("failed to upload video");
    // RESPONSE MESSAGE

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append("video", selectedFile);
        data.append("title", title);
        data.append("text", text);




        try {
            const result = await axios.post("http://localhost:4000/uploadvideo", data)
            if (result.status == 200) {
                notifySuccess()
                setText("")
                setTitle("")
                setSelectedFile(null)
            }

        } catch (error) {
            notifyError()
        }
    };

    //METHODS

    return (
        <div className=" ">
            <Navbar isAdmin={true} />
            <ToastContainer />

            <h1 className=' text-2xl mt-8  text-center'>CREATE VIDEO !</h1>

            <form className="w-full  px-8 md:px-20 py-16 flex   flex-col justify-center">
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
                        <textarea
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
                                Upload Image
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
                                Create Video
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Page;