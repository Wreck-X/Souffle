import React from 'react'

export default function Search() {
  return (
    <div className='grid h-screen place-content-center'>
        <input placeholder='Search for organisations' className='text-lg lg:w-[80rem] h-[4rem] md:w-[40rem]  sm:w-[30rem]  rounded-full drop-shadow-lg text-center placeholder:"Search for charities" text-black outline-none'></input>
    </div>
  )
}
