import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router } from "react-router-dom"
import { Routes, Route as RouteElement } from "react-router-dom" // Importing Routes and Route from react-router-dom

import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes> {/* Wrap your Routes in the <Routes> component */}
          <RouteElement path='/' element={<Home />} /> {/* Use RouteElement instead of Route */}
          <RouteElement path='/about' element={<About />} />
          <RouteElement path='/services' element={<Services />} />
          <RouteElement path='/blog' element={<Blog />} />
          <RouteElement path='/pricing' element={<Pricing />} />
          <RouteElement path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
