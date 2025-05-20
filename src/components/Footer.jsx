import React, { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
import {
     FaFacebook,
     FaYoutube,
     FaInstagram,
     FaTwitter, 
     FaBuilding,
     FaMobile,
     FaFax,
     FaArrowCircleUp,
     FaMoon
    
   } from "react-icons/fa";

import {Link} from 'react-scroll'  
import { IoMdMail } from 'react-icons/io';
import prop7 from '../assets/images/prop7.jpg' 
import prop8 from '../assets/images/prop8.jpg'

const Footer = () => {
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out',
      delay: 100,
    },[])
  })
  return (
    <>
            <footer className= "w-full grid bg-gray-800 m-auto lg:px-20 px-10 lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10">
            <div className="flex flex-col justify-center  gap-5 mt-4 ">
              <h1 className='text-white text-2xl font-semibold'>About Us</h1>
              <p className='text-slate-200 text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quos eligendi quibusdam tenetur ratione suscipit necessitatibus optio nemo, at possimus?</p>
              <div id='social-icons' className='flex justify-start items-center gap-4 mt-4'>
                <div className='p-3 rounded-xl bg-white hover:bg-blue-500 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                  <FaFacebook className='size-5'/>
                </div>
                <div className='p-3 rounded-xl bg-white hover:bg-pink-500 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                  <FaInstagram className='size-5'/>
                </div>
                <div className='p-3 rounded-xl bg-white hover:bg-blue-500 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                  <FaTwitter className='size-5'/>
                </div>
                <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                  <FaYoutube className='size-5'/>
                </div>
              </div>
              </div>

              <div className="flex flex-col justify-center  gap-5 mt-4">
                  <h1 className='text-2xl text-white font-semibold'>Contact Us</h1>
                   <div className='flex gap-3'>
                   <FaBuilding className='text-white size-5'/>
                   <p className='text-slate-200'> 123 Main Street, Your City</p>
                   </div>
                   <div className='flex  items-center gap-3'>
                   <FaMobile className="text-white size-5 "/>
                   <p className='text-slate-200'>+91 12345 67890</p>
                   </div>
                   <div className='flex  items-center gap-3'>
                   <FaFax className="text-white size-5"/>
                   <p className='text-slate-200'>+91 98765 43210</p>
                   </div>
                   <div className='flex items-center gap-3'>
                   <IoMdMail className='text-white size-5'/>
                   <p className='text-slate-200'>realestate@gmail.com</p>
                   </div>
              </div>

              <div className='flex flex-col justify-center gap-5 mt-4'>
                   <h1 className='text-white text-2xl font-semibold '>Latest Properties</h1>
                   <div className='flex items-center gap-3'>
                        <img src={prop7} alt="" className='w-[150px] h-[100px] rounded-xl cursor-pointers transform hover:scale-110 transition-transform duration-300' />
                        <div>
                        <h1 className='text-slate-100'>Villa with amazing view</h1>
                        <p className='text-gray-500'>$ 278.98</p>
                        </div>
                       
                   </div>
                   <div className='flex items-center gap-3'>
                        <img src={prop8} alt="" className='w-[150px] h-[100px] rounded-xl cursor-pointer transform  hover:scale-110 transition-transform duration-300'/>
                       <div>
                       <h1 className='text-slate-100'>Sea View Villa</h1>
                       <p className='text-gray-500'>$ 278.98</p>
                       </div>
                   </div>
              </div>
              <h1 className='text-slate-200 mb-3 '>Copyright © Real Estate. All rights reserved.</h1>
              <div className='flex justify-center items-center gap-4'>
                
                <div id='icon-box' className='p-4 rounded-full bg-red-600 cursor-pointer fixed lg:bottom-12 bottom-6 right-4 hover:bg-gray-700 text-white  '>
                  <Link to='hero' spy= {true} offset = {-100} smooth = {true}>
                   <FaArrowCircleUp className='size-6 text-white'/>
                  </Link>

                </div>
              </div>
            </footer>
  </>
  )
}

export default Footer

