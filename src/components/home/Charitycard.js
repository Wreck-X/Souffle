import React from 'react'
import '../../styles/card.css'
export default function Charitycard(props) {
  return (
      <div className="flex card">
        <div className='card-content w-1/2 bg-white '> <img className='object-cover' src='https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'></img></div>
        <div class="flex card-content z-20 top-0 right-0 items-center justify-center">
          <h2 className='flex text-xl justify-center items-center font-bold'>{props.heading}</h2>
          <p className='p-4 font-semibold'>
            {props.details}
          </p>
        </div>
      </div>
  );
}
