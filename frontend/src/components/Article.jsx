import React from 'react'
import team1 from "../assets/teams/team1.jpg"
import team2 from "../assets/teams/team2.jpg"
import team3 from "../assets/teams/team3.jpg"
import article1 from "../assets/featured/b7.jpg"
import article2 from "../assets/featured/b6.jpg"
import article3 from "../assets/featured/b8.jpg"

const Article = () => {
  return (
    <>
      <div className='text-center my-4'>
        <h4 className=' text-md font-bold text-[#ED1C24]'>our Article</h4>
        <h1 className='text-3xl text-[#444444] font-serif py-2'>Stay Updated With Our <br />
          News Feed.</h1>
      </div>

      <div className='max-w-[1200px] mx-auto py-9 grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
        <div className='shadow-md rounded-lg ' >
          <div className='overflow-hidden'>
            <img src={article1} alt="article" className='hover:scale-110 duration-1000 ease-in-out' />
          </div>
          <div className='text-starts px-3 pt-3'>
            <h4 className='text-3xl hover:text-[#ED1C24] duration-500 ease-in-out cursor-pointer'>
              Learning to Write as a clean and Professional Author.

            </h4>
            <p className='text-[#444444] font-serif'>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula.</p>
          </div>
          <div className=' flex justify-between items-center my-3 px-3'>
            <div>
              <img src={team1} alt="team" className='inline rounded-full w-10 h-10 mr-3 cursor-pointer' />
              <span className=''>by</span> <span className='text-bold cursor-pointer hover:text-[#FF9900]'>Lynda Stone</span>
            </div>
            <div>
              <p>20 April, 2021</p>
            </div>
          </div>

        </div>
        <div className='shadow-md rounded-lg ' >
          <div className='overflow-hidden'>
            <img src={article2} alt="article" className='hover:scale-110 duration-1000 ease-in-out' />
          </div>
          <div className='text-starts px-3 pt-3'>
            <h4 className='text-3xl hover:text-[#ED1C24] duration-500 ease-in-out cursor-pointer'>
              Our self improvement courses are more effective.
            </h4>
            <p className='text-[#444444] font-serif'>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula.</p>
          </div>
          <div className=' flex justify-between items-center my-3 px-3'>
            <div>
              <img src={team2} alt="team" className='inline rounded-full w-10 h-10 mr-3 cursor-pointer' />
              <span className=''>by</span> <span className='text-bold cursor-pointer hover:text-[#FF9900]'>David Marks</span>
            </div>
            <div>
              <p>20 April, 2021</p>
            </div>
          </div>

        </div>

        <div className='shadow-md rounded-lg ' >
          <div className='overflow-hidden'>
            <img src={article3} alt="article" className='hover:scale-110 duration-1000 ease-in-out' />
          </div>
          <div className='text-starts px-3 pt-3'>
            <h4 className='text-3xl hover:text-[#ED1C24] duration-500 ease-in-out cursor-pointer'>
              Our self improvement courses are more effective.
            </h4>
            <p className='text-[#444444] font-serif'>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula.</p>
          </div>
          <div className=' flex justify-between items-center my-3 px-3'>
            <div>
              <img src={team3} alt="team" className='inline rounded-full w-10 h-10 mr-3 cursor-pointer' />
              <span className='text-gray-500'>by</span> <span className='text-bold cursor-pointer hover:text-[#FF9900]'>David Nelson</span>
            </div>
            <div>
              <p>20 April, 2021</p>
            </div>
          </div>

        </div>




      </div>

    </>
  )
}

export default Article