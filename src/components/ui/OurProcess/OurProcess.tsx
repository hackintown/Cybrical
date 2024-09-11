import React from "react";
import { ProcessData } from "./ProcessData";
import Image from "next/image";

type Props = {};

const OurProcess = (props: Props) => {
  return (
    <div className="">
      <div className="container px-4">
        <div className="flex flex-wrap justify-center items-center">
          {ProcessData.map((item, index) => (
            <div key={index} className="relative group mb-8 md:mb-0 mx-4">
              <div
                className="w-64 h-64 bg-green-50 flex items-center justify-center"
                style={{ clipPath: item.shape }}
              >
                <div className="flex flex-col items-center justify-center p-6">
                  <div className="">
                    <Image
                      src={item.icon}
                      width={28}
                      height={28}
                      alt="process-icon"
                      className="w-7 h-7"
                    />
                  </div>
                  <h3 className="font-semibold text-base mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-xs text-center text-gray-600 leading-tight">
                    {item.description}
                  </p>
                </div>
              </div>
              {index < ProcessData.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-8 w-16 h-0.5 bg-green-200 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
