"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";
const services = [
  {
    name: "Custom Web Application Development",
    color: "bg-white text-green-500",
  },
  { name: "Content Management System", color: "bg-black text-white" },
  { name: "Ecommerce Development", color: "bg-white text-green-500" },
  { name: "API Development", color: "bg-white text-green-500" },
  { name: "3rd Party API Integration", color: "bg-white text-green-500" },
  { name: "3rd Party Integration", color: "bg-white text-green-500" },
  { name: "CRM Integration", color: "bg-white text-green-500" },
  { name: "Payment Gateway", color: "bg-white text-green-500" },
  { name: "Social Media APIs", color: "bg-white text-green-500" },
];

type TechStackButtonProps = {
  name: string;
  color: string;
  isActive: boolean;
  onClick: () => void;
};

const TechStackButton = ({
  name,
  color,
  isActive,
  onClick,
}: TechStackButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`${color} px-4 py-3 rounded-r-full text-sm font-medium mb-2 w-full md:w-auto text-left ${
      isActive ? "ring-1 ring-white" : ""
    }`}
    onClick={onClick}
  >
    {name}
  </motion.button>
);

const ContentSection = () => (
  <div className="mt-2 mb-6 lg:mt-0 lg:mb-8 flex flex-col md:items-start max-w-full md:max-w-[400px] w-full px-4">
    <h3 className="text-xl font-bold mb-4 text-white text-left w-full">
      Content Management System
    </h3>
    <p className="text-xs text-white sm:text-sm font-light mb-4 leading-normal md:text-left">
      Customers identify your products and services based on the promotional
      information you relay through your web apps. This is where a content
      management system is crucial. Your content must be focused and presented
      efficiently to generate and maintain visitor interest in your business. We
      offer mobile responsive web app development and proven content management
      services through our 
      <span className="text-[#202020]">WordPress web development </span> tools
      and services.
    </p>
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button className="my-2 font-base !bg-black text-white">
        Start a Project
      </Button>
    </motion.div>
  </div>
);

const IllustrationSection = () => (
  <div className="relative w-full max-w-[288px] max-h-[221px] mx-3">
    <motion.img
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      src="/images/cmo-tech-stack.webp"
      alt="cmo-tech-stack-image"
      className="w-full h-full object-contain"
    />
  </div>
);

const CmoTechStack = () => {
  const [activeService, setActiveService] = useState(
    "Content Management System"
  );
  return (
    <div className="container px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
        <div className="w-full lg:w-2/3 mb-3 lg:mb-4 text-center lg:text-left lg:px-2">
          <h5 className="text-accent text-xs md:text-sm mb-1.5 font-semibold">
            OUR TECHNOLOGY STACK
          </h5>
          <h2 className="text-[1.4rem]  w-full lg:text-left md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug text-foreground">
            Using cutting-edge technology to&nbsp;
            <br className="hidden sm:block" />
            With
            <span className="text-accent ml-2">
              Our deliver the right web
              <br className="hidden sm:block" />
              solutions.
            </span>
          </h2>
        </div>
        <div className="w-full lg:w-2/6 max-w-lg lg:max-w-sm">
          <p className="text-foreground text-sm text-center lg:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley.
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-tr from-[#EFEFEF]/83 to-[#FFFFFF] rounded-xl overflow-hidden">
        <div className="flex flex-col space-y-2 bg-gradient-to-tr from-[#EFEFEF]/83 to-[#FFFFFF] shadow-md md:shadow-xl p-8">
          {services.map((service) => (
            <TechStackButton
              key={service.name}
              name={service.name}
              color={service.color}
              isActive={activeService === service.name}
              onClick={() => setActiveService(service.name)}
            />
          ))}
        </div>
        <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-[50%,40%] lg:grid-cols-[50%,25%] bg-gradient-to-tr from-[#0EA301] to-[#03AF14] via-[#03AF14]/83 rounded-lg justify-center lg:justify-start g0ap-x-1 md:gap-x-5 pt-8 items-center lg:items-start">
          <IllustrationSection />
          <ContentSection />
        </div>
      </div>
    </div>
  );
};

export default CmoTechStack;
