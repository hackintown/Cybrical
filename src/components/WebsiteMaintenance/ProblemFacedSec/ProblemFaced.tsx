"use client";
import ProcessSection from "@/components/ui/ProcessSection";
import { memo } from "react";
import { ProblemFacedData } from "./ProblemFacedData";

// Type definition for ProcessSecData item (if you have a type/interface)
interface ProcessData {
  title: string;
  accentHead?: string;
  processList?: Array<any>; // Define the type for processList items if known
}

const ProblemFaced = memo(function ProblemFaced() {
  return (
    <main>
      {ProblemFacedData.map((data: ProcessData, index: number) => (
        <ProcessSection
          key={index}
          title={data.title}
          paragraph="When it comes to website support and maintenance, both small and large organizations face a number of challenges. Some of them are:"
          accentHead={data.accentHead || ""}
          processList={data.processList || []}
          buttonText="REQUEST A QUOTE"
          imageSrc="/images/wm-problems.webp"
          imageAlt="wm-problems"
        />
      ))}
    </main>
  );
});

export default ProblemFaced;
