"use client"
import { useRef, useEffect, useState } from "react";
import EduCard from "../sub/EduCard";
import EducationText from "../sub/EducationText";

const useOnScreen = (ref: React.RefObject<HTMLElement>) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isIntersecting;
};

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center justify-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100 animate-FadeIn" : "opacity-0"
      }`}
      id="projects"
    >
      <EducationText></EducationText>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 pb-40">
        <EduCard
          src="assets/iiita.jpg"
          title="Indian Institute Of Information Technology, Allahabad"
          description="Currently pursuing B.Tech in Information Technology, in my 2nd Semester"
          grade="CGPA-9.75"
        />
        <EduCard
          src="assets/Sarvodaya.webp"
          title="Sarvodya School, Kota"
          description="Cleared JEE Mains and Achieved 90% in Non-Med, paving the way for my journey into technology and innovation."
          grade="Rank-1812"
        />
        <EduCard
          src="assets/dcm.png"
          title="DCM Sr Sec School, Ambala"
          description="Completed my 10th grade, where I laid the foundation for my academic and personal growth."
          grade="Score-98%"
        />
      </div>
    </div>
  );
};

export default Projects;
