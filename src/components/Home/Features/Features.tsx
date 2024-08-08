"use client";
import React from "react";
import Image from "next/image";
import {
  QualitySvg,
  SolveSvg,
  SkillSvg,
  TeamsSvg,
  ResponseSvg,
  PricingSvg,
} from "./icons";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

interface FeaturesItem {
  id: number;
  itemIcon: JSX.Element;
  label: string;
  info: string;
}

const Features = () => {
  const featuresItem: FeaturesItem[] = [
    {
      id: 1,
      itemIcon: <QualitySvg />,
      label: "Committed to quality",
      info: "We are at the forefront of website development and provide high-quality web and mobile app-based solutions for clients. Delivering a high-quality service is the cornerstone of our policy. We at Avyatech listen to clients and find the best website development solutions that achieve their business goals.",
    },
    {
      id: 2,
      itemIcon: <SolveSvg />,
      label: "Solve your business problems",
      info: "When operating on a tight deadline with limited finances failure is not an option. You need a website design and development company and a mobile application development partner like Avyatech that provides the right solutions to tackle your business problems efficiently.",
    },
    {
      id: 3,
      itemIcon: <TeamsSvg />,
      label: "Dedicated teams",
      info: "You will need a dedicated website design and development team that focuses on your project and sees it through to completion. Developers working on a single mobile application development project at a time offer much better results. Our experts at Avyatech will stay focused and exceed your expectations.",
    },
    {
      id: 4,
      itemIcon: <ResponseSvg />,
      label: "Guaranteed quick response",
      info: "Our clients operate 24/7 in industries that require quick solutions to service disruptions. We are focused on providing timely service to customers. Avyatech offers quick and responsive support through top technical professionals.",
    },
    {
      id: 5,
      itemIcon: <SkillSvg />,
      label: "A wide spectrum of skills & expertise",
      info: "The digital landscape has expanded a lot. We offer expertise in all areas of website design and mobile application development. Our experts can design your website, create sales funnels, analyze traffic, optimize for SEO, enhance UI/UX, and integrate mobile apps into business.",
    },
    {
      id: 6,
      itemIcon: <PricingSvg />,
      label: "Competitive Pricing",
      info: "Time is of the essence when it comes to Web development services. And that’s exactly why we make sure that all projects are delivered to the clients on time. Each project is initiated with a detailed timesheet to ensure timely delivery.",
    },
  ];

  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-0 w-full">
        <svg
          viewBox="0 0 1600 1096"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H1600V1096H0V0Z" fill="#13182C" />
        </svg>
      </div>
      <div className="absolute top-0 left-0 w-full">
        <Image
          src="/features-sec-layer.png"
          className="w-full h-full object-cover"
          width={500}
          height={500}
          alt="features-bg-layer"
        />
      </div>
      <div className="absolute top-0 left-0 w-full pt-20 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <h5 className="text-[#01AA03] text-base font-semibold">
                WEB AND MOBILE APP DEVELOPMENT
              </h5>
              <h2 className="text-3xl lg:text-4xl font-semibold leading-snug text-white">
                Customer Loyalty and Satisfaction With Our
                <span className="text-[#01AA03]"> Best-in-Class Services.&apos;</span>
              </h2>
            </div>
            <div className="w-full lg:w-1/2 max-w-lg">
              <p className="text-[#eee;] text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
            </div>
          </div>
          <motion.ul
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuresItem.map((features, idx) => (
              <AnimatePresence key={features.id}>
                <motion.li
                  whileHover={{
                    background:
                      "linear-gradient(90deg, #0EA301 0%, rgba(0, 60, 6, 0.83) 100%)",
                    scale: 1.01,
                    transition: { duration: 0.3, ease: "linear" },
                  }}
                  className={cn`rounded-xl w-full h-full p-6 bg-white shadow-lg`}
                >
                  <div className="mb-4 w-12 h-12">{features.itemIcon}</div>
                  <h2 className="text-[#000] font-semibold text-lg mb-3">
                    {features.label}
                  </h2>
                  <p className="text-[#333] text-base font-normal mb-5">
                    {features.info}
                  </p>
                </motion.li>
              </AnimatePresence>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
