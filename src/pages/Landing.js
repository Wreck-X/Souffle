import React from 'react'
import '../styles/buttons.css'
import Transaction from '../components/Transaction'
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
        <div className='grid text-2xl place-content-center '>
          Building a transparent future for charities using blockchain innovation.
        </div>
        <div className="pt-6 mt-5 box-1">
          <div class="btn btn-one text-3xl w-1 ">
            <span>Try Now!</span>
          </div>
        </div>
      </div>
    </div>
  )
}
