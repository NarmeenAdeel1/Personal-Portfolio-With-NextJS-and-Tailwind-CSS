import Link from "next/link";
import Image from "next/image";
import { ImFolderDownload } from "react-icons/im";
import React from "react";




function Navbar(){
    return (
        <div className="z-50 sticky top-0 ">
<header style={{ backgroundImage: 'url("/background.jpg")' }} className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
    <a className="flex title-font font-bold items-center text-pink-800 mb-4 md:mb-0">
     <Image src="/logo.avif" width={80} height={80} alt= "Narmeen Adeel" 
     className="w-50"/>
      <span className="ml-3 text-2xl">Narmeen Adeel</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-balance justify-center">
      <a href="/" className="mr-5 hover:text-pink-400"> Home</a>
      <a href="/contact" className="mr-5 hover:text-pink-400">Contact</a>
      <a href="/projects" className="mr-5  hover:text-pink-400"> Projects</a>
      <a href="/skills" className="mr-5  hover:text-pink-400">Skills</a>
    </nav>
    <a href="/NarmeenSiddiquiResume.pdf"> 
    <button className="inline-flex items-center bg-pink-400 border-0 py-1 px-3 
    focus:outline-none hover:bg-blue-300 rounded text-base mt-4 md:mt-0">
       Download CV
<ImFolderDownload className="text-lg ml-4" />

    </button>
</a>
  </div>
</header>
        </div>
    )
}

export default Navbar