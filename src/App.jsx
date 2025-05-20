import React from 'react'
import Header from './components/Header'
import Home from './sections/Home'
import About from './sections/About'
import PopularAreas from './sections/PopularAreas'
import Properties from './sections/Properties'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <>

      <Header/>
      <Home/>
      <About/>
      <PopularAreas/>
      <Properties/>
      <Services/>
      <Contact/>
      <Footer/>
      
    
    </>
  )
}

export default App