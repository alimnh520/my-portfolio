import React from 'react'
import TextAnimate from './TextAnimation'
import Link from 'next/link'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const HomeAnimation = () => {
    return (
        <div className='w-full h-screen flex items-center justify-between px-20 text-white sm:flex-col sm:px-5 sm:justify-center sm:space-y-10 sm:mt-5 sm:h-auto'>
            <div className="h-full w-1/2 flex flex-col items-start justify-center space-y-5 sm:w-full sm:space-y-5">
                <h1 className='text-lg font-semibold'>Hi There</h1>
                <h1 className='text-5xl font-bold'>I'm <span className='text-4xl text-teal-500 drop-shadow-[0_0_3px_rgb(20,184,166)]'> Nahid</span></h1>
                <div className="flex items-center justify-start space-x-5 ">
                    <h1 className='text-6xl font-bold'>I'm a</h1>
                    <TextAnimate />
                </div>
                <p className='pb-5'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorum similique iusto, in omnis libero non suscipit ea exercitationem nemo hic blanditiis magni corrupti dolores nam pariatur sequi. Velit esse accusamus voluptates quasi et fugit maxime eveniet est nesciunt animi voluptatum unde id voluptatibus maiores praesentium accusantium dicta eius harum illo libero voluptatem, vitae reiciendis tenetur expedita. Debitis, id natus.
                </p>
                <Link href="" className='px-10 py-4 bg-transparent backdrop-blur-md rounded-lg border border-teal-400 shadow-[0_0_0px_rgb(20,184,166),inset_0_0_10px_rgb(20,184,166)] text-lg font-semibold text-teal-500 transition-all duration-300 hover:shadow-[0_0_15px_rgb(20,184,166),inset_0_0_15px_rgb(20,184,166)] hover:text-teal-400'>Contact me</Link>
            </div>
            <div className="h-full w-1/2 flex flex-col items-center justify-center bg-transparent py-10 px-2 sm:w-full sm:p-0 sm:h-[400px] relative">

                <div className="relative size-full rounded-full shadow-[0_0_5px_rgb(20,184,166),inset_0_0_5px_rgb(20,184,166)] flex justify-center items-center">
                    <div className="relative size-10/12 rounded-full shadow-[0_0_10px_rgb(20,184,166),inset_0_0_10px_rgb(20,184,166)] flex justify-center items-center">
                        <Link href="" className="absolute size-14 rounded-full flex items-center justify-center bg-teal-500 hover:bg-transparent transition-all duration-300 hover:backdrop-blur-lg hover:border-teal-500 border-2 border-transparent shadow-[0_0_10px_rgb(20,184,166)] top-3 right-20 transform text-2xl hover:text-teal-500">
                            <FaFacebookF />
                        </Link>

                        <Link href="" className="absolute size-14 rounded-full flex items-center justify-center bg-teal-500 hover:bg-transparent transition-all duration-300 hover:backdrop-blur-lg hover:border-teal-500 border-2 border-transparent shadow-[0_0_10px_rgb(20,184,166)] top-1/4 -translate-y-1/4 -right-1 transform text-2xl hover:text-teal-500"> <FaInstagram /></Link>

                        <Link href="" className="absolute size-14 rounded-full flex items-center justify-center bg-teal-500 hover:bg-transparent transition-all duration-300 hover:backdrop-blur-lg hover:border-teal-500 border-2 border-transparent shadow-[0_0_10px_rgb(20,184,166)] top-1/2 -translate-y-1/2 -right-7 transform text-2xl hover:text-teal-500"><FaGithub /> </Link>

                        <Link href="" className="absolute size-14 rounded-full flex items-center justify-center bg-teal-500 hover:bg-transparent transition-all duration-300 hover:backdrop-blur-lg hover:border-teal-500 border-2 border-transparent shadow-[0_0_10px_rgb(20,184,166)] bottom-1/4 -right-3 transform text-2xl hover:text-teal-500"><FaLinkedin /> </Link>

                        <div className="relative size-10/12 rounded-full flex justify-center items-center shadow-[0_0_10px_rgb(20,184,166),inset_0_0_10px_rgb(20,184,166)] bg-[url('/home/IMG_20241206_010045.jpg')] bg-cover bg-center brightness-75">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAnimation