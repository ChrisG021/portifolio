'use client'
import Header from "@/components/header";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "@/components/hero";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import About from "@/components/about";
import Technology from "@/components/tech";

export default function Home() {
  const [language, setLanguage] = useState<"pt" | "en">("pt")
  useEffect(() => {
    AOS.init({
      easing: "ease",
      duration: 400,
      delay: 0,
    });
  }, []);
  return (
    <div className="flex flex-col p-5 lg:p-8 w-full max-md:gap-y-10 overflow-hidden">

      {/* home */}
      <div>
        <Header language={language} setLanguage={setLanguage} />
        <Hero/>
      </div>

      {/* about/projects/ tecnologias */}
      <div  id="about">
        {/* projetos */}
        <div>

        </div>
         {/* CHECK e responsivo */}
        <div>
        <About/>  
        </div>

        {/* CHECK E RESPONSIVO */}
        <div>
          <Technology/>
        </div>

      </div>

      {/*  Porque fazer seu projeto comigo */}

      {/* Contato */}
      
    </div>
  );
}
