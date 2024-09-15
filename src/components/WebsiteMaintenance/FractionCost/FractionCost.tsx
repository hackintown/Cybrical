"use client";
import ProcessSection from "@/components/ui/ProcessSection";
import { memo } from "react";
import { FractionCostData } from "./FractionCostData";
import ListingCard from "@/components/ui/ListingCard";

// Type definition for List as an array of strings
type List = {
  title: string;
  description: string;
};

// Type definition for ProcessData item
interface ProcessData {
  title: string;
  accentHead?: string;
  paragraph?: string;
  imgSrc: string;
  listing: List[];
}

const FractionCost = memo(function FractionCost() {
  return (
    <div className="container px-4 py-10 lg:py-12">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
        <div className="w-full lg:w-2/3 mb-3 lg:mb-4 text-center lg:text-left lg:px-2">
          <h2
            className="text-[1.4rem]  w-full lg:text-left md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug
       text-black"
          >
            Leverage on demand support and
            <span className="text-accent ml-2">
              maintenance at a fraction of cost.
            </span>
          </h2>
        </div>
        <div className="w-full lg:w-2/6 max-w-lg lg:max-w-sm flex flex-col items-center lg:items-start justify-center">
          <p className="text-tertiary text-sm text-center lg:text-left">
            At Avya Tech, we adhere to a streamlined approach quick turnarounds,
            affordable pricing, and, above all, quality work is what makes us
            the perfect fit for you. Take a glimpse of our maintenance services.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {FractionCostData.map((data: ProcessData, index: number) => (
          <ListingCard
            key={index}
            headTitle={data.title} // Use the actual data instead of hardcoded values
            accentHead={data.accentHead || ""}
            paragraph={data.paragraph || ""}
            imgSrc={data.imgSrc}
            listing={data.listing || []} // Correct the default value
            imageAlt="icons"
            btn=""
          />
        ))}
      </div>
    </div>
  );
});

export default FractionCost;
