"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../Button";

type Service = string;

type TechStackProps = {
  tag: string;
  heading: string;
  accentTitle: string;
  headParagraph: string;
  servicesList: Service[];
  rightTag: string;
  rightParagraph: string;
  rightExtraParagraph: string;
  imgSrc: string;
};

const TechStackButton = ({ name }: { name: string }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-4 py-3 rounded-r-full bg-white text-[#01AA03] hover:bg-black hover:text-white lg:text-base font-medium mb-2 w-full md:w-auto text-left"
  >
    {name}
  </motion.button>
);

// ContentSection component
type ContentSectionProps = Pick<
  TechStackProps,
  "rightTag" | "rightParagraph" | "rightExtraParagraph"
>;

const ContentSection = ({
  rightTag,
  rightParagraph,
  rightExtraParagraph,
}: Pick<
  TechStackProps,
  "rightTag" | "rightParagraph" | "rightExtraParagraph"
>) => (
  <div className="mt-2 mb-6 lg:mt-0 lg:mb-8 flex flex-col items-center md:items-start max-w-full md:max-w-[400px] w-full px-4">
    <h3 className="text-2xl font-bold mb-4">{rightTag}</h3>
    <p className="text-xs sm:text-sm font-light mb-4 leading-normal text-center md:text-left">
      {rightParagraph}
    </p>
    <p className="text-xs sm:text-sm mb-6 font-light leading-normal text-center md:text-left">
      {rightExtraParagraph}
    </p>
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button className="my-2 font-base bg-white !text-primary">
        Start a Project
      </Button>
    </motion.div>
  </div>
);

const IllustrationSection = ({
  imgSrc,
  tag,
}: Pick<TechStackProps, "imgSrc" | "tag">) => (
  <div className="relative w-full max-w-[350px] max-h-[280px] lg:max-w-[286px] lg:max-h-[263px] mx-auto">
    <motion.img
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      src={imgSrc}
      alt={tag}
      className="w-full h-full object-contain"
    />
  </div>
);

export default function TechStack({
  tag,
  heading,
  headParagraph,
  accentTitle,
  servicesList,
  rightTag,
  rightParagraph,
  rightExtraParagraph,
  imgSrc,
}: TechStackProps) {
  return (
    <div className="bg-[#13182C] text-white flex flex-col justify-center py-10 lg:py-16 relative w-full">
      <Image
        src="/images/tech-stack-bg-layer.webp"
        alt="tech-stack"
        width={500}
        height={500}
        className="w-full h-auto absolute top-0 object-cover"
      />
      <div className="relative container px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
          <div className="w-full lg:w-2/3 mb-3 lg:mb-4 text-center lg:text-left lg:px-2">
            <h5 className="text-accent text-xs md:text-sm mb-1.5 font-semibold">
              {tag}
            </h5>
            <h2 className="text-[1.4rem]  w-full lg:text-left md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug text-white">
              {heading}

              <span className="text-accent ml-2">{accentTitle}</span>
            </h2>
          </div>
          <div className="w-full lg:w-2/6 max-w-lg lg:max-w-sm">
            <p className="text-white text-sm text-center lg:text-left">
              {headParagraph}
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-tr from-[#0EA301] to-[#03AF14] via-[#03AF14]/83 rounded-xl overflow-hidden">
          <div className="grid lg:grid-cols-[40%,70%] lg:gap-x-5">
            <div className="flex flex-col space-y-2 bg-gradient-to-tr from-[#03AF14]/83 to-[#03AF14] shadow-md md:shadow-xl p-8">
              {servicesList.map((service, idx) => (
                <TechStackButton key={service} name={service} />
              ))}
            </div>
            <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-[50%,40%] lg:grid-cols-[50%,25%] justify-center lg:justify-start g0ap-x-1 md:gap-x-5 pt-8 items-center lg:items-start">
              <ContentSection
                rightTag={rightTag}
                rightParagraph={rightParagraph}
                rightExtraParagraph={rightExtraParagraph}
              />
              <IllustrationSection imgSrc={imgSrc} tag={tag} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
