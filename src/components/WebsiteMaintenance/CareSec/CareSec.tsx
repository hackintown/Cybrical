import React from "react";
import { CareCardData } from "./CareCardData";
import Card from "@/components/ui/OurApproach/Card";

type Props = {};

const CareSec = (props: Props) => {
  return (
    <div className="container px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
        <div className="w-full lg:w-2/3 mb-3 lg:mb-4 text-center lg:text-left lg:px-2">
          <h5 className="text-accent text-xs md:text-sm mb-1.5 font-semibold">
            Comprehensive Website Care
          </h5>
          <h2
            className="text-[1.4rem]  w-full lg:text-left md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug
       text-black"
          >
            Our website support and
            <span className="text-accent ml-2">maintenance includes:</span>
          </h2>
        </div>
        <div className="w-full lg:w-2/6 max-w-lg lg:max-w-sm flex flex-col items-center lg:items-start justify-center">
          <p className="text-tertiary text-sm text-center lg:text-left">
            We follow a chain of steps to understand your needs so that you can
            hire the most profound Indian developers team.
          </p>
        </div>
      </div>
      <div className="lg:my-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {CareCardData.map((card, index) => (
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

export default CareSec;
