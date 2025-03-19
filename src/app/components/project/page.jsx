import React from 'react';

const page = () => {
    return (
        <div className='h-screen w-full px-20 grid grid-cols-3 gap-x-5'>
            <div className="">
                <iframe
                    src="https://food-web-iota-three.vercel.app/"
                    title="External Website"
                    className='bg-white h-full w-full overflow-x-hidden'
                />
            </div>
            <div className="">
                <iframe
                    src="https://food-web-iota-three.vercel.app/"
                    title="External Website"
                    className='bg-white h-full w-full overflow-x-hidden'
                />
            </div>
            <div className="">
                <iframe
                    src="https://text-next-three.vercel.app/"
                    title="External Website"
                    className='bg-white h-full w-full overflow-x-hidden'
                />
            </div>
        </div>
    );
}

export default page;
