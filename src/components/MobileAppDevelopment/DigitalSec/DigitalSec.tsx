import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";

type Props = {};

const Data = [
  {
    iconSrc: "/images/mbl-dev-digital-icon1.webp",
    title: "Biometric authentication",
  },
  {
    iconSrc: "/images/mbl-dev-digital-icon2.webp",
    title: "Digital signature",
  },
  {
    iconSrc: "/images/mbl-dev-digital-icon3.webp",
    title: "Video Streaming",
  },
  {
    iconSrc: "/images/mbl-dev-digital-icon4.webp",
    title: "Payment gateways-strip,CCavenue, PayuMoney, Paytm",
  },
  {
    iconSrc: "/images/mbl-dev-digital-icon5.webp",
    title: "Nearby places using google places API",
  },
  {
    iconSrc: "/images/mbl-dev-digital-icon6.webp",
    title: "Cloud front",
  },
];

const DigitalSec = (props: Props) => {
  return (
    <div className="pt-4 pb-10 lg:pb-16">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div className="w-full lg:w-2/3 mb-3 lg:mb-4 text-center md:text-left md:px-2">
          <h5 className="text-accent text-xs md:text-sm mb-1.5 font-semibold">
            What We Do
          </h5>
          <h2
            className="text-[1.4rem]  w-full lg:text-left md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug
           text-black"
          >
            Digital Mobile
            <span className="text-accent ml-2">Application solutions</span>
          </h2>
        </div>
        <div className="w-full lg:w-2/6 max-w-lg lg:max-w-sm flex flex-col items-center md:items-start justify-center">
          <p className="text-tertiary text-sm text-center lg:text-left">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
          <Button className="my-3">Browse All Services</Button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
        {Data.map((item, index) => (
          <div
            key={index}
            className="bg-[#DFFEE0] px-4 py-10 rounded-xl flex flex-col items-center justify-center gap-4 transition-transform transform hover:scale-110 duration-300"
          >
            <Image
              src={item.iconSrc}
              width={28}
              height={28}
              alt="what-we-do-icon"
              className="w-7 h-7"
            />
            <h4 className="font-semibold text-xs sm:text-sm text-center">
              {item.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalSec;
