import Link from "next/link";
import Image from "next/image";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Hero from "./component/hero";
import Contact from "./contact/page";
import Projects from "./projects/page";
import skills from "./skills/page";
import Skills from "./skills/page";

function Home (){
  return (
    <div >
 <section style={{ backgroundImage: 'url("/background.jpg")' }} 
             className="text-pink-400 body-font bg-fixed bg-cover bg-center
            custom.image">
<Hero/>
<Skills/>
<Projects/>
<Contact/>


</section>
    </div>
  )
}

export default Home