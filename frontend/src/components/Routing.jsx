import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import AboutUs from './AboutUs'
import Contact from './Contact'
const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />



    </Routes>
    </BrowserRouter>
    
  )
}

export default Routing