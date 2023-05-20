import React from 'react'

function Form() {
  return (
    <div className=' w-full bg-white flex justify-center items-center flex-col pt-10 pb-20'>
<h1 className='text-3xl my-12 text-center'>Get IN Touch With US !</h1>

<form className=" max-w-lg  mx-4">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
         Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
       Email      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
    </div>
  </div>
    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Phone
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text"  />

        </div>
    </div>


    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        About you
        </label>
        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text"  />

        </div>


        <div className='mt-2 flex justify-end items-end w-full pr-4 '>
            <button className='bg-[#ffa500]  px-4 py-2 rounded-md text-white tracking-wide'>SUBMIT</button>
        </div>



    </div>

</form>




    </div>
  )
}

export default Form