import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa"
import { BiLogoLinkedin, BiLogoPinterestAlt, BiChevronRight } from "react-icons/bi"
import { AiOutlineGooglePlus, AiOutlineTwitter } from "react-icons/ai"
const Footer = () => {
    return (
        <>
            <div className='w-full bg-[#001524]' >
                <div className='max-w-[1200px] mx-auto grid lg:grid-cols-4 md-grid-cols-2 gap-6 py-48px pb-[20px]'>
                    <div className='items-center'>
                        <h1 className='text-[#FFFFFF] mb-[20px] text-3xl'>About</h1>
                        <p className='text-[#CECECE] font-[18px] font-serif'>Lorem ipsum dolor sit amet elit. Velit beatae rem ullam dolore nisi esse quasi, sit amet. Lorem ipsum dolor sit amet elit.voluptatem accusantium doloremque.</p>
                        <div className='flex space-x-2 mt-2'>
                            <button className='text-2xl bg-[#FFFFFF0F] text-white  rounded-full focus:outline-none  px-2 py-2 hover:bg-[#FF9900]'><a href="https://www.facebook.com"><FaFacebook /></a></button>
                            <button className='text-2xl bg-[#FFFFFF0F] text-white  rounded-full focus:outline-none  px-2 py-2 hover:bg-[#FF9900]'><a href="https://www.linkedin.com"><BiLogoLinkedin /></a></button>
                            <button className='text-2xl bg-[#FFFFFF0F] text-white  rounded-full focus:outline-none  px-2 py-2 hover:bg-[#FF9900]'><a href="https://www.twitter.com"><AiOutlineTwitter /></a></button>
                            <button className='text-2xl bg-[#FFFFFF0F] text-white rounded-full focus:outline-none  px-2 py-2 hover:bg-[#FF9900]' ><a href="https://www.google.com"><AiOutlineGooglePlus /></a></button>
                            <button className='text-2xl bg-[#FFFFFF0F] text-white  rounded-full focus:outline-none  px-2 py-2 hover:bg-[#FF9900]'><a href="https://www.pinterest.com"><BiLogoPinterestAlt /></a></button>



                        </div>
                    </div>
                    <div className=''>
                        <h1 className='text-3xl text-[#FFFFFF] mb-[20px]'>Useful Links</h1>
                        <div className='flex text-[#CECECE] items-center hover:text-[#FFFFFF]'>
                            <p><BiChevronRight /></p>
                            <p ><Link to='/'>Home</Link></p>
                        </div>
                        <div className='flex text-[#CECECE] items-center hover:text-[#FFFFFF]'>
                            <p><BiChevronRight /></p>
                            <p ><Link to='/about'>About</Link></p>
                        </div>
                        <div className='flex text-[#CECECE] items-center hover:text-[#FFFFFF]'>
                            <p><BiChevronRight /></p>
                            <p ><Link to='/courses'>Courses</Link></p>
                        </div>
                        <div className='flex text-[#CECECE] items-center hover:text-[#FFFFFF]'>
                            <p><BiChevronRight /></p>
                            <p ><Link to='/contact'>Contact</Link></p>
                        </div>

                    </div>
                    <div className='text-[#FFFFFF]'>
                        <h1 className='text-3xl mb-[20px]'>Help and Support</h1>
                        <div className='flex text-[#CECECE] items-center hover:text-[#FFFFFF]'>
                            <p><BiChevronRight /></p>
                            <p ><Link to='/'>FAQ</Link></p>
                        </div>
                        <div className='flex text-[#CECECE] items-center hover:text-[#FFFFFF]'>
                            <p><BiChevronRight /></p>
                            <p ><Link to='/'>Live Chat</Link></p>
                        </div>
                        <div className='flex text-[#CECECE] items-center hover:text-[#FFFFFF]'>
                            <p><BiChevronRight /></p>
                            <p ><Link to='/'>Support</Link></p>
                        </div>
                        <div className='flex text-[#CECECE] items-center hover:text-[#FFFFFF]'>
                            <p><BiChevronRight /></p>
                            <p ><Link to='/'>Terms of Services</Link></p>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='text-3xl text-[#FFFFFF] font-[22px] mb-[20px]'>Research</h1>
                        <div className='flex text-[#CECECE] items-center hover:text-[#FFFFFF]'>
                            <p><BiChevronRight /></p>
                            <p ><Link to='/'>Academic Devisions</Link></p>
                        </div>
                        <div className='flex text-[#CECECE] items-center hover:text-[#FFFFFF]'>
                            <p><BiChevronRight /></p>
                            <p ><Link to='/'>Student Research</Link></p>
                        </div>
                        <div className='flex text-[#CECECE] items-center hover:text-[#FFFFFF]'>
                            <p><BiChevronRight /></p>
                            <p ><Link to='/'>Center & Institute</Link></p>
                        </div>
                        <div className='flex text-[#CECECE] items-center hover:text-[#FFFFFF]'>
                            <p><BiChevronRight /></p>
                            <p ><Link to='/'>Research Facilities</Link></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer