import Link from "next/link";
import React from "react";
import Image from "next/image";



function Footer(){
    return ( <div style={{ backgroundImage: 'url("/background.jpg")' }} className=" h-20 w-full 
    md:ml-auto flex flex-wrap  text-balance justify-evenly ">
    <div className="text-pink-700 flex justify-between items-center gap-4">
        <h1> <b> Visit </b> </h1>
        <a href="https://www.linkedin.com/in/narmeen-siddiqui-79626a14a" 
target="_blank">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9m9DKti9OztVd2xGFnTtNX8CiRv5TVfOj6w&s" width={80} alt="" />
        </a>
        <a href="https://github.com/NarmeenAdeel1" target="_blank">

         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiTC5TBWKs78A4NqJtspdOe-txtky_YYulqw&s" width={80} alt="" />
         </a>
        <a href="narmeen_siddiqui@hotmail.com" target="_blank">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa4bfAnEHEIg-3xMihGc01L8wElR_PF1gt2g&sc" width={50} alt="" />

        </a>
</div>
  </div>
  )

}

export default Footer