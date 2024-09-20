"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";
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
};

const TechStackButton = ({ name }: TechStackButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-4 py-3 bg-[#01AA03]
       text-white rounded-r-full text-sm font-medium mb-2 w-full  hover:bg-black
       md:w-auto text-left
    `}
  >
    {name}
  </motion.button>
);

const ContentSection = () => (
  <div className="mt-2 mb-6 lg:mt-0 lg:mb-8 flex flex-col md:items-start max-w-full md:max-w-[400px] lg:max-w-full w-full px-4 lg:pr-12">
    <h3 className="text-xl font-bold mb-4 md:mb-2 text-white text-left w-full">
      Content Management System
    </h3>
    <p className="text-xs text-white sm:text-sm font-light mb-4 md:text-xs lg:text-sm leading-normal md:leading-relaxed md:text-left">
      Customers identify your products and services based on the promotional
      information you relay through your web apps. This is where a content
      management system is crucial. Your content must be focused and presented
      efficiently to generate and maintain visitor interest in your business. We
      offer mobile responsive web app development and proven content management
      services through our 
      <span className="text-[#202020]">WordPress web development </span> tools
      and services.
    </p>
    <Link href="/contact-us" passHref>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button className="my-2 font-base !bg-black text-white">
          Start a Project
        </Button>
      </motion.div>
    </Link>
  </div>
);

const IllustrationSection = () => (
  <div className="relative w-full max-w-[288px] max-h-[221px] md:max-w-[250px] mx-3">
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
  return (
    <div className="container px-4 pt-4 pb-10">
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
      <div className="grid gap-8 lg:gap-16 md:grid-cols-[40%,54%] bg-gradient-to-tr from-[#EFEFEF] to-[#FFFFFF]  rounded-xl overflow-hidden p-6">
        <div className="flex flex-col gap-2">
          {services.map((service) => (
            <TechStackButton key={service.name} name={service.name} />
          ))}
        </div>
        <div
          className="grid grid-rows-2 md:grid-rows-1 bg-gradient-to-tr from-[#0EA301] to-[#03AF14] via-[#03AF14]/83 
        rounded-lg justify-center md:justify-start gap-x-1 md:gap-y-5  pt-8 items-center md:items-start px-4"
        >
          <IllustrationSection />
          <ContentSection />
        </div>
      </div>
    </div>
  );
};

export default CmoTechStack;
