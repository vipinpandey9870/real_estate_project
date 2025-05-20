import React, { useEffect, useState } from "react";
import heroing from "../assets/images/hero1.jpg";
import AOS from "aos"; //  animation librery
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const [location, setLocation] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [category, setCategory] = useState("")
  

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("Form Data : ", {location , propertyType, category});

    setLocation("");
    setPropertyType("");
    setCategory("");
  }

  return (
    <>
      <div>
        <section
          id="hero"
          className="w-[95%] h-[600px] m-auto bg-cover bg-center bg-no-repeat rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20"
          style={{ backgroundImage: `url(${heroing})` }}
        >
          <h1
            data-aos="zoom-out" // animation  text with "AOS"(animaton librery)
            className="text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]"
          >
            Find your next Home in America
          </h1>
          <p
            data-aos="zoom-in"
            className="text-white text-xl lg:pr-[500px] pr-0"
          >
            Mastering the art of using home description words in your property
            listings can make a huge difference.
          </p>
        </section>
      </div>

      {/* form start from here */}

      <div className="z-10">
        <form
          data-aos="zoom-in"
          id="form"
          onSubmit={handleSubmit}
          className="lg:w-[70%] bg-white w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14"
        >
            <div className="w-full">
              <h1 className="text-black font-semibold">LOCATION</h1>
              <input
                type="text"
                value={location}
                onChange={(e)=> setLocation(e.target.value)}
                placeholder="Enter an address,city, state"
                className="bg-white p-2 w-full border-b-[1px] border-[#c9c7c1]"
              />
            </div>
            <div className="w-full ">
              <h1 className="text-black font-semibold">TYPE</h1>
              <select
                name="selectOption"
                id="selectOption"
                value={propertyType}
                onChange={(e)=> setPropertyType(e.target.value)}
                className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-md text-gray-500"
              >
                <option value="" disabled selected>
                  Select Property
                </option>
                <option value="Option1">Rentals</option>
                <option value="Option2">Sales</option>
                <option value="Option3">Commercial</option>
              </select>
            </div>
            <div className="w-full">
              <h1 className="text-black font-semibold">CATEGORY</h1>
              <select
                name="selectCategory"
                id="selectCategory"
                value={category}
                onChange={(e)=> setCategory(e.target.value)}
                className="bg-white p-2 border-b-[1px] border-[#c9c7c1] text-gray-500 text-md w-full mt-2 "
              >
                <option value="" disabled selected>
                  Property Category
                </option>
                <option value="Option1">Apartment</option>
                <option value="Option2">Houses</option>
                <option value="Option3">Duplex</option>
                <option value="Option4">Villas</option>
              </select>
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="rounded-xl w-full cursor-pointer text-white bg-blue-500 px-20 py-5 font-semibold text-xl transform hover:scale-110 transiton-transform duration-300"
              >
                SUBMIT
              </button>
            </div>
        </form>
      </div>
    </>
  );
};

export default Hero;
