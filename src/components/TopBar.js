import React from 'react'
import { ChevronLeft } from 'react-iconly'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/topbar.css'

function TopBar() {

    const [showBorder, setShowBorder] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setShowBorder(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <div className={`sticky top-0 bg-white z-10 ${showBorder ? 'border-b-2 border-opacity-100 border-transition' : ''}`}>
            < ol class="flex justify-evenly items-center p-4 font-bold" >
                <div className='w-12 h-12 bg-black '>
                    <li class="inline "><ChevronLeft /></li>
                </div>
                <div className=''>
                    <li class="text-3xl inline tracking-[.20em]">Souffle</li>
                </div>
                <div>
                        <li class="inline hover:underline cursor-pointer"><NavLink to="/home">Home</NavLink></li>
                </div>
            </ol >
        </ div >

    )

}

export default TopBar