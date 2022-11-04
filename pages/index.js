import Head from 'next/head'
import Image from 'next/image'
// import Nav from '../components/Nav'
import Hero from '../components/Hero';
import { useState } from "react";
import About from '../components/About';
import Styles from "../styles/Home.module.css"


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      
      <Head>
        <title>Collins Tonui</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white  dark:bg-gray-900 md:px-20 lg:px-40">
      {/* <Nav/> */}
      <Hero/>
      <About/>
      </main>

      
          
    </div>
  )
}
