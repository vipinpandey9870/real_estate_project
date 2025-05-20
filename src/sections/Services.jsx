import React, { useEffect } from 'react'
import { service } from '../components/exports'
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
      });
    }, []);
  return (
    <>
       <section id='services' className='lg:w-[95%] w-full justify-center items-start lg:px-20 px-6 py-20 mt-2  gap-10 flex flex-col rounded-xl bg-orange-100 m-auto'>
           <div className="flex flex-col justify-center items-start gap-4">
          <h1 className="text-blue-700 font-semibold text-xl uppercase">
            Services
          </h1>
          <p data-aos="zoom-in" className="text-4xl font-semibold ">
            Top real estate <br/>services available
          </p>
        </div>

        <div  data-aos="zoom-in"
          className=" grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
             {
              service.map((item , index)=>(
                <div data-aos='zoom-in' data-aos-delay='200' key={index} className='bg-white h-[350px] flex flex-col justify-center items-start px-8 py-16 rounded-xl border-b-[5px] border-orange-400 hover:bg-orange-300 cursor-pointer'>
                      <div className='rounded-full p-6 bg-yellow-300 '>
                        <item.icon className='text-2xl'/>
                      </div>
                     <div className=' p-4'>
                       <h1 className='font-semibold text-xl '>{item.title}</h1>
                       <p className='text-2xl text-gray-500'>{item.desc}</p>
                       <h4 className='text-red-500 text-2xl pt-2 underline font-semibold'>Read More</h4>
                     </div>
                </div>
              ))
             }
          </div>  

       </section>
    
    </>
  )
}

export default Services