import React from "react";
import { LeaderData } from "./LeaderData";
import Image from "next/image";
type Props = {};

const Leader = (props: Props) => {
  return (
    <div className="relative pt-10 pb-10">
      <div className="absolute inset-0 top-0 z-0 w-full h-full">
        <Image
          src="/images/leader-layer-bg.webp"
          alt="leader-layer"
          fill
          className="w-full h-auto object-cover bg-top"
        />
      </div>
      <div className="container relative px-4 pb-10 z-20">
        <div className="flex flex-col items-center justify-center mb-10">
          <h2 className="text-4xl lg:text-6xl font-bold text-green-100 relative">
            LEADER
            <span className="absolute inset-0 text-opacity-10 text-green-200">
              LEADER
            </span>
          </h2>
          <h5 className="text-accent text-xs md:text-sm mb-1.5 font-semibold -mt-5 relative">
            LEADER
          </h5>
          <h3 className="text-2xl font-semibold mt-2 text-center">
            Become a Leader in{" "}
            <span className="text-green-600">Your Industry</span>
          </h3>
          <p className="text-tertiary-foreground text-xs sm:text-sm mt-2 lg:max-w-[590px] lg:mx-auto text-center">
            We have worked with startups as well as established companies in
            diverse sectors of the economy.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-6 rounded-md">
          {LeaderData &&
            LeaderData.map((item, idx) => (
              <div
                key={idx}
                className="bg-white max-w-[45%] sm:max-w-[30%] lg:max-w-[22%] xl:max-w-[18%] w-full shadow-custom-light rounded-lg flex flex-col items-center justify-center gap-y-2 px-4 py-10"
              >
                <Image
                  src={item.icon}
                  width={28}
                  height={28}
                  alt="industry-icons"
                  className="w-7 h-7 md:w-10 md:h-10"
                />
                <p className="text-foreground text-xs md:text-sm text-center">
                  {item.title}
                </p>
              </div>
            ))}
        </div>
        <div
          className="after:content-[''] after:block after:w-full after:h-[2px]
          after:mt-20 bg-gradient-to-r from-[#FEFEFE] via-[rgba(0,0,0,0.2)] to-[#FEFEFE]/"
        ></div>
      </div>
    </div>
  );
};

export default Leader;
