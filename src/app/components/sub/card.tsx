"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

interface CardProps {
  text: string;
  revealText: string;
  title: string;
  description: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="flex items-center justify-center h-[20rem] rounded-2xl w-full p-5  sm:relative sm:bottom-20 sm:h-[9rem]">
      <TextRevealCard
        text={props.text}
        revealText={props.revealText}
      >
        <TextRevealCardTitle className="text-3xl">
          {props.title}
        </TextRevealCardTitle>
        <TextRevealCardDescription className="mt-5">
          {props.description}
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
