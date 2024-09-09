import Image from "next/image";
import React from "react";

type Props = {};

const OurApproach = (props: Props) => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8 px-4">
      {/* Image Section */}
      <div className="flex justify-center lg:justify-start order-2">
        <div className="relative h-[300px] w-[350px] sm:h-[350px] sm:w-[400px] lg:h-[400px] lg:w-[500px] xl:h-[530px] shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/images/our-approach.webp"
            alt="Our Approach"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left md:order-2">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-green-100 relative leading-tight lg:leading-none">
          OUR APPROACH
          <span className="absolute inset-0 text-opacity-10 text-green-200">
            OUR APPROACH
          </span>
        </h2>
        <h5 className="text-accent text-xs sm:text-sm mb-1.5 font-semibold -mt-5 relative">
          OUR APPROACH
        </h5>
        <h3 className="text-lg sm:text-2xl md:text-[1.8rem] font-semibold mt-2 !leading-snug">
          Transform your business
          <br />
          <span className="text-accent">for the digital age</span>
        </h3>

        <p className="text-tertiary-foreground mt-2 max-w-xl mx-auto lg:mx-0 text-xs sm:text-[0.8rem] xl:text-sm lg:leading-relaxed xl:leading-loose">
          California-based licensed real estate broker organization. The company
          serves as a wonderful resource for consumers to swiftly and
          conveniently find the right Real Estate agent for buying and selling
          residential or commercial properties. Serving as a consumer website to
          find the right top Realtor fast and easy.
        </p>

        <p className="text-tertiary-foreground mt-4 max-w-xl mx-auto lg:mx-0 text-xs sm:text-[0.8rem] xl:text-sm  lg:leading-relaxed xl:leading-loose">
          One place — everyone you need: Business Analysts, Product Designers,
          Project Managers, QA Engineers, DevOps, and Full-stack developers.
        </p>
      </div>
    </div>
  );
};

export default OurApproach;
