"use client";
import Link from "next/link";
import Image from "next/image";
import React, { use } from "react";
import Typewriter from 'typewriter-effect';
import Contact from "../contact/page";




function Hero(){
    return (
        <div>
            <section style={{ backgroundImage: 'url("/background.jpg")' }} 
             className="text-pink-400 body-font bg-fixed bg-cover bg-center
            custom.image">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-pink-800">
        About Me ❤
    <br className="hidden lg:inline-block" />
    <Typewriter
  options={{
    strings: ['Frontend Developer', 'Web3 Enthusiast', "Amazon Vertua Assistent"],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <p className="mb-8 leading-relaxed">
      My name is Narmeen Adeel, and I hold a Bachelor's degree in Commerce.
 Along with various English language courses,
  I've also completed several professional development courses,
   including those from platforms like Amazon.
    As an ambitious and hardworking individual, 
    I enjoy reading and constantly seek to enhance my skills. 
    After successfully completing the first quarter of my IT course, 
    I am now progressing into the second quarter, with a strong desire to become 
    a proficient IT professional and coder. 
    My goal is to excel in the tech field and make a meaningful 
    impact through dedication and perseverance.
      </p>
      <div className="flex justify-center">
        <Link href="/contact">
        <button className="inline-flex items-center bg-black border-0 py-1 px-3 
    focus:outline-none hover:bg-blue-300 rounded text-base mt-4 md:mt-0">
          Contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">

      <Image
        className="object-cover object-center rounded"
        
        src="/img.jpg.jpg" width={1000} height={100} alt="Profile Picture"
      />
</div>
  </div>
</section>

        </div>
    )
}
export default Hero