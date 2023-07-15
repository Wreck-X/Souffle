import React from 'react'
import { ChevronLeft } from 'react-iconly'
import { useState, useEffect } from 'react';
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
                <div>
                    <li class="inline"><ChevronLeft /></li>
                </div>
                <div>
                    <li class="text-3xl inline">Souffle</li>
                </div>
                <div>
                    <li class="inline hover:underline cursor-pointer">Home</li>
                </div>
            </ol >
        </ div >
    )

}

export default TopBar