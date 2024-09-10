"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";

const services = [
  { name: "Backend-Development", color: "bg-white text-green-500" },
  { name: "Frontend Development", color: "bg-black text-white" },
  { name: "eCommerce Solutions", color: "bg-white text-green-500" },
  { name: "Full Stack Development", color: "bg-white text-green-500" },
  { name: "Devops as a Service", color: "bg-white text-green-500" },
  { name: "CMS Development", color: "bg-white text-green-500" },
];

// Service type definition
type Service = {
  name: string;
  color: string;
};

// Props for TechStackButton
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
  <div className="mt-2 mb-6 lg:mt-0 lg:mb-8 flex flex-col items-center md:items-start max-w-full md:max-w-[400px] w-full px-4">
    <h3 className="text-2xl font-bold mb-4">Frontend Development</h3>
    <p className="text-xs sm:text-sm font-light mb-4 leading-normal text-center md:text-left">
      Ensure smooth functionality of your app&apos;s server side, faster
      loading, reduced downtime, and enhanced security measures with Acme Tech
      as a back-end development company. Our backend development expertise helps
      you elevate user experience by designing, building, testing, and deploying
      tailored and responsive backend solutions.
    </p>
    <p className="text-xs sm:text-sm mb-6 font-light leading-normal text-center md:text-left">
      We leverage proven frameworks, tools, technologies, and quality coding in
      Python, Net, Java, Go, Node.js, and PHP to design, build, test, and deploy
      robust backend solutions. Partner with us to scale your digital
      capabilities by exploring web development opportunities at market speed.
    </p>
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button className="my-2 font-base bg-white !text-primary">
        Start a Project
      </Button>
    </motion.div>
  </div>
);

const IllustrationSection = () => (
  <div className="relative w-full max-w-[350px] max-h-[280px] lg:max-w-[286px] lg:max-h-[263px] mx-auto">
    <motion.img
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      src="/images/tech-stack-right.webp"
      alt="Frontend Development Illustration"
      className="w-full h-full object-contain"
    />
  </div>
);

export default function TechStack() {
  const [activeService, setActiveService] = useState("Frontend Development");

  return (
    <div className="bg-[#13182C] text-white flex flex-col justify-center py-10 lg:py-16 relative">
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
              OUR TECHNOLOGY STACK
            </h5>
            <h2 className="text-[1.4rem]  w-full lg:text-left md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug text-white">
              Using cutting-edge technology to
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
            <p className="text-white text-sm text-center lg:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-tr from-[#0EA301] to-[#03AF14] via-[#03AF14]/83 rounded-xl overflow-hidden">
          <div className="grid lg:grid-cols-[40%,70%] lg:gap-x-5">
            <div className="flex flex-col space-y-2 bg-gradient-to-tr from-[#03AF14]/83 to-[#03AF14] shadow-md md:shadow-xl p-8">
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
            <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-[50%,40%] lg:grid-cols-[50%,25%] justify-center lg:justify-start g0ap-x-1 md:gap-x-5 pt-8 items-center lg:items-start">
              <ContentSection />
              <IllustrationSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
