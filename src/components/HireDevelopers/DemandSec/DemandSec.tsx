import { memo } from "react";
import Card from "@/components/ui/OurApproach/Card";
import { DemandSecData } from "./DemandSecData";

const DemandSec = memo(function DemandSec() {
  return (
    <div className="container py-8 lg:py-14 px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
        <div className="w-full lg:w-2/3 mb-3 lg:mb-4 text-center lg:text-left lg:px-2">
          <h5 className="text-accent text-xs md:text-sm mb-1.5 font-semibold">
            DEMAND
          </h5>
          <h2
            className="text-[1.4rem]  w-full lg:text-left md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug
       text-black"
          >
            On-demand
            <span className="text-accent"> services</span>
          </h2>
        </div>
        <div className="w-full lg:w-2/6 max-w-lg lg:max-w-sm flex flex-col items-center lg:items-start justify-center">
          <p className="text-tertiary text-sm text-center lg:text-left">
            Hire dedicated developers in India according to your business needs
            with no in-house training required.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {DemandSecData.map((card, index) => (
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
});

export default DemandSec;
