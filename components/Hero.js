import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiFillDribbbleCircle
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import deved from "../public/one1.jpg";
import Link from "next/link";

export default function Hero() {
    const [darkMode, setDarkMode] = useState("false");
  return (
    <div className={darkMode ? "dark" : ""}>
    
    <section className="min-h-screen">
      
      <div className="text-center p-10 pt-40">
        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          Collins Tonui
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
          UX designer, Developer and a musicphile
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            
            </p>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          {/* < AiFillTwitterCircle  /> */}
          < a href="https://twitter.com/tckiprotich/">
          < AiFillTwitterCircle  />

          </a>
          < a href="https://linkedin.com/in/collins-tonui/">
          <AiFillLinkedin />

          </a>
          < a href="https://github.com/tckiprotich/">
          <AiFillGithub/>

          </a>
         
          
        </div>
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
          <Image src={deved} layout="fill" objectFit="cover" />
        </div>
      </div>
    </section>
    </div>
  );
}
