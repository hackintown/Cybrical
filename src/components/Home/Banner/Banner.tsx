import Image from "next/image";
import React from "react";
import Button from "../../../components/ui/Button";
import { BackgroundRight, StarSvg } from "./icons";

const Banner = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-[#EAFFEA] to-[rgba(255, 255, 255, 0.00)] py-5 lg:py-10 h-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-85">
        <Image
          src="banner-bg-layer.svg"
          alt="banner-layer"
          height={500}
          width={500}
          loading="lazy"
          className="w-full h-auto"
        />
      </div>

      {/* Right Decoration */}
      <div className="absolute -top-[109px] -right-10 overflow-hidden">
        <BackgroundRight />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="md:flex items-center justify-between">
          {/* Text Section */}
          <div className="flex flex-col items-center md:items-start w-full">
            <h1 className="text-center md:text-left text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight lg:leading-tight xl:leading-tight text-foreground">
              Creating <br className="hidden md:block" /> Top Quality{" "}
              <br className="md:hidden" />
              <br className="hidden md:block" />
              Digital
              <span className="text-accent mx-2 font-bold">Solutions</span>
            </h1>
            <Button className="my-5 font-base">Start a Project</Button>
          </div>

          {/* Banner Image */}
          <div className="mt-6 md:mt-0 flex justify-center md:justify-end w-full">
            <Image
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-full"
              src="/images/mbl-hero-image.png"
              alt="banner-img"
              loading="lazy"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      {/* Rotated Section */}
      <div className="bg-[#343434] transform rotate-[3deg] md:rotate-[1deg] py-2.5 md:py-3 -mt-7 -ml-2 -mr-2 sm:-mt-9 relative z-10">
        <div className="flex items-center justify-between gap-x-6 sm:gap-x-6 md:gap-x-8 px-2">
          {[
            "Design",
            "Develop",
            "Design",
            "Discover",
            "Design",
            "Develop",
            "Design",
          ].map((text, index) => (
            <div key={index} className="flex items-center">
              <StarSvg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              <p className="ml-2 text-xl sm:text-2xl text-white font-medium">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
