import Image from "next/image";
import React from "react";
import Button from "../../../components/ui/Button";
import { BackgroundRight, StarSvg } from "../../ui/BannerIcon/Icons";
import { FlipWords } from "@/components/ui/flip-words";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const Banner = () => {
  const words = ["Solutions", "Services", "Projects", "Ideas", "Innovations"];

  return (
    <div className="relative w-full bg-gradient-to-b from-[#EAFFEA] to-[rgba(255, 255, 255, 0.00)] py-5 lg:py-10 h-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <Image
          src="/images/banner-bg-layer.svg"
          alt="banner-layer"
          height={500}
          width={500}
          priority
          className="w-full h-auto"
        />
      </div>

      {/* Right Decoration */}
      <div className="absolute -top-[109px] -right-10 overflow-hidden">
        <BackgroundRight />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="md:grid md:grid-cols-[55%,40%] items-center justify-between">
          {/* Text Section */}
          <div className="flex flex-col items-center md:items-start w-full">
            <h1 className="text-center md:text-left text-3xl sm:text-4xl lg:text-5xl  font-bold leading-tight lg:leading-tight xl:leading-tight text-foreground">
              Technology Audit & <br className="hidden md:block" />
              <br className="md:hidden" />
              <span className="text-accent">Consultancy</span>
            </h1>
            <p className="text-tertiary-foreground text-xs sm:text-sm lg:text-base mt-4 mb-4 w-full mx-auto max-w-[740px]">
              Lorem Ipsum has been the industry’s standard dummy text ever since
              the 1500s,when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. 
            </p>
            <Button className="my-5  text-base">Start a Project</Button>
          </div>

          {/* Banner Image */}
          <div className="mt-6 md:mt-0 flex justify-center md:justify-end w-full">
            <Image
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-full"
              src="/images/wb-banner-image.webp"
              alt="banner-img"
              priority
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;