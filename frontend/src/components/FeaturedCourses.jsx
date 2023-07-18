import React from 'react'
import featured1 from "../assets/featured/b1.jpg"
import featured2 from "../assets/featured/b2.jpg"
import featured3 from "../assets/featured/b3.jpg"


import { FaStar, FaUsers } from "react-icons/fa"
import { Link } from 'react-router-dom'

const FeaturedCourses = () => {
    return (
        <>

            <div className='text-center'>
                <p className=' text-xl font-semibold text-[#ED1C24]'>Featured Courses</p>
                <p className='text-3xl font-bold font-serif mt-2'>Popular Courses</p>
            </div>
            <div className='max-w-[1200px] mx-auto py-10 grid lg:grid-cols-4 gap-4 md:grid-cols-2'>

                <div className='rounded shadow-md  relative'>
                    <div className='overflow-hidden '>
                        <img src={featured1} alt="popular" className='hover:scale-110 duration-1000 ease-in-out' />
                        <div className='flex'>
                            <button className='bg-[#ED1C24] rounded absolute left-8 text-[#FFFFFF] px-4 py-1 top-6'>Beginner</button>
                            <button className='bg-[#FF9900] rounded absolute right-8 text-[#FFFFFF] px-4 py-1 top-6'>New</button>

                        </div>
                        <div className='flex justify-between text-[#ED1C24] font-bold pt-2 '>
                            <p>$ 53</p>
                            <ul className='flex gap-1'>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                            </ul>
                        </div>
                        <p className='text-2xl font-bold px-2 py-4'>The Essential Guide to Entrepreneurship</p>

                        <div className='flex items-center gap-2 text-bold pl-3 mt-2 py-4'>
                            <p className='text-[#ED1C24]'><FaUsers /></p>
                            <p>86</p>
                            <p>Students Enrolled</p>
                        </div>
                    </div>



                </div>


                <div className='rounded shadow-md  '>
                    <div className='overflow-hidden '>
                        <img src={featured2} alt="popular" className='hover:scale-110 duration-1000 ease-in-out' />
                        
                        <div className='flex justify-between text-[#ED1C24] font-bold pt-2 '>
                            <p>$ 70</p>
                            <ul className='flex gap-1'>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                            </ul>
                        </div>
                        <p className='text-2xl font-bold px-2 py-4'>The Essential Guide to Entrepreneurship</p>

                        <div className='flex items-center gap-2 text-bold pl-3 mt-2 py-4'>
                            <p className='text-[#ED1C24]'><FaUsers /></p>
                            <p>44</p>
                            <p>Students Enrolled</p>
                        </div>
                    </div>



                </div>

                <div className='rounded shadow-md relative'>
                    <div className='overflow-hidden '>
                        <img src={featured3} alt="popular" className='hover:scale-110 duration-1000 ease-in-out' />
                        <div className='flex'>
                            <button className='bg-[#ED1C24] rounded absolute left-8 text-[#FFFFFF] px-4 py-1 top-6'>Beginner</button>
                            <button className='bg-[#FF9900] rounded absolute right-8 text-[#FFFFFF] px-4 py-1 top-6'>New</button>

                        </div>
                        <div className='flex justify-between text-[#ED1C24] font-bold pt-2 '>
                            <p>$ 69</p>
                            <ul className='flex gap-1'>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                            </ul>
                        </div>
                        <p className='text-2xl font-bold px-2 py-4'>The Essential Guide to Entrepreneurship</p>

                        <div className='flex items-center gap-2 text-bold pl-3 mt-2 py-4'>
                            <p className='text-[#ED1C24]'><FaUsers /></p>
                            <p>86</p>
                            <p>Students Enrolled</p>
                        </div>
                    </div>



                </div>

                <div className='rounded shadow-md '>
                    <div className='overflow-hidden '>
                        <img src={featured1} alt="popular" className='hover:scale-110 duration-1000 ease-in-out' />
                       
                        <div className='flex justify-between text-[#ED1C24] font-bold pt-2 '>
                            <p>$ 53</p>
                            <ul className='flex gap-1'>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                            </ul>
                        </div>
                        <p className='text-2xl font-bold px-2 py-4'>The Essential Guide to Entrepreneurship</p>

                        <div className='flex items-center gap-2 text-bold pl-3 mt-2 py-4'>
                            <p className='text-[#ED1C24]'><FaUsers /></p>
                            <p>86</p>
                            <p>Students Enrolled</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='text-center text-xl my-4 '>
                <button className='bg-[#FF9900] hover:bg-[#ED1C24] hover:text-[#FFFFFF] px-4 py-2 rounded duration-700 ease-in-out'><Link to="/">View All Courses</Link></button>
            </div>
        </>
    )
}

export default FeaturedCourses