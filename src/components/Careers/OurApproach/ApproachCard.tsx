import { memo } from "react";
import Card from "@/components/ui/OurApproach/Card";
import { ApproachCardData } from "./ApproachCardData";

const ApproachCard = memo(function ApproachCard() {
  return (
    <div className="container my-8 lg:my-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {ApproachCardData.map((card, index) => (
        <Card
          key={index}
          iconSrc={card.iconSrc}
          title={card.title}
          paragraphs={card.paragraphs}
        />
      ))}
    </div>
  );
});

export default ApproachCard;
