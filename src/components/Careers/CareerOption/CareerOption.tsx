"use client";
import ProcessSection from "@/components/ui/ProcessSection";
import { memo } from "react";
import { CareerOptionData } from "./CareerOptionData";
import ListingCard from "@/components/ui/ListingCard";
import Image from "next/image";

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
  btn: string;
}

const CareerOption = memo(function CareerOption() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-85">
        <Image
          src="/images/banner-bg-layer.svg"
          alt="banner-layer"
          height={500}
          width={500}
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
      <div className="container px-4 py-10 lg:py-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          <div className="w-full lg:w-2/3 mb-3 lg:mb-4 text-center lg:text-left lg:px-2">
            <h5 className="text-accent text-xs md:text-sm mb-1.5 font-semibold">
              What We Do
            </h5>
            <h2
              className="text-[1.4rem]  w-full lg:text-left md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug
       text-black"
            >
              Career options
              <span className="text-accent">at Cybrical</span>
            </h2>
          </div>
          <div className="w-full lg:w-2/6 max-w-lg lg:max-w-sm flex flex-col items-center lg:items-start justify-center">
            <p className="text-tertiary text-sm text-center lg:text-left">
              We believe in equality for all and create a work environment where
              our employees can be their best, both professionally and
              personally. Check out our latest career options to join our team.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {CareerOptionData.map((data: ProcessData, index: number) => (
            <div
              key={index}
              className="rounded-lg shadow-sm bg-white border border-[#434343] border-opacity-10"
            >
              <ListingCard
                headTitle={data.title} // Use the actual data instead of hardcoded values
                accentHead={data.accentHead || ""}
                paragraph={data.paragraph || ""}
                imgSrc={data.imgSrc || ""}
                listing={data.listing || []} // Correct the default value
                imageAlt="icons"
                btn=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default CareerOption;
