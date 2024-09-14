"use client";
import React, { memo } from "react";
import TechStack from "@/components/ui/TechStack/TechStack";
import { AgileTechStackData } from "./AgileTechStackData";

const AglileTechStack = memo(function WebTechStack() {
  return (
    <div className="relative">
      {AgileTechStackData &&
        AgileTechStackData.map((data, index) => (
          <TechStack
            key={index}
            tag={data.tag || ""}
            heading={data.heading || ""}
            accentTitle={data.accentTitle || ""}
            headParagraph={data.headParagraph || ""}
            servicesList={data.servicesList || []}
            rightTag={data.rightTag || ""}
            rightParagraph={data.rightParagraph || ""}
            rightExtraParagraph={data.rightExtraParagraph || ""}
            imgSrc={data.imageSrc || ""}
          />
        ))}
    </div>
  );
});

export default AglileTechStack;
