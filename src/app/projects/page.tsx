import Link from "next/link";
import Navbar from "../component/navbar";
import Image from "next/image";
import React from "react";

function Projects(){
    return (
        <div style={{ backgroundImage: 'url("/background.jpg")' }} >
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-pink-600">
My Projects      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-pink-400">
    

**"I have developed my projects using TypeScript, JavaScript, HTML, CSS, and Next.js. 
These projects include responsive web design, dynamic functionality, 
and interactive user interfaces, demonstrating modern web development techniques. 
They showcase my coding skills and effective use of the technology stack."**
      </p>
    </div>
    <div className="flex flex-wrap -m-8">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery"
 className="absolute inset-0 w-full h-full object-cover object-center"
            src="/Resume-Builder.jpg.jpeg" />
   <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-black opacity-0 hover:opacity-100">
          
            <h1 className="title-font text-lg font-medium text-pink-400 mb-3">
              Resume Builder
            </h1>
            <p className="leading-relaxed">
  A responsive web application that allows users to input their details and automatically generate a professional resume.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center"
            src="/Word-Counter.jpg"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-black opacity-0 hover:opacity-100">
           
            <h1 className="title-font text-lg font-medium text-pink-400 mb-3">
              Word Counter
            </h1>
            <p className="leading-relaxed">
            A tool to quickly count words and characters in any text, helping users keep track of their content length.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery"className="absolute inset-0 w-full h-full object-cover object-center"
            src="/N.G.G.jpg" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-black opacity-0 hover:opacity-100">
           
            <h1 className="title-font text-lg font-medium text-pink-400 mb-3">
              Number Guessing Game
            </h1>
            <p className="leading-relaxed">
            A fun game where users try to guess a randomly generated number within a given range.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"className="absolute inset-0 w-full h-full object-cover object-center"
            src="/img.jpg" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-black opacity-0 hover:opacity-100">
           
            <h1 className="title-font text-lg font-medium text-pink-400 mb-3">
              Simple Calculator
            </h1>
            <p className="leading-relaxed">
             
A simple calculator built with TypeScript that performs basic arithmetic operations such as addition, 
subtraction, multiplication, and division.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/image.jpg"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-black opacity-0 hover:opacity-100">
          
            <h1 className="title-font text-lg font-medium text-pink-400 mb-3">
              ATM Machine
            </h1>
            <p className="leading-relaxed">
             
An ATM machine simulator built with TypeScript that allows users to 
perform basic banking operations like checking balance, withdrawing, 
and depositing money.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/Currency-Converter.jpg"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-black opacity-0 hover:opacity-100">
          
          
            <h1 className="title-font text-lg font-medium text-pink-400 mb-3">
              Currency Converter
            </h1>
            <p className="leading-relaxed">
             
             A currency converter built with 
             TypeScript that allows users to convert amounts between different currencies using real-time exchange rates.
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

export default Projects