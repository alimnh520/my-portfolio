'use client'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { ImMenu } from "react-icons/im";

const Header = () => {
    const [divMove, setDivSize] = useState('');
    const [windowSize, setWindow] = useState(0);
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setWindow(window.scrollY / 10);
        });
    }, []);
    // const homeDiv = useRef(null);
    // const moveDiv = useRef(null);
    // useEffect(() => {
    //     if (homeDiv.current && moveDiv.current) {
    //         const leftOffset = homeDiv.current.offsetLeft;
    //         const divWidth = homeDiv.current.clientWidth;
    //         console.log(divWidth);
    //         moveDiv.current.style.left = leftOffset+'px'
    //         moveDiv.current.style.width = divWidth+'px'
    //     }
    // }, []);

    const move = {
        left: `${divMove.offsetLeft}px`,
        width: `${divMove.clientWidth}px`
    }
    const updateMove = (e) => {
        setDivSize(e.target);
    }

    return (
        <div className={`w-full ${windowSize < 10 ? 'h-12 pt-2' : 'h-8 pt-1 sm:h-auto sm:pt-2'} sticky top-0 sm:relative backdrop-blur-md text-white flex items-center justify-center shadow-[4px_3px_3px_rgb(20,184,166)] transition-all duration-300 sm:h-auto`}>
            <nav className='w-full h-full flex items-center justify-between px-20 sm:flex-col sm:items-start sm:px-10 md:px-10'>
                <h1 className='text-2xl sm:text-3xl font-bold'>logo</h1>

                <div className="w-24 h-10 border border-teal-500 rounded-md absolute hidden sm:flex items-center justify-between bg-[rgba(20,184,166,0.1)] backdrop-blur-md shadow-[0px_0px_3px_rgb(20,184,166)] right-5 top-3 px-2 font-semibold" onClick={() => setShowNav(!showNav)}>
                    <p>MENU</p>
                    <div className="text-lg">
                        <ImMenu />
                    </div>
                </div>

                <ul className={`flex items-center justify-center space-x-8 font-semibold h-full relative transition-all duration-300 sm:space-x-0 sm:flex-col sm:overflow-hidden sm:items-start sm:mt-5 ${showNav ? 'sm:h-60' : 'sm:h-0'} md:space-x-5`}>

                    <div className={`absolute h-full w-[84px] bg-teal-500 opacity-75 rounded-tl-lg rounded-tr-lg before:absolute before:bottom-0 before:content-[''] before:h-5 before:w-5 before:-left-5 before:bg-transparent before:shadow-[2.5px_2.5px_2px_rgb(20,184,166)] before:rounded-br-lg after:absolute after:-right-5 after:content-[''] after:bottom-0 after:h-5 after:w-5 after:bg-transparent after:shadow-[-2.5px_2.5px_2px_rgb(20,184,166)] after:rounded-bl-lg left-[32px] transition-all duration-500 -z-10 sm:hidden`} style={move}></div>

                    <li className={`h-full sm:relative sm:transition-all sm:duration-300 ${showNav ? 'sm:-left-0':'sm:-left-40'}`}>
                        <Link href="" className=' flex items-center justify-center px-5 w-fit h-full sm:px-0 sm:py-3' onClick={(e) => updateMove(e)}>Home</Link>
                    </li>
                    <li className={`h-full sm:relative sm:transition-all sm:duration-300 delay-100 ${showNav ? 'sm:-left-0':'sm:-left-40'}`}>
                        <Link href="" className=' flex items-center justify-center px-5 w-fit h-full sm:px-0 sm:py-3' onClick={(e) => updateMove(e)}>Blogs</Link>
                    </li>
                    <li className={`h-full sm:relative sm:transition-all sm:duration-300 delay-150 ${showNav ? 'sm:-left-0':'sm:-left-40'}`}>
                        <Link href="" className=' flex items-center justify-center px-5 w-fit h-full sm:px-0 sm:py-3' onClick={(e) => updateMove(e)}>Projects</Link>
                    </li>
                    <li className={`h-full sm:relative sm:transition-all sm:duration-300 delay-200 ${showNav ? 'sm:-left-0':'sm:-left-40'}`}>
                        <Link href="" className=' flex items-center justify-center px-5 w-fit h-full sm:px-0 sm:py-3' onClick={(e) => updateMove(e)}>Contact</Link>
                    </li>
                    <li className={`h-full sm:relative sm:transition-all sm:duration-300 delay-300 ${showNav ? 'sm:-left-0':'sm:-left-40'}`}>
                        <Link href="" className=' flex items-center justify-center px-5 w-fit h-full sm:px-0 sm:py-3' onClick={(e) => updateMove(e)}>About me</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header