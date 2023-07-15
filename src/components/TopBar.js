import React from 'react'
import { ChevronLeft,Home} from 'react-iconly'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
                <div className='transition ease-in-out cursor-pointer w-12 h-12 hover:bg-[#DDDDDD] flex items-center justify-center rounded-full'>
                    <li class="inline "><ChevronLeft /></li>
                </div>
                <div className=''>
                    <li class="text-3xl inline tracking-[.20em]">Souffle</li>
                </div>
                <div>
                        <li class="transition ease-in-out cursor-pointer w-12 h-12 hover:bg-[#DDDDDD] flex items-center justify-center rounded-full p-1"><Link to="/home"><Home set="bold" primaryColor="black"/></Link></li>
                </div>
            </ol>
        </div>

    )

}

export default TopBar