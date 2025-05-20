import React, { useEffect } from "react";
import abouting from "../assets/images/about.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section
      id="about"
      className= "w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10"
    >
      <div>
        <img
          data-aos="zoom-in"
          src={abouting}
          alt="AboutImage"
          className="rounded-2xl lg:w-[500px] lg:h-[600px]"
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-8">
        <h3 data-aos="zoom-in" className="text-red-500 drak:text-black">WHO WE ARE</h3>
        <h1 data-aos="zoom-in" data-aos-delay="200" className="text-black text-40px leading-10 font-semibold dark:text-black text-4xl">We help clients buy and sell houses since 1989
        </h1>
        <p  data-aos="zoom-in" data-aos-delay="400" className="text-xl dark:text-black text-gray-600 text-justify" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit corporis autem debitis excepturi, sequi deserunt! Esse doloremque dolores accusantium iste.</p>
        <button className="bg-blue-500 dark:bg-yellow-400 rounded-xl px-7 py-4 cursor-pointer transform hover:bg-amber-600 hover:scale-110 transition-transform duration-300 text-xl font-semibold">READ MORE</button>
      </div>
    </section>
  );
};

export default About;
