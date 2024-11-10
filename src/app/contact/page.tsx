import Link from "next/link";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Image from "next/image";
import React from "react";

function Contact(){
    return (
        <div>
            <section style={{ backgroundImage: 'url("/background.jpg")' }} 
             className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m1
8!1m12!1m3!1d3617.674238809242!2d67.06029032585585!3d24.943165141945506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s
0x3eb3409c403e8465%3A0x2011eb15ab2068a5!2zMTJ0aCBTdCBOLCDYtNmF2KfZhNuMINmG2KfYuNmFINii2KjYp9ivINm52KfYpNmG2Iwg2qnYsd
in2obbjCwg2LbZhNi5INqp2LHYp9qG24wsINiz2YbYr9q-2Iwg2b7Yp9qp2LPYqtin2YY!5e0!3m2!1sur!2s!4v1731165019161!5m2!1sur!2s"
        style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
      />
      <div className="bg-black relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-pink-600 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1 text-pink-400">
            
            North Nazimabad Block N 
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-pink-600 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-pink-400 leading-relaxed">narminsiddiqui@gmail.com</a>
          <h2 className="title-font font-semibold text-pink-600 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed text-pink-400">0314-2172040</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-pink-800 text-lg text-start mb-1 font-bold title-font">
        Contact
      </h2>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7  text-pink-500">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-pink-500">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-pink-500 ">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-pink-500 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-300 rounded text-lg">
        Send 
      </button>
    </div>
  </div>
</section>

        </div>
    )
}

export default Contact









