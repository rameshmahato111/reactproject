import React from 'react'
import poster1 from "../assets/images/1.jpg"
import poster2 from "../assets/images/b3.jpg"
import poster3 from "../assets/images/2.jpg"
import poster4 from "../assets/images/b8.jpg"



const About = () => {
    return (
        <>
            <div className='max-w-[1200px] mx-auto grid lg:grid-cols-4 mt-4 gap-6 mb-6'>
                <div className='col-span-2 '>
                    <h2 className='text-[#ED1C24] text-xl'>About Us</h2>
                    <h1 className='text-4xl font-bold font-sans mt-4 mb-8'>Find Courses On Almost Any Topic</h1>

                    <p className='text-2xl font-bold'>Build your library for your career
                        and personal growth</p>

                        <button className='bg-[#FF9900] text-2xl px-4 py-2 rounded my-4 hover:bg-[#ED1C24] hover:text-[#FFFFFF]'>View Courses</button>

                </div>


                <div className=''>
                    <div className='mb-3 relative'>
                    <img src={poster1} alt='poster' className='rounded' />
                    <p className='bg-[#FFFFFF] text-[#ED1C24] rounded text-center absolute bottom-8 left-10 px-2 py-3 uppercase'>Personal Development</p>
                    </div>

                    <div className='relative'>
                    <img src={poster4} alt='poster' className='rounded' />
                    <p className='bg-[#FFFFFF] text-[#ED1C24] rounded text-center absolute bottom-8 left-10 px-10 py-3 uppercase'>business</p>
                    </div>
                    
                   
                </div>
                <div className=''>
                    <div className='mb-3 relative'>
                    <img src={poster2} alt='poster' className='rounded' />
                    <p className='bg-[#FFFFFF] text-[#ED1C24] rounded text-center absolute top-28 left-14 px-4 py-3 uppercase'>Enterpreneurship</p>
                    </div>
                    <div className='relative'>
                    <img src={poster3} alt='poster' className='rounded' />
                    <p className='bg-[#FFFFFF] text-[#ED1C24] rounded text-center absolute bottom-10 md:left-14 md:px-8 py-3 left-5 px-2 uppercase'>Photography</p>
                    </div>
                </div>


            </div>


        </>
    )
}

export default About