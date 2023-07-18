import React from 'react'
import { BsSearch } from "react-icons/bs"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${"https://png.pngtree.com/thumb_back/fh260/background/20190220/ourmid/pngtree-cartoon-education-training-cram-school-image_9149.jpg"})` }}
            className='z-0 '>



                <div className='max-w-[1200px] mx-auto flex justify-between items-center text-white sticky top-0 '>
                    <h1 className='text-3xl  font-bold'>Educator</h1>

                    <ul className='flex items-center gap-6'>
                        <li><Link to="">Home</Link></li>
                        <li><Link to="/aboutus">About</Link></li>
                        <li><Link to="">Courses</Link></li>
                        <li><Link to="">Pages</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li>

                        </li>
                    </ul>

                </div>

                <div className='max-w-[1100px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 justify-between relative top-40 text-white'>
                   <div className='col-span-2 '>
                   <p>Distance Education With Fun Learning</p>
                    <p className='text-4xl'>Discover Best Classes<br /> For The Best Learning
                    </p>
                    <button className='rounded text-xl text-[#ffffff] mt-4 bg-slate-400 border-2 border-gray-200 px-6 py-4 outline-none ml-4'>Read More</button>
                   </div>

                   <div className='rounded shadow-lg text-center py-16 px-8 relative -bottom-20 z-1 bg-[#FFFFFF]'>
                       <h1 className='text-2xl text-[#202E3B]'>Apply For Admission</h1>
                       <p className='text-md text-[#444444] my-3'>make more simple</p>
                       <form action="">
                        <input type="text"  name='name' placeholder='Your Name' className='rounded w-[300px] border-2 border-gray-200 py-4 pl-3 outline-none mb-3 bg-gray-100'/>
                        <input type="text"  name='name' placeholder='Your Email' className=' rounded w-[300px] border-2 border-gray-200 py-4 pl-3 outline-none mb-3 bg-gray-100'/>

                        <button className='w-[300px] bg-[#FF9900] px-8 py-3 text-[#000000] hover:bg-[#FE0000]'>Apply Now</button>
                       </form>
                   </div>
                </div>

            </div>

            

        </>
    )
}

export default Navbar