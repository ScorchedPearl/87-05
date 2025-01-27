"use client"
import {
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { motion } from "framer-motion";
import { slideInFromRight } from "@/utils/motion";
import Image from "next/image";
const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden  py-20"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />
    <div className="flex flex-row items-center">
      <div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

     
      </div>
      <motion.div
          variants={slideInFromRight(1)}
          className="w-full h-full justify-center items-center hidden sm:flex"
        >
        <Image 
        src="public//mainIconsdark.svg"
        alt="work icons"
        height={450}
        width={450}>
          </Image>  
      </motion.div>
      </div>
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="public/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
