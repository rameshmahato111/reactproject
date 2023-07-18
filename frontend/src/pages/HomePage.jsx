import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import FeaturedCourses from '../components/FeaturedCourses'
import Article from '../components/Article'

const HomePage = () => {
  return (
   <>
   <Navbar  />

   <HeroSection  />
   <About  />
   <FeaturedCourses  />
   <Article  />
   
   <Footer  />
   </>
  )
}

export default HomePage