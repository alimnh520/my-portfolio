import React from 'react'
import TextAnimate from './TextAnimation'
import Link from 'next/link'

const HomeAnimation = () => {
    return (
        <div className='w-full h-screen flex items-center justify-between px-20 text-white sm:flex-col sm:px-5 sm:justify-center sm:space-y-10 sm:mt-5 sm:h-auto'>
            <div className="h-full w-1/2 flex flex-col items-start justify-center space-y-5 sm:w-full sm:space-y-5">
                <h1 className='text-lg font-semibold'>Hi There</h1>
                <h1 className='text-5xl font-bold'>I'm <span className='text-4xl text-teal-500 drop-shadow-[0_0_3px_rgb(20,184,166)]'> Nahid</span></h1>
                <div className="flex items-center justify-start space-x-5 ">
                    <h1 className='text-4xl font-bold'>I'm</h1>
                    <TextAnimate />
                </div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorum similique iusto, in omnis libero non suscipit ea exercitationem nemo hic blanditiis magni corrupti dolores nam pariatur sequi. Velit esse accusamus voluptates quasi et fugit maxime eveniet est nesciunt animi voluptatum unde id voluptatibus maiores praesentium accusantium dicta eius harum illo libero voluptatem, vitae reiciendis tenetur expedita. Debitis, id natus.
                </p>
                <Link href="" className='px-10 py-4 bg-transparent backdrop-blur-md rounded-lg border border-teal-400 shadow-[0_0_0px_rgb(20,184,166),inset_0_0_10px_rgb(20,184,166)] text-lg font-semibold text-teal-500 transition-all duration-300 hover:shadow-[0_0_15px_rgb(20,184,166),inset_0_0_15px_rgb(20,184,166)] hover:text-teal-400'>Contact me</Link>
            </div>
            <div className="h-full w-1/2 flex flex-col items-center justify-center bg-transparent p-20 sm:w-full sm:p-0">
                <div className="h-full w-full bg-[url('/home/IMG_20241230_165456.jpg')] bg-cover bg-center backdrop-blur-sm border border-teal-500 rounded-[30%_70%_70%_30%_/_30%_66%_34%_70%] shadow-[0_0_20px_rgb(20,184,166),inset_0_0_20px_rgb(20,184,166)]">

                </div>
            </div>
        </div>
    )
}

export default HomeAnimation