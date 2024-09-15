import React from "react";
import { NextProjectData } from "./NextProjectData";
import Card from "@/components/ui/OurApproach/Card";
import Image from "next/image";

type Props = {};

const NextProject = (props: Props) => {
  return (
    <div className="container px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
        <div className="w-full lg:w-2/3 mb-3 lg:mb-4 text-center lg:text-left lg:px-2">
          <h5 className="text-accent text-xs md:text-sm mb-1.5 font-semibold">
            Why AvyaTech for Your Next Project
          </h5>
          <h2
            className="text-[1.4rem]  w-full lg:text-left md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug
       text-black"
          >
            Start now to get a complimentary assessment
            <span className="text-accent ml-2">
              and improvement recommendations
            </span>
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
        {NextProjectData.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md transition-all
           duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col items-center justify-center"
          >
            <div className="mb-4 relative">
              <p className="text-xl text-white font-bold bg-[#01AA03] rounded-full w-12 h-12 p-1 flex items-center justify-center">
                {card.count}
              </p>
            </div>
            <h3 className="text-sm font-semibold mb-2 text-center">
              {card.title}
            </h3>
            <p className="text-tertiary-foreground text-xs text-center">
              {card.paragraphs}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NextProject;
