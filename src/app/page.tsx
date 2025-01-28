"use client";
import Hero from "./components/main/Hero";
import Skills from "./components/main/Skills";
import Projects from "./components/main/Education";
import Navbar from "./components/main/Navbar";
import StarsCanvas from "./components/main/StarBackground";
import Footer from "./components/main/Footer";
import Cp from "./components/main/cp";
import { useTheme } from "next-themes";
const Page = () => {
const {setTheme}=useTheme();
setTheme("dark");
  return (
    <main className="h-full w-full">
      <StarsCanvas></StarsCanvas>
      <Navbar></Navbar>
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Projects />
        <Cp />
      </div>
      <Footer></Footer>
    </main>
  );
};

export default Page;
