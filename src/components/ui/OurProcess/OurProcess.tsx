import React from "react";
import { ProcessData } from "./ProcessData";
import Image from "next/image";

type Props = {};

const OurProcess = (props: Props) => {
  return (
    <div className="pb-12 lg:pb-20 xl:pb-24">
      <div className="container px-4">
        <div className="flex flex-col justify-center items-center mb-10">
          <h2 className="text-4xl lg:text-6xl font-bold text-green-100 relative">
            OUR PROCESS
            <span className="absolute inset-0 text-opacity-10 text-green-200">
              OUR PROCESS
            </span>
          </h2>
          <h5 className="text-accent text-xs md:text-sm mb-1.5 font-semibold -mt-5 relative">
            Process
          </h5>
          <h3 className="text-2xl font-semibold mt-2 text-center">
            We have worked with startups as well&nbsp;
            <br className="hidden md:block" />
            <span className="text-green-600">as established companies</span>
          </h3>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center">
          {ProcessData.map((item, index) => (
            <div key={index} className="relative md:mb-0">
              <div
                className={`max-w-[236px] w-full h-[272px] ${item.gradient} flex items-center justify-center border border-dashed`}
                style={{ clipPath: item.shape }}
              >
                <div className="flex flex-col space-y-2 items-center justify-center p-6">
                  <div className="">
                    <Image
                      src={item.icon}
                      width={28}
                      height={28}
                      alt="process-icon"
                      className="w-7 h-7"
                    />
                  </div>
                  <h3 className="font-semibold text-base mb-0 text-center">
                    {item.title}
                  </h3>
                  <p className="text-xs xl:text-sm text-center text-gray-600 leading-tight">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
