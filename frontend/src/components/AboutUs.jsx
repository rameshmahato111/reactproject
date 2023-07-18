import React from 'react'
import { Link } from 'react-router-dom'
import { FaMicroscope, FaSchool, FaUserGraduate, FaUsers } from "react-icons/fa"
import backgroundPicture from "../assets/banner/banner3.jpg"
import Teams from './Teams'
const AboutUs = () => {
    return (
        <>
            <div className=' mb-10'>

                <div className='w-full flex justify-between items-center shadow-xl bg-white py-6 gap-6 sticky top-0'>
                    <h1 className='text-3xl  font-bold'>Educator</h1>

                    <ul className='flex items-center gap-6'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutus" className='text-[#FF9900]'>About</Link></li>
                        <li><Link to="">Courses</Link></li>
                        <li><Link to="">Pages</Link></li>
                        <li><Link to="">Contact</Link></li>
                        <li>

                        </li>
                    </ul>

                </div>

                <div>
                    <img src={backgroundPicture} alt="" className='w-full h-[50%] opacity-20' />
                </div>

            </div>



            {/* why choose us */}

            <div className='w-full bg-gray-200 mt-16'>
                <div className='max-w-[1200px] mx-auto grid lg:grid-cols-2 pt-6'>
                    <div className='px-10'>
                        <h4 className='text-[#ED1c24]'>Why Choose Us</h4>

                        <div className='text-[#202E3B] text-[24px] mb-[24px]'>
                            <p className='font-bold'>
                                Our Mission Is To Provide A
                            </p>
                            <p>World‑Class Education
                            </p>
                        </div>

                        <p className='text-[#5E5E5E] text-[16px] font-serif mb-[10px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Fusce eget ex fermentum, ultricies
                            nisi ac sed, lacinia est. Quisque ut lectus consequat, venenatis eros et, sed commodo
                            risus. Nullam sit amet laoreet elit. Suspendisse non init magnaa velit efficitur.


                        </p>

                        <button type='button' className='bg-[#FF9900] text-[#202E3B] text-3xl hover:bg-[#ED1C24] hover:text-[#FFFFFF] duration-300 ease-in-out rounded px-4 py-2'>Read More</button>

                    </div >

                    <div className='grid grid-cols-2 gap-4 m-2'>

                        <div className=' shadow-lg bg-[#F7F7F7] hover:-translate-y-2 duration-300 ease-in-out'>
                            <div className='p-20 text-center text-[#FF9900] '>
                                <FaMicroscope className='text-6xl rounded-full border-2 border-gray-200 bg-gray-200 px-3 py-2' />
                                <p className='pt-3'>Group Seminars</p>
                            </div>

                        </div>
                        <div className=' shadow-lg bg-[#F7F7F7] hover:-translate-y-2 duration-300 ease-in-out'>
                            <div className='p-20 text-center text-[#FF9900] '>
                                <FaUserGraduate className='text-6xl rounded-full border-2 border-gray-200 bg-gray-200 px-3 py-2' />
                                <p className='pt-3'>Trending Courses</p>
                            </div>

                        </div>
                        <div className=' shadow-lg bg-[#F7F7F7]  hover:-translate-y-2 duration-300 ease-in-out'>
                            <div className='p-20 text-center text-[#FF9900] '>
                                <FaSchool className='text-6xl rounded-full border-2 border-gray-200 bg-gray-200 px-3 py-2' />
                                <p className='pt-3'>Large Library</p>
                            </div>

                        </div>
                        <div className=' shadow-lg bg-[#F7F7F7]  hover:-translate-y-2 duration-300 ease-in-out'>
                            <div className='p-20 text-center text-[#FF9900] '>
                                <FaUsers className='text-6xl rounded-full border-2 border-gray-200 bg-gray-200 px-3 py-2' />
                                <p className='pt-3'>Expert Teachers</p>
                            </div>

                        </div>


                    </div>


                </div>

            </div>

            <Teams  />

        </>
    )
}

export default AboutUs