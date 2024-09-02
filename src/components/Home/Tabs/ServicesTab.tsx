import React from "react";
import TabContent from "./TabContent";
import Image from "next/image";

const ServicesTab = () => {
  return (
    <div className="relative py-8">
      <div className="relative w-full pt-8 pb-12 z-10">
        <div className="flex container flex-col lg:flex-row justify-between items-center mb-10 lg:mb-14">
          <div className="w-full lg:w-2/3 mb-3 lg:mb-4 text-center lg:text-left lg:px-2">
            <h5 className="text-accent text-xs md:text-sm mb-1.5 font-semibold">
              WEB AND MOBILE APP DEVELOPMENT
            </h5>
            <h2 className="text-[1.4rem]  w-full lg:text-left md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug text-black">
              Customer Loyalty and Satisfaction
              <br className="hidden sm:block" />
              With Our
              <span className="text-accent ml-2">Best-in-Class Services.</span>
            </h2>
          </div>
          <div className="w-full lg:w-2/6 max-w-lg lg:max-w-sm">
            <p className="text-tertiary-foreground text-sm text-center lg:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
        </div>
        <TabContent />
      </div>
    </div>
  );
};

export default ServicesTab;
