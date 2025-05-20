import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { property } from "../components/exports";
import {
  FaBath,
  FaShareAlt,
  FaBed,
  FaUserCircle,
  FaPlus,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
const Properties = () => {
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
      <section
        id="properties"
        className="lg:w-[95%] w-full   justify-center items-start lg:px-20 px-6 py-20 mt-2  gap-10 flex flex-col rounded-xl m-auto "
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 className="text-gray-700 font-semibold text-xl uppercase">
            Properties
          </h1>
          <p data-aos="zoom-in" className="text-4xl font-semibold ">
            Explore the latest <br/> properties available
          </p>
        </div>

        <div
          data-aos="zoom-in"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-10"
        >
          {property.map((item, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              key={index}
              className="bg-gray-800 rounded-xl w-full"
            >
              <div
                id="image-box"
                className="  flex flex-col justify-between items-end bg-cover bg-center h-[250px] rounded-xl p-4"
                style={{ backgroundImage: `url(${item.images})`}}
              >

                 <div id="bottom" className="flex justify-between items-end">
                <div className="flex  items-center gap-2">
                  <FaMapMarkerAlt className="text-red-500"/>
                  <h1 className="text-white">{item.address}</h1>
                </div>
              </div>
              </div>
             <div className="p-4">
              <h1 className="text-xl text-white font-semibold mt-1.5 ">{item.name}</h1>
              <p className="text-white text-2xl font-semibold mt-1.5">{item.price}</p>
              <p className="text-white mt-1.5">{item.about}</p>

              <div className="flex  items-center">
                <FaBath className="text-red-500 text-xl"/> 
                <p className="text-white p-2">{item.bed}</p>
                <FaBed className="text-red-500 text-xl"/>
                <p className="text-white p-2">{item.bath}</p> 
                <MdSpaceDashboard className="text-red-500 text-xl"/>
                <p className="text-white p-2">{item.area}</p>
              </div>
             </div>
            
            <div className="w-full h-[1px] mt-5 bg-gray-700"></div>
            <div className="flex justify-between items-center w-full mt-2 p-4">
                <div className="flex justify-center items-center gap-2">
                  <FaUserCircle className="text-red-500 text-2xl  "/>
                  <p className="text-white p-2 ">{item.owner}</p>
                </div>
                <div className="flex justify-center items-center gap-4  ">
                  <div  className="text-red-500 text-l border-2 p-2 cursor-pointer hover:text-white hover:bg-red-500  border-gray-400"><FaShareAlt/> </div>
                  <div  className="text-red-500 text-l border-2 p-2 cursor-pointer hover:text-white hover:bg-red-500  border-gray-400"><FaPlus/></div>
                </div>
            </div>

            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Properties;
