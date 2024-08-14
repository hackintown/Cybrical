import React from "react";
import Carousel from "./Carousel";

const Portfolio = () => {
  const images = [
    { id: 1, src: "/images/portfolio-slide1.png", alt: "Project 1" },
    { id: 2, src: "/images/portfolio-slide2.png", alt: "Project 2" },
    { id: 3, src: "/images/portfolio-slide3.png", alt: "Project 3" },
  ];
  return (
    <div className="container pt-10">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
        <div className="w-full lg:w-2/3 mb-3 lg:mb-4 text-center lg:text-left lg:px-2">
          <h5 className="text-accent text-xs md:text-sm mb-1.5 font-semibold">
            OUR PORTFOLIO
          </h5>
          <h2 className="text-[1.4rem]  w-full lg:text-left md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug text-black">
            The Best Project That We
            <br className="hidden sm:block" />
            <span className="text-accent ml-2">Have Delivered</span>
          </h2>
        </div>
        <div className="w-full lg:w-2/6 max-w-lg lg:max-w-sm">
          <p className="text-black text-sm text-center lg:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <Carousel />
      </div>
    </div>
  );
};

export default Portfolio;
