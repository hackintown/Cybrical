import Button from "@/components/ui/Button";
import Card from "@/components/ui/OurApproach/Card";
import React from "react";
import { DevServicesData } from "./DevServicesData";

type Props = {};

const DevServices = (props: Props) => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
        <div className="w-full lg:w-2/3 mb-3 lg:mb-4 text-center lg:text-left lg:px-2">
          <h5 className="text-accent text-xs md:text-sm mb-1.5 font-semibold">
            What We Do
          </h5>
          <h2
            className="text-[1.4rem]  w-full lg:text-left md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug
           text-black"
          >
            Leverage our wide range of web application
            <span className="text-accent ml-2">development services</span>
          </h2>
        </div>
        <div className="w-full lg:w-2/6 max-w-lg lg:max-w-sm flex flex-col items-center lg:items-start justify-center">
          <p className="text-tertiary text-sm text-center lg:text-left">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
          <Button className="my-3">Browse All Services</Button>
        </div>
      </div>
      <div className="container my-8 lg:my-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {DevServicesData.map((card, index) => (
          <Card
            key={index}
            iconSrc={card.iconSrc}
            title={card.title}
            paragraphs={card.paragraphs}
          />
        ))}
      </div>
    </div>
  );
};

export default DevServices;
