import Link from "next/link";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Image from "next/image";
import React from "react";

function Skills(){
    return(
        <div style={{ backgroundImage: 'url("/background.jpg")' }} >
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
    
      <h1 className="sm:text-3xl text-2xl title-font text-pink-800 font-bold">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">

      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-black p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-pink-400 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>
            </div>
            <h2 className="text-pink-400 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className=" relative h-1 w-full bg-pink-600">
<div className="absolute bg-black h-1 w-{100%}">

</div>
            </div>
            <p className="font-bold text-pink-400 text-right">
                100%
            </p>
        

          </div>
        </div>
      </div>
      
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-black p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-pink-400 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>
            </div>
            <h2 className="text-pink-400 text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className=" relative h-1 w-full bg-pink-600">
<div className="absolute bg-black h-1 w-{100%}">

</div>
            </div>
            <p className="font-bold text-pink-400 text-right">
                100%
            </p>
        

          </div>
        </div>
      </div>


      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-black p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-pink-400 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>
            </div>
            <h2 className="text-pink-400 text-lg title-font font-medium">
              TypeScript
            </h2>
          </div>
          <div className="flex-grow">
            <div className=" relative h-1 w-full bg-pink-600">
<div className="absolute bg-black h-1 w-{100%}">

</div>
            </div>
            <p className="font-bold text-pink-400 text-right">
                100%
            </p>
        

          </div>
        </div>
      </div>


      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-black p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-pink-400 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>
            </div>
            <h2 className="text-pink-400 text-lg title-font font-medium">
              Next.JS
            </h2>
          </div>
          <div className="flex-grow">
            <div className=" relative h-1 w-60 bg-pink-600">
<div className="absolute bg-black h-1 w-{100%}">

</div>
            </div>
            <p className="font-bold text-pink-400 text-right">
                60%
            </p>
        

          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-black p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-pink-400 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>
            </div>
            <h2 className="text-pink-400 text-lg title-font font-medium">
              JAVA Script
            </h2>
          </div>
          <div className="flex-grow">
            <div className=" relative h-1 w-full bg-pink-600">
<div className="absolute bg-black h-1 w-{100%}">

</div>
            </div>
            <p className="font-bold text-pink-400 text-right">
                100%
            </p>
        

          </div>
        </div>
      </div>


    </div>
  </div>
</section>


        </div>
    )
}

export default Skills