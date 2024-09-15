import React from "react";
import Carousel from "./Carousel";
import Image from "next/image";

const Portfolio = () => {
  const images = [
    { id: 1, src: "/images/portfolio-slide1.png", alt: "Project 1" },
    { id: 2, src: "/images/portfolio-slide2.png", alt: "Project 2" },
    { id: 3, src: "/images/portfolio-slide3.png", alt: "Project 3" },
  ];
  return (
    <div className="relative">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url('/images/services-tab-bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      />
      <div className="container pt-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl font-bold text-green-100 relative">
            OUR PORTFOLIO
            <span className="absolute inset-0 text-opacity-10 text-green-200">
              OUR PORTFOLIO
            </span>
          </h2>
          <h5 className="text-accent text-xs md:text-sm mb-1.5 font-semibold -mt-5 relative">
            OUR PORTFOLIO
          </h5>
          <h3 className="text-2xl font-semibold mt-2">
            The Best Projects That We
            <br />
            <span className="text-accent">Have Delivered</span>
          </h3>
          <p className="text-tertiary-foreground mt-2 lg:max-w-[590px] lg:mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard.
          </p>
        </div>

        <div className="mt-10">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
