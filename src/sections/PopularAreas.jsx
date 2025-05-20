import React, { useEffect } from "react";
import area1 from "../assets/images/area1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const PopularAreas = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div>
       <section
                id="hero"
                className="w-[95%] h-[600px] m-auto bg-cover bg-center bg-no-repeat rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20"
                style={{ backgroundImage: `url(${area1})` }}
              >
                <h1
                  className="text-xl  text-white font-semibold text-center lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]"
                >
                 UNIQUE HOMES
                </h1>
                <p
                  className="text-white text-2xl  items-center lg:pr-[500px] text-justify pr-0"
                >
                 $79 Million Aspen Megamansion With Wild Array of Amenities Including Indoor Pool and 4 Bars Is the Week’s Most Expensive Home.
                </p>
              </section>
    </div>
  );
};

export default PopularAreas;
