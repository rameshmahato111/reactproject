import React from 'react'
import team1 from "../assets/teams/team1.jpg"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
const Teams = () => {
    return (
        <>
            <h1 className='text-center text-[#ED1c24] font-bold mt-4 capitalize'>our team</h1>

            <div className='text-center capitalize my-2'>
                <span className='text-3xl font-bold font-serif '>meet our</span> <span className='ml-2 font-serif'>Teachers</span>

            </div>

            <div className='max-w-[1200px] mx-auto  grid lg:grid-cols-4 md:grid-cols-2'>

                <div className='relative'>
                    <div className='text-center hover:text-[#FF9900] cursor-pointer '>
                        <img src={team1} alt="" />

                        <p className='pt-2'>Lawrence Petrie</p>
                    </div>

                    <p className='text-center'>Director</p>

                    <div className=' flex gap-4 items-center absolute bottom-20 left-20 -z-10 hover:z-10'>
                        <p className='text-2xl rounded-full bg-[#ffffff] border border-gray-200 p-2 hover:text-[#FF9900]'> <FaFacebook /></p>
                        <p className='text-2xl rounded-full bg-[#ffffff] border border-gray-200 p-2 hover:text-[#FF9900]'> <FaTwitter /></p>
                        <p className='text-2xl rounded-full bg-[#ffffff] border border-gray-200 p-2 hover:text-[#FF9900]'> <FaInstagram /></p>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Teams