import React from 'react'
import '../styles/buttons.css'
import { Link } from '@nextui-org/react'
export default function Landing() {
  return (
    <div className='grid bg-white'>
      <div className='fixed top-0 left-0 z-40 w-40 h-40 m-10 border-t-8 border-l-8 border-black rounded-tr-lg rounded-bl-lg '></div>
      <div className='fixed top-0 right-0 z-40 w-40 h-40 m-10 border-t-8 border-r-8 border-black rounded-tl-lg rounded-br-lg '></div>
      <div className='fixed bottom-0 left-0 z-40 w-40 h-40 m-10 border-b-8 border-l-8 border-black rounded-tl-lg rounded-br-lg '></div>
      <div className='fixed bottom-0 right-0 z-40 w-40 h-40 m-10 border-b-8 border-r-8 border-black rounded-tr-lg rounded-bl-lg '></div>
      <div className='grid h-screen place-content-center '>
        <div className='grid place-content-center text-9xl tracking-[.20em] font-montserrat p-2'>
          Souffle
        </div>
        <div className='grid place-content-center text-2xl'>
          Building a transparent future for charities using blockchain innovation.
        </div>
        <div className="box-1 pt-6 mt-5">
          <Link to="\home"> 
            <div class="flex justify-center items-center btn btn-one text-[23px] h-[3em] first-letter:w-[10rem]">
              <span>Try Now!</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
