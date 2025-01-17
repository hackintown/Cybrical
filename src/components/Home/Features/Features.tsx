"use client";
import React, { useState } from "react";
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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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
    <div className="relative">
      {/* Mobile Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-[top_right] md:hidden"
        style={{ backgroundImage: "url('/images/mbl-services-bg.png')" }}
      />
      {/* Desktop Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center hidden md:block"
        style={{ backgroundImage: "url('/images/services-bg.png')" }}
      />
      <div className="relative w-full py-16 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
            <div className="w-full lg:w-2/3 mb-3 lg:mb-4 text-center lg:text-left lg:px-2">
              <h5 className="text-accent text-xs md:text-sm mb-1.5 font-semibold">
                WEB AND MOBILE APP DEVELOPMENT
              </h5>
              <h2 className="text-[1.4rem]  w-full lg:text-left md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug text-white">
                Customer Loyalty and Satisfaction
                <br className="hidden sm:block" />
                With Our
                <span className="text-accent ml-2">
                  Best-in- Class Services.
                </span>
              </h2>
            </div>
            <div className="w-full lg:w-2/6 max-w-lg lg:max-w-sm">
              <p className="text-white text-sm text-center lg:text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy.
              </p>
            </div>
          </div>
          <motion.ul
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuresItem.map((feature, idx) => (
              <motion.li
                key={feature.id}
                className={cn(
                  "rounded-xl w-full h-full p-6 border border-border shadow-lg transition-all duration-300",
                  hoveredCard === idx
                    ? "bg-gradient-to-b from-[#0EA301] to-[rgba(0,60,6,0.83)]"
                    : "bg-transparent"
                )}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="mb-4 w-12 h-12">{feature.itemIcon}</div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  {feature.label}
                </h3>
                <p className="text-gray-300 text-sm">{feature.info}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
