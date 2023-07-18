import React from 'react'
import "./Navbar"
import "./Footer"
import Footer from './Footer'
import Navbar from './Navbar'
import { FaMapMarkedAlt, FaPhone } from "react-icons/fa"
const Contact = () => {
    return (
        <>

            <div className='text-center'>

                <p className='text-[#ED1C24] font-bold text-lg'>Contact Our Team</p>
                <p className='text-4xl font-serif'>Got Any Questions?</p>


            </div>



            {/* <div className="selection:bg-rose-500 selection:text-white"> */}
            <div className="min-h-screen bg-rose-100 flex justify-center items-center">
                <div className="p-8 flex-1">
                    <div className="w-[600px] bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
                        <div className="relative h-44 bg-rose-500 rounded-bl-4xl">
                            <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fill="#ffffff" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                            </svg>
                        </div>
                        <div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
                            <h1 className="text-2xl font-semibold text-gray-900">Send Your Queries</h1>
                            <form className="mt-12">
                                <div className="mt-10 relative">
                                    <input id="name" name="name" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600" placeholder="john@doe.com" />
                                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Full Name</label>
                                </div>
                                <div className="mt-10 relative">
                                    <input id="email" name="email" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600" placeholder="john@doe.com" />
                                    <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email address</label>
                                </div>
                                <div className="mt-10 relative">
                                    <input id="address" type="text" name="address" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600" placeholder="Address" />
                                    <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Address</label>
                                </div>
                                <div className="mt-10 relative">
                                    <textarea id="message" type="text" name="message" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600" placeholder="write your message" ></textarea>
                                    <label for="Message" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Message</label>
                                </div>

                                <button type="button" className=" mt-20 px-4 py-2 rounded bg-rose-500 hover:bg-rose-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}

            <div className='max-w-[700] mx-auto grid lg:grid-cols-2'>
                <div className='flex flex-col gap-3 ml-4 border shadow-md inline-block'>
                    <div className='mb-6'>
                        <div className='flex gap-3 ml-20  mt-4'>
                            <p className='text-2xl text-[#FF9900]'><FaMapMarkedAlt /></p>
                            <p className='text-2xl font-bold font-serif'>Address</p>
                        </div>
                        <p>#302, 5th Floor, VHLY-2247 ek,</p>
                        <p>Settlers Lane, New York.</p>
                    </div>
                    

                    <div className='ml-4 border shadow-md inline-block'>
                    <div className='p-6'> 
                        <div className='flex gap-3 ml-20 mt-4'>
                            <p className='text-2xl text-[#FF9900]'><FaPhone /></p>
                            <p className='text-2xl font-bold font-serif'>Phone</p>
                        </div>
                        <p className='ml-20'>+12 324-016-695</p>
                        <p className='ml-20'>+44 224-058-545</p>
                    </div>
                    
                </div>

                </div>


               

               <div>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31713617991!2d85.28493304454217!3d27.70895425221476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1689687495870!5m2!1sen!2snp"
                    width="600" height="450" style={{ border: "0" }}
                    allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>

               </div>

            </div>
            <Footer />
        </>
    )
}

export default Contact