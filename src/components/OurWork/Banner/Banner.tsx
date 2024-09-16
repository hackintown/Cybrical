import Image from "next/image";
import React from "react";
import { BackgroundRight, StarSvg } from "../../ui/BannerIcon/Icons";

const Banner = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-[#EAFFEA] to-[rgba(255, 255, 255, 0.00)] py-5 lg:py-10 h-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-85">
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
        <div className="md:flex items-center">
          {/* Text Section */}
          <div className="flex flex-col gap-y-4 items-center w-full">
            <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight lg:leading-tight xl:leading-tight text-foreground">
              Get a closer look
              <span className="text-accent mx-2 font-bold">into our work</span>
            </h1>
            <p className="text-tertiary-foreground text-xs text-center sm:text-sm lg:text-base my-2 w-full mx-auto max-w-[740px]">
              Have a look at some of our work across all industries. You can see
              the excellent craftsmanship in our work within every area of the
              web, which we do with the utmost professionalism.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
