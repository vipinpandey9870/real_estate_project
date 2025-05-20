import React, { useEffect, useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import prop4 from "../assets/images/prop4.webp";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("form submitted :", FormData);

      toast.success('Submit Sucessfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });

    setFormData({
      name: '',
      email: '',
      mobile: '',
      message: '',
      agreement: false,
    })
  };

 

  return (
    <>
      <section
        id="contact"
        className=" bg-blue-400 lg:w-[95%] w-full h-fit rounded-xl m-auto grid lg:grid-cols-2 grid-col-1 justify-center items-center lg:px-36 px-6 py-20 gap-10 mb-5 mt-5"
      >
        <div
          data-aos="zoom-in"
          className="bg-white p-10 flex flex-col justify-center items-start pag-4 rounded-xl  "
        >
          <h1 className="font-semibold text-xl"> Contact Me</h1>
          <form onSubmit={handleSubmit} className="mt-3 ">
            <input
              className="border-2 border-gray-300 p-2 w-full rounded-xl"
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={FormData.name}
              onChange={handleChange}
              required
            />
            <input
              className="border-2 border-gray-300 p-2 mt-3 w-full rounded-xl"
              type="email"
              name="email"
              placeholder="Enter your valid email"
              value={FormData.email}
              onChange={handleChange}
              required
            />
            <input
              className="border-2 border-gray-300 p-2 mt-3 w-full rounded-xl"
              type="number"
              name="mobile"
              inputMode="numeric"
              pattern="/d{10}"
              minLength={10}
              maxLength={10}
              placeholder="Enter your mobile number"
              value={FormData.mobile}
              onChange={handleChange}
              required
            />
            <textarea
              className="border-2 border-gray-300 p-2 mt-3 w-full rounded-xl"
              name="message"
              placeholder="Enter your message here... "
              value={FormData.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className="flex mt-2">
              <input
                type="checkbox"
                name="agreement"
                checked={FormData.agreement}
                onChange={handleChange}
                required
              />
              <p className="m-2">
                I agree that my submitted date is being collected and stroed.
              </p>
            </div>

            <button
              className="w-full mt-3 text-white p-4 rounded-xl bg-blue-400 hover:bg-gray-700 "
              type="submit"
            >
              Send Message
            </button>
            <ToastContainer/>
          </form>
        </div>
        <div>
          <h1 className="text-white text-2xl font-semibold mb-2">Reach Us</h1>
          <img
            data-aos="zoom-out"
            src={prop4}
            alt="pic"
            className="rounded-xl"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
