import React from 'react'
import '../styles/card.css'
import { Link } from 'react-router-dom'
export default function Charitycard(props) {
  return (
    <Link to="/transactions">
    <div className='transition ease-in-out hover:scale-[1.03] rounded-lg flex border-3 h-[17rem] w-[28rem] border-[4px] border-black bg-white cursor-pointer '>
        <div className='flex items-center w-1/2 bg-white card-content'>
          <img className='object-cover' src='https://i.pinimg.com/736x/72/ed/3a/72ed3a4ee99cdd29917b5affcafa2e63.jpg'></img></div>
      <div className='flex flex-col items-center justify-center w-1/2 bg-white card-content '>
        <div className='flex h-[3rem] items-center justify-center card text-2xl' >
            {props.name}
        </div>
        <div className='p-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag
        </div>
      </div>
    </div>
    </Link>
  );
}
