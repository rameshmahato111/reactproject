

import React from 'react'
import { FaStar, FaUsers } from "react-icons/fa"


const Data = (image, Beginner, New, price, title, icons, number, status) => {
    return (
        <>
            <div className='overflow-hidden '>
                <img src={image} alt="popular" className='hover:scale-110 duration-1000 ease-in-out' />
                <div className='flex'>
                    <button className='bg-[#ED1C24] rounded absolute left-8 text-[#FFFFFF] px-4 py-1 top-12'>{Beginner}</button>
                    <button className='bg-[#FF9900] rounded absolute right-8 text-[#FFFFFF] px-4 py-1 top-12'>{New}</button>

                </div>
                <div className='flex justify-between text-[#ED1C24] font-bold pt-2 '>
                    <p>{price}</p>
                    <ul className='flex gap-1'>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                    </ul>
                </div>
                <p className='text-2xl font-bold px-2'>{title}</p>

                <div className='flex items-center gap-2 text-bold pl-3 mt-2'>
                    <p className='text-[#ED1C24]'><FaUsers /></p>
                    <p>{number}</p>
                    <p>{status}</p>
                </div>
            </div>
        </>
    )
}

export default Data