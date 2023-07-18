import React from 'react'

import {FaLaptopCode, FaBookOpen, FaUsers} from "react-icons/fa"
const HeroSection = () => {
    return (
        <>
            <div className='max-w-[1200px] mx-auto gap-6 grid lg:grid-cols-3 mt-[400px] bg-[#FFFFFF]'>
                <div className='flex-col mx-3'>
                    <p className='text-[#FE0000] mb-2 text-4xl'><FaUsers  /></p>
                    <h1 className='text-[#202E3B] text-xl font-semibold mb-3 hover:text-[#FF9900]'>The Best and Most Involved Teachers</h1>
                    <p className='text-gray-600'>Vivamus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed dolor et amet labore et dolore elit.</p>

                </div>
                <div className='flex-col mx-3'>
                    <p className='text-[#FE0000] mb-2 text-4xl'><FaLaptopCode  /></p>
                    <h1 className='text-[#202E3B] text-xl mb-3 font-semibold hover:text-[#FF9900]'>The Large selection of courses and Instruction</h1>
                    <p className='text-gray-600'>Vivamus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed dolor et amet labore et dolore elit.</p>

                </div>
                <div className='flex-col mx-3'>
                    <p className='text-[#FE0000] mb-2 text-4xl'><FaBookOpen  /></p>
                    <h1 className='text-[#202E3B] text-xl font-semibold mb-3 hover:text-[#FF9900]'>High-Quality Classes & Course Categories</h1>
                    <p className='text-gray-600'>Vivamus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed dolor et amet labore et dolore elit.</p>

                </div>

            </div>
        </>
    )
}

export default HeroSection