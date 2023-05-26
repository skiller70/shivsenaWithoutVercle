"use client"
import axios from 'axios'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';


function Page() {
    // HOOK
    const router = useRouter();

    // HOOK

    // STATE
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    // STATE
    console.log(username)
    console.log(password)
    // METHODS 
    const userLogin = async (e) => {
        e.preventDefault()
        try {
            const result = await axios.post("http://localhost:4000/login", { username, password })
            if (result.status == 200) {
                localStorage.setItem("token", result.data)
                router.push("/dashboard")
             }
        } catch (error) {
            if (error) {
                return console.log("something went wrong", error)
            }
        }
    }

    // METHODS 
    return (
        <div className='h-screen'>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                            <div className="mt-2">
                                <input value={username} onChange={(e) => { setUsername(e.target.value) }} id="email" name="email" type="text" autoComplete="text" required className="block w-full rounded-md border-0 pl-8 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium   leading-6 text-gray-900">Password</label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input value={password} onChange={(e) => { setPassword(e.target.value) }} id="password" name="password" type="password" autoComplete="current-password" required className="block pl-8 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button onClick={userLogin} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>


                </div>
            </div>





        </div>
    )
}

export default Page