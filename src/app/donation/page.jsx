"use client"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Spinner from '@/components/Spinner';

function Page() {
    // HOOK
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors },
    } = useForm();
    // HOOK

    // STATE
    const [isLoading, setIsLoading] = useState(false)



    // STATE

    // METHODS
    const notifySuccess = () => toast.success("Thank you for getting in touch");
    const notifyError = () => toast.error("There was an error trying to send your message.Please try again later.");
    const submitForm = async (data) => {


        try {
            setIsLoading(true)
            const result = await axios.post("http://localhost:4000/donation", data)

            if (result.status == 200) {
                notifySuccess()
                reset()
                setIsLoading(false)
            } else {
                notifyError()
                setIsLoading(false)
            }
        } catch (error) {
            if (error) {
                notifyError()
                setIsLoading(false)
            }
        }







    }



    // METHODS






    return (
        <>
            <Navbar />
            {isLoading ? <Spinner /> : null}

            <ToastContainer />
            <div className=' w-full bg-white flex justify-center items-center flex-col pt-10 pb-20'>
                <h1 className='text-3xl my-12 text-center'>DONATION !</h1>

                <form className=" max-w-lg  mx-4">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Name
                            </label>
                            <input

                                {...register("name", {
                                    required: " Name is required",
                                    minLength: {
                                        value: 4,
                                        message: "The Character must be greater than 4 ",
                                    },
                                    pattern: {
                                        value: /^[a-z,A-Z]+$/,
                                        message: "Please enter alphabets only",
                                    },
                                })}




                                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
                            <p className="text-red-500 text-xs italic">{errors.name && errors.name.message}</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Email      </label>
                            <input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value:
                                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "Please enter a valid email",
                                    },
                                })}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                            <p className="text-red-500 text-xs italic mt-3">{errors.email && errors.email.message}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Phone
                            </label>
                            <input
                                {...register("number", {
                                    required: "Phone Number is required",
                                    minLength: {
                                        value: 10,
                                        message: "Phone number must be at least 10 numbers",
                                    },
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: "Please enter number only",
                                    },
                                })}


                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" />
                            <p className="text-red-500 text-xs italic mt-3">{errors.number && errors.number.message}</p>


                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Amount
                            </label>
                            <input
                                {...register("amount", {
                                    required: "Phone Number is required",
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: "Please enter number only",
                                    },
                                })}


                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" />
                            <p className="text-red-500 text-xs italic mt-3">{errors.amount && errors.amount.message}</p>


                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                            <select
                                {...register("donationType", {
                                    required: "select one option"
                                })}


                                id="countries" className={`bg-gray-50 border  ${errors.donationType && errors.donationType.message ? "border-red-500" : "border-gray-300"}    border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
                                <option value="" ></option>
                                <option value="president">PRESIDENT</option>
                                <option value="pm">PM</option>
                                <option value="cm">CM</option>
                                <option value="mla">MLA</option>
                            </select>
                            <p className="text-red-500 text-xs italic mt-3">{errors.donationType && errors.donationType.message}</p>
                        </div>


                        <div className='mt-8 flex justify-end items-end w-full pr-4 '>
                            <button onClick={handleSubmit(submitForm)} className='bg-[#ffa500]  px-4 py-2 rounded-md text-white tracking-wide'>SUBMIT</button>
                        </div>



                    </div>

                </form>




            </div>
            <Footer />
        </>
    )
}

export default Page