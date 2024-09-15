import { memo } from "react";
import Card from "@/components/ui/OurApproach/Card";
import { NeedsCardData } from "./NeedsCardData";

const NeedsCard = memo(function NeedsCard() {
  return (
    <div className="container my-8 ">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
        <div className="w-full lg:w-2/3 mb-3 lg:mb-4 text-center lg:text-left lg:px-2">
          <h5 className="text-accent text-xs md:text-sm mb-1.5 font-semibold">
            What We Do
          </h5>
          <h2
            className="text-[1.4rem]  w-full lg:text-left md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug
       text-black"
          >
            Avyatech to cater all your website Support
            <span className="text-accent ml-2">and Maintenance needs:</span>
          </h2>
        </div>
        <div className="w-full lg:w-2/6 max-w-lg lg:max-w-sm flex flex-col items-center lg:items-start justify-center">
          <p className="text-tertiary text-sm text-center lg:text-left">
            With a global footprint and proven work record we have gained years
            of experience delivering website support and maintenance services.
            Please have a look at our benefits.
          </p>
        </div>
      </div>
      <div className="lg:my-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {NeedsCardData.map((card, index) => (
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

export default NeedsCard;
