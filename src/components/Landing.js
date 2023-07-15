import React from 'react'
import '../styles/buttons.css'
export default function Landing() {
  return (
    <div className='grid'>
      <div className='h-40 w-40 z-40 top-0 left-0 fixed m-10 border-t-8 border-l-8 border-black rounded-tr-lg rounded-bl-lg  '></div>
      <div className='h-40 w-40 z-40 top-0 right-0 fixed m-10 border-t-8 border-r-8 border-black rounded-tl-lg rounded-br-lg '></div>
      <div className='h-40 w-40 z-40 bottom-0 left-0 fixed m-10 border-b-8 border-l-8 border-black rounded-tl-lg rounded-br-lg '></div>
      <div className='h-40 w-40 z-40 bottom-0 right-0 fixed m-10 border-b-8 border-r-8 border-black rounded-tr-lg rounded-bl-lg '></div>
      <div className='grid h-screen place-content-center '>
          <div className='grid place-content-center text-9xl tracking-[.20em] font-montserrat p-2'>
              Souffle
          </div>
          <div className='grid place-content-center text-2xl '>
          Building a transparent future for charities using blockchain innovation.
          </div>
          <div className="box-1 pt-6 mt-5">
              <div class="btn btn-one text-3xl w-1 ">
                  <span>Try Now!</span>
              </div>
          </div>
      </div>
    </div>
  )
}
