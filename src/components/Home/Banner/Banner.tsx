import Image from "next/image";
import React from "react";
import Button from "../../../components/ui/Button";
import { BackgroundRight, StarSvg } from "./icons";

const Banner = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-[#EAFFEA] to-[rgba(255, 255, 255, 0.00)] py-5 h-full overflow-hidden">
      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-full opacity-85">
        <Image
          src="banner-bg-layer.svg"
          alt="banner-layer"
          height={100}
          width={100}
          className="w-auto"
        />
      </div>
      <div className=" absolute -top-[109px] -right-10 overflow-hidden">
        <BackgroundRight />
      </div>
      <div className="container w-full relative z-10">
        <div className="md:flex items-center justify-between">
          <div className="flex flex-col items-center">
            <h1
              className="text-2xl md:text-6xl md:leading-tight
             text-foreground text-center
            font-bold leading-tight"
            >
              Creating Top Quality Digital
              <span className="text-accent mx-2 font-bold">Solutions</span>
            </h1>
            <Button className="my-5 font-base ">Start a Project</Button>
          </div>
          <div>
            <div>
              <Image
                className="w-full h-full"
                src="/images/banner_image.svg"
                alt="banner-img"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#343434] transform rotate-[3deg] py-2 md:py-3 -mt-5 relative z-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-3">
              <StarSvg />
            </div>
            <p className="text-xl md:text-2xl text-white font-medium">Design</p>
          </div>
          <div className="flex items-center">
            <div className="mr-3">
              <StarSvg />
            </div>
            <p className="text-xl md:text-2xl text-white font-medium">
              Develop
            </p>
          </div>
          <div className="flex items-center">
            <div className="mr-3">
              <StarSvg />
            </div>
            <p className="text-xl md:text-2xl text-white font-medium">Design</p>
          </div>
          <div className="flex items-center">
            <div className="mr-3">
              <StarSvg />
            </div>
            <p className="text-xl md:text-2xl text-white font-medium">
              Discover
            </p>
          </div>
          <div className="flex items-center">
            <div className="mr-3">
              <StarSvg />
            </div>
            <p className="text-xl md:text-2xl text-white font-medium">Design</p>
          </div>
          <div className="flex items-center">
            <div className="mr-3">
              <StarSvg />
            </div>
            <p className="text-xl md:text-2xl text-white font-medium">
              Develop
            </p>
          </div>
          <div className="flex items-center">
            <div className="mr-3">
              <StarSvg />
            </div>
            <p className="text-xl md:text-2xl text-white font-medium">Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
